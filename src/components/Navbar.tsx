import React from 'react';
import { ShoppingBag, Sun, Moon } from 'lucide-react';
import { Language, StoreSettings } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Colorway } from '../data/themes';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  cartCount: number;
  onOpenCart: () => void;
  settings: StoreSettings;
  colorway: Colorway;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  cartCount,
  onOpenCart,
  settings,
  colorway,
  isDark,
  onToggleTheme,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <header className={`sticky top-0 z-40 w-full backdrop-blur-md border-b transition-colors ${
      isDark
        ? 'bg-[#070709]/95 border-white/[0.08] text-white'
        : 'bg-white/95 border-zinc-200 text-zinc-900 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className={`group flex items-center gap-2.5 text-xl sm:text-2xl font-black tracking-tight whitespace-nowrap shrink-0 font-display ${
            isDark ? 'text-white' : 'text-zinc-950'
          }`}
        >
          <span
            className="w-2.5 h-2.5 rounded-full transition-colors duration-300"
            style={{ backgroundColor: colorway.dotColor, boxShadow: `0 0 12px ${colorway.dotColor}` }}
          />
          <span className="uppercase tracking-tight">{settings.storeName}</span>
          <span className={`text-[10px] tracking-widest uppercase font-mono px-1.5 py-0.5 rounded border hidden sm:inline ${
            isDark ? 'bg-white/[0.06] text-zinc-400 border-white/[0.08]' : 'bg-zinc-100 text-zinc-600 border-zinc-200'
          }`}>
            CASA
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className={`hidden md:flex items-center gap-8 text-sm font-semibold ${
          isDark ? 'text-zinc-300' : 'text-zinc-600'
        }`}>
          <a
            href="#drops"
            className={`transition-colors whitespace-nowrap shrink-0 ${
              isDark ? 'hover:text-white text-white' : 'hover:text-black text-black'
            }`}
          >
            {t.nav.drops}
          </a>
          <a
            href={`https://www.tiktok.com/@${settings.tiktokHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-black'
            }`}
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.86-4.48V8.71a8.2 8.2 0 0 0 4.91 1.63V6.89a4.85 4.85 0 0 1-1-.2z" />
            </svg>
            <span>@{settings.tiktokHandle}</span>
          </a>
          <a
            href="#about"
            className={`transition-colors whitespace-nowrap shrink-0 ${
              isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-black'
            }`}
          >
            {t.nav.about}
          </a>
        </nav>

        {/* Zone 3: Theme Toggle + Language Toggle + Shopping Bag */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
          {/* Light / Dark Mode Toggle */}
          <button
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`p-2 rounded-lg border transition-colors cursor-pointer flex items-center justify-center ${
              isDark
                ? 'bg-white/[0.04] border-white/[0.08] text-zinc-300 hover:text-white hover:bg-white/[0.08]'
                : 'bg-zinc-100 border-zinc-200 text-zinc-700 hover:text-black hover:bg-zinc-200'
            }`}
            title={isDark ? 'Mode clair (Light)' : 'Mode sombre (Dark)'}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-blue-600" />
            )}
          </button>

          {/* Minimal Language Switcher */}
          <div className={`flex items-center border rounded-lg p-0.5 text-xs font-semibold ${
            isDark ? 'bg-white/[0.04] border-white/[0.08]' : 'bg-zinc-100 border-zinc-200'
          }`}>
            <button
              onClick={() => onLanguageChange('fr')}
              className={`px-2 py-0.5 rounded transition-colors whitespace-nowrap ${
                lang === 'fr'
                  ? isDark ? 'bg-white/10 text-white font-bold' : 'bg-white text-zinc-950 font-bold shadow-xs'
                  : isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-black'
              }`}
              title="Français"
            >
              FR
            </button>
            <button
              onClick={() => onLanguageChange('ar')}
              className={`px-2 py-0.5 rounded transition-colors whitespace-nowrap font-arabic ${
                lang === 'ar'
                  ? isDark ? 'bg-white/10 text-white font-bold' : 'bg-white text-zinc-950 font-bold shadow-xs'
                  : isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-black'
              }`}
              title="العربية"
            >
              عربي
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-0.5 rounded transition-colors whitespace-nowrap ${
                lang === 'en'
                  ? isDark ? 'bg-white/10 text-white font-bold' : 'bg-white text-zinc-950 font-bold shadow-xs'
                  : isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-black'
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Wireframe Cart Icon with Colorway Badge */}
          <button
            onClick={onOpenCart}
            aria-label={t.nav.cart}
            className={`relative p-2 transition-colors group cursor-pointer ${
              isDark ? 'text-zinc-200 hover:text-white' : 'text-zinc-700 hover:text-black'
            }`}
          >
            <ShoppingBag className="w-5.5 h-5.5 stroke-[1.8] group-hover:scale-105 transition-transform" />
            <span
              className="absolute top-0.5 right-0.5 min-w-4 h-4 px-1 text-[10px] font-black rounded-full flex items-center justify-center font-mono leading-none shadow-sm transition-colors duration-300"
              style={{
                backgroundColor: colorway.accent,
                color: colorway.accentText,
                boxShadow: `0 0 10px ${colorway.glow}`,
              }}
            >
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
