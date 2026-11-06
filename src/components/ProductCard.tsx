import React, { useState } from 'react';
import { ShoppingBag, Eye, Check } from 'lucide-react';
import { Language, Product } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Colorway } from '../data/themes';

interface ProductCardProps {
  product: Product;
  lang: Language;
  colorway: Colorway;
  onSelect: (product: Product) => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  lang,
  colorway,
  onSelect,
  onAddToCart,
}) => {
  const t = TRANSLATIONS[lang];
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [isAddedRecently, setIsAddedRecently] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    const defaultColor = product.colors[0]?.hex || '#000000';
    onAddToCart(product, selectedSize, defaultColor);
    setIsAddedRecently(true);
    setTimeout(() => setIsAddedRecently(false), 1500);
  };

  return (
    <article
      onClick={() => onSelect(product)}
      className="group relative flex flex-col bg-[#0c0d11] hover:bg-[#111319] border border-white/[0.07] hover:border-white/[0.18] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/70"
    >
      {/* Product Image Slot */}
      <div className="relative aspect-[4/3] w-full bg-[#08090c] overflow-hidden flex items-center justify-center p-2.5">
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImageError(true)}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out rounded-lg"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900 text-zinc-500 p-4 text-center">
            <span className="font-display font-bold text-lg text-zinc-300">{product.name}</span>
            <span className="text-xs mt-1" style={{ color: colorway.dotColor }}>Casawi Running</span>
          </div>
        )}


        {/* Quick View Hover Indicator */}
        <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-black/90 text-xs font-bold text-white rounded-lg border border-white/10 shadow-xl backdrop-blur-sm">
            <Eye className="w-3.5 h-3.5" style={{ color: colorway.dotColor }} />
            <span>{t.catalog.viewDetails}</span>
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3">
        <div>
          {/* Brand & Stock Status (Unboxed inline text metadata) */}
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-1.5">
            <span className="font-mono uppercase tracking-wider text-[11px] text-zinc-400 font-semibold">{product.brand}</span>
            <span className="text-zinc-400 text-[11px] font-mono flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: colorway.dotColor }}
              />
              {t.catalog.inStock}
            </span>
          </div>

          {/* Product Title */}
          <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-zinc-100 transition-colors leading-snug line-clamp-1 font-display tracking-tight uppercase">
            {product.name}
          </h3>

          {/* Price with MAD & Tabular Figures */}
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-lg sm:text-xl font-extrabold text-white font-mono tabular-nums">
              {product.priceMAD.toLocaleString()} <span className="text-xs text-zinc-400 font-sans font-semibold">{t.catalog.priceMAD}</span>
            </span>
            {product.originalPriceMAD && (
              <span className="text-xs text-zinc-500 line-through font-mono tabular-nums">
                {product.originalPriceMAD.toLocaleString()} {t.catalog.priceMAD}
              </span>
            )}
          </div>
        </div>

        {/* Size Selection & Quick Add */}
        <div className="pt-3 border-t border-white/[0.07] space-y-2.5">
          {/* Size Selector */}
          <div
            className="flex items-center gap-1.5 overflow-x-auto scrollbar-none"
            onClick={(e) => e.stopPropagation()}
          >
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`min-w-7 h-7 px-1.5 text-xs font-mono font-bold rounded-md flex items-center justify-center transition-all cursor-pointer ${
                  selectedSize === size
                    ? 'text-white border'
                    : 'bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-transparent'
                }`}
                style={
                  selectedSize === size
                    ? { backgroundColor: colorway.accent, color: colorway.accentText, borderColor: colorway.accent }
                    : {}
                }
                title={`Taille ${size}`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Add to Cart Button */}
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full py-2.5 px-3 rounded-lg text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95"
            style={
              isAddedRecently
                ? { backgroundColor: '#10B981', color: '#000000' }
                : {
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    color: '#FFFFFF',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                  }
            }
          >
            {isAddedRecently ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>{t.catalog.addedToCart}</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>{t.catalog.addToCart}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
};
