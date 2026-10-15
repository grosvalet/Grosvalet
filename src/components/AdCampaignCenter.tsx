import React, { useState } from 'react';
import { 
  TARGETED_AD_CAMPAIGNS, 
  AdCampaign 
} from '../data/adCampaignsData';
import { 
  Target, 
  Copy, 
  Check, 
  DollarSign, 
  Percent, 
  Sparkles, 
  ExternalLink,
  Layers,
  HelpCircle,
  Lightbulb
} from 'lucide-react';

interface AdCampaignCenterProps {
  lang: 'fr' | 'en';
}

export const AdCampaignCenter: React.FC<AdCampaignCenterProps> = ({ lang }) => {
  const [selectedCampaignId, setSelectedCampaignId] = useState<string>(TARGETED_AD_CAMPAIGNS[0].id);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const currentCampaign: AdCampaign = 
    TARGETED_AD_CAMPAIGNS.find((c) => c.id === selectedCampaignId) || TARGETED_AD_CAMPAIGNS[0];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-900/60 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Target className="w-4 h-4" />
              <span>{lang === 'fr' ? 'Campagnes Publicitaires Ciblées' : 'Targeted Advertising Systems'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
              {lang === 'fr' 
                ? 'Architectures de Campagnes Amazon Ads & Meta Ads' 
                : 'Turn-Key Amazon KDP, Meta & BookBub Campaigns'}
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              {lang === 'fr'
                ? 'Campagnes prêtes à l’emploi conçues spécifiquement pour la trilogie Yann Sorel. Mots-clés, ciblage ASIN d’auteurs cultes, textes publicitaires optimisés et gestion de l’ACoS.'
                : 'Pre-configured ad campaigns engineered for Science Fiction book launches. Includes ASIN product targeting, high-intent keyword harvesting, and Facebook/Instagram reader magnet acquisition.'}
            </p>
          </div>
        </div>
      </div>

      {/* Platform & Campaign Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {TARGETED_AD_CAMPAIGNS.map((camp) => {
          const isSelected = selectedCampaignId === camp.id;
          return (
            <button
              key={camp.id}
              onClick={() => setSelectedCampaignId(camp.id)}
              className={`text-left p-4 rounded-xl border transition-all ${
                isSelected
                  ? 'bg-slate-900 border-indigo-500 shadow-md shadow-indigo-950 ring-1 ring-indigo-500/50'
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className={`px-2 py-0.5 rounded text-[10px] font-semibold uppercase ${
                  camp.platform === 'Amazon Ads'
                    ? 'bg-amber-950 text-amber-400 border border-amber-800/80'
                    : camp.platform.includes('Meta')
                    ? 'bg-cyan-950 text-cyan-400 border border-cyan-800/80'
                    : 'bg-purple-950 text-purple-400 border border-purple-800/80'
                }`}>
                  {camp.platform}
                </span>
                <span className="text-[10px] text-slate-400">{camp.budgetRecommendation.split('/')[0]}</span>
              </div>
              <div className="text-xs font-bold text-white mt-2 line-clamp-1">
                {camp.campaignName}
              </div>
              <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                {camp.targetObjective}
              </div>
            </button>
          );
        })}
      </div>

      {/* Campaign Details Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Targeting & Keyword lists (6 Cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white font-display flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>{lang === 'fr' ? 'Ciblage & Audiences Qualifiées' : 'Targeting & Audience Rules'}</span>
              </h3>
              <span className="text-xs text-slate-400">{currentCampaign.suggestedBidOrCpc}</span>
            </div>

            {/* Audience description */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
              <strong className="text-cyan-400">{lang === 'fr' ? 'Audience Cible : ' : 'Target Audience: '}</strong>
              {currentCampaign.targetAudience}
            </div>

            {/* ASIN Targets if present */}
            {currentCampaign.asinTargets && currentCampaign.asinTargets.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-200">
                    {lang === 'fr' ? 'Ciblage Produits ASIN (Romans SF Cultes) :' : 'Comp Title ASIN Targets:'}
                  </span>
                  <button
                    onClick={() => handleCopy(currentCampaign.asinTargets!.join('\n'), 'asins')}
                    className="text-[11px] text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    {copiedKey === 'asins' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{lang === 'fr' ? 'Tout copier' : 'Copy All'}</span>
                  </button>
                </div>
                <div className="bg-slate-950 rounded-xl p-3 border border-slate-800 max-h-48 overflow-y-auto space-y-1.5 font-mono text-[11px]">
                  {currentCampaign.asinTargets.map((asin, idx) => (
                    <div key={idx} className="flex items-center justify-between p-1.5 rounded bg-slate-900/60 text-slate-300">
                      <span>{asin}</span>
                      <button
                        onClick={() => handleCopy(asin.split(' ')[0], `asin-${idx}`)}
                        className="text-slate-500 hover:text-cyan-400"
                      >
                        {copiedKey === `asin-${idx}` ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Keywords or Interests */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-200">
                  {lang === 'fr' ? 'Mots-Clés / Centres d’Intérêt :' : 'Keywords / Interest Stacks:'}
                </span>
                <button
                  onClick={() => handleCopy(currentCampaign.keywordsOrInterests.join('\n'), 'keywords')}
                  className="text-[11px] text-cyan-400 hover:underline flex items-center gap-1"
                >
                  {copiedKey === 'keywords' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{lang === 'fr' ? 'Tout copier' : 'Copy All'}</span>
                </button>
              </div>
              <div className="bg-slate-950 rounded-xl p-3 border border-slate-800 max-h-52 overflow-y-auto space-y-1.5 text-xs">
                {currentCampaign.keywordsOrInterests.map((kw, idx) => (
                  <div key={idx} className="flex items-center justify-between p-1.5 rounded bg-slate-900/60 text-slate-300">
                    <span className="font-mono text-cyan-300">{kw}</span>
                    <button
                      onClick={() => handleCopy(kw, `kw-${idx}`)}
                      className="text-slate-500 hover:text-cyan-400"
                    >
                      {copiedKey === `kw-${idx}` ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Budget & Target ACoS KPI Pill */}
            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-[10px] text-slate-400">{lang === 'fr' ? 'Enchère / CPC Conseillé' : 'Suggested Bid'}</div>
                <div className="text-xs font-bold text-cyan-400 mt-1">{currentCampaign.suggestedBidOrCpc}</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-[10px] text-slate-400">{lang === 'fr' ? 'Objectif ACoS / Rentabilité' : 'Target Metric'}</div>
                <div className="text-xs font-bold text-emerald-400 mt-1">{currentCampaign.targetAcosOrRoas}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Ad Creatives & Professional Pro Tips (6 Cols) */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Ad Creative Copy Box */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white font-display flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>{lang === 'fr' ? 'Accroches & Textes Publicitaires Testés' : 'Ad Creatives & Conversion Hooks'}</span>
              </h3>
              <span className="text-xs font-semibold text-indigo-400">{currentCampaign.callToAction}</span>
            </div>

            {/* Headline */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold">{lang === 'fr' ? 'Titre Principal (Headline) :' : 'Ad Headline:'}</span>
                <button
                  onClick={() => handleCopy(lang === 'fr' ? currentCampaign.headlineFr : currentCampaign.headlineEn, 'headline')}
                  className="text-[11px] text-cyan-400 hover:underline"
                >
                  {copiedKey === 'headline' ? '✓ ' + (lang === 'fr' ? 'Copié' : 'Copied') : (lang === 'fr' ? 'Copier' : 'Copy')}
                </button>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-bold text-sm text-white">
                {lang === 'fr' ? currentCampaign.headlineFr : currentCampaign.headlineEn}
              </div>
            </div>

            {/* Primary Text */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold">{lang === 'fr' ? 'Texte Principal (Primary Text) :' : 'Primary Body Text:'}</span>
                <button
                  onClick={() => handleCopy(lang === 'fr' ? currentCampaign.primaryCopyFr : currentCampaign.primaryCopyEn, 'primary')}
                  className="text-[11px] text-cyan-400 hover:underline"
                >
                  {copiedKey === 'primary' ? '✓ ' + (lang === 'fr' ? 'Copié' : 'Copied') : (lang === 'fr' ? 'Copier' : 'Copy')}
                </button>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line font-sans">
                {lang === 'fr' ? currentCampaign.primaryCopyFr : currentCampaign.primaryCopyEn}
              </div>
            </div>

            {/* Amazon links to connect to ad */}
            <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-900/60 text-xs flex items-center justify-between">
              <div>
                <span className="text-indigo-300 font-semibold">{lang === 'fr' ? 'Lien Amazon Cible :' : 'Destination Amazon URL:'}</span>
                <div className="text-slate-400 text-[11px]">Tome 1 (ASIN B0CFK2C7VK)</div>
              </div>
              <a
                href="https://www.amazon.com/dp/B0CFK2C7VK"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-semibold text-xs transition"
              >
                <span>Amazon Page</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Expert Pro Tips */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-3">
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>{lang === 'fr' ? 'Recommandations & Conseils d’Optimisation' : 'Tactical Campaign Optimizations'}</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {currentCampaign.proTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold mt-0.5">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
