import React, { useState } from 'react';
import { Check, Copy, ExternalLink, MessageCircle, ArrowRight } from 'lucide-react';
import { Language, StoreSettings } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Colorway } from '../data/themes';

interface WhatsAppSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  receiptText: string;
  whatsappUrl: string;
  lang: Language;
  settings: StoreSettings;
  colorway: Colorway;
  isLight?: boolean;
}

export const WhatsAppSuccessModal: React.FC<WhatsAppSuccessModalProps> = ({
  isOpen,
  onClose,
  receiptText,
  whatsappUrl,
  lang,
  settings,
  colorway,
  isLight = false,
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[lang];
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(receiptText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div
        className={`relative w-full max-w-lg border rounded-2xl overflow-hidden shadow-2xl my-auto animate-in fade-in duration-200 transition-colors ${
          isLight
            ? 'bg-white border-slate-200 text-slate-800'
            : 'bg-zinc-900 border-zinc-800 text-white'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8 space-y-6 text-center">
          {/* Success Check Icon */}
          <div className="mx-auto w-16 h-16 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
            <Check className="w-8 h-8 stroke-[3]" />
          </div>

          <div>
            <h2 className={`text-2xl font-black font-display ${isLight ? 'text-slate-900' : 'text-white'}`}>
              {t.success.title}
            </h2>
            <p className={`text-sm mt-1 max-w-sm mx-auto ${isLight ? 'text-slate-500' : 'text-zinc-300'}`}>
              {t.success.subtitle}
            </p>
          </div>

          {/* Primary WhatsApp Action */}
          <div className="space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-sm uppercase tracking-wider rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-[#25D366]/25"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{t.success.openWhatsAppNow}</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopy}
              className={`w-full py-2.5 px-4 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors border cursor-pointer ${
                isLight
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                  : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border-zinc-700/60'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500 font-bold">{t.success.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{t.success.copyReceipt}</span>
                </>
              )}
            </button>
          </div>

          {/* Receipt Preview Box */}
          <div className={`p-4 rounded-xl border text-left rtl:text-right max-h-48 overflow-y-auto ${
            isLight
              ? 'bg-slate-50 border-slate-200 text-slate-800'
              : 'bg-zinc-950 border-zinc-800/80 text-zinc-300'
          }`}>
            <span className={`text-[10px] font-mono uppercase tracking-widest block mb-1 ${
              isLight ? 'text-slate-400' : 'text-zinc-500'
            }`}>
              Message WhatsApp:
            </span>
            <pre className="text-xs font-mono whitespace-pre-wrap leading-relaxed select-all">
              {receiptText}
            </pre>
          </div>

          {/* TikTok community link */}
          <div className={`pt-2 border-t flex flex-col sm:flex-row items-center justify-between gap-3 ${
            isLight ? 'border-slate-200' : 'border-zinc-800'
          }`}>
            <a
              href={`https://www.tiktok.com/@${settings.tiktokHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs flex items-center gap-1.5 transition-colors ${
                isLight ? 'text-slate-500 hover:text-black' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.86-4.48V8.71a8.2 8.2 0 0 0 4.91 1.63V6.89a4.85 4.85 0 0 1-1-.2z" />
              </svg>
              <span>{t.success.followOnTikTok}</span>
            </a>

            <button
              onClick={onClose}
              className="text-xs font-bold hover:underline flex items-center gap-1 cursor-pointer"
              style={{ color: colorway.dotColor }}
            >
              <span>{t.success.done}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
