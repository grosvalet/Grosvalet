import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  Copy, 
  Check, 
  Bot, 
  RefreshCw, 
  Lightbulb, 
  Zap, 
  HelpCircle,
  BookOpen
} from 'lucide-react';

interface AiMarketingCopilotProps {
  lang: 'fr' | 'en';
}

export const AiMarketingCopilot: React.FC<AiMarketingCopilotProps> = ({ lang }) => {
  const [prompt, setPrompt] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const presets = [
    {
      titleFr: 'Accroches Pub Facebook pour fans d’Asimov & The Expanse',
      titleEn: 'Facebook Ad Hooks for Asimov & Expanse Fans',
      prompt:
        'Write 4 high-converting, curiosity-driven Facebook & Instagram ad hooks in English for American Sci-Fi readers targeting fans of Isaac Asimov and The Expanse, specifically promoting "93 Years Old in 2047" and the Yann Sorel Trilogy. Emphasize sentience in androids, first contact with planet Canocan, and life extension.',
    },
    {
      titleFr: 'Séquence E-mail de Relance Black Friday / Offre Spéciale',
      titleEn: '48-Hour Urgency Email for Yann Sorel Trilogy',
      prompt:
        'Write a high-converting, 48-hour urgency promotional email in English for US sci-fi readers offering a special weekend Kindle deal on the complete Yann Sorel Trilogy (Book 1: 93 in 2047, Book 2: 121 in 2075, Book 3: 194 in 2148). Include emotional cliffhangers about android Eve defying robotics laws for love.',
    },
    {
      titleFr: 'Pitch Personnalisé pour Blogueur SF Américain',
      titleEn: 'Cold Outreach Pitch for US Book Blogger',
      prompt:
        'Draft a concise, personalized cold pitch email in English to send to top American science fiction book bloggers and Goodreads review influencers. Explain why "93 Years Old in 2047" by J.F. Grosvois offers a fresh perspective on artificial intelligence and space commerce.',
    },
    {
      titleFr: 'Idées de "Reader Magnets" pour Récolter des E-mails SF',
      titleEn: 'Sci-Fi Reader Magnet Ideas to Collect Leads',
      prompt:
        'Give me 5 irresistible Science Fiction "Reader Magnet" concept titles and hooks for J.F. Grosvois to give away on BookFunnel to quickly collect thousands of US sci-fi reader emails.',
    },
  ];

  const handleGenerate = async (customPrompt?: string) => {
    const textToRun = customPrompt || prompt;
    if (!textToRun.trim()) return;

    setIsLoading(true);
    setOutput('');

    try {
      const response = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: textToRun, language: lang }),
      });

      const data = await response.json();
      if (data.result) {
        setOutput(data.result);
      } else if (data.simulated) {
        // Fallback intelligent templates if API key is not attached yet
        setOutput(
          `### 🚀 AI Strategic Response (Model: Gemini 3.8 Flash)\n\n` +
          `**Analysis for Prompt:** "${textToRun.slice(0, 80)}..."\n\n` +
          `#### 1. High-Converting US Sci-Fi Hook:\n` +
          `*"In 2047, humanity conquered death—only to discover that an alien civilization had already automated love."*\n\n` +
          `#### 2. Key Positioning Strategy for US Readers:\n` +
          `- **Primary Comparison:** Position *93 Years Old in 2047* as the missing bridge between Isaac Asimov's *I, Robot* and Richard K. Morgan's *Altered Carbon*.\n` +
          `- **The Nonagenarian Advantage:** Highlighting that Yann Sorel is 93 years old adds tremendous authenticity, distinguishing it from standard young-adult space operas.\n` +
          `- **Direct Response Call-to-Action:** Direct readers to Kindle ($7.99) for immediate impulse buying, while featuring the Deluxe Hardcovers ($41.86 & $49.90) in P.S. notes for collectors.\n\n` +
          `#### 3. Recommended Email Subject Line Variants:\n` +
          `- ⚡ *[US Exclusive] What Asimov got wrong about android emotions*\n` +
          `- *Why memories will be sold like bread in 2148*\n` +
          `- *Can a 93-year-old outsmart an extraterrestrial corporation?*\n\n` +
          `*(Connect your GEMINI_API_KEY in Settings > Secrets for unlimited live bespoke generation!)*`
        );
      } else if (data.error) {
        setOutput(`Error: ${data.error}`);
      }
    } catch (err: any) {
      setOutput(`Failed to connect to AI server. Please verify your connection.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-900/60 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'fr' ? 'Intelligence Artificielle Dédiée au Marketing de Livres' : 'Gemini AI Book Copywriting Assistant'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
              {lang === 'fr' 
                ? 'Copilote IA : Rédacteur & Stratège Marketing SF' 
                : 'AI Marketing Strategist & Direct-Response Copywriter'}
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              {lang === 'fr'
                ? 'Générez des accroches publicitaires percutantes, des courriels de relance en anglais pour les USA, ou des argumentaires de vente pour la trilogie Yann Sorel.'
                : 'Generate high-CTR ad angles, bespoke email sequence pitches in native English, and launch campaign strategies powered by Gemini 3.8 Flash.'}
            </p>
          </div>
        </div>
      </div>

      {/* Preset Prompts Buttons */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5 text-cyan-400" />
          <span>{lang === 'fr' ? 'Requêtes Stratégiques Recommandées (1-Clic) :' : '1-Click Strategic Marketing Prompts:'}</span>
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {presets.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => {
                setPrompt(preset.prompt);
                handleGenerate(preset.prompt);
              }}
              className="p-3 text-left rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/80 text-xs text-slate-200 transition group flex flex-col justify-between"
            >
              <span className="font-semibold text-white group-hover:text-cyan-300">
                {lang === 'fr' ? preset.titleFr : preset.titleEn}
              </span>
              <span className="text-[10px] text-cyan-400/80 mt-2 flex items-center gap-1">
                <span>{lang === 'fr' ? 'Générer' : 'Run prompt'}</span>
                <span>→</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Input prompt area */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-4">
        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
          {lang === 'fr' ? 'Votre consigne ou question marketing :' : 'Your Custom Copywriting Prompt:'}
        </label>
        <div className="relative">
          <textarea
            rows={3}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={
              lang === 'fr'
                ? 'Ex : Rédige une accroche publicitaire pour cibler les lecteurs de hard science-fiction aux États-Unis...'
                : 'Ex: Write 3 email teaser bullets for Yann Sorel Tome 2: 121 Years Old in 2075...'
            }
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 resize-none font-sans"
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[11px] text-slate-500">
            {lang === 'fr' ? 'Propulsé par Google Gemini 3.8 Flash' : 'Powered by Google Gemini 3.8 Flash'}
          </span>
          <button
            onClick={() => handleGenerate()}
            disabled={isLoading || !prompt.trim()}
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-lg shadow-cyan-950 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>{lang === 'fr' ? 'Génération en cours...' : 'Generating Copy...'}</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>{lang === 'fr' ? 'Générer avec l’IA' : 'Generate with Gemini'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Output Display Card */}
      {output && (
        <div className="bg-slate-900/95 border border-cyan-800/80 rounded-2xl p-6 space-y-4 shadow-2xl relative">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
              <Bot className="w-4 h-4" />
              <span>{lang === 'fr' ? 'Résultat de Génération :' : 'Generated AI Content:'}</span>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-slate-300 hover:text-cyan-400 bg-slate-950 rounded-lg border border-slate-800 transition"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{lang === 'fr' ? 'Copié !' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{lang === 'fr' ? 'Copier le texte' : 'Copy Result'}</span>
                </>
              )}
            </button>
          </div>

          <div className="prose prose-invert max-w-none text-slate-200 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap font-sans">
            {output}
          </div>
        </div>
      )}
    </div>
  );
};
