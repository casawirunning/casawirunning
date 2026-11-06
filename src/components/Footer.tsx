import React from 'react';
import { Truck, ShieldCheck, MessageCircle } from 'lucide-react';
import { Language, StoreSettings } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Colorway } from '../data/themes';

interface FooterProps {
  lang: Language;
  settings: StoreSettings;
  colorway: Colorway;
  isDark?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  settings,
  colorway,
  isDark = true,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <footer id="about" className={`border-t transition-colors ${
      isDark
        ? 'bg-zinc-950 border-zinc-800 text-zinc-400'
        : 'bg-zinc-100 border-zinc-200 text-zinc-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className={`flex items-center gap-2 font-display font-extrabold text-xl ${
              isDark ? 'text-white' : 'text-zinc-950'
            }`}>
              <span
                className="w-2.5 h-2.5 rounded-full transition-colors duration-300"
                style={{ backgroundColor: colorway.dotColor }}
              />
              <span className="uppercase tracking-tight">{settings.storeName}</span>
            </div>
            <p className="text-xs leading-relaxed">
              {t.footer.aboutText}
            </p>
            <div className="pt-2">
              <span className="text-xs font-mono font-bold" style={{ color: colorway.dotColor }}>
                {t.footer.casablancaProud}
              </span>
            </div>
          </div>

          {/* Col 2: Delivery Trust */}
          <div className="space-y-2.5">
            <div className={`flex items-center gap-2 font-bold text-sm ${
              isDark ? 'text-white' : 'text-zinc-950'
            }`}>
              <Truck className="w-4 h-4 text-blue-500" />
              <h4>{t.footer.deliveryInfo}</h4>
            </div>
            <p className="text-xs leading-relaxed">
              {t.footer.deliveryText}
            </p>
            <span className={`text-[11px] block font-mono ${
              isDark ? 'text-zinc-500' : 'text-zinc-500'
            }`}>
              Casablanca (20 MAD) · Rabat, Marrakech, Tanger, Fès, Agadir & tout le Maroc (25-45 MAD).
            </span>
          </div>

          {/* Col 3: Safe Payment */}
          <div className="space-y-2.5">
            <div className={`flex items-center gap-2 font-bold text-sm ${
              isDark ? 'text-white' : 'text-zinc-950'
            }`}>
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <h4>{t.footer.paymentInfo}</h4>
            </div>
            <p className="text-xs leading-relaxed">
              {t.footer.paymentText}
            </p>
            <span className={`text-[11px] block ${
              isDark ? 'text-zinc-500' : 'text-zinc-500'
            }`}>
              Paiement à la livraison après vérification du colis.
            </span>
          </div>

          {/* Col 4: Quick Contact & Socials */}
          <div className="space-y-2.5">
            <div className={`flex items-center gap-2 font-bold text-sm ${
              isDark ? 'text-white' : 'text-zinc-950'
            }`}>
              <MessageCircle className="w-4 h-4 text-emerald-500" />
              <h4>{t.footer.contactInfo}</h4>
            </div>
            <div className="space-y-2 text-xs">
              <a
                href={`https://wa.me/${settings.whatsappNumber.replace(/[\s\-\(\)\+]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-500 flex items-center gap-1.5 transition-colors font-mono font-semibold"
              >
                <span>WhatsApp: {settings.whatsappNumber}</span>
              </a>
              <a
                href={`https://www.tiktok.com/@${settings.tiktokHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 flex items-center gap-1.5 transition-colors font-semibold"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.86-4.48V8.71a8.2 8.2 0 0 0 4.91 1.63V6.89a4.85 4.85 0 0 1-1-.2z" />
                </svg>
                <span>TikTok @{settings.tiktokHandle}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
          isDark ? 'border-zinc-900 text-zinc-500' : 'border-zinc-200 text-zinc-500'
        }`}>
          <div>
            © {new Date().getFullYear()} {settings.storeName}. {t.footer.allRightsReserved}
          </div>
          <div className="flex items-center gap-3">
            <span>Casablanca Streetwear & Athletic Drops</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
