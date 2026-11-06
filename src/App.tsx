import React, { useState, useEffect, useMemo } from 'react';
import { ShoppingBag } from 'lucide-react';
import { Language, Product, CartItem, StoreSettings } from './types';
import { TRANSLATIONS } from './data/translations';
import { INITIAL_PRODUCTS } from './data/products';
import { COLORWAYS } from './data/themes';
import { Navbar } from './components/Navbar';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductCard } from './components/ProductCard';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { WhatsAppSuccessModal } from './components/WhatsAppSuccessModal';
import { Footer } from './components/Footer';

const SETTINGS_STORAGE_KEY = 'casawi_running_settings';
const CART_STORAGE_KEY = 'casawi_running_cart';
const LANG_STORAGE_KEY = 'casawi_running_lang';
const THEME_STORAGE_KEY = 'casawi_running_theme';

export default function App() {
  // Store Settings (Default to user requirements: 0681031707 & casawirunning1)
  const [settings] = useState<StoreSettings>(() => {
    try {
      const saved = localStorage.getItem(SETTINGS_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure new phone number is prioritized
        if (parsed.whatsappNumber && !parsed.whatsappNumber.includes('681031707')) {
          parsed.whatsappNumber = '0681031707';
        }
        return parsed;
      }
    } catch {
      // Ignore
    }
    return {
      whatsappNumber: '0681031707',
      tiktokHandle: 'casawirunning1',
      storeName: 'Casawi Running',
    };
  });

  // Dark / Light theme mode
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved !== null) return saved === 'dark';
    } catch {
      // Ignore
    }
    return true; // Default dark mode
  });

  // Locked permanently to Electric Blue as requested ("let only blue")
  const colorway = COLORWAYS['hyper-blue'];

  // Language state (default to 'fr', popular in Moroccan apparel & WhatsApp commerce)
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY) as Language;
      if (saved && (saved === 'fr' || saved === 'ar' || saved === 'en')) return saved;
    } catch {
      // Ignore
    }
    return 'fr';
  });

  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // Ignore
    }
    return [];
  });

  // Catalog search
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);

  // Success Receipt Modal
  const [successReceipt, setSuccessReceipt] = useState<{
    isOpen: boolean;
    receiptText: string;
    whatsappUrl: string;
  }>({
    isOpen: false,
    receiptText: '',
    whatsappUrl: '',
  });

  // Sync Theme to html tag & localStorage
  useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light');
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch {
      // Ignore
    }
  }, [isDark]);

  // Sync Language and Direction on <html> tag
  useEffect(() => {
    const isRtl = lang === 'ar';
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // Ignore
    }
  }, [lang]);

  // Sync Cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // Ignore
    }
  }, [cartItems]);

  // Add Item to Cart directly from card
  const handleAddToCart = (
    product: Product,
    selectedSize: string,
    selectedColor: string,
    quantity: number = 1
  ) => {
    setCartItems((prev) => {
      const instanceId = `${product.id}-${selectedSize}-${selectedColor}`;
      const existingIdx = prev.findIndex((item) => item.id === instanceId);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx] = {
          ...updated[existingIdx],
          quantity: updated[existingIdx].quantity + quantity,
        };
        return updated;
      }
      return [
        ...prev,
        {
          id: instanceId,
          product,
          selectedSize,
          selectedColor,
          quantity,
        },
      ];
    });
  };

  // Update Item Quantity
  const handleUpdateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity: newQty } : item))
    );
  };

  // Remove Item
  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  // Clear Cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Handle Checkout submission
  const handleCheckoutSuccess = (receiptText: string, whatsappUrl: string) => {
    setIsCheckoutOpen(false);
    setIsCartOpen(false);
    setCartItems([]); // Order submitted, clear cart
    setSuccessReceipt({
      isOpen: true,
      receiptText,
      whatsappUrl,
    });
  };

  // Filtered Products (All drops + search)
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return INITIAL_PRODUCTS;
    const query = searchQuery.toLowerCase().trim();
    return INITIAL_PRODUCTS.filter((product) => {
      const matchesName = product.name.toLowerCase().includes(query);
      const matchesBrand = product.brand.toLowerCase().includes(query);
      const matchesDesc = product.description[lang].toLowerCase().includes(query);
      return matchesName || matchesBrand || matchesDesc;
    });
  }, [searchQuery, lang]);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalCartValueMAD = cartItems.reduce((acc, item) => acc + item.product.priceMAD * item.quantity, 0);
  const t = TRANSLATIONS[lang];

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-200 selection:bg-blue-600 selection:text-white ${
      isDark ? 'bg-[#070709] text-zinc-100' : 'bg-zinc-50 text-zinc-900'
    }`}>
      {/* Top Banner */}
      <div className={`text-xs font-semibold py-2 px-4 text-center tracking-wider flex items-center justify-center gap-3 transition-colors ${
        isDark
          ? 'bg-[#0c0d12] border-b border-white/[0.08] text-zinc-300'
          : 'bg-zinc-100 border-b border-zinc-200 text-zinc-700'
      }`}>
        <span className="flex items-center gap-1.5">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: colorway.dotColor }}
          />
          <span className={`font-mono uppercase font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            {settings.storeName}
          </span>
        </span>
        <span className="hidden sm:inline opacity-40" aria-hidden="true">·</span>
        <span className="hidden sm:inline font-mono">LIVRAISON CASABLANCA 20 MAD · MAROC DÈS 25 MAD</span>
        <span className="hidden sm:inline opacity-40" aria-hidden="true">·</span>
        <a
          href={`https://www.tiktok.com/@${settings.tiktokHandle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline inline-flex items-center gap-1 font-bold"
        >
          TIKTOK @{settings.tiktokHandle}
        </a>
        <span className="hidden sm:inline opacity-40" aria-hidden="true">·</span>
        <span className="text-emerald-500 font-mono text-[11px] font-bold">PAIEMENT À LA LIVRAISON (COD)</span>
      </div>

      {/* Top Bar Navigation */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        settings={settings}
        colorway={colorway}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
      />

      {/* Main Content: Straight into ALL DROPS */}
      <main id="drops" className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Section Heading: ALL DROPS */}
        <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b ${
          isDark ? 'border-white/[0.08]' : 'border-zinc-200'
        }`}>
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB]">
                CASABLANCA STREETWEAR
              </span>
            </div>
            <h1 className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight uppercase ${
              isDark ? 'text-white' : 'text-zinc-950'
            }`}>
              {lang === 'ar' ? 'جميع القطع والإصدارات' : lang === 'fr' ? 'TOUS LES DROPS' : 'ALL DROPS'}
            </h1>
            <p className={`text-xs sm:text-sm mt-1 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              {t.catalog.subtitle}
            </p>
          </div>
        </div>

        {/* Filters & Search */}
        <CategoryFilter
          lang={lang}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          resultsCount={filteredProducts.length}
          colorway={colorway}
          isDark={isDark}
        />

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                lang={lang}
                colorway={colorway}
                isDark={isDark}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className={`p-12 text-center rounded-2xl border space-y-3 ${
            isDark ? 'bg-white/[0.02] border-white/[0.08]' : 'bg-white border-zinc-200 shadow-sm'
          }`}>
            <p className={`text-base font-semibold ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
              {t.catalog.noResults}
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-5 py-2.5 text-xs font-bold uppercase rounded-lg transition-all cursor-pointer"
              style={{
                backgroundColor: colorway.accent,
                color: colorway.accentText,
              }}
            >
              {t.catalog.resetFilters}
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        settings={settings}
        colorway={colorway}
        isDark={isDark}
      />

      {/* Floating Basket in Right-Down Corner */}
      <aside aria-label="Floating Cart">
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-40 group flex items-center gap-3 px-4 py-3.5 rounded-full font-bold shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-white/20"
          style={{
            backgroundColor: colorway.accent,
            color: colorway.accentText,
            boxShadow: `0 8px 30px ${colorway.glow}, 0 4px 12px rgba(0,0,0,0.5)`,
          }}
          title={t.cart.title}
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 stroke-[2.2]" />
            {totalCartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-blue-700 text-[10px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center font-mono shadow-md">
                {totalCartCount}
              </span>
            )}
          </div>
          <span className="text-xs uppercase tracking-wider font-extrabold font-display">
            {lang === 'ar' ? 'السلة' : lang === 'fr' ? 'Panier' : 'Bag'}
          </span>
          {totalCartCount > 0 && (
            <span className="text-xs font-mono font-bold border-l rtl:border-l-0 rtl:border-r border-white/30 pl-2 rtl:pl-0 rtl:pr-2">
              {totalCartValueMAD.toLocaleString()} {t.catalog.priceMAD}
            </span>
          )}
        </button>
      </aside>

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        lang={lang}
        colorway={colorway}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Checkout Modal (Moroccan shipping details & WhatsApp submission) */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        lang={lang}
        settings={settings}
        colorway={colorway}
        onSuccess={handleCheckoutSuccess}
      />

      {/* WhatsApp Success & Redirection Modal */}
      <WhatsAppSuccessModal
        isOpen={successReceipt.isOpen}
        onClose={() =>
          setSuccessReceipt({ isOpen: false, receiptText: '', whatsappUrl: '' })
        }
        receiptText={successReceipt.receiptText}
        whatsappUrl={successReceipt.whatsappUrl}
        lang={lang}
        settings={settings}
        colorway={colorway}
      />
    </div>
  );
}
