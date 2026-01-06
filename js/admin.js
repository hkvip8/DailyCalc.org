const AdminPanel = {
    init() {
        this.settings = window.SiteSettings.get();
        this.cacheElements();
        this.populateSiteSettings();
        this.populateAds();
        this.populateAnalytics();
        this.populateAi();
        this.populateMembership();
        this.populateStats();
        this.bindEvents();
    },
    cacheElements() {
        this.siteNameInput = document.getElementById('siteNameInput');
        this.defaultPointsInput = document.getElementById('defaultPointsInput');
        this.saveSiteSettingsBtn = document.getElementById('saveSiteSettings');
        this.adSlotContainer = document.getElementById('adSlotContainer');
        this.addAdSlotBtn = document.getElementById('addAdSlot');
        this.analyticsEnabled = document.getElementById('analyticsEnabled');
        this.analyticsScript = document.getElementById('analyticsScript');
        this.saveAnalyticsBtn = document.getElementById('saveAnalytics');
        this.aiProvider = document.getElementById('aiProvider');
        this.aiProxy = document.getElementById('aiProxy');
        this.openaiKey = document.getElementById('openaiKey');
        this.claudeKey = document.getElementById('claudeKey');
        this.geminiKey = document.getElementById('geminiKey');
        this.saveAiBtn = document.getElementById('saveAiSettings');
        this.membershipPlans = document.getElementById('membershipPlans');
        this.pointPackages = document.getElementById('pointPackages');
        this.addPlanBtn = document.getElementById('addPlan');
        this.addPackageBtn = document.getElementById('addPackage');
        this.saveMembershipBtn = document.getElementById('saveMembership');
        this.adminUsageStats = document.getElementById('adminUsageStats');
    },
    populateSiteSettings() {
        if (this.siteNameInput) this.siteNameInput.value = this.settings.siteName || '';
        if (this.defaultPointsInput) this.defaultPointsInput.value = this.settings.defaultPoints || 0;
    },
    populateAds() {
        if (!this.adSlotContainer) return;
        this.adSlotContainer.innerHTML = '';
        (this.settings.ads || []).forEach((slot, index) => {
            const row = document.createElement('div');
            row.className = 'grid gap-2 rounded border border-slate-200 bg-slate-50 p-3';
            row.innerHTML = `
                <div class="grid gap-2 sm:grid-cols-3">
                    <div>
                        <label class="text-[10px] font-bold text-slate-600">Slot ID</label>
                        <input class="compact-input w-full h-8" value="${slot.slot}" data-slot-id>
                    </div>
                    <div>
                        <label class="text-[10px] font-bold text-slate-600">Label</label>
                        <input class="compact-input w-full h-8" value="${slot.label}" data-slot-label>
                    </div>
                    <div class="sm:col-span-1">
                        <label class="text-[10px] font-bold text-slate-600">HTML</label>
                        <textarea class="w-full rounded border border-slate-300 p-2 text-[10px]" rows="2" data-slot-html>${slot.html || ''}</textarea>
                    </div>
                </div>
                <button class="text-[10px] text-red-500 font-semibold" data-remove-slot="${index}">Remove</button>
            `;
            this.adSlotContainer.appendChild(row);
        });
    },
    populateAnalytics() {
        if (this.analyticsEnabled) this.analyticsEnabled.checked = this.settings.analytics?.enabled || false;
        if (this.analyticsScript) this.analyticsScript.value = this.settings.analytics?.script || '';
    },
    populateAi() {
        if (this.aiProvider) this.aiProvider.value = this.settings.ai?.provider || 'openai';
        if (this.aiProxy) this.aiProxy.value = this.settings.ai?.proxyUrl || '';
        if (this.openaiKey) this.openaiKey.value = this.settings.ai?.openaiApiKey || '';
        if (this.claudeKey) this.claudeKey.value = this.settings.ai?.claudeApiKey || '';
        if (this.geminiKey) this.geminiKey.value = this.settings.ai?.geminiApiKey || '';
    },
    populateMembership() {
        const renderList = (container, items) => {
            if (!container) return;
            container.innerHTML = '';
            items.forEach((item, index) => {
                const row = document.createElement('div');
                row.className = 'grid gap-2 rounded border border-slate-200 bg-slate-50 p-3';
                row.innerHTML = `
                    <div class="grid gap-2 sm:grid-cols-3">
                        <input class="compact-input w-full h-8" value="${item.name}" data-plan-name>
                        <input class="compact-input w-full h-8" value="${item.price}" data-plan-price>
                        <input class="compact-input w-full h-8" value="${item.points}" data-plan-points>
                    </div>
                    <button class="text-[10px] text-red-500 font-semibold" data-remove-item="${index}">Remove</button>
                `;
                container.appendChild(row);
            });
        };
        renderList(this.membershipPlans, this.settings.membership?.plans || []);
        renderList(this.pointPackages, this.settings.membership?.packages || []);
    },
    populateStats() {
        if (!this.adminUsageStats || !window.StatsManager) return;
        const stats = window.StatsManager.topTools(10);
        if (!stats.length) {
            this.adminUsageStats.innerHTML = '<p class="text-xs text-slate-500">No usage data yet. Visit tools to generate stats.</p>';
            return;
        }
        this.adminUsageStats.innerHTML = stats.map((stat) => `
            <div class="flex items-center justify-between rounded border border-slate-200 bg-white px-3 py-2 shadow-sm">
                <div>
                    <p class="text-xs font-semibold text-slate-700">${stat.title}</p>
                    <p class="text-[10px] text-slate-400">${stat.category}</p>
                </div>
                <span class="text-xs font-bold text-brand-dark">${stat.views} views</span>
            </div>
        `).join('');
    },
    bindEvents() {
        if (this.saveSiteSettingsBtn) {
            this.saveSiteSettingsBtn.addEventListener('click', () => {
                const next = window.SiteSettings.update({
                    siteName: this.siteNameInput?.value || 'DailyCalc.org',
                    defaultPoints: Number(this.defaultPointsInput?.value || 0)
                });
                window.PointsManager.add(Number(next.defaultPoints || 0), 'Admin adjustment');
                alert('Site settings saved.');
            });
        }
        if (this.addAdSlotBtn) {
            this.addAdSlotBtn.addEventListener('click', () => {
                this.settings.ads.push({ slot: `slot-${this.settings.ads.length + 1}`, label: 'New Slot', html: '' });
                this.populateAds();
            });
        }
        if (this.adSlotContainer) {
            this.adSlotContainer.addEventListener('click', (e) => {
                const remove = e.target.closest('[data-remove-slot]');
                if (remove) {
                    const index = Number(remove.dataset.removeSlot);
                    this.settings.ads.splice(index, 1);
                    this.populateAds();
                }
            });
        }
        if (this.saveAnalyticsBtn) {
            this.saveAnalyticsBtn.addEventListener('click', () => {
                this.settings.analytics = {
                    enabled: this.analyticsEnabled?.checked || false,
                    script: this.analyticsScript?.value || ''
                };
                window.SiteSettings.save(this.settings);
                alert('Analytics settings saved.');
            });
        }
        if (this.saveAiBtn) {
            this.saveAiBtn.addEventListener('click', () => {
                this.settings.ai = {
                    provider: this.aiProvider?.value || 'openai',
                    proxyUrl: this.aiProxy?.value || '',
                    openaiApiKey: this.openaiKey?.value || '',
                    claudeApiKey: this.claudeKey?.value || '',
                    geminiApiKey: this.geminiKey?.value || ''
                };
                window.SiteSettings.save(this.settings);
                alert('AI settings saved.');
            });
        }
        if (this.addPlanBtn) {
            this.addPlanBtn.addEventListener('click', () => {
                this.settings.membership.plans.push({ name: 'New Plan', price: '$0', points: 0 });
                this.populateMembership();
            });
        }
        if (this.addPackageBtn) {
            this.addPackageBtn.addEventListener('click', () => {
                this.settings.membership.packages.push({ name: 'New Package', price: '$0', points: 0 });
                this.populateMembership();
            });
        }
        if (this.membershipPlans) {
            this.membershipPlans.addEventListener('click', (e) => {
                const remove = e.target.closest('[data-remove-item]');
                if (remove) {
                    const index = Number(remove.dataset.removeItem);
                    this.settings.membership.plans.splice(index, 1);
                    this.populateMembership();
                }
            });
        }
        if (this.pointPackages) {
            this.pointPackages.addEventListener('click', (e) => {
                const remove = e.target.closest('[data-remove-item]');
                if (remove) {
                    const index = Number(remove.dataset.removeItem);
                    this.settings.membership.packages.splice(index, 1);
                    this.populateMembership();
                }
            });
        }
        if (this.saveMembershipBtn) {
            this.saveMembershipBtn.addEventListener('click', () => {
                const parseList = (container) => {
                    if (!container) return [];
                    return Array.from(container.children).map((row) => {
                        const name = row.querySelector('[data-plan-name]')?.value || 'Plan';
                        const price = row.querySelector('[data-plan-price]')?.value || '$0';
                        const points = Number(row.querySelector('[data-plan-points]')?.value || 0);
                        return { name, price, points };
                    });
                };
                this.settings.membership = {
                    plans: parseList(this.membershipPlans),
                    packages: parseList(this.pointPackages)
                };
                window.SiteSettings.save(this.settings);
                alert('Membership settings saved.');
            });
        }
    }
};

document.addEventListener('DOMContentLoaded', () => AdminPanel.init());
