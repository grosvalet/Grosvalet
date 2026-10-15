import React from 'react';
import { 
  Rocket, 
  Workflow, 
  MailCheck, 
  Target, 
  Users, 
  BookOpen, 
  Sparkles, 
  Globe2,
  ExternalLink
} from 'lucide-react';

export type ActiveTab = 
  | 'overview' 
  | 'simulator' 
  | 'emails' 
  | 'ads' 
  | 'usa-audiences' 
  | 'trilogy' 
  | 'copilot';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  lang: 'fr' | 'en';
  setLang: (lang: 'fr' | 'en') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, lang, setLang }) => {
  const tabs = [
    {
      id: 'overview' as ActiveTab,
      labelFr: 'Stratégie Globale',
      labelEn: 'Blueprint & Strategy',
      icon: Rocket,
    },
    {
      id: 'simulator' as ActiveTab,
      labelFr: 'Simulateur Tunnel & ROI',
      labelEn: 'Funnel Simulator & ROI',
      icon: Workflow,
    },
    {
      id: 'emails' as ActiveTab,
      labelFr: 'Séquences E-mails',
      labelEn: 'Automated Emails',
      icon: MailCheck,
    },
    {
      id: 'ads' as ActiveTab,
      labelFr: 'Campagnes Publicitaires',
      labelEn: 'Targeted Ad Campaigns',
      icon: Target,
    },
    {
      id: 'usa-audiences' as ActiveTab,
      labelFr: 'Fans SF USA & Annuaire',
      labelEn: 'USA Sci-Fi Contacts',
      icon: Users,
    },
    {
      id: 'trilogy' as ActiveTab,
      labelFr: 'Trilogie Yann Sorel',
      labelEn: 'Yann Sorel Saga',
      icon: BookOpen,
    },
    {
      id: 'copilot' as ActiveTab,
      labelFr: 'Copilote IA',
      labelEn: 'AI Copilot',
      icon: Sparkles,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-400/30">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-white font-display tracking-tight">AstraBook</span>
                <span className="px-1.5 py-0.5 text-[10px] uppercase font-semibold tracking-wider rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                  OS v2.4
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                {lang === 'fr' 
                  ? 'Marketing Automatisé & Tunnels de Vente pour Livres SF' 
                  : 'Automated Book Marketing & Sci-Fi Sales Funnels'}
              </p>
            </div>
          </div>

          {/* Quick external link to Author site & Lang toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="https://grosvois.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-cyan-400 bg-slate-900/80 hover:bg-slate-800 rounded-lg border border-slate-800 transition-all"
            >
              <span>grosvois.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            {/* Language Switcher */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5">
              <button
                onClick={() => setLang('fr')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                  lang === 'fr' 
                    ? 'bg-cyan-600 text-white shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                  lang === 'en' 
                    ? 'bg-cyan-600 text-white shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <nav className="flex space-x-1 overflow-x-auto pb-2 scrollbar-none border-t border-slate-800/40 pt-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-all duration-150 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-950 to-indigo-950 text-cyan-300 border border-cyan-800/80 shadow-sm shadow-cyan-950'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                <span>{lang === 'fr' ? tab.labelFr : tab.labelEn}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
