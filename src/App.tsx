import React, { useState, useEffect, useMemo } from 'react';
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

export default function App() {
  // Store Settings (Default to user requirements: +212 694-940173 & casawirunning1)
  const [settings] = useState<StoreSettings>(() => {
    try {
      const saved = localStorage.getItem(SETTINGS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // Ignore
    }
    return {
      whatsappNumber: '+212 694-940173',
      tiktokHandle: 'casawirunning1',
      storeName: 'Casawi Running',
    };
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
  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 flex flex-col font-sans selection:bg-white selection:text-black">
      {/* Top Banner (High-end dark metallic strip) */}
      <div className="bg-[#0c0d12] border-b border-white/[0.08] text-xs font-semibold py-2 px-4 text-center tracking-wider text-zinc-300 flex items-center justify-center gap-3">
        <span className="flex items-center gap-1.5">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: colorway.dotColor }}
          />
          <span className="font-mono text-white uppercase">{settings.storeName}</span>
        </span>
        <span className="hidden sm:inline text-zinc-600" aria-hidden="true">·</span>
        <span className="text-zinc-400 hidden sm:inline">LIVRAISON PARTOUT AU MAROC</span>
        <span className="hidden sm:inline text-zinc-600" aria-hidden="true">·</span>
        <a
          href={`https://www.tiktok.com/@${settings.tiktokHandle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline inline-flex items-center gap-1 font-bold"
        >
          TIKTOK @{settings.tiktokHandle}
        </a>
        <span className="hidden sm:inline text-zinc-600" aria-hidden="true">·</span>
        <span className="text-emerald-400 font-mono text-[11px]">PAIEMENT À LA LIVRAISON (COD)</span>
      </div>

      {/* Top Bar Navigation */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        settings={settings}
        colorway={colorway}
      />

      {/* Main Content: Straight into ALL DROPS */}
      <main id="drops" className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Section Heading: ALL DROPS */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#3B82F6]">
                CASABLANCA STREETWEAR
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight uppercase">
              {lang === 'ar' ? 'جميع القطع والإصدارات' : lang === 'fr' ? 'TOUS LES DROPS' : 'ALL DROPS'}
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
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
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white/[0.02] rounded-2xl border border-white/[0.08] space-y-3">
            <p className="text-base text-zinc-300 font-semibold">
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
      />

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
