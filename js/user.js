const UserCenter = {
    init() {
        this.settings = window.SiteSettings.get();
        this.cacheElements();
        this.renderPoints();
        this.renderPackages();
        this.renderPlans();
        this.renderHistory();
    },
    cacheElements() {
        this.pointsBalance = document.getElementById('pointsBalance');
        this.pointsSpent = document.getElementById('pointsSpent');
        this.pointsTier = document.getElementById('pointsTier');
        this.pointPackages = document.getElementById('pointPackages');
        this.membershipPlans = document.getElementById('membershipPlans');
        this.pointsHistory = document.getElementById('pointsHistory');
    },
    renderPoints() {
        const data = window.PointsManager.get();
        if (this.pointsBalance) this.pointsBalance.textContent = data.balance;
        const spent = data.history.filter((item) => item.type === 'debit').reduce((sum, item) => sum + item.points, 0);
        if (this.pointsSpent) this.pointsSpent.textContent = spent;
        if (this.pointsTier) {
            const tier = data.balance > 2000 ? 'Pro' : data.balance > 500 ? 'Starter' : 'Free';
            this.pointsTier.textContent = tier;
        }
    },
    renderPackages() {
        if (!this.pointPackages) return;
        this.pointPackages.innerHTML = '';
        (this.settings.membership?.packages || []).forEach((pack) => {
            const card = document.createElement('div');
            card.className = 'rounded border border-slate-200 bg-slate-50 p-4 shadow-sm';
            card.innerHTML = `
                <h3 class="text-sm font-bold text-slate-700">${pack.name}</h3>
                <p class="text-[11px] text-slate-500">${pack.points} points</p>
                <p class="text-xs font-semibold text-brand-dark mt-2">${pack.price}</p>
                <button class="mt-3 w-full rounded bg-brand-dark py-2 text-xs font-bold text-white hover:bg-brand-red" data-buy-points="${pack.points}">Buy Points</button>
            `;
            this.pointPackages.appendChild(card);
        });
        this.pointPackages.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-buy-points]');
            if (!btn) return;
            const points = Number(btn.dataset.buyPoints);
            window.PointsManager.add(points, 'Points purchase');
            this.renderPoints();
            this.renderHistory();
            alert('Points added to your balance.');
        });
    },
    renderPlans() {
        if (!this.membershipPlans) return;
        this.membershipPlans.innerHTML = '';
        (this.settings.membership?.plans || []).forEach((plan) => {
            const card = document.createElement('div');
            card.className = 'rounded border border-slate-200 bg-white p-4 shadow-sm';
            card.innerHTML = `
                <h3 class="text-sm font-bold text-slate-700">${plan.name}</h3>
                <p class="text-[11px] text-slate-500">${plan.points} monthly points</p>
                <p class="text-xs font-semibold text-brand-dark mt-2">${plan.price}</p>
                <button class="mt-3 w-full rounded border border-brand-dark py-2 text-xs font-bold text-brand-dark hover:bg-brand-dark/10">Select Plan</button>
            `;
            this.membershipPlans.appendChild(card);
        });
    },
    renderHistory() {
        if (!this.pointsHistory) return;
        const history = window.PointsManager.get().history;
        if (!history.length) {
            this.pointsHistory.innerHTML = '<p class="text-xs text-slate-500">No point activity yet.</p>';
            return;
        }
        this.pointsHistory.innerHTML = history.slice(0, 10).map((item) => `
            <div class="flex items-center justify-between rounded border border-slate-200 bg-slate-50 px-3 py-2">
                <div>
                    <p class="text-xs font-semibold text-slate-700">${item.note}</p>
                    <p class="text-[10px] text-slate-400">${new Date(item.date).toLocaleString()}</p>
                </div>
                <span class="text-xs font-bold ${item.type === 'credit' ? 'text-green-600' : 'text-red-500'}">${item.type === 'credit' ? '+' : '-'}${item.points}</span>
            </div>
        `).join('');
    }
};

document.addEventListener('DOMContentLoaded', () => UserCenter.init());
