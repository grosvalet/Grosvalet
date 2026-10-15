import React, { useState } from 'react';
import { Navbar, ActiveTab } from './components/Navbar';
import { BlueprintOverview } from './components/BlueprintOverview';
import { FunnelSimulator } from './components/FunnelSimulator';
import { AutomatedEmailCenter } from './components/AutomatedEmailCenter';
import { AdCampaignCenter } from './components/AdCampaignCenter';
import { UsSciFiAudienceHub } from './components/UsSciFiAudienceHub';
import { TrilogyShowcase } from './components/TrilogyShowcase';
import { AiMarketingCopilot } from './components/AiMarketingCopilot';
import { Sparkles, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        lang={lang} 
        setLang={setLang} 
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <BlueprintOverview setActiveTab={setActiveTab} lang={lang} />
        )}
        {activeTab === 'simulator' && (
          <FunnelSimulator lang={lang} />
        )}
        {activeTab === 'emails' && (
          <AutomatedEmailCenter lang={lang} />
        )}
        {activeTab === 'ads' && (
          <AdCampaignCenter lang={lang} />
        )}
        {activeTab === 'usa-audiences' && (
          <UsSciFiAudienceHub lang={lang} />
        )}
        {activeTab === 'trilogy' && (
          <TrilogyShowcase lang={lang} />
        )}
        {activeTab === 'copilot' && (
          <AiMarketingCopilot lang={lang} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/90 py-8 mt-16 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center text-white text-[10px] font-bold">
              ★
            </div>
            <span>
              <strong>AstraBook OS</strong> — {lang === 'fr' 
                ? 'Système d’automatisation marketing pour la Trilogie Yann Sorel (J.F. Grosvois)' 
                : 'Automated Book Marketing & Sales Funnel OS for The Yann Sorel Trilogy (J.F. Grosvois)'}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://grosvois.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 flex items-center gap-1 transition"
            >
              <span>grosvois.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-slate-700">•</span>
            <a
              href="https://www.amazon.com/dp/B0CFK2C7VK"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 flex items-center gap-1 transition"
            >
              <span>Amazon US (Kindle / Physical)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-slate-700">•</span>
            <span className="text-slate-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>CAN-SPAM & GDPR Compliant</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
