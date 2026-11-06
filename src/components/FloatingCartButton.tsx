import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Colorway } from '../data/themes';

interface FloatingCartButtonProps {
  cartCount: number;
  totalMAD: number;
  onClick: () => void;
  colorway: Colorway;
  isLight?: boolean;
}

export const FloatingCartButton: React.FC<FloatingCartButtonProps> = ({
  cartCount,
  totalMAD,
  onClick,
  colorway,
  isLight = false,
}) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 print:hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
      <button
        onClick={onClick}
        type="button"
        aria-label={`Ouvrir le panier (${cartCount} articles)`}
        className={`group relative flex items-center gap-3.5 pl-4 pr-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 border ${
          isLight
            ? 'bg-slate-900 text-white border-slate-700/80 shadow-slate-900/30 hover:bg-black'
            : 'bg-[#0f1118] text-white border-white/20 shadow-black/80 hover:bg-[#151822]'
        }`}
        style={{
          boxShadow: cartCount > 0 ? `0 10px 30px ${colorway.glow}` : undefined,
        }}
      >
        {/* Shopping bag icon with bounce effect when items are added */}
        <div className="relative flex items-center justify-center">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-inner"
            style={{
              backgroundColor: colorway.accent,
              color: colorway.accentText,
            }}
          >
            <ShoppingBag className="w-5 h-5 stroke-[2.2] group-hover:scale-110 transition-transform" />
          </div>

          {/* Badge counting items */}
          <span
            className={`absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1.5 text-[11px] font-black rounded-full flex items-center justify-center font-mono leading-none border-2 transition-transform ${
              isLight ? 'border-slate-900' : 'border-[#0f1118]'
            } ${cartCount > 0 ? 'scale-100' : 'scale-90 opacity-80'}`}
            style={{
              backgroundColor: '#10B981',
              color: '#000000',
            }}
          >
            {cartCount}
          </span>
        </div>

        {/* Counter & Price Label */}
        <div className="flex flex-col text-left rtl:text-right">
          <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-bold flex items-center gap-1.5 leading-none">
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ backgroundColor: colorway.dotColor }}
            />
            <span>{cartCount} {cartCount === 1 ? 'PIÈCE' : 'PIÈCES'}</span>
          </span>
          <span className="text-sm font-extrabold text-white font-mono tabular-nums leading-tight mt-0.5">
            {totalMAD > 0 ? (
              <>
                {totalMAD.toLocaleString()} <span className="text-xs text-zinc-400 font-sans font-semibold">MAD</span>
              </>
            ) : (
              <span className="text-xs text-zinc-400 font-sans font-normal">Panier vide</span>
            )}
          </span>
        </div>
      </button>
    </div>
  );
};
