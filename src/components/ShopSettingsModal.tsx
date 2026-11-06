import React, { useState } from 'react';
import { X, Settings, RotateCcw, Check, Palette } from 'lucide-react';
import { Language, StoreSettings } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Colorway, ColorwayId, COLORWAYS } from '../data/themes';

interface ShopSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: StoreSettings;
  colorway: Colorway;
  onColorwayChange: (cid: ColorwayId) => void;
  onSave: (newSettings: StoreSettings) => void;
  lang: Language;
}

export const ShopSettingsModal: React.FC<ShopSettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  colorway,
  onColorwayChange,
  onSave,
  lang,
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[lang];
  const [whatsapp, setWhatsapp] = useState(settings.whatsappNumber);
  const [tiktok, setTiktok] = useState(settings.tiktokHandle);
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...settings,
      whatsappNumber: whatsapp.trim(),
      tiktokHandle: tiktok.trim().replace('@', ''),
    });
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 800);
  };

  const handleReset = () => {
    setWhatsapp('+212 681-031707');
    setTiktok('casawirunning1');
    onColorwayChange('hyper-blue');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div
        className="w-full max-w-md bg-[#0c0d12] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl p-6 space-y-5 animate-in fade-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
          <div className="flex items-center gap-2 text-white font-display font-bold">
            <Settings className="w-4 h-4" style={{ color: colorway.dotColor }} />
            <h3>{t.settings.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white p-1 rounded hover:bg-white/[0.06] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Colorway / Style Theme Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5" style={{ color: colorway.dotColor }} />
              <span>Theme Style & Colorway</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(COLORWAYS) as ColorwayId[]).map((cid) => {
                const cw = COLORWAYS[cid];
                const isSelected = colorway.id === cid;
                return (
                  <button
                    key={cid}
                    type="button"
                    onClick={() => onColorwayChange(cid)}
                    className={`p-2.5 rounded-lg border text-xs font-bold flex items-center gap-2.5 transition-all cursor-pointer ${
                      isSelected
                        ? 'border-white/40 bg-white/[0.08] text-white shadow-md'
                        : 'border-white/[0.06] bg-white/[0.02] text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full shrink-0"
                      style={{ backgroundColor: cw.dotColor }}
                    />
                    <span>{cw.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-zinc-300">
              {t.settings.whatsappNumber}
            </label>
            <input
              type="text"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="w-full px-3 py-2 bg-black/50 border border-white/[0.08] rounded-lg text-sm text-white font-mono focus:outline-none focus:border-white/30"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-zinc-300">
              {t.settings.tiktokHandle}
            </label>
            <input
              type="text"
              value={tiktok}
              onChange={(e) => setTiktok(e.target.value)}
              className="w-full px-3 py-2 bg-black/50 border border-white/[0.08] rounded-lg text-sm text-white font-mono focus:outline-none focus:border-white/30"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{t.settings.reset}</span>
            </button>

            <button
              type="submit"
              className="px-5 py-2 font-bold text-xs uppercase rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              style={{
                backgroundColor: colorway.accent,
                color: colorway.accentText,
                boxShadow: `0 2px 10px ${colorway.glow}`,
              }}
            >
              {saved ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Enregistré !</span>
                </>
              ) : (
                <span>{t.settings.save}</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
