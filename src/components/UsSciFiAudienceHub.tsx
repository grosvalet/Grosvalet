import React, { useState } from 'react';
import { 
  US_SCIFI_CONTACTS, 
  OUTREACH_TEMPLATES_EN, 
  ETHICAL_ACQUISITION_GUIDE, 
  SciFiContact 
} from '../data/usAudiencesData';
import { 
  Users, 
  Mail, 
  Search, 
  Filter, 
  Check, 
  Copy, 
  ExternalLink, 
  ShieldAlert, 
  ShieldCheck, 
  Sparkles,
  BookMarked,
  Send,
  Building,
  DollarSign
} from 'lucide-react';

interface UsSciFiAudienceHubProps {
  lang: 'fr' | 'en';
}

export const UsSciFiAudienceHub: React.FC<UsSciFiAudienceHubProps> = ({ lang }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedTemplateKey, setSelectedTemplateKey] = useState<'reviewerPitch' | 'newsletterSwap' | 'arcTeamInvite'>('reviewerPitch');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const contactTypes = [
    'All',
    'Book Reviewer',
    'Newsletter / Promo Platform',
    'Author Swap Network',
    'Sci-Fi Magazine / Media',
  ];

  const filteredContacts = US_SCIFI_CONTACTS.filter((contact) => {
    const matchesType = selectedType === 'All' || contact.type === selectedType;
    const matchesSearch = 
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.outlet.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.emailOrUrl.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const currentTemplate = OUTREACH_TEMPLATES_EN[selectedTemplateKey];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-900/60 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Users className="w-4 h-4" />
              <span>{lang === 'fr' ? 'Acquisition d’E-mails de Lecteurs de Science-Fiction (USA)' : 'US Science Fiction Reader Acquisition Hub'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
              {lang === 'fr' 
                ? 'E-mails de Fans de SF USA, Chroniqueurs & Réseaux de Promotion' 
                : 'US Sci-Fi Fan Outlets, Reviewer Emails & Acquisition Strategy'}
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              {lang === 'fr'
                ? 'Annuaire vérifié de chroniqueurs, newsletters de recommandation SF, plateformes d’échanges de lecteurs (BookFunnel, StoryOrigin) et modèles de courriels professionnels en anglais.'
                : 'Verified directory of US Sci-Fi book reviewers, promotion platforms, author newsletter co-ops, and high-converting outreach email templates written in native English.'}
            </p>
          </div>
        </div>
      </div>

      {/* CAN-SPAM Act Regulatory & Strategy Alert */}
      <div className="p-5 rounded-2xl bg-amber-950/30 border border-amber-800/80 text-xs text-amber-200/90 space-y-2">
        <div className="flex items-center gap-2 font-bold text-amber-400 text-sm">
          <ShieldAlert className="w-5 h-5 flex-shrink-0" />
          <span>{lang === 'fr' ? 'Règle Fédérale US (CAN-SPAM Act) & Délivrabilité E-mail :' : 'US Federal CAN-SPAM Act & Email Deliverability Warning:'}</span>
        </div>
        <p className="leading-relaxed">
          {lang === 'fr' 
            ? ETHICAL_ACQUISITION_GUIDE.canSpamWarning 
            : 'Scraping personal private emails from US consumer forums without prior opt-in violates the US Federal CAN-SPAM Act and triggers instant domain blacklisting on Gmail and Outlook. Below are the 100% legal, high-ROI acquisition channels and public reviewer contact portals used by top-tier authors.'}
        </p>
      </div>

      {/* 5 Proven Pillars for US Reader Acquisition */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4">
        <h3 className="text-sm font-bold text-white font-display flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>{lang === 'fr' ? 'Les 5 Piliers pour Collecter Légalement 5 000+ E-mails de Fans de SF aux USA' : 'The 5 Legitimate Pillars to Build a 5,000+ US Sci-Fi Fan List'}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ETHICAL_ACQUISITION_GUIDE.pillars.map((p, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-cyan-300 font-display">{p.pillar}</div>
                <div className="text-[11px] font-semibold text-emerald-400 mt-0.5">{p.roi}</div>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Directory Section */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h3 className="text-base font-bold text-white font-display">
              {lang === 'fr' ? 'Annuaire de Contacts & Portails SF (USA & International)' : 'Verified US Sci-Fi Outlets & Direct Contacts'}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {filteredContacts.length} {lang === 'fr' ? 'contacts disponibles' : 'contacts matching filters'}
            </p>
          </div>

          {/* Search bar & Type filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={lang === 'fr' ? 'Rechercher un média, e-mail...' : 'Search media, email...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 w-full sm:w-56"
              />
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {contactTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition ${
                selectedType === type
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {type === 'All' ? (lang === 'fr' ? 'Tous' : 'All') : type}
            </button>
          ))}
        </div>

        {/* Contacts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredContacts.map((contact) => (
            <div 
              key={contact.id} 
              className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 hover:border-slate-700 transition space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-bold text-white font-display">{contact.name}</h4>
                    <span className="text-xs text-slate-400">{contact.outlet}</span>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-medium border ${
                    contact.type === 'Book Reviewer'
                      ? 'bg-purple-950/60 text-purple-300 border-purple-800/60'
                      : contact.type.includes('Newsletter')
                      ? 'bg-indigo-950/60 text-indigo-300 border-indigo-800/60'
                      : 'bg-cyan-950/60 text-cyan-300 border-cyan-800/60'
                  }`}>
                    {contact.type}
                  </span>
                </div>

                <div className="text-xs text-slate-300">
                  <span className="text-slate-400 font-semibold">{lang === 'fr' ? 'Spécialité : ' : 'Focus: '}</span>
                  {contact.specialty}
                </div>

                <div className="text-xs text-slate-400 leading-relaxed">
                  {contact.guidelinesSummary}
                </div>
              </div>

              {/* Bottom bar of contact card: Audience size + Action copy email */}
              <div className="pt-3 border-t border-slate-900 flex items-center justify-between gap-2">
                <div className="text-[11px] text-cyan-400 font-medium">
                  {contact.audienceSize}
                </div>

                <div className="flex items-center gap-1.5">
                  {contact.isDirectEmail ? (
                    <button
                      onClick={() => handleCopy(contact.emailOrUrl, contact.id)}
                      className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-cyan-400 rounded-lg border border-slate-800 transition"
                      title="Copier l'e-mail de contact"
                    >
                      {copiedKey === contact.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span>{lang === 'fr' ? 'E-mail copié !' : 'Email Copied!'}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span className="font-mono text-[11px]">{contact.emailOrUrl}</span>
                        </>
                      )}
                    </button>
                  ) : (
                    <a
                      href={contact.emailOrUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-slate-900 hover:bg-slate-800 text-cyan-400 rounded-lg border border-slate-800 transition"
                    >
                      <span>{lang === 'fr' ? 'Visiter portail' : 'Visit Portal'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Outreach Email Templates (In English) */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>{lang === 'fr' ? 'Modèles d’E-mails de Démarchage en Anglais (Prêts à envoyer)' : 'Ready-to-Send Outreach Email Templates (in English)'}</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {lang === 'fr' 
                ? 'Rédigés selon les standards de l’édition indépendante américaine pour garantir un taux de réponse maximal.' 
                : 'Crafted according to US indie publishing pitch standards for maximum acceptance and open rates.'}
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setSelectedTemplateKey('reviewerPitch')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                selectedTemplateKey === 'reviewerPitch'
                  ? 'bg-cyan-600 text-white'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              1. Reviewer Pitch
            </button>
            <button
              onClick={() => setSelectedTemplateKey('newsletterSwap')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                selectedTemplateKey === 'newsletterSwap'
                  ? 'bg-cyan-600 text-white'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              2. Newsletter Swap
            </button>
            <button
              onClick={() => setSelectedTemplateKey('arcTeamInvite')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                selectedTemplateKey === 'arcTeamInvite'
                  ? 'bg-cyan-600 text-white'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              3. VIP ARC Invite
            </button>
          </div>
        </div>

        {/* Selected Template Viewer */}
        <div className="bg-slate-950 rounded-xl p-5 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <div>
              <span className="text-xs text-slate-400 font-semibold">{lang === 'fr' ? 'Objet du courriel (Subject) :' : 'Subject Line:'}</span>
              <div className="text-sm font-bold text-cyan-300 font-mono mt-0.5">{currentTemplate.subject}</div>
            </div>
            <button
              onClick={() => handleCopy(currentTemplate.subject, 'template-subj')}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-cyan-400 bg-slate-900 rounded-md border border-slate-800"
            >
              {copiedKey === 'template-subj' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{lang === 'fr' ? 'Copier objet' : 'Copy Subject'}</span>
            </button>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400 font-semibold">{lang === 'fr' ? 'Corps du message (Body en anglais) :' : 'Email Body (English):'}</span>
              <button
                onClick={() => handleCopy(currentTemplate.body, 'template-body')}
                className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg shadow transition"
              >
                {copiedKey === 'template-body' ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>{lang === 'fr' ? 'Copié !' : 'Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{lang === 'fr' ? 'Copier le modèle complet' : 'Copy Full Pitch'}</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-xs sm:text-sm font-sans whitespace-pre-wrap leading-relaxed max-h-96 overflow-y-auto">
              {currentTemplate.body}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
