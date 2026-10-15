import React from 'react';
import { 
  Rocket, 
  Workflow, 
  MailCheck, 
  Target, 
  Users, 
  Sparkles, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  BookOpen, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';
import { ActiveTab } from './Navbar';
import { YANN_SOREL_TRILOGY } from '../data/trilogyData';

interface BlueprintOverviewProps {
  setActiveTab: (tab: ActiveTab) => void;
  lang: 'fr' | 'en';
}

export const BlueprintOverview: React.FC<BlueprintOverviewProps> = ({ setActiveTab, lang }) => {
  const steps = [
    {
      num: '1',
      titleFr: 'Acquisition Publicitaire Ciblée',
      titleEn: 'Targeted Ad Acquisition',
      descFr: 'Campagnes Amazon Ads (ciblage ASIN d’Asimov, The Expanse) et publicités vidéo Meta ciblant les fans américains.',
      descEn: 'Amazon KDP ads targeting comp titles and Meta lead generation video ads targeting US sci-fi readers.',
      tab: 'ads' as ActiveTab,
      badge: 'Amazon & Meta',
    },
    {
      num: '2',
      titleFr: 'Page de Capture & Reader Magnet',
      titleEn: 'Reader Magnet & Squeeze Page',
      descFr: 'Offrez "Le Protocole 2047 : Prélude & Chapitres 1-3" en échange de l’e-mail. Taux de capture moyen : 40-55%.',
      descEn: 'Offer "The 2047 Protocol: Prelude & Sample Chapters" in exchange for reader email opt-in.',
      tab: 'simulator' as ActiveTab,
      badge: 'BookFunnel & Web',
    },
    {
      num: '3',
      titleFr: 'Séquence E-mail Automatisée (5 Étapes)',
      titleEn: '5-Part Automated Nurture Sequence',
      descFr: 'Délivrance de l’extrait, immersion dans l’univers, critique presse et vente du Tome 1 Kindle (7,99 $) sur Amazon.',
      descEn: 'Instant value delivery, universe lore, critical acclaim, and promotion of Book 1 on Kindle ($7.99).',
      tab: 'emails' as ActiveTab,
      badge: '5 E-mails J0 à J12',
    },
    {
      num: '4',
      titleFr: 'Fidélisation & Vente des Tomes 2 et 3',
      titleEn: 'Back-End Trilogy Read-Through',
      descFr: 'Les lecteurs enchaînent avec 121 ans en 2075 et 194 ans en 2148. Vente des éditions Relié Deluxe (41,86 $ & 49,90 $).',
      descEn: 'Readers binge Books 2 & 3. Promote high-margin Deluxe Hardcovers ($41.86 & $49.90).',
      tab: 'trilogy' as ActiveTab,
      badge: 'LTV Maximale',
    },
    {
      num: '5',
      titleFr: 'Cercle VIP & Récolte d’Avis Amazon',
      titleEn: 'VIP ARC Team & Review Engine',
      descFr: 'Recrutement des 50 meilleurs lecteurs dans l’équipe Vanguard pour déposer des avis 5 étoiles réguliers.',
      descEn: 'Recruit enthusiastic readers into the Vanguard ARC team to generate continuous Amazon verified reviews.',
      tab: 'usa-audiences' as ActiveTab,
      badge: 'Avis & Bouche-à-oreille',
    },
  ];

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden border border-cyan-900/50 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-6 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-semibold">
            <Rocket className="w-3.5 h-3.5 text-cyan-400" />
            <span>{lang === 'fr' ? 'Architecture Complète d’Automatisation' : 'Complete Book Automation Blueprint'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight leading-snug">
            {lang === 'fr' 
              ? 'Comment Automatiser le Marketing de vos Livres & Vendre en Continu' 
              : 'How to Automate Sci-Fi Book Marketing & Scale Consistent Sales'}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {lang === 'fr'
              ? 'Pour réussir durablement sans dépendre d’actions manuelles quotidiennes, le marketing de livres de science-fiction repose sur un système automatisé en boucle fermée : trafic ciblé (Amazon / Meta Ads) ➔ capture d’e-mails avec prélude offert ➔ séquence d’indoctrination en 5 e-mails ➔ vente du Tome 1 ➔ consommation de la trilogie complète (Tomes 2 et 3) ➔ fidélisation d’une armée de lecteurs VIP laissant des avis.'
              : 'Scaling independent science fiction novels relies on a proven closed-loop automated engine: targeted traffic (Amazon/Meta Ads) ➔ email opt-in with a high-value reader magnet ➔ 5-step automated drip sequence ➔ front-end Book 1 purchase ➔ trilogy binge read-through (Books 2 & 3) ➔ VIP reader club generating verified reviews.'}
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => setActiveTab('simulator')}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-cyan-950 transition"
            >
              <span>{lang === 'fr' ? 'Lancer le Simulateur de Tunnel' : 'Launch Funnel Simulator'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('emails')}
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-xs sm:text-sm rounded-xl border border-slate-800 transition"
            >
              <MailCheck className="w-4 h-4 text-cyan-400" />
              <span>{lang === 'fr' ? 'Voir les 5 E-mails Automatisés' : 'View the 5 Automated Emails'}</span>
            </button>
            <button
              onClick={() => setActiveTab('usa-audiences')}
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-xs sm:text-sm rounded-xl border border-slate-800 transition"
            >
              <Users className="w-4 h-4 text-indigo-400" />
              <span>{lang === 'fr' ? 'Annuaire Fans SF (USA)' : 'US Sci-Fi Email Contacts'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* The 5 Pillars of Book Marketing Automation */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-bold text-white font-display">
            {lang === 'fr' ? 'Les 5 Étapes du Système d’Automatisation' : 'The 5 Core Automation Stages'}
          </h2>
          <span className="text-xs text-slate-400">
            {lang === 'fr' ? 'Cliquez sur une étape pour explorer' : 'Click any step to inspect'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((st, idx) => (
            <div
              key={idx}
              onClick={() => setActiveTab(st.tab)}
              className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/80 transition-all cursor-pointer group flex flex-col justify-between space-y-4 hover:shadow-xl hover:shadow-cyan-950/20"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center font-bold text-xs font-mono">
                    {st.num}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">
                    {st.badge}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 font-display">
                  {lang === 'fr' ? st.titleFr : st.titleEn}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {lang === 'fr' ? st.descFr : st.descEn}
                </p>
              </div>

              <div className="text-[11px] text-cyan-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>{lang === 'fr' ? 'Accéder' : 'Explore stage'}</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trilogy Quick Showcase Box */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white font-display">
              {lang === 'fr' ? 'Le Cœur du Dispositif : La Trilogie Yann Sorel' : 'The Flagship Product: The Yann Sorel Trilogy'}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {lang === 'fr' 
                ? 'Une trilogie de science-fiction visionnaire conçue pour maximiser la rétention et les redevances.'
                : 'A visionary sci-fi epic spanning 2047, 2075, and 2148 with exceptional read-through retention.'}
            </p>
          </div>
          <button
            onClick={() => setActiveTab('trilogy')}
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
          >
            <span>{lang === 'fr' ? 'Voir tous les détails & formats' : 'View all editions & synopses'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {YANN_SOREL_TRILOGY.map((book) => (
            <div 
              key={book.id} 
              className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span className="font-mono text-cyan-400 font-semibold">Tome {book.volume} • {book.yearSetting}</span>
                  <span>Yann Sorel ({book.protagonistAge} ans)</span>
                </div>
                <h4 className="text-sm font-bold text-white font-display">
                  {lang === 'fr' ? book.titleFr : book.titleEn}
                </h4>
                <p className="text-xs text-slate-400 mt-1 line-clamp-3">
                  {lang === 'fr' ? book.synopsisFr : book.synopsisEn}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-900 flex items-center justify-between text-xs">
                <span className="font-bold text-cyan-400">{book.formats[0].price} (Kindle)</span>
                <a
                  href={book.formats[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-cyan-400 rounded-lg border border-slate-800 transition"
                >
                  <span>Amazon</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
