import React, { useState } from 'react';
import { X, ShieldCheck, MapPin, Phone, User, MessageCircle, AlertCircle, Truck } from 'lucide-react';
import { CartItem, CustomerInfo, Language, StoreSettings } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { MOROCCAN_CITIES } from '../data/moroccanCities';
import { generateWhatsAppMessage, createWhatsAppUrl } from '../utils/whatsapp';
import { Colorway } from '../data/themes';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  lang: Language;
  settings: StoreSettings;
  colorway: Colorway;
  onSuccess: (receiptText: string, whatsappUrl: string) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  lang,
  settings,
  colorway,
  onSuccess,
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[lang];

  const [customer, setCustomer] = useState<CustomerInfo>({
    fullName: '',
    phone: '',
    city: 'Casablanca',
    address: '',
    tiktokOrIgHandle: '',
    deliveryNotes: '',
  });

  const [errorMsg, setErrorMsg] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Find shipping fee based on selected city (default to 20 MAD for Casablanca)
  const currentCityObj = MOROCCAN_CITIES.find(
    (c) => c[lang] === customer.city || c.fr === customer.city || c.en === customer.city || c.ar === customer.city
  ) || MOROCCAN_CITIES[0];
  const shippingFeeMAD = currentCityObj.shippingFeeMAD;

  const subtotalMAD = items.reduce(
    (sum, item) => sum + item.product.priceMAD * item.quantity,
    0
  );
  const grandTotalMAD = subtotalMAD + shippingFeeMAD;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customer.fullName.trim() || !customer.phone.trim() || !customer.address.trim()) {
      setErrorMsg(t.checkout.validationError);
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    // Generate formatted WhatsApp message with subtotal, shipping fee, and grand total
    const receipt = generateWhatsAppMessage(
      items,
      customer,
      subtotalMAD,
      shippingFeeMAD,
      lang,
      settings.storeName
    );

    const waUrl = createWhatsAppUrl(settings.whatsappNumber, receipt);

    // Attempt to open WhatsApp directly
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // Fallback handled in onSuccess modal
    }

    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess(receipt, waUrl);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div
        className="relative w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl my-auto animate-in fade-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/[0.08] flex items-center justify-between bg-[#070709]">
          <div>
            <span
              className="text-[11px] font-bold uppercase tracking-widest font-mono"
              style={{ color: colorway.dotColor }}
            >
              🇲🇦 LIVRAISON PARTOUT AU MAROC
            </span>
            <h2 className="text-xl font-black text-white font-display mt-0.5 uppercase tracking-wide">
              {t.checkout.modalTitle}
            </h2>
            <p className="text-xs text-zinc-400 mt-1">
              {t.checkout.modalSubtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {errorMsg && (
            <div className="p-3 bg-rose-950/60 border border-rose-800/80 rounded-md text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Full Name */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" style={{ color: colorway.dotColor }} />
              <span>{t.checkout.fullName} *</span>
            </label>
            <input
              type="text"
              required
              value={customer.fullName}
              onChange={(e) =>
                setCustomer({ ...customer, fullName: e.target.value })
              }
              placeholder={t.checkout.fullNamePlaceholder}
              className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" style={{ color: colorway.dotColor }} />
              <span>{t.checkout.phone} *</span>
            </label>
            <input
              type="tel"
              required
              value={customer.phone}
              onChange={(e) =>
                setCustomer({ ...customer, phone: e.target.value })
              }
              placeholder={t.checkout.phonePlaceholder}
              className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors font-mono"
            />
            <p className="text-[11px] text-zinc-500">{t.checkout.phoneHelper}</p>
          </div>

          {/* City Selection with dynamic shipping price */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" style={{ color: colorway.dotColor }} />
                <span>{t.checkout.city} *</span>
              </label>
              <span className="text-[11px] font-mono text-zinc-400">
                Frais: <strong className="text-white">{shippingFeeMAD} MAD</strong>
              </span>
            </div>
            <select
              value={customer.city}
              onChange={(e) =>
                setCustomer({ ...customer, city: e.target.value })
              }
              className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
            >
              {MOROCCAN_CITIES.map((c) => (
                <option key={c.id} value={c[lang]}>
                  {c[lang]} ({c.delayHours}) — {c.shippingFeeMAD} MAD
                </option>
              ))}
            </select>
          </div>

          {/* Street Address & District */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-zinc-300">
              {t.checkout.address} *
            </label>
            <input
              type="text"
              required
              value={customer.address}
              onChange={(e) =>
                setCustomer({ ...customer, address: e.target.value })
              }
              placeholder={t.checkout.addressPlaceholder}
              className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          {/* TikTok / Instagram Handle */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 fill-current text-zinc-400" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.86-4.48V8.71a8.2 8.2 0 0 0 4.91 1.63V6.89a4.85 4.85 0 0 1-1-.2z" />
              </svg>
              <span>{t.checkout.tiktokHandle}</span>
            </label>
            <input
              type="text"
              value={customer.tiktokOrIgHandle}
              onChange={(e) =>
                setCustomer({ ...customer, tiktokOrIgHandle: e.target.value })
              }
              placeholder={t.checkout.tiktokPlaceholder}
              className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <p className="text-[11px] text-zinc-500">{t.checkout.tiktokHelper}</p>
          </div>

          {/* Delivery Notes */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-zinc-300">
              {t.checkout.notes}
            </label>
            <input
              type="text"
              value={customer.deliveryNotes}
              onChange={(e) =>
                setCustomer({ ...customer, deliveryNotes: e.target.value })
              }
              placeholder={t.checkout.notesPlaceholder}
              className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Order Summary Strip with Transparent Breakdown */}
          <div className="p-3.5 bg-black/60 rounded-xl border border-white/[0.08] space-y-2 text-xs">
            <div className="flex justify-between text-zinc-400">
              <span>Articles ({items.reduce((s, i) => s + i.quantity, 0)})</span>
              <span className="font-mono text-zinc-200 tabular-nums">{subtotalMAD.toLocaleString()} {t.catalog.priceMAD}</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-zinc-400" />
                <span>{t.checkout.shippingFee} ({customer.city})</span>
              </span>
              <span className="font-mono text-zinc-200 tabular-nums">+{shippingFeeMAD} {t.catalog.priceMAD}</span>
            </div>
            <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between">
              <div>
                <span className="text-[11px] text-zinc-400 block uppercase font-mono tracking-wider">Total à payer</span>
                <span className="text-base font-extrabold text-white font-mono tabular-nums">
                  {grandTotalMAD.toLocaleString()} <span className="text-xs text-zinc-400 font-sans">{t.catalog.priceMAD}</span>
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px] bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded-md">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>COD</span>
              </div>
            </div>
          </div>

          {/* Submit to WhatsApp Button */}
          <div className="pt-2 space-y-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.98] text-black font-extrabold text-sm uppercase tracking-wider rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-[#25D366]/20 disabled:opacity-60 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>
                {isSubmitting
                  ? t.checkout.preparingWhatsApp
                  : t.checkout.sendViaWhatsApp}
              </span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2 text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              {t.checkout.backToCart}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
