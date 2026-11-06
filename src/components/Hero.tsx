import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Language, StoreSettings } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { HERO_BANNER_IMAGE } from '../data/products';
import { Colorway } from '../data/themes';

interface HeroProps {
  lang: Language;
  settings: StoreSettings;
  colorway: Colorway;
  onExplore: () => void;
}

interface HeroSlide {
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  subtitleLine1: string;
  subtitleLine2: string;
  ctaText: string;
}

export const Hero: React.FC<HeroProps> = ({ lang, onExplore, colorway }) => {
  const t = TRANSLATIONS[lang];
  const [activeSlide, setActiveSlide] = useState(0);

  const slides: HeroSlide[] = [
    {
      kicker: lang === 'ar' ? 'إصدار الشتاء الحصري' : 'EXCLUSIVE CASABLANCA DROP',
      titleLine1: lang === 'ar' ? 'تشكيلة شتاء' : 'NEW WINTER',
      titleLine2: lang === 'ar' ? 'الدار البيضاء 2026' : 'COLLECTION 2026',
      subtitleLine1: lang === 'ar' ? 'ستريت وير تقني مخصص للشارع والجري الحضري.' : 'Engineered for the streets. Built for performance.',
      subtitleLine2: lang === 'ar' ? 'توصيل ودفع عند الاستلام في جميع المدن.' : 'Curated drops with Cash on Delivery nationwide.',
      ctaText: lang === 'ar' ? 'تسوق التشكيلة' : 'EXPLORE COLLECTION',
    },
    {
      kicker: lang === 'ar' ? 'ملابس جري تقنية' : 'NIGHT RUNNER SERIES',
      titleLine1: lang === 'ar' ? 'سترات كازاوي' : 'TECHNICAL',
      titleLine2: lang === 'ar' ? 'رانينغ 2026' : 'WINDRUNNERS',
      subtitleLine1: lang === 'ar' ? 'أقمشة ريبستوب مقاومة للماء مع سحابات حرارية.' : 'Water-repellent ripstop shells & sealed zippers.',
      subtitleLine2: lang === 'ar' ? 'طلب فوري ومباشر بضغطة زر عبر واتساب.' : 'Order in 1 click directly through WhatsApp.',
      ctaText: lang === 'ar' ? 'اكتشف السترات' : 'SHOP WINDRUNNERS',
    },
    {
      kicker: lang === 'ar' ? 'تراك بانتس كارغو' : 'TACTICAL DIVISION',
      titleLine1: lang === 'ar' ? 'تراك بانتس' : 'STREETWEAR',
      titleLine2: lang === 'ar' ? 'كارغو وهوديز' : 'CARGO & FLEECE',
      subtitleLine1: lang === 'ar' ? 'قصات عصرية مريحة متناسقة مع أرقى السنيكرز.' : 'Tapered silhouettes tailored to highlight your sneakers.',
      subtitleLine2: lang === 'ar' ? 'معاينة الطرد عند الباب قبل الدفع كاش.' : 'Inspect your parcel before paying at your doorstep.',
      ctaText: lang === 'ar' ? 'تصفح البانتس' : 'VIEW PANTS & HOODIES',
    },
  ];

  const current = slides[activeSlide];

  // Auto-advance slides smoothly every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative overflow-hidden bg-[#070709] border-b border-white/[0.08] select-none">
      {/* Background Hero Image with Deep Atmospheric Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BANNER_IMAGE}
          alt="Casawi Running Streetwear Model"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-right md:object-center filter brightness-[0.38] contrast-125"
        />
        {/* Gradients that create depth and visual focus */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-[#070709]/85 md:via-[#070709]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-[#070709]/60" />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-20 sm:py-28 lg:py-36 min-h-[560px] lg:min-h-[620px] flex flex-col justify-center">
        <div className="max-w-2xl">
          {/* Kicker with Sleek Accent Line */}
          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-xs sm:text-sm font-bold tracking-widest uppercase font-mono transition-colors duration-300"
              style={{ color: colorway.dotColor }}
            >
              {current.kicker}
            </span>
            <div
              className="w-10 sm:w-14 h-[2px] rounded-full transition-all duration-300"
              style={{ backgroundColor: colorway.dotColor, boxShadow: `0 0 8px ${colorway.dotColor}` }}
            />
          </div>

          {/* Heavy Modern Space Grotesk Streetwear Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight uppercase font-display leading-[0.98] mb-6">
            <span className="block text-white">{current.titleLine1}</span>
            <span
              className="block bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent"
            >
              {current.titleLine2}
            </span>
          </h1>

          {/* Clean 2-Line Subtitle */}
          <div className="text-zinc-400 text-sm sm:text-base font-normal leading-relaxed mb-8 max-w-lg space-y-1">
            <p>{current.subtitleLine1}</p>
            <p className="text-zinc-500">{current.subtitleLine2}</p>
          </div>

          {/* Vibrant Clean Button styled with active colorway */}
          <div>
            <button
              onClick={onExplore}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 font-bold text-sm uppercase tracking-wider rounded-lg transition-all duration-200 cursor-pointer active:scale-95"
              style={{
                backgroundColor: colorway.accent,
                color: colorway.accentText,
                boxShadow: `0 4px 24px ${colorway.glow}`,
              }}
            >
              <span>{current.ctaText}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5] rtl:rotate-180" />
            </button>
          </div>
        </div>
      </div>

      {/* Left Carousel Arrow Button */}
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2.5 text-zinc-500 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/[0.05]"
      >
        <ChevronLeft className="w-7 h-7 stroke-[1.5]" />
      </button>

      {/* Right Carousel Arrow Button */}
      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2.5 text-zinc-500 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/[0.05]"
      >
        <ChevronRight className="w-7 h-7 stroke-[1.5]" />
      </button>

      {/* Pagination Dots at Bottom Center */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className="transition-all duration-300 rounded-full cursor-pointer"
            style={{
              width: activeSlide === idx ? '24px' : '8px',
              height: '8px',
              backgroundColor: activeSlide === idx ? colorway.dotColor : 'rgba(255, 255, 255, 0.2)',
              boxShadow: activeSlide === idx ? `0 0 10px ${colorway.dotColor}` : 'none',
            }}
          />
        ))}
      </div>
    </section>
  );
};
