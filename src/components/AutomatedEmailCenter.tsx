import React, { useState } from 'react';
import { 
  AUTOMATED_EMAIL_SEQUENCE, 
  EmailTemplate 
} from '../data/emailSequencesData';
import { 
  Mail, 
  Clock, 
  Target, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  Eye, 
  MousePointerClick, 
  HelpCircle,
  FileCode,
  Send
} from 'lucide-react';

interface AutomatedEmailCenterProps {
  lang: 'fr' | 'en';
}

export const AutomatedEmailCenter: React.FC<AutomatedEmailCenterProps> = ({ lang }) => {
  const [selectedEmailIndex, setSelectedEmailIndex] = useState<number>(0);
  const [emailLanguage, setEmailLanguage] = useState<'en' | 'fr'>('en');
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [testSent, setTestSent] = useState<boolean>(false);

  const currentEmail: EmailTemplate = AUTOMATED_EMAIL_SEQUENCE[selectedEmailIndex];

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSimulateSend = () => {
    setTestSent(true);
    setTimeout(() => setTestSent(false), 3000);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 border border-cyan-900/60 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Mail className="w-4 h-4" />
              <span>{lang === 'fr' ? 'Moteur de Séquences d’E-mails Automatisées' : 'Automated Email Drip Sequence Engine'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
              {lang === 'fr' 
                ? 'Séquence d’Indoctrination & Fidélisation Lecteurs (5 E-mails)' 
                : '5-Part Sci-Fi Automated Drip & Tripwire Funnel'}
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              {lang === 'fr'
                ? 'Séquence complète prête à l’emploi pour transformer des abonnés curieux en acheteurs passionnés de la trilogie Yann Sorel. Conçue pour le marché américain (USA) en anglais, avec traduction française intégrale.'
                : 'Complete, turn-key automated sequence designed to warm up cold sci-fi readers, create deep intrigue around Yann & Eve, and trigger sales of Books 1, 2, and 3 on Amazon.'}
            </p>
          </div>

          {/* Email content language switcher */}
          <div className="flex items-center gap-2 bg-slate-950/80 p-1.5 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400 px-2 font-medium">
              {lang === 'fr' ? 'Langue des e-mails :' : 'Email Copy Language:'}
            </span>
            <button
              onClick={() => setEmailLanguage('en')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition ${
                emailLanguage === 'en'
                  ? 'bg-cyan-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              English (USA Market)
            </button>
            <button
              onClick={() => setEmailLanguage('fr')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition ${
                emailLanguage === 'fr'
                  ? 'bg-cyan-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Français
            </button>
          </div>
        </div>
      </div>

      {/* Sequence Timeline Step Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
        {AUTOMATED_EMAIL_SEQUENCE.map((email, idx) => {
          const isSelected = selectedEmailIndex === idx;
          return (
            <button
              key={email.id}
              onClick={() => setSelectedEmailIndex(idx)}
              className={`text-left p-3.5 rounded-xl border transition-all ${
                isSelected
                  ? 'bg-slate-900 border-cyan-500 shadow-md shadow-cyan-950/50 ring-1 ring-cyan-500/50'
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className={`font-mono font-bold ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`}>
                  E-mail #{email.stepNumber}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                  {email.triggerDelay.split(' ')[0]}
                </span>
              </div>
              <div className="text-xs font-semibold text-slate-200 line-clamp-1">
                {email.purpose.split('+')[0]}
              </div>
              <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                <Eye className="w-2.5 h-2.5 text-cyan-400" />
                <span>{email.targetOpenRate}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Email Detail Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Email Meta & Optimization Column (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-4">
            <h3 className="text-sm font-bold text-white font-display border-b border-slate-800 pb-2">
              {lang === 'fr' ? 'Fiche Technique de l’E-mail' : 'Email Strategic Profile'}
            </h3>

            <div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                {lang === 'fr' ? 'Déclencheur d’Envoi :' : 'Trigger Timing:'}
              </div>
              <div className="text-xs font-medium text-cyan-300 flex items-center gap-1.5 mt-0.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{currentEmail.triggerDelay}</span>
              </div>
            </div>

            <div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                {lang === 'fr' ? 'Objectif de Conversion :' : 'Conversion Objective:'}
              </div>
              <div className="text-xs font-medium text-slate-200 mt-0.5">
                {currentEmail.conversionGoal}
              </div>
            </div>

            <div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                {lang === 'fr' ? 'Levier Psychologique Clé :' : 'Key Psychological Hook:'}
              </div>
              <div className="text-xs font-medium text-purple-300 mt-0.5 bg-purple-950/40 p-2 rounded-lg border border-purple-900/50">
                {currentEmail.keyPsychologicalTrigger}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <div className="text-[10px] text-slate-400">{lang === 'fr' ? 'Taux d’Ouverture Cible' : 'Target Open Rate'}</div>
                <div className="text-sm font-bold text-cyan-400 font-display mt-0.5">{currentEmail.targetOpenRate}</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <div className="text-[10px] text-slate-400">{lang === 'fr' ? 'Taux de Clic Cible' : 'Target Click Rate'}</div>
                <div className="text-sm font-bold text-emerald-400 font-display mt-0.5">{currentEmail.targetClickRate}</div>
              </div>
            </div>
          </div>

          {/* ESP Setup Integration Box */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3">
            <h4 className="text-xs font-bold text-white font-display uppercase tracking-wider text-slate-300">
              {lang === 'fr' ? 'Comment intégrer dans votre autorépondeur' : 'How to set up in your ESP'}
            </h4>
            <p className="text-xs text-slate-400">
              {lang === 'fr'
                ? 'Fonctionne avec MailerLite, ConvertKit (Kit), ActiveCampaign ou Mailchimp :'
                : 'Works directly with MailerLite, ConvertKit, ActiveCampaign, or Mailchimp:'}
            </p>
            <ol className="text-xs text-slate-300 space-y-1.5 list-decimal list-inside">
              <li>{lang === 'fr' ? 'Créez une automatisation déclenchée sur l’ajout du tag ' : 'Create automation triggered by tag '} <code className="text-cyan-400">yann-sorel-lead</code></li>
              <li>{lang === 'fr' ? 'Collez les objets et le texte avec vos liens Amazon' : 'Paste subject lines and body with your Amazon links'}</li>
              <li>{lang === 'fr' ? 'Ajoutez un délai d’attente correspondant entre chaque e-mail' : 'Set the delay timer between each email step'}</li>
            </ol>
            <button
              onClick={handleSimulateSend}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-cyan-300 rounded-lg border border-slate-700 transition"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{testSent ? (lang === 'fr' ? '✓ Simulation envoyée' : '✓ Simulation Dispatched') : (lang === 'fr' ? 'Tester l’affichage' : 'Simulate Send')}</span>
            </button>
          </div>
        </div>

        {/* Live Email Mockup Viewer (8 Cols) */}
        <div className="lg:col-span-8 bg-slate-900/95 border border-slate-800 rounded-2xl p-6 space-y-5">
          
          {/* Email Header Mockup */}
          <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 space-y-3">
            
            {/* Subject Lines A/B Options */}
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                <span className="font-semibold text-cyan-400 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{lang === 'fr' ? 'Objets A/B Testés Recommandés :' : 'Recommended A/B Subject Lines:'}</span>
                </span>
                <span className="text-[10px] text-slate-500">{lang === 'fr' ? 'Testez 2 variantes par envoi' : 'Test 2 variants per blast'}</span>
              </div>
              <div className="space-y-1.5">
                {(emailLanguage === 'en' ? currentEmail.subjectLinesEn : currentEmail.subjectLinesFr).map((subject, sIdx) => (
                  <div 
                    key={sIdx}
                    className="flex items-center justify-between text-xs bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 group hover:border-cyan-800"
                  >
                    <span className="text-slate-200 font-medium font-sans">
                      <span className="text-slate-500 mr-2 font-mono">{sIdx === 0 ? 'A (Principal)' : sIdx === 1 ? 'B (Curiosité)' : 'C (Histoire)'} :</span>
                      {subject}
                    </span>
                    <button
                      onClick={() => handleCopy(subject, `subject-${sIdx}`)}
                      className="text-slate-400 hover:text-cyan-400 p-1 transition"
                      title="Copier l'objet"
                    >
                      {copiedField === `subject-${sIdx}` ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Preview text */}
            <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-xs text-slate-400">
              <div>
                <strong className="text-slate-300">Preview Text: </strong>
                <span>{emailLanguage === 'en' ? currentEmail.previewTextEn : currentEmail.previewTextFr}</span>
              </div>
              <button
                onClick={() => handleCopy(emailLanguage === 'en' ? currentEmail.previewTextEn : currentEmail.previewTextFr, 'preview')}
                className="text-slate-400 hover:text-cyan-400 p-1"
              >
                {copiedField === 'preview' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Email Body Content */}
          <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 relative">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="font-semibold text-slate-200">De:</span> J.F. Grosvois &lt;contact@grosvois.com&gt;
              </div>
              <button
                onClick={() => handleCopy(emailLanguage === 'en' ? currentEmail.bodyEn : currentEmail.bodyFr, 'body')}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-cyan-400 bg-slate-900 rounded-md border border-slate-800 hover:border-slate-700 transition"
              >
                {copiedField === 'body' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lang === 'fr' ? 'Copié !' : 'Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{lang === 'fr' ? 'Copier le corps du texte' : 'Copy Email Body'}</span>
                  </>
                )}
              </button>
            </div>

            <div className="prose prose-invert max-w-none text-slate-300 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap font-sans">
              {emailLanguage === 'en' ? currentEmail.bodyEn : currentEmail.bodyFr}
            </div>

            {/* Simulated Primary & Secondary Call to Action Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row gap-3">
              <a
                href={(emailLanguage === 'en' ? currentEmail.callToActionEn : currentEmail.callToActionFr).url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-lg shadow-cyan-950 transition"
              >
                <span>{(emailLanguage === 'en' ? currentEmail.callToActionEn : currentEmail.callToActionFr).text}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {(emailLanguage === 'en' ? currentEmail.callToActionEn : currentEmail.callToActionFr).secondaryText && (
                <a
                  href={(emailLanguage === 'en' ? currentEmail.callToActionEn : currentEmail.callToActionFr).secondaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 font-medium text-xs rounded-xl border border-slate-800 transition"
                >
                  <span>{(emailLanguage === 'en' ? currentEmail.callToActionEn : currentEmail.callToActionFr).secondaryText}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
