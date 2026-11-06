import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Colorway } from '../data/themes';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  lang: Language;
  colorway: Colorway;
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  lang,
  colorway,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onProceedToCheckout,
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[lang];

  const subtotalMAD = items.reduce(
    (sum, item) => sum + item.product.priceMAD * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 rtl:right-auto rtl:left-0 max-w-full flex pl-10 rtl:pl-0 rtl:pr-10">
        <div className="w-screen max-w-md bg-[#0c0d12] border-l rtl:border-l-0 rtl:border-r border-white/[0.08] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5" style={{ color: colorway.dotColor }} />
              <h2 className="text-base font-bold text-white font-display uppercase tracking-wider">
                {t.cart.title}
              </h2>
              <span className="text-xs text-zinc-500 font-mono">
                ({items.reduce((s, i) => s + i.quantity, 0)})
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-zinc-500">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-white">{t.cart.emptyTitle}</h3>
              <p className="text-xs text-zinc-400 max-w-xs">{t.cart.emptySubtitle}</p>
              <button
                onClick={onClose}
                className="mt-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer active:scale-95"
                style={{
                  backgroundColor: colorway.accent,
                  color: colorway.accentText,
                  boxShadow: `0 4px 14px ${colorway.glow}`,
                }}
              >
                {t.cart.startShopping}
              </button>
            </div>
          ) : (
            <>
              {/* Scrollable Items */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-white/[0.06]">
                {items.map((item) => {
                  const colorObj = item.product.colors.find(
                    (c) => c.hex === item.selectedColor
                  );
                  return (
                    <div key={item.id} className="pt-4 first:pt-0 flex gap-3.5">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        referrerPolicy="no-referrer"
                        className="w-20 h-20 object-cover rounded-lg bg-[#070709] border border-white/[0.08] shrink-0"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-sm font-bold text-white leading-snug line-clamp-1 uppercase font-display">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => onRemoveItem(item.id)}
                              className="text-zinc-500 hover:text-rose-400 transition-colors p-1 cursor-pointer"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-zinc-400 mt-1">
                            <span>
                              {t.cart.size}: <strong className="text-zinc-200">{item.selectedSize}</strong>
                            </span>
                            <span aria-hidden="true">·</span>
                            <span className="flex items-center gap-1">
                              <span
                                className="w-2.5 h-2.5 rounded-full border border-zinc-600 inline-block"
                                style={{ backgroundColor: item.selectedColor }}
                              />
                              <span className="text-zinc-300">
                                {colorObj?.name[lang] || ''}
                              </span>
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          {/* Quantity Stepper */}
                          <div className="flex items-center bg-white/[0.04] border border-white/[0.08] rounded-md">
                            <button
                              onClick={() =>
                                onUpdateQuantity(item.id, item.quantity - 1)
                              }
                              className="w-6 h-6 flex items-center justify-center text-xs text-zinc-300 hover:text-white cursor-pointer"
                            >
                              -
                            </button>
                            <span className="w-6 text-center text-xs font-mono font-bold text-white">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                onUpdateQuantity(item.id, item.quantity + 1)
                              }
                              className="w-6 h-6 flex items-center justify-center text-xs text-zinc-300 hover:text-white cursor-pointer"
                            >
                              +
                            </button>
                          </div>

                          {/* Line price */}
                          <span className="text-sm font-bold text-white font-mono tabular-nums">
                            {(item.product.priceMAD * item.quantity).toLocaleString()}{' '}
                            <span className="text-xs text-zinc-400 font-sans">{t.catalog.priceMAD}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer Summary & Checkout */}
              <div className="p-5 border-t border-white/[0.08] bg-[#070709] space-y-3">
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-zinc-400">
                    <span>{t.cart.subtotal}</span>
                    <span className="font-mono text-zinc-200 tabular-nums font-bold">
                      {subtotalMAD.toLocaleString()} {t.catalog.priceMAD}
                    </span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>{t.cart.shipping}</span>
                    <span className="text-emerald-400 font-medium">
                      {subtotalMAD >= 500 ? t.cart.freeCasablanca : 'Livraison Partout au Maroc'}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-white/[0.08] flex justify-between text-base font-extrabold text-white">
                    <span>{t.cart.total}</span>
                    <span className="font-mono text-lg tabular-nums font-black text-white">
                      {subtotalMAD.toLocaleString()} {t.catalog.priceMAD}
                    </span>
                  </div>
                </div>

                <button
                  onClick={onProceedToCheckout}
                  className="w-full py-3.5 px-4 font-bold text-sm uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95"
                  style={{
                    backgroundColor: colorway.accent,
                    color: colorway.accentText,
                    boxShadow: `0 4px 20px ${colorway.glow}`,
                  }}
                >
                  <span>{t.cart.proceedToCheckout}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>

                <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-1">
                  <span>Paiement Cash à la livraison (COD)</span>
                  <button
                    onClick={onClearCart}
                    className="hover:text-zinc-300 underline cursor-pointer"
                  >
                    {t.cart.clearCart}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
