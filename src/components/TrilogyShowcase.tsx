import React, { useState } from 'react';
import { 
  YANN_SOREL_TRILOGY, 
  AUTHOR_DETAILS, 
  BookInfo 
} from '../data/trilogyData';
import { 
  BookOpen, 
  ExternalLink, 
  Sparkles, 
  Star, 
  Layers, 
  Compass, 
  Heart, 
  Cpu, 
  Globe2,
  CheckCircle2
} from 'lucide-react';

interface TrilogyShowcaseProps {
  lang: 'fr' | 'en';
}

export const TrilogyShowcase: React.FC<TrilogyShowcaseProps> = ({ lang }) => {
  const [selectedBookId, setSelectedBookId] = useState<string>(YANN_SOREL_TRILOGY[0].id);

  const currentBook: BookInfo = 
    YANN_SOREL_TRILOGY.find((b) => b.id === selectedBookId) || YANN_SOREL_TRILOGY[0];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Trilogy Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-cyan-900/60 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 p-6 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{AUTHOR_DETAILS.seriesTitle}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-serif-cinzel tracking-wide leading-tight">
            THE YANN SOREL TRILOGY
          </h1>

          <p className="text-cyan-200/90 text-sm sm:text-base font-medium">
            {lang === 'fr' 
              ? 'Par J.F. Grosvois — Trois Époques. Deux Siècles d’Aventures Galactiques. Une Odyssée Transhumaine Inoubliable.'
              : 'By J.F. Grosvois — Three Eras. Two Centuries of Galactic Exploration. An Unforgettable Transhuman Odyssey.'}
          </p>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
            {lang === 'fr'
              ? 'De la Terre post-nucléaire de 2047 aux confins de la Fédération Galactique en 2148 où les souvenirs se vendent comme du pain, suivez l’anti-héros Yann Sorel et l’androïde Ève défiant les lois de la robotique par amour.'
              : 'From post-nuclear Earth in 2047 to the sprawling Galactic Federation in 2148 where memories are traded like bread in the streets, follow anti-hero Yann Sorel and android Eve as they shatter the laws of robotics for love.'}
          </p>

          {/* Quick links & formats summary */}
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>Available on Amazon worldwide</span>
            </span>
            <span className="text-slate-500">•</span>
            <span>Kindle ($7.99)</span>
            <span className="text-slate-500">•</span>
            <span>Paperback ($22.00)</span>
            <span className="text-slate-500">•</span>
            <span className="text-cyan-400">Deluxe Hardcover ($41.86 - $49.90)</span>
          </div>
        </div>
      </div>

      {/* Book Volume Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {YANN_SOREL_TRILOGY.map((book) => {
          const isSelected = selectedBookId === book.id;
          return (
            <button
              key={book.id}
              onClick={() => setSelectedBookId(book.id)}
              className={`text-left p-5 rounded-2xl border transition-all ${
                isSelected
                  ? 'bg-gradient-to-b from-slate-900 to-indigo-950/80 border-cyan-500 shadow-xl shadow-cyan-950 ring-1 ring-cyan-500/50'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-2">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                  isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                }`}>
                  Tome {book.volume} • {book.yearSetting}
                </span>
                <span className="text-[11px] text-slate-400 font-mono">Yann ({book.protagonistAge} yo)</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white font-display">
                {lang === 'fr' ? book.titleFr : book.titleEn}
              </h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                {book.tagline}
              </p>
            </button>
          );
        })}
      </div>

      {/* Selected Book Presentation Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8">
        
        {/* Left Book Visual & Formats (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-tr from-slate-950 via-slate-900 to-indigo-950 p-6 border border-slate-800 text-center space-y-4">
            
            <div className="w-36 h-52 sm:w-44 sm:h-64 mx-auto rounded-xl shadow-2xl bg-gradient-to-b from-slate-800 via-indigo-900 to-slate-950 border border-cyan-500/40 p-4 flex flex-col justify-between text-left relative group">
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-widest text-cyan-400 font-bold">J.F. GROSVOIS</span>
                <h4 className="text-xs sm:text-sm font-bold text-white font-serif-cinzel leading-tight">
                  {lang === 'fr' ? currentBook.titleFr : currentBook.titleEn}
                </h4>
              </div>
              <div className="space-y-1 text-[10px] text-cyan-200/80 font-mono">
                <div>ERA: {currentBook.yearSetting}</div>
                <div>YANN SOREL • {currentBook.protagonistAge} YO</div>
              </div>
            </div>

            <div>
              <h4 className="text-base font-bold text-white font-display">
                {lang === 'fr' ? currentBook.titleFr : currentBook.titleEn}
              </h4>
              <p className="text-xs text-cyan-400 mt-0.5 font-medium">{currentBook.tagline}</p>
            </div>
          </div>

          {/* Formats on Amazon with live direct links and ASINs */}
          <div className="space-y-2">
            <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {lang === 'fr' ? 'Éditions Officielles sur Amazon :' : 'Official Amazon Editions:'}
            </h5>
            <div className="space-y-2">
              {currentBook.formats.map((fmt, idx) => (
                <a
                  key={idx}
                  href={fmt.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500 flex items-center justify-between text-xs group transition"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white group-hover:text-cyan-300">{fmt.type}</span>
                    <span className="text-[10px] font-mono text-slate-500">ASIN: {fmt.asin}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-cyan-400 text-sm font-display">{fmt.price}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Synopsis & Universe Lore (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
              {lang === 'fr' ? 'Résumé de l’Époque' : 'Era Synopsis'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
              {lang === 'fr' ? currentBook.synopsisFr : currentBook.synopsisEn}
            </p>
          </div>

          {/* Themes Pills */}
          <div>
            <h5 className="text-xs font-semibold text-slate-400 mb-2">
              {lang === 'fr' ? 'Thématiques Majeures :' : 'Key Sci-Fi Themes:'}
            </h5>
            <div className="flex flex-wrap gap-2">
              {currentBook.keyThemes.map((theme, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs rounded-lg bg-indigo-950/60 text-indigo-300 border border-indigo-800/60"
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>

          {/* Characters */}
          <div>
            <h5 className="text-xs font-semibold text-slate-400 mb-2">
              {lang === 'fr' ? 'Personnages & Entités Clés :' : 'Key Protagonists & Entities:'}
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {currentBook.notableCharacters.map((char, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>{char}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Critical Acclaim Box */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 space-y-2">
            <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>{lang === 'fr' ? 'Ce que disent les critiques (grosvois.com) :' : 'Press & Editorial Reviews (grosvois.com):'}</span>
            </div>
            <p className="italic text-slate-400 leading-relaxed">
              &quot;{AUTHOR_DETAILS.editorialQuote}&quot;
            </p>
          </div>

          {/* Call to action Amazon button */}
          <div className="pt-2">
            <a
              href={currentBook.formats[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-cyan-950 transition"
            >
              <span>{lang === 'fr' ? `Lire ${currentBook.titleFr} sur Amazon` : `Get ${currentBook.titleEn} on Amazon`}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
