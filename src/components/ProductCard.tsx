import React, { useState } from 'react';
import { ShoppingBag, Check } from 'lucide-react';
import { Language, Product } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Colorway } from '../data/themes';

interface ProductCardProps {
  product: Product;
  lang: Language;
  colorway: Colorway;
  onAddToCart: (product: Product, size: string, color: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  lang,
  colorway,
  onAddToCart,
}) => {
  const t = TRANSLATIONS[lang];
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [isAddedRecently, setIsAddedRecently] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);

  const handleQuickAdd = () => {
    const defaultColor = product.colors[0]?.hex || '#000000';
    onAddToCart(product, selectedSize, defaultColor);
    setIsAddedRecently(true);
    setTimeout(() => setIsAddedRecently(false), 1500);
  };

  return (
    <article className="group relative flex flex-col bg-[#0c0d11] hover:bg-[#111319] border border-white/[0.07] hover:border-white/[0.18] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/70">
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
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3">
        <div>
          {/* Brand & Stock Status */}
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
          <h3 className="text-sm sm:text-base font-bold text-white leading-snug line-clamp-1 font-display tracking-tight uppercase">
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

        {/* Size Selection & Quick Add (All on the main card) */}
        <div className="pt-3 border-t border-white/[0.07] space-y-2.5">
          {/* Size Selector */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`min-w-8 h-8 px-2 text-xs font-mono font-bold rounded-md flex items-center justify-center transition-all cursor-pointer ${
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
                    backgroundColor: colorway.accent,
                    color: colorway.accentText,
                    boxShadow: `0 2px 10px ${colorway.glow}`,
                  }
            }
          >
            {isAddedRecently ? (
              <>
                <Check className="w-4 h-4 stroke-[3]" />
                <span>{t.catalog.addedToCart}</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>{t.catalog.addToCart}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
};
