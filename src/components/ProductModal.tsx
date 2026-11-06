import React, { useState } from 'react';
import { X, ShoppingBag, Check, ShieldCheck } from 'lucide-react';
import { Language, Product } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Colorway } from '../data/themes';

interface ProductModalProps {
  product: Product | null;
  lang: Language;
  colorway: Colorway;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: string, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  lang,
  colorway,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const t = TRANSLATIONS[lang];
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.hex || '#000000');
  const [quantity, setQuantity] = useState<number>(1);
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 900);
  };

  const currentColorObj = product.colors.find((c) => c.hex === selectedColor) || product.colors[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#0c0d12] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row my-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label={t.productModal.close}
          className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-20 p-2 bg-black/60 hover:bg-black/90 text-zinc-400 hover:text-white rounded-full transition-colors border border-white/10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Product Image Display */}
        <div className="w-full md:w-1/2 bg-[#070709] relative min-h-[260px] md:min-h-full flex items-center justify-center overflow-hidden p-4">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center max-h-[420px] md:max-h-none rounded-xl"
          />
        </div>

        {/* Right Side: Purchase Module & Details */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            {/* Header info */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold">
                {product.brand}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white font-display mt-1 leading-tight uppercase">
                {product.name}
              </h2>
              <div className="flex items-baseline gap-3 mt-2">
                <span className="text-2xl font-extrabold text-white font-mono tabular-nums">
                  {product.priceMAD.toLocaleString()} <span className="text-sm font-sans text-zinc-400">{t.catalog.priceMAD}</span>
                </span>
                {product.originalPriceMAD && (
                  <span className="text-sm text-zinc-500 line-through font-mono tabular-nums">
                    {product.originalPriceMAD.toLocaleString()} {t.catalog.priceMAD}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-300 leading-relaxed">
              {product.description[lang]}
            </p>

            {/* Color selection */}
            {product.colors.length > 0 && (
              <div className="space-y-1.5 pt-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-zinc-300">{t.productModal.color}:</span>
                  <span className="text-zinc-400 font-mono">
                    {currentColorObj?.name[lang]}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.hex}
                      type="button"
                      onClick={() => setSelectedColor(color.hex)}
                      className={`w-7 h-7 rounded-full border-2 transition-transform cursor-pointer ${
                        selectedColor === color.hex
                          ? 'border-white scale-110'
                          : 'border-zinc-700 hover:border-zinc-500'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name[lang]}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size selection */}
            <div className="space-y-1.5 pt-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-zinc-300">{t.productModal.size}:</span>
                <span className="text-zinc-500 text-[11px]">{t.productModal.sizeGuide}</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-10 h-10 px-2 rounded-lg text-xs font-mono font-bold transition-all border cursor-pointer ${
                      selectedSize === size
                        ? 'border-transparent shadow'
                        : 'bg-white/[0.04] text-zinc-300 border-white/[0.08] hover:border-white/20 hover:text-white'
                    }`}
                    style={
                      selectedSize === size
                        ? { backgroundColor: colorway.accent, color: colorway.accentText }
                        : {}
                    }
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Technical features list */}
            {product.features && product.features[lang] && (
              <div className="pt-2">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-1.5 font-mono">
                  {t.productModal.features}
                </span>
                <ul className="text-xs text-zinc-300 space-y-1">
                  {product.features[lang].map((f, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="font-bold" style={{ color: colorway.dotColor }}>›</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Action Row */}
          <div className="pt-6 mt-6 border-t border-white/[0.08] space-y-3">
            <div className="flex items-center gap-3">
              {/* Quantity stepper */}
              <div className="flex items-center bg-white/[0.04] border border-white/[0.08] rounded-lg">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="w-8 text-center text-sm font-mono font-bold text-white">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Main Add Button */}
              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 py-3 px-4 rounded-lg font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer active:scale-95"
                style={{
                  backgroundColor: isAdded ? '#10B981' : colorway.accent,
                  color: isAdded ? '#FFFFFF' : colorway.accentText,
                  boxShadow: `0 4px 18px ${colorway.glow}`,
                }}
              >
                {isAdded ? (
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

            {/* Trust note */}
            <div className="flex items-center justify-center gap-2 text-xs text-zinc-400">
              <ShieldCheck className="w-3.5 h-3.5" style={{ color: colorway.dotColor }} />
              <span>{t.productModal.cashOnDeliveryNote}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
