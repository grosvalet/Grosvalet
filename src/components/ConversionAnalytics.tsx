import React, { useState } from 'react';
import { 
  FUNNEL_STAGES, 
  FunnelStage 
} from '../data/funnelBlueprintData';
import { 
  LineChart, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Sparkles, 
  ArrowRight,
  HelpCircle,
  Lightbulb,
  Layers,
  ChevronRight
} from 'lucide-react';

interface ConversionAnalyticsProps {
  lang: 'fr' | 'en';
}

export const ConversionAnalytics: React.FC<ConversionAnalyticsProps> = ({ lang }) => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  
  // Bottleneck Diagnostic Tool state
  const [userOptin, setUserOptin] = useState<number>(38);
  const [userOpenRate, setUserOpenRate] = useState<number>(45);
  const [userTripwire, setUserTripwire] = useState<number>(12);
  const [userReadThrough, setUserReadThrough] = useState<number>(60);

  const selectedStage: FunnelStage = FUNNEL_STAGES[activeStageIndex];

  // Diagnosis logic
  const diagnoses: { stage: string; status: 'good' | 'warning' | 'critical'; advice: string }[] = [];

  if (userOptin < 30) {
    diagnoses.push({
      stage: lang === 'fr' ? 'Page de Capture (Opt-In)' : 'Landing Page Opt-In',
      status: 'critical',
      advice: lang === 'fr'
        ? 'Votre taux de capture est en dessous de 30%. Le "Reader Magnet" (extrait ou prélude) n’est pas assez irrésistible. Changez le titre du lead magnet et le visuel de couverture.'
        : 'Your opt-in rate is below 30%. The lead magnet hook needs sharpening. Test a more urgent title or 3D digital mockup.',
    });
  } else {
    diagnoses.push({
      stage: lang === 'fr' ? 'Page de Capture (Opt-In)' : 'Landing Page Opt-In',
      status: 'good',
      advice: lang === 'fr' ? 'Excellent taux de conversion. Votre accroche SF fonctionne bien.' : 'Healthy opt-in conversion rate.',
    });
  }

  if (userOpenRate < 35) {
    diagnoses.push({
      stage: lang === 'fr' ? 'Ouverture des E-mails' : 'Email Open Rate',
      status: 'warning',
      advice: lang === 'fr'
        ? 'Taux d’ouverture < 35%. Testez de nouveaux objets avec la mention [Téléchargement] ou des questions intrigantes sur l’IA et Asimov.'
        : 'Open rate < 35%. Test curiosity-driven subject lines and ensure sender domain SPF/DKIM is authenticated.',
    });
  } else {
    diagnoses.push({
      stage: lang === 'fr' ? 'Ouverture des E-mails' : 'Email Open Rate',
      status: 'good',
      advice: lang === 'fr' ? 'Délivrabilité saine et lecteurs réceptifs à l’univers.' : 'Solid engagement and inbox placement.',
    });
  }

  if (userTripwire < 10) {
    diagnoses.push({
      stage: lang === 'fr' ? 'Vente du Tome 1 sur Amazon' : 'Book 1 Amazon Conversion',
      status: 'warning',
      advice: lang === 'fr'
        ? 'Moins de 10% de vos abonnés achètent le Tome 1. Améliorez le cliffhanger à la fin de l’extrait offert et affichez clairement le lien Kindle à 7,99 $.'
        : 'Tripwire conversion is sluggish. Ensure the preview sample ends on a gripping cliffhanger directly linking to Amazon.',
    });
  } else {
    diagnoses.push({
      stage: lang === 'fr' ? 'Vente du Tome 1 sur Amazon' : 'Book 1 Amazon Conversion',
      status: 'good',
      advice: lang === 'fr' ? 'Très bon passage à l’achat du premier livre.' : 'Strong front-end tripwire monetization.',
    });
  }

  if (userReadThrough < 50) {
    diagnoses.push({
      stage: lang === 'fr' ? 'Rétention vers Tome 2 & 3' : 'Series Read-Through Rate',
      status: 'warning',
      advice: lang === 'fr'
        ? 'Perte de lecteurs entre les tomes. Insérez impérativement les premières pages du Tome 2 (2075) dans les dernières pages du Tome 1 (2047).'
        : 'Drop-off between volumes. Ensure back-matter of Book 1 has the complete prologue and purchase button for Book 2.',
    });
  } else {
    diagnoses.push({
      stage: lang === 'fr' ? 'Rétention vers Tome 2 & 3' : 'Series Read-Through Rate',
      status: 'good',
      advice: lang === 'fr' ? 'Excellente fidélisation sur la trilogie complète.' : 'High trilogy binge-reading velocity.',
    });
  }

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 border border-purple-900/60 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <TrendingUp className="w-4 h-4" />
              <span>{lang === 'fr' ? 'Audit & Données Précises de Conversion' : 'Precision Conversion Analytics'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
              {lang === 'fr' 
                ? 'Optimisation des 6 Étapes du Tunnel de Vente' 
                : 'Stage-by-Stage Funnel Optimization & Bottleneck Audit'}
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              {lang === 'fr'
                ? 'Analysez chaque point de friction : du clic publicitaire à l’opt-in, de l’ouverture d’e-mail à l’achat du Tome 1 et à la lecture de la trilogie complète.'
                : 'Pinpoint conversion drop-offs across traffic, lead opt-in, email engagement, Amazon tripwire, and back-end series read-through.'}
            </p>
          </div>
        </div>
      </div>

      {/* Stage Selector Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {FUNNEL_STAGES.map((stg, idx) => {
          const isSelected = activeStageIndex === idx;
          return (
            <button
              key={stg.id}
              onClick={() => setActiveStageIndex(idx)}
              className={`text-left p-3 rounded-xl border transition-all ${
                isSelected
                  ? 'bg-slate-900 border-cyan-500 shadow-md ring-1 ring-cyan-500/50'
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
              }`}
            >
              <div className="text-[10px] font-mono text-cyan-400 font-bold">
                Étape {stg.stageNumber}
              </div>
              <div className="text-xs font-semibold text-white mt-1 line-clamp-1">
                {lang === 'fr' ? stg.nameFr.split(':')[1] : stg.nameEn.split(':')[1]}
              </div>
              <div className="text-[10px] text-slate-400 mt-1 line-clamp-1">
                {stg.benchmarkRate.split('|')[0]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Stage Detail Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
        
        {/* Left Column: Mechanics & Benchmarks (7 Cols) */}
        <div className="lg:col-span-7 space-y-5">
          <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-cyan-400 font-mono">
                STAGE {selectedStage.stageNumber} OF 6
              </span>
              <h3 className="text-base font-bold text-white font-display mt-0.5">
                {lang === 'fr' ? selectedStage.nameFr : selectedStage.nameEn}
              </h3>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-400 block">{lang === 'fr' ? 'Repère Marché SF :' : 'Sci-Fi Benchmark:'}</span>
              <span className="text-xs font-bold text-emerald-400 font-mono">{selectedStage.benchmarkRate}</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              {lang === 'fr' ? 'Objectif Clé :' : 'Primary Objective:'}
            </h4>
            <p className="text-xs sm:text-sm text-cyan-300 font-medium">
              {selectedStage.objective}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              {lang === 'fr' ? 'Fonctionnement Opérationnel :' : 'Operational Mechanics:'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              {lang === 'fr' ? selectedStage.mechanicsFr : selectedStage.mechanicsEn}
            </p>
          </div>

          {/* Key Metrics Tracked */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              {lang === 'fr' ? 'Indicateurs à Mesurer (KPIs) :' : 'Key Metrics to Track:'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedStage.keyMetrics.map((kpi, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs rounded-lg bg-slate-950 text-cyan-300 border border-slate-800 font-mono"
                >
                  {kpi}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Optimization Tips & Action Checklist (5 Cols) */}
        <div className="lg:col-span-5 bg-slate-950 rounded-2xl p-5 border border-slate-800 space-y-4">
          <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-900 pb-2">
            <Lightbulb className="w-4 h-4 text-amber-400" />
            <span>{lang === 'fr' ? 'Leviers d’Optimisation Immédiats' : 'Direct Optimization Levers'}</span>
          </h4>

          <ul className="space-y-3">
            {(lang === 'fr' ? selectedStage.optimizationTipsFr : selectedStage.optimizationTipsEn).map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Interactive Bottleneck Diagnostic Analyzer */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white font-display flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>{lang === 'fr' ? 'Diagnostic Automatisé des Goulets d’Étranglement' : 'Interactive Funnel Bottleneck Diagnostic Tool'}</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {lang === 'fr'
                ? 'Entrez vos chiffres actuels pour détecter précisément à quelle étape vous perdez des lecteurs.'
                : 'Enter your current conversion percentages to detect where readers are dropping off.'}
            </p>
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="space-y-1.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
            <label className="text-[11px] text-slate-400 block font-medium">
              {lang === 'fr' ? 'Taux Opt-In (%)' : 'Opt-in Rate (%)'}
            </label>
            <input
              type="number"
              min="5"
              max="100"
              value={userOptin}
              onChange={(e) => setUserOptin(Number(e.target.value))}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg p-1.5 text-sm font-bold text-cyan-400 text-center"
            />
          </div>

          <div className="space-y-1.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
            <label className="text-[11px] text-slate-400 block font-medium">
              {lang === 'fr' ? 'Ouverture E-mails (%)' : 'Email Open Rate (%)'}
            </label>
            <input
              type="number"
              min="5"
              max="100"
              value={userOpenRate}
              onChange={(e) => setUserOpenRate(Number(e.target.value))}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg p-1.5 text-sm font-bold text-indigo-400 text-center"
            />
          </div>

          <div className="space-y-1.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
            <label className="text-[11px] text-slate-400 block font-medium">
              {lang === 'fr' ? 'Achat Tome 1 (%)' : 'Book 1 Buy Rate (%)'}
            </label>
            <input
              type="number"
              min="1"
              max="50"
              value={userTripwire}
              onChange={(e) => setUserTripwire(Number(e.target.value))}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg p-1.5 text-sm font-bold text-emerald-400 text-center"
            />
          </div>

          <div className="space-y-1.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
            <label className="text-[11px] text-slate-400 block font-medium">
              {lang === 'fr' ? 'Rétention Suite (%)' : 'Series Read-Through (%)'}
            </label>
            <input
              type="number"
              min="10"
              max="100"
              value={userReadThrough}
              onChange={(e) => setUserReadThrough(Number(e.target.value))}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg p-1.5 text-sm font-bold text-purple-400 text-center"
            />
          </div>
        </div>

        {/* Diagnosis Report Cards */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-slate-300">
            {lang === 'fr' ? 'Rapport d’Audit Généré :' : 'Generated Audit Diagnosis:'}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {diagnoses.map((diag, idx) => (
              <div
                key={idx}
                className={`p-3.5 rounded-xl border text-xs space-y-1 ${
                  diag.status === 'good'
                    ? 'bg-emerald-950/30 border-emerald-800/60 text-emerald-200'
                    : diag.status === 'warning'
                    ? 'bg-amber-950/30 border-amber-800/60 text-amber-200'
                    : 'bg-rose-950/30 border-rose-800/60 text-rose-200'
                }`}
              >
                <div className="flex items-center justify-between font-bold">
                  <span>{diag.stage}</span>
                  <span>{diag.status === 'good' ? '✓ Optimisé' : diag.status === 'warning' ? '⚠️ Point d’Attention' : '🚨 Goulot Critique'}</span>
                </div>
                <p className="text-[11px] opacity-90 leading-relaxed pt-1">
                  {diag.advice}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
