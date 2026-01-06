const AIChat = {
    pointCost: 5,
    initIndex() {
        const grid = document.getElementById('aiRoleGrid');
        const search = document.getElementById('aiSearch');
        if (!grid || !window.AI_ROLES) return;
        const render = (filter = '') => {
            grid.innerHTML = '';
            const roles = window.AI_ROLES.filter((role) => {
                const text = `${role.name} ${role.tagline} ${role.description}`.toLowerCase();
                return text.includes(filter.toLowerCase());
            });
            roles.forEach((role) => {
                const card = document.createElement('a');
                card.href = `/ai/role.html?role=${role.id}`;
                card.className = 'rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-brand-red/40 transition';
                card.innerHTML = `
                    <div class="flex items-center gap-2">
                        <div class="h-9 w-9 rounded-full bg-brand-dark/10 text-brand-dark flex items-center justify-center text-sm">
                            <i class="fa-solid fa-robot"></i>
                        </div>
                        <div>
                            <h3 class="text-sm font-bold text-slate-800">${role.name}</h3>
                            <p class="text-[11px] text-slate-500">${role.tagline}</p>
                        </div>
                    </div>
                    <p class="mt-3 text-[11px] text-slate-500">${role.description}</p>
                `;
                grid.appendChild(card);
            });
        };
        render();
        if (search) {
            search.addEventListener('input', (e) => render(e.target.value));
        }
        const pointCostEl = document.getElementById('aiPointCost');
        if (pointCostEl) pointCostEl.textContent = this.pointCost;
    },
    initRole() {
        const roleId = new URLSearchParams(window.location.search).get('role');
        if (!roleId || !window.AI_ROLES) return;
        const role = window.AI_ROLES.find((r) => r.id === roleId);
        if (!role) return;
        const titleEl = document.getElementById('aiRoleTitle');
        const descEl = document.getElementById('aiRoleDescription');
        const breadcrumbEl = document.getElementById('aiRoleBreadcrumb');
        const detailsEl = document.getElementById('aiRoleDetails');
        const promptsEl = document.getElementById('aiQuickPrompts');
        if (titleEl) titleEl.textContent = role.name;
        if (descEl) descEl.textContent = role.tagline;
        if (breadcrumbEl) breadcrumbEl.textContent = role.name;
        if (detailsEl) {
            detailsEl.innerHTML = `
                <p class="text-xs text-slate-600">${role.description}</p>
                <div class="flex flex-wrap gap-2">
                    ${role.tags.map((tag) => `<span class="rounded-full bg-slate-100 px-2 py-1 text-[10px] text-slate-500">${tag}</span>`).join('')}
                </div>
            `;
        }
        if (promptsEl) {
            const prompts = [
                `Create a quick plan as a ${role.name}.`,
                `List key priorities for this month.`,
                `Draft a concise checklist for today.`
            ];
            promptsEl.innerHTML = prompts.map((prompt) => `
                <button class="w-full rounded border border-slate-200 bg-white px-3 py-2 text-left text-[11px] text-slate-600 hover:border-brand-red/40" data-quick-prompt>
                    ${prompt}
                </button>
            `).join('');
            promptsEl.querySelectorAll('[data-quick-prompt]').forEach((btn) => {
                btn.addEventListener('click', () => {
                    const input = document.getElementById('aiChatInput');
                    if (input) input.value = btn.textContent.trim();
                });
            });
        }
        this.bindChat(role);
    },
    bindChat(role) {
        const log = document.getElementById('aiChatLog');
        const input = document.getElementById('aiChatInput');
        const sendBtn = document.getElementById('aiSendBtn');
        const balanceEl = document.getElementById('aiPointsBalance');
        const pointCostEl = document.getElementById('aiRolePointCost');
        const updateBalance = () => {
            if (balanceEl) balanceEl.textContent = window.PointsManager.get().balance;
        };
        if (pointCostEl) pointCostEl.textContent = this.pointCost;
        updateBalance();

        const appendMessage = (text, author = 'assistant') => {
            if (!log) return;
            const bubble = document.createElement('div');
            bubble.className = author === 'user'
                ? 'rounded-lg bg-brand-dark/10 p-3 text-xs text-slate-700'
                : 'rounded-lg bg-white border border-slate-200 p-3 text-xs text-slate-700 shadow-sm';
            bubble.innerHTML = `<p class="font-semibold text-[10px] text-slate-500 mb-1">${author === 'user' ? 'You' : role.name}</p><p>${text}</p>`;
            log.appendChild(bubble);
            log.scrollTop = log.scrollHeight;
        };

        const send = async () => {
            if (!input || !input.value.trim()) return;
            const message = input.value.trim();
            if (!window.PointsManager.spend(this.pointCost, `AI message to ${role.name}`)) {
                appendMessage('Not enough points. Visit the User Center to purchase more.', 'assistant');
                return;
            }
            updateBalance();
            appendMessage(message, 'user');
            input.value = '';
            const response = await this.callAi(role, message);
            appendMessage(response, 'assistant');
        };

        if (sendBtn) sendBtn.addEventListener('click', send);
    },
    async callAi(role, message) {
        const settings = window.SiteSettings.get().ai;
        if (!settings || !settings.provider) {
            return `Please configure an AI provider in the Admin panel before chatting with ${role.name}.`;
        }
        const provider = settings.provider;
        const proxy = settings.proxyUrl || '';
        const apiKey = provider === 'openai' ? settings.openaiApiKey : provider === 'claude' ? settings.claudeApiKey : settings.geminiApiKey;
        if (!apiKey) {
            return `Missing API key for ${provider}. Add it in the Admin panel.`;
        }
        try {
            if (provider === 'openai') {
                const response = await fetch(`${proxy || 'https://api.openai.com'}/v1/chat/completions`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                        model: 'gpt-4o-mini',
                        messages: [
                            { role: 'system', content: role.prompt },
                            { role: 'user', content: message }
                        ]
                    })
                });
                const data = await response.json();
                return data.choices?.[0]?.message?.content || 'No response returned.';
            }
            if (provider === 'claude') {
                const response = await fetch(`${proxy || 'https://api.anthropic.com'}/v1/messages`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': apiKey,
                        'anthropic-version': '2023-06-01'
                    },
                    body: JSON.stringify({
                        model: 'claude-3-haiku-20240307',
                        max_tokens: 500,
                        system: role.prompt,
                        messages: [{ role: 'user', content: message }]
                    })
                });
                const data = await response.json();
                return data.content?.[0]?.text || 'No response returned.';
            }
            const response = await fetch(`${proxy || 'https://generativelanguage.googleapis.com'}/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [{ role: 'user', parts: [{ text: `${role.prompt}\n${message}` }] }]
                })
            });
            const data = await response.json();
            return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response returned.';
        } catch (error) {
            return `Error contacting ${provider}. Please check your proxy URL or API credentials.`;
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    AIChat.initIndex();
    AIChat.initRole();
});
