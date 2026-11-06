import React from 'react';
import { Search, X } from 'lucide-react';
import { Language, ProductCategory } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Colorway } from '../data/themes';

interface CategoryFilterProps {
  lang: Language;
  selectedCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  resultsCount: number;
  colorway: Colorway;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  lang,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  resultsCount,
  colorway,
}) => {
  const t = TRANSLATIONS[lang];

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: t.categories.all },
    { id: 'jackets', label: t.categories.jackets },
    { id: 'pants', label: t.categories.pants },
    { id: 'hoodies', label: t.categories.hoodies },
    { id: 'tops', label: t.categories.tops },
  ];

  return (
    <div id="collections" className="space-y-4 mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap shrink-0 border cursor-pointer ${
                  isActive
                    ? 'border-transparent shadow-sm'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white border-white/[0.08] hover:border-white/[0.16]'
                }`}
                style={
                  isActive
                    ? {
                        backgroundColor: colorway.accent,
                        color: colorway.accentText,
                        boxShadow: `0 2px 14px ${colorway.glow}`,
                      }
                    : {}
                }
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72 shrink-0">
          <Search className="absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t.catalog.searchPlaceholder}
            className="w-full pl-10 pr-9 rtl:pr-10 rtl:pl-9 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-lg text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white cursor-pointer"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Results Count Line */}
      <div className="flex items-center justify-between text-xs text-zinc-400 px-1 font-mono">
        <div className="flex items-center gap-2">
          <span>{resultsCount} {resultsCount > 1 ? t.cart.items : t.cart.item}</span>
          <span aria-hidden="true">·</span>
          <span>Cash on Delivery (COD) Nationwide</span>
        </div>
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="hover:underline font-bold cursor-pointer"
            style={{ color: colorway.dotColor }}
          >
            {t.catalog.resetFilters}
          </button>
        )}
      </div>
    </div>
  );
};
