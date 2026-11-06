import React from 'react';
import { Search, X } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Colorway } from '../data/themes';

interface CategoryFilterProps {
  lang: Language;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  resultsCount: number;
  colorway: Colorway;
  isDark?: boolean;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  lang,
  searchQuery,
  onSearchChange,
  resultsCount,
  colorway,
  isDark = true,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="space-y-4 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Drops Summary Indicator */}
        <div className={`flex items-center gap-2 text-xs font-mono uppercase tracking-wider ${
          isDark ? 'text-zinc-400' : 'text-zinc-600'
        }`}>
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colorway.dotColor }} />
          <span className={`font-bold ${isDark ? 'text-white' : 'text-zinc-950'}`}>ALL DROPS</span>
          <span>·</span>
          <span>{resultsCount} {resultsCount > 1 ? t.cart.items : t.cart.item}</span>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t.catalog.searchPlaceholder}
            className={`w-full pl-10 pr-9 rtl:pr-10 rtl:pl-9 py-2.5 rounded-lg text-sm transition-colors focus:outline-none ${
              isDark
                ? 'bg-white/[0.03] border border-white/[0.08] text-zinc-100 placeholder-zinc-500 focus:border-white/30'
                : 'bg-zinc-100 border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white'
            }`}
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className={`absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 cursor-pointer ${
                isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-black'
              }`}
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {searchQuery && (
        <div className={`flex items-center justify-between text-xs px-1 font-mono ${
          isDark ? 'text-zinc-400' : 'text-zinc-600'
        }`}>
          <span>Search results for "{searchQuery}"</span>
          <button
            onClick={() => onSearchChange('')}
            className="hover:underline font-bold cursor-pointer"
            style={{ color: colorway.dotColor }}
          >
            {t.catalog.resetFilters}
          </button>
        </div>
      )}
    </div>
  );
};
