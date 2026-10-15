import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Users, 
  BookOpen, 
  ArrowRight, 
  Sparkles, 
  AlertCircle,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';

interface FunnelSimulatorProps {
  lang: 'fr' | 'en';
}

export const FunnelSimulator: React.FC<FunnelSimulatorProps> = ({ lang }) => {
  // Simulator State
  const [adSpend, setAdSpend] = useState<number>(500); // $500 monthly ad spend
  const [cpc, setCpc] = useState<number>(0.45); // $0.45 per click
  const [optinRate, setOptinRate] = useState<number>(42); // 42% opt-in
  const [tripwireRate, setTripwireRate] = useState<number>(14); // 14% buy Book 1
  const [readThrough1to2, setReadThrough1to2] = useState<number>(62); // 62% read Book 2
  const [readThrough2to3, setReadThrough2to3] = useState<number>(78); // 78% read Book 3
  const [hardcoverShare, setHardcoverShare] = useState<number>(8); // 8% buy Deluxe Hardcover

  // Economics constants based on Yann Sorel pricing
  const kindlePrice = 7.99;
  const kindleRoyalty = 7.99 * 0.70; // ~$5.59 net royalty
  const paperbackPrice = 22.00;
  const paperbackNetRoyalty = 7.20; // after print cost
  const hardcoverPrice = 45.00; // avg of 41.86 and 49.90
  const hardcoverNetRoyalty = 14.50; // after print cost

  // Core calculations
  const totalClicks = Math.round(adSpend / cpc);
  const totalLeads = Math.round(totalClicks * (optinRate / 100));
  const costPerLead = totalLeads > 0 ? (adSpend / totalLeads).toFixed(2) : '0';

  // Sales calculations
  const book1Buyers = Math.round(totalLeads * (tripwireRate / 100));
  const book2Buyers = Math.round(book1Buyers * (readThrough1to2 / 100));
  const book3Buyers = Math.round(book2Buyers * (readThrough2to3 / 100));
  const totalBookUnits = book1Buyers + book2Buyers + book3Buyers;

  // Blended royalty per unit taking into account Kindle (85%), Paperback (10%), Deluxe (5%)
  const deluxeBuyers = Math.round(totalBookUnits * (hardcoverShare / 100));
  const regularUnits = totalBookUnits - deluxeBuyers;
  
  // Royalties
  const grossBookSales = 
    (book1Buyers * kindlePrice) + 
    (book2Buyers * kindlePrice) + 
    (book3Buyers * kindlePrice) + 
    (deluxeBuyers * (hardcoverPrice - kindlePrice));

  const totalRoyalties = 
    (regularUnits * kindleRoyalty) + 
    (deluxeBuyers * hardcoverNetRoyalty);

  const netProfit = totalRoyalties - adSpend;
  const roas = adSpend > 0 ? (totalRoyalties / adSpend).toFixed(2) : '0';
  const acos = grossBookSales > 0 ? ((adSpend / grossBookSales) * 100).toFixed(1) : '0';
  const readerLtv = book1Buyers > 0 ? (totalRoyalties / book1Buyers).toFixed(2) : '0';

  const resetToBenchmarks = () => {
    setAdSpend(500);
    setCpc(0.45);
    setOptinRate(42);
    setTripwireRate(14);
    setReadThrough1to2(62);
    setReadThrough2to3(78);
    setHardcoverShare(8);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner / Explanation */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-900/60 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Calculator className="w-4 h-4" />
              <span>{lang === 'fr' ? 'Modélisation Financière & Taux de Conversion' : 'Funnel Economics & ROI Engine'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
              {lang === 'fr' 
                ? 'Simulateur de Tunnel de Vente & Rentabilité' 
                : 'Interactive Sci-Fi Book Sales Funnel Simulator'}
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              {lang === 'fr'
                ? 'Ajustez votre budget publicitaire (Amazon Ads / Meta) et vos taux de conversion pour projeter précisément vos ventes, vos redevances nettes, votre LTV lecteur et votre ROAS.'
                : 'Adjust your advertising spend and stage-by-stage conversion metrics to calculate exact reader acquisitions, net royalties, ROAS, and reader lifetime value.'}
            </p>
          </div>
          <button
            onClick={resetToBenchmarks}
            className="flex items-center gap-2 px-3 py-2 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg border border-slate-700 transition"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{lang === 'fr' ? 'Valeurs Repères SF' : 'Reset to Benchmarks'}</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Sliders on left, Real-Time P&L & Funnel Visualizer on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Sliders Configuration Column (5 Cols) */}
        <div className="lg:col-span-5 space-y-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-base font-semibold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
            <span className="w-6 h-6 rounded-md bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center text-xs font-bold">1</span>
            <span>{lang === 'fr' ? 'Paramètres Publicitaires & Conversion' : 'Traffic & Conversion Levers'}</span>
          </h3>

          {/* Slider 1: Ad Spend */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">{lang === 'fr' ? 'Budget Publicitaire Mensuel' : 'Monthly Ad Spend'}</span>
              <span className="text-cyan-400 font-bold">${adSpend} / mois</span>
            </div>
            <input
              type="range"
              min="100"
              max="3000"
              step="50"
              value={adSpend}
              onChange={(e) => setAdSpend(Number(e.target.value))}
              className="w-full accent-cyan-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>$100</span>
              <span>$1,000</span>
              <span>$3,000</span>
            </div>
          </div>

          {/* Slider 2: CPC */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">{lang === 'fr' ? 'Coût Moyen Par Clic (CPC)' : 'Average Cost Per Click (CPC)'}</span>
              <span className="text-cyan-400 font-bold">${cpc.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.20"
              max="1.20"
              step="0.05"
              value={cpc}
              onChange={(e) => setCpc(Number(e.target.value))}
              className="w-full accent-cyan-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>$0.20 (Optimal)</span>
              <span>$0.60</span>
              <span>$1.20 (Compétitif)</span>
            </div>
          </div>

          {/* Slider 3: Squeeze Page Opt-In Rate */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">{lang === 'fr' ? 'Taux de Capture (Opt-in Page)' : 'Landing Page Opt-in Rate'}</span>
              <span className="text-indigo-400 font-bold">{optinRate}%</span>
            </div>
            <input
              type="range"
              min="15"
              max="70"
              step="1"
              value={optinRate}
              onChange={(e) => setOptinRate(Number(e.target.value))}
              className="w-full accent-indigo-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
            <p className="text-[11px] text-slate-400">
              {lang === 'fr' 
                ? 'Pourcentage de visiteurs qui s’inscrivent pour télécharger le prélude gratuit de Yann Sorel.'
                : 'Percentage of traffic opting in for the free 2047 Yann Sorel preview dossier.'}
            </p>
          </div>

          {/* Slider 4: Tripwire (Book 1 Sales) */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">{lang === 'fr' ? 'Conversion Achat Tome 1 (Tripwire)' : 'Book 1 Buyer Conversion (Tripwire)'}</span>
              <span className="text-emerald-400 font-bold">{tripwireRate}%</span>
            </div>
            <input
              type="range"
              min="5"
              max="35"
              step="1"
              value={tripwireRate}
              onChange={(e) => setTripwireRate(Number(e.target.value))}
              className="w-full accent-emerald-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
            <p className="text-[11px] text-slate-400">
              {lang === 'fr' 
                ? 'Pourcentage d’abonnés qui achètent "93 ans en 2047" via la séquence e-mail.'
                : 'Percentage of leads who buy Book 1 (Kindle $7.99 / Paperback $22) via email sequence.'}
            </p>
          </div>

          {/* Slider 5: Read-Through Book 1 -> Book 2 */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">{lang === 'fr' ? 'Rétention Tome 1 ➔ Tome 2 (2075)' : 'Read-Through Book 1 ➔ Book 2 (2075)'}</span>
              <span className="text-purple-400 font-bold">{readThrough1to2}%</span>
            </div>
            <input
              type="range"
              min="30"
              max="90"
              step="2"
              value={readThrough1to2}
              onChange={(e) => setReadThrough1to2(Number(e.target.value))}
              className="w-full accent-purple-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
          </div>

          {/* Slider 6: Read-Through Book 2 -> Book 3 */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">{lang === 'fr' ? 'Rétention Tome 2 ➔ Tome 3 (2148)' : 'Read-Through Book 2 ➔ Book 3 (2148)'}</span>
              <span className="text-purple-400 font-bold">{readThrough2to3}%</span>
            </div>
            <input
              type="range"
              min="40"
              max="95"
              step="2"
              value={readThrough2to3}
              onChange={(e) => setReadThrough2to3(Number(e.target.value))}
              className="w-full accent-purple-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
          </div>

          {/* Slider 7: Deluxe Hardcover Share */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">{lang === 'fr' ? 'Part Éditions Relié Deluxe ($45+)' : 'Deluxe Hardcover Collector Share ($45+)'}</span>
              <span className="text-amber-400 font-bold">{hardcoverShare}%</span>
            </div>
            <input
              type="range"
              min="2"
              max="25"
              step="1"
              value={hardcoverShare}
              onChange={(e) => setHardcoverShare(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Results & Visual Funnel Column (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Executive P&L Scorecard Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            
            {/* Net Profit */}
            <div className={`p-4 rounded-xl border ${
              netProfit >= 0 
                ? 'bg-emerald-950/40 border-emerald-800/80 text-emerald-200' 
                : 'bg-rose-950/40 border-rose-800/80 text-rose-200'
            }`}>
              <div className="flex items-center justify-between text-xs opacity-80">
                <span>{lang === 'fr' ? 'Bénéfice Net' : 'Net Profit'}</span>
                <DollarSign className="w-3.5 h-3.5" />
              </div>
              <div className="text-xl sm:text-2xl font-bold font-display mt-1">
                {netProfit >= 0 ? `+$${netProfit.toFixed(0)}` : `-$${Math.abs(netProfit).toFixed(0)}`}
              </div>
              <div className="text-[10px] mt-1 opacity-75">
                {lang === 'fr' ? 'Redevances - Dépenses Pub' : 'Royalties - Ad Spend'}
              </div>
            </div>

            {/* ROAS */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>ROAS (Retour Pub)</span>
                <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <div className="text-xl sm:text-2xl font-bold font-display mt-1 text-cyan-400">
                {roas}x
              </div>
              <div className="text-[10px] text-slate-400 mt-1">
                {Number(roas) >= 1.5 ? '🚀 ' + (lang === 'fr' ? 'Rentable' : 'Profitable') : '⚠️ ' + (lang === 'fr' ? 'À optimiser' : 'Optimize')}
              </div>
            </div>

            {/* Total Leads Added */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>{lang === 'fr' ? 'Nouveaux Fans' : 'New Subscribers'}</span>
                <Users className="w-3.5 h-3.5 text-indigo-400" />
              </div>
              <div className="text-xl sm:text-2xl font-bold font-display mt-1 text-indigo-300">
                +{totalLeads}
              </div>
              <div className="text-[10px] text-slate-400 mt-1">
                ${costPerLead} {lang === 'fr' ? 'par e-mail' : 'per lead'}
              </div>
            </div>

            {/* Reader LTV */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>LTV Lecteur</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div className="text-xl sm:text-2xl font-bold font-display mt-1 text-amber-300">
                ${readerLtv}
              </div>
              <div className="text-[10px] text-slate-400 mt-1">
                {lang === 'fr' ? 'Valeur à vie / acheteur' : 'Lifetime value / buyer'}
              </div>
            </div>
          </div>

          {/* Visual Step-by-Step Funnel Flow */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h4 className="text-sm font-semibold text-white font-display">
                {lang === 'fr' ? 'Visualisation Dynamique du Tunnel de Conversion' : 'Dynamic Funnel Drop-off & Conversion Journey'}
              </h4>
              <span className="text-xs text-slate-400">
                {lang === 'fr' ? 'Total Ventes Livres :' : 'Total Book Units:'} <strong className="text-white">{totalBookUnits}</strong>
              </span>
            </div>

            <div className="space-y-3">
              {/* Stage 1: Clicks */}
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-200">
                      {lang === 'fr' ? 'Clics Publicitaires Publics Ciblés' : 'Targeted Ad Traffic Clicks'}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Amazon Ads & Meta Ads (${cpc.toFixed(2)} CPC)
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-cyan-400 font-display">{totalClicks.toLocaleString()} clics</span>
                  <div className="text-[10px] text-slate-400">100% trafic</div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center -my-1 text-slate-600">
                <div className="text-xs font-mono text-cyan-400/80 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                  ↓ {optinRate}% {lang === 'fr' ? 'Opt-in Prélude Offert' : 'Opt-in for Free Preview'}
                </div>
              </div>

              {/* Stage 2: Leads */}
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-indigo-900/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-950 text-indigo-400 border border-indigo-800 flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-200">
                      {lang === 'fr' ? 'Abonnés E-mails Qualifiés (Liste Yann Sorel)' : 'Opt-in Leads Added to Newsletter'}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {lang === 'fr' ? 'Lecteurs recevant la séquence de 5 e-mails' : 'Receiving the 5-part automated nurture sequence'}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-indigo-300 font-display">{totalLeads.toLocaleString()} leads</span>
                  <div className="text-[10px] text-slate-400">${costPerLead} {lang === 'fr' ? 'coût / lead' : 'CPL'}</div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center -my-1 text-slate-600">
                <div className="text-xs font-mono text-emerald-400/80 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                  ↓ {tripwireRate}% {lang === 'fr' ? 'Achètent le Tome 1' : 'Buy Book 1 Tripwire'}
                </div>
              </div>

              {/* Stage 3: Book 1 */}
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-emerald-900/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-200">
                      {lang === 'fr' ? 'Tome 1 : 93 ans en 2047 (Ventes)' : 'Book 1: 93 Years Old in 2047'}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Kindle ($7.99) & Broché ($22) & Deluxe ($41.86)
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-emerald-300 font-display">{book1Buyers} exemplaires</span>
                  <div className="text-[10px] text-slate-400">~${(book1Buyers * kindleRoyalty).toFixed(0)} redevances nettes</div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center -my-1 text-slate-600">
                <div className="text-xs font-mono text-purple-400/80 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                  ↓ {readThrough1to2}% {lang === 'fr' ? 'Continuent vers le Tome 2' : 'Read-Through to Book 2'}
                </div>
              </div>

              {/* Stage 4: Book 2 & Book 3 Back-End */}
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-purple-900/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-950 text-purple-400 border border-purple-800 flex items-center justify-center text-xs font-bold">
                    4
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-200">
                      {lang === 'fr' ? 'Back-End : Tomes 2 (2075) & 3 (2148)' : 'Back-End: Books 2 (2075) & 3 (2148)'}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {lang === 'fr' ? 'Binge reading & éditions Collector' : 'Trilogy binge reading & deluxe collectors'}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-purple-300 font-display">{book2Buyers + book3Buyers} exemplaires</span>
                  <div className="text-[10px] text-slate-400">
                    {book2Buyers} T2 + {book3Buyers} T3
                  </div>
                </div>
              </div>
            </div>

            {/* Key Optimization Insights */}
            <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-slate-300 space-y-2">
              <div className="font-semibold text-cyan-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>{lang === 'fr' ? 'Le Secret de la Rentabilité pour une Trilogie SF :' : 'The Secret to Sci-Fi Trilogy Profitability:'}</span>
              </div>
              <p>
                {lang === 'fr'
                  ? 'Pour un livre unique, un coût par clic de 0,45 $ est souvent à l’équilibre. Mais avec la Trilogie Yann Sorel, vous réalisez 3 ventes successives pour un seul coût d’acquisition initial ! Votre redevance totale par lecteur passe de 5,59 $ à plus de 16,80 $ (et jusqu’à 45 $ avec les éditions reliées deluxe).'
                  : 'For a standalone book, ads at $0.45 CPC often break even. But with The Yann Sorel Trilogy, you earn up to 3 consecutive purchases for 1 single customer acquisition cost! Total lifetime royalties jump from $5.59 to over $16.80+ (and up to $45+ with deluxe hardcovers).'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
