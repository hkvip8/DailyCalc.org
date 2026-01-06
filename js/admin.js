const AdminPanel = {
    init() {
        this.settings = window.SiteSettings.get();
        this.cacheElements();
        this.populateSiteSettings();
        this.populateAds();
        this.populateAnalytics();
        this.populateStats();
        this.bindEvents();
    },
    cacheElements() {
        this.siteNameInput = document.getElementById('siteNameInput');
        this.saveSiteSettingsBtn = document.getElementById('saveSiteSettings');
        this.adSlotContainer = document.getElementById('adSlotContainer');
        this.addAdSlotBtn = document.getElementById('addAdSlot');
        this.saveAdSlotsBtn = document.getElementById('saveAdSlots');
        this.analyticsEnabled = document.getElementById('analyticsEnabled');
        this.analyticsScript = document.getElementById('analyticsScript');
        this.saveAnalyticsBtn = document.getElementById('saveAnalytics');
        this.adminUsageStats = document.getElementById('adminUsageStats');
    },
    populateSiteSettings() {
        if (this.siteNameInput) this.siteNameInput.value = this.settings.siteName || '';
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
                    siteName: this.siteNameInput?.value || 'DailyCalc.org'
                });
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
        if (this.saveAdSlotsBtn) {
            this.saveAdSlotsBtn.addEventListener('click', () => {
                const slots = Array.from(this.adSlotContainer?.children || []).map((row) => ({
                    slot: row.querySelector('[data-slot-id]')?.value || 'slot',
                    label: row.querySelector('[data-slot-label]')?.value || 'Ad Slot',
                    html: row.querySelector('[data-slot-html]')?.value || ''
                }));
                this.settings.ads = slots;
                window.SiteSettings.save(this.settings);
                alert('Ad slots saved.');
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
    }
};

document.addEventListener('DOMContentLoaded', () => AdminPanel.init());
