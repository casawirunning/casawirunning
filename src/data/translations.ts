import { Language } from '../types';

export const TRANSLATIONS: Record<Language, {
  storeName: string;
  tagline: string;
  nav: {
    drops: string;
    categories: string;
    about: string;
    tiktok: string;
    cart: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    shopNow: string;
    viewDrops: string;
    fastDelivery: string;
    codAvailable: string;
    whatsappOrder: string;
  };
  categories: {
    all: string;
    jackets: string;
    pants: string;
    hoodies: string;
    tops: string;
  };
  catalog: {
    title: string;
    subtitle: string;
    filterAll: string;
    inStock: string;
    newDrop: string;
    priceMAD: string;
    selectSize: string;
    addToCart: string;
    addedToCart: string;
    viewDetails: string;
    searchPlaceholder: string;
    noResults: string;
    resetFilters: string;
  };
  productModal: {
    detailsTitle: string;
    features: string;
    sizeGuide: string;
    color: string;
    size: string;
    quantity: string;
    close: string;
    inStockLabel: string;
    cashOnDeliveryNote: string;
  };
  cart: {
    title: string;
    emptyTitle: string;
    emptySubtitle: string;
    startShopping: string;
    item: string;
    items: string;
    size: string;
    color: string;
    subtotal: string;
    shipping: string;
    shippingCalculated: string;
    freeCasablanca: string;
    total: string;
    proceedToCheckout: string;
    clearCart: string;
  };
  checkout: {
    modalTitle: string;
    modalSubtitle: string;
    fullName: string;
    fullNamePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    phoneHelper: string;
    city: string;
    selectCity: string;
    address: string;
    addressPlaceholder: string;
    tiktokHandle: string;
    tiktokPlaceholder: string;
    tiktokHelper: string;
    notes: string;
    notesPlaceholder: string;
    orderSummary: string;
    sendViaWhatsApp: string;
    preparingWhatsApp: string;
    backToCart: string;
    codBadge: string;
    validationError: string;
  };
  success: {
    title: string;
    subtitle: string;
    whatsappOpening: string;
    whatsappHelpText: string;
    openWhatsAppNow: string;
    copyReceipt: string;
    copied: string;
    followOnTikTok: string;
    done: string;
  };
  footer: {
    aboutText: string;
    deliveryInfo: string;
    deliveryText: string;
    paymentInfo: string;
    paymentText: string;
    contactInfo: string;
    whatsappSupport: string;
    tiktokChannel: string;
    allRightsReserved: string;
    casablancaProud: string;
  };
  settings: {
    title: string;
    whatsappNumber: string;
    tiktokHandle: string;
    save: string;
    reset: string;
  };
}> = {
  fr: {
    storeName: 'CASAWI RUNNING',
    tagline: 'Streetwear & Running Drops · Casablanca',
    nav: {
      drops: 'Drops Récents',
      categories: 'Collections',
      about: 'À Propos',
      tiktok: 'TikTok @casawirunning1',
      cart: 'Panier',
    },
    hero: {
      kicker: 'NOUVEAU DROP CASABLANCA',
      title: 'STREETWEAR & RUNNING GEAR',
      subtitle: 'Pièces sélectionnées, coupe urbaine et performance technique. Commandez en 1 clic directement sur WhatsApp avec paiement à la livraison dans tout le Maroc.',
      shopNow: 'Découvrir la Collection',
      viewDrops: 'Voir les Drops',
      fastDelivery: 'Livraison 24h-48h Partout au Maroc',
      codAvailable: 'Paiement Cash à la Livraison (COD)',
      whatsappOrder: 'Commande Directe WhatsApp',
    },
    categories: {
      all: 'Tout le Catalogue',
      jackets: 'Coupe-vents & Vestes',
      pants: 'Pantalons & Track Pants',
      hoodies: 'Sweats & Hoodies',
      tops: 'Tops & T-shirts Running',
    },
    catalog: {
      title: 'CURATED DROPS',
      subtitle: 'Sélection limitée streetwear et sportswear haute qualité',
      filterAll: 'Tous les articles',
      inStock: 'En Stock',
      newDrop: 'Nouveau Drop',
      priceMAD: 'MAD',
      selectSize: 'Choisir la taille',
      addToCart: 'Ajouter au Panier',
      addedToCart: 'Ajouté !',
      viewDetails: 'Détails de la pièce',
      searchPlaceholder: 'Rechercher un modèle, veste, pantalon...',
      noResults: 'Aucun article trouvé pour cette recherche.',
      resetFilters: 'Réinitialiser les filtres',
    },
    productModal: {
      detailsTitle: 'Détails du produit',
      features: 'Caractéristiques techniques',
      sizeGuide: 'Guide des tailles (Coupe Standard / Athletic)',
      color: 'Couleur',
      size: 'Taille',
      quantity: 'Quantité',
      close: 'Fermer',
      inStockLabel: 'En stock disponible immédiatement',
      cashOnDeliveryNote: 'Paiement à la livraison après vérification du colis',
    },
    cart: {
      title: 'Votre Panier',
      emptyTitle: 'Votre panier est vide',
      emptySubtitle: 'Découvrez nos nouveautés streetwear et running pour remplir votre panier.',
      startShopping: 'Explorer les pièces',
      item: 'article',
      items: 'articles',
      size: 'Taille',
      color: 'Couleur',
      subtotal: 'Sous-total',
      shipping: 'Livraison',
      shippingCalculated: 'Calculée selon la ville (Gratuit Casablanca dès 500 MAD)',
      freeCasablanca: 'Gratuite à Casablanca',
      total: 'Total Estimé',
      proceedToCheckout: 'Passer la Commande (WhatsApp)',
      clearCart: 'Vider le panier',
    },
    checkout: {
      modalTitle: 'Finaliser votre Commande',
      modalSubtitle: 'Renseignez vos coordonnées pour la livraison à domicile avec paiement cash à la réception.',
      fullName: 'Nom & Prénom',
      fullNamePlaceholder: 'ex: Yassine Berrada',
      phone: 'Numéro de Téléphone',
      phonePlaceholder: 'ex: 06 12 34 56 78',
      phoneHelper: 'Numéro marocain valide pour le livreur (SMS/Appel)',
      city: 'Ville de Livraison',
      selectCity: 'Sélectionnez votre ville...',
      address: 'Adresse de livraison & Quartier',
      addressPlaceholder: 'ex: Bd d\'Anfa, Résidence Al Manar, Casablanca',
      tiktokHandle: 'Pseudo TikTok ou Instagram (Optionnel)',
      tiktokPlaceholder: 'ex: @yassine_run',
      tiktokHelper: 'Pour rejoindre la commu Casawi Running',
      notes: 'Instructions de livraison (Optionnel)',
      notesPlaceholder: 'ex: Disponible après 17h, appeler avant arrivée...',
      orderSummary: 'Récapitulatif de la commande',
      sendViaWhatsApp: 'Envoyer la Commande sur WhatsApp',
      preparingWhatsApp: 'Ouverture de WhatsApp...',
      backToCart: 'Retour au panier',
      codBadge: 'Paiement Cash à la Livraison (COD)',
      validationError: 'Veuillez remplir votre nom, téléphone et ville.',
    },
    success: {
      title: 'Commande Prête !',
      subtitle: 'Votre récapitulatif a été préparé pour notre équipe WhatsApp.',
      whatsappOpening: 'Si WhatsApp ne s\'ouvre pas automatiquement, cliquez sur le bouton ci-dessous :',
      whatsappHelpText: 'Le message pré-rempli contient vos articles, tailles, prix et coordonnées de livraison.',
      openWhatsAppNow: 'Ouvrir WhatsApp (+212 694-940173)',
      copyReceipt: 'Copier le récapitulatif',
      copied: 'Copié dans le presse-papier !',
      followOnTikTok: 'Rejoindre sur TikTok @casawirunning1',
      done: 'Continuer mes achats',
    },
    footer: {
      aboutText: 'Casawi Running est la référence streetwear & running urbain à Casablanca. Sélection exclusive de pièces techniques, coupe-vents, track pants et drops limités.',
      deliveryInfo: 'Livraison Express',
      deliveryText: 'Partout au Maroc en 24h à 48h via livreurs privés sécurisés.',
      paymentInfo: 'Paiement Sécurisé',
      paymentText: '100% Cash à la livraison (COD). Vérifiez votre article avant de payer.',
      contactInfo: 'Contact Rapide',
      whatsappSupport: 'WhatsApp: +212 694-940173',
      tiktokChannel: 'TikTok: @casawirunning1',
      allRightsReserved: 'Tous droits réservés.',
      casablancaProud: 'Fait avec passion à Casablanca 🇲🇦',
    },
    settings: {
      title: 'Paramètres Boutique',
      whatsappNumber: 'Numéro WhatsApp (ex: +212694940173)',
      tiktokHandle: 'Pseudo TikTok (ex: casawirunning1)',
      save: 'Enregistrer',
      reset: 'Réinitialiser',
    },
  },
  ar: {
    storeName: 'كازاوي رانينغ · CASAWI RUNNING',
    tagline: 'ستريت وير وملابس جري تقنية · الدار البيضاء',
    nav: {
      drops: 'أحدث القطع',
      categories: 'التشكيلات',
      about: 'من نحن',
      tiktok: 'تيك توك @casawirunning1',
      cart: 'السلة',
    },
    hero: {
      kicker: 'إصدار جديد الدار البيضاء',
      title: 'ستريت وير وملابس رياضية فاخرة',
      subtitle: 'قطع مختارة بعناية، ستايل كازاوي عصري وأقمشة عالية الجودة. اطلب بضغطة زر مباشرة عبر واتساب مع الدفع عند الاستلام في جميع مدن المغرب.',
      shopNow: 'تصفح التشكيلة',
      viewDrops: 'أحدث الإصدارات',
      fastDelivery: 'توصيل سريع 24-48 ساعة لجميع مدن المغرب',
      codAvailable: 'الدفع نقداً عند الاستلام (COD)',
      whatsappOrder: 'طلب مباشر وفوري عبر واتساب',
    },
    categories: {
      all: 'جميع المنتجات',
      jackets: 'سترات وسترات واقية (Coupe-vent)',
      pants: 'سراويل وتراك بانتس (Track Pants)',
      hoodies: 'هوديز وسويت شيرت',
      tops: 'قمصان وتيشيرتات جري تقنية',
    },
    catalog: {
      title: 'تشكيلة مختارة',
      subtitle: 'إصدارات محدودة من أرقى قطع الستريت وير والملابس الرياضية',
      filterAll: 'الكل',
      inStock: 'متوفر حالياً',
      newDrop: 'إصدار جديد',
      priceMAD: 'درهم',
      selectSize: 'اختر المقاس',
      addToCart: 'أضف إلى السلة',
      addedToCart: 'تمت الإضافة !',
      viewDetails: 'تفاصيل القطعة',
      searchPlaceholder: 'ابحث عن سترة، سروال، هودي...',
      noResults: 'لا توجد منتجات مطابقة لبحثك.',
      resetFilters: 'إعادة ضبط الفلاتر',
    },
    productModal: {
      detailsTitle: 'تفاصيل المنتج',
      features: 'المواصفات التقنية',
      sizeGuide: 'دليل المقاسات (قصة قياسية / رياضية)',
      color: 'اللون',
      size: 'المقاس',
      quantity: 'الكمية',
      close: 'إغلاق',
      inStockLabel: 'متوفر وجاهز للتوصيل الفوري',
      cashOnDeliveryNote: 'الدفع عند الاستلام بعد معاينة الطلب',
    },
    cart: {
      title: 'سلة المشتريات',
      emptyTitle: 'سلتك فارغة حالياً',
      emptySubtitle: 'استكشف قطع الستريت وير والجري الجديدة لإضافتها إلى سلتك.',
      startShopping: 'ابدأ التسوق الآن',
      item: 'قطعة',
      items: 'قطع',
      size: 'المقاس',
      color: 'اللون',
      subtotal: 'المجموع الفرعي',
      shipping: 'التوصيل',
      shippingCalculated: 'حسب المدينة (مجاني في الدار البيضاء ابتداءً من 500 درهم)',
      freeCasablanca: 'مجاني في الدار البيضاء',
      total: 'المجموع التقديري',
      proceedToCheckout: 'إتمام الطلب عبر واتساب',
      clearCart: 'إفراغ السلة',
    },
    checkout: {
      modalTitle: 'تأكيد معلومات التوصيل',
      modalSubtitle: 'أدخل معلوماتك الشخصية ليصلك الطرد إلى باب منزلك مع الدفع نقداً عند الاستلام.',
      fullName: 'الاسم الكامل',
      fullNamePlaceholder: 'مثال: ياسين برادة',
      phone: 'رقم الهاتف',
      phonePlaceholder: 'مثال: 06 12 34 56 78',
      phoneHelper: 'رقم هاتف مغربي ليتصل بك عامل التوصيل',
      city: 'مدينة التوصيل',
      selectCity: 'اختر مدينتك...',
      address: 'العنوان الكامل والحي',
      addressPlaceholder: 'مثال: شارع أنفا، إقامة المنار، الدار البيضاء',
      tiktokHandle: 'حساب تيك توك أو إنستغرام (اختياري)',
      tiktokPlaceholder: 'مثال: @yassine_run',
      tiktokHelper: 'للانضمام إلى مجتمع كازاوي رانينغ',
      notes: 'ملاحظات إضافية للتوصيل (اختياري)',
      notesPlaceholder: 'مثال: متواجد بعد الساعة 5 مساءً...',
      orderSummary: 'ملخص الطلب',
      sendViaWhatsApp: 'إرسال الطلب عبر واتساب',
      preparingWhatsApp: 'جارٍ فتح واتساب...',
      backToCart: 'العودة للسلة',
      codBadge: 'الدفع نقداً عند الاستلام (COD)',
      validationError: 'يرجى إدخال الاسم ورقم الهاتف والمدينة.',
    },
    success: {
      title: 'طلبك جاهز للإرسال !',
      subtitle: 'تم تجهيز تفاصيل طلبك لإرسالها مباشرة لفريق واتساب.',
      whatsappOpening: 'إذا لم يفتح تطبيق واتساب تلقائياً، اضغط على الزر أدناه:',
      whatsappHelpText: 'الرسالة تحتوي على كافة تفاصيل مشترياتك والمقاسات وعنوان التوصيل.',
      openWhatsAppNow: 'فتح واتساب الآن (+212 694-940173)',
      copyReceipt: 'نسخ نص الطلب',
      copied: 'تم النسخ بنجاح !',
      followOnTikTok: 'تابعنا على تيك توك @casawirunning1',
      done: 'متابعة التسوق',
    },
    footer: {
      aboutText: 'كازاوي رانينغ هو متجر الستريت وير وملابس الجري الحضرية في الدار البيضاء. تشكيلة مميزة من السترات والملابس التقنية والإصدارات المحدودة.',
      deliveryInfo: 'توصيل سريع',
      deliveryText: 'في جميع مدن المغرب خلال 24 إلى 48 ساعة عبر موزعين محترفين.',
      paymentInfo: 'دفع آمن 100%',
      paymentText: 'الدفع نقداً عند الاستلام. افحص طلبك وتأكد منه قبل الدفع.',
      contactInfo: 'تواصل سريع',
      whatsappSupport: 'واتساب: +212 694-940173',
      tiktokChannel: 'تيك توك: @casawirunning1',
      allRightsReserved: 'جميع الحقوق محفوظة.',
      casablancaProud: 'صنع بشغف في الدار البيضاء 🇲🇦',
    },
    settings: {
      title: 'إعدادات المتجر',
      whatsappNumber: 'رقم واتساب (مثال: +212694940173)',
      tiktokHandle: 'اسم تيك توك (مثال: casawirunning1)',
      save: 'حفظ التعديلات',
      reset: 'استعادة الافتراضي',
    },
  },
  en: {
    storeName: 'CASAWI RUNNING',
    tagline: 'Urban Streetwear & Athletic Drops · Casablanca',
    nav: {
      drops: 'Latest Drops',
      categories: 'Collections',
      about: 'About',
      tiktok: 'TikTok @casawirunning1',
      cart: 'Cart',
    },
    hero: {
      kicker: 'CASABLANCA DROP SERIES',
      title: 'STREETWEAR & RUNNING GEAR',
      subtitle: 'Curated apparel, sharp urban fit, and technical performance. Order in one tap directly through WhatsApp with Cash on Delivery anywhere in Morocco.',
      shopNow: 'Shop Collection',
      viewDrops: 'View Drops',
      fastDelivery: '24h-48h Delivery All Over Morocco',
      codAvailable: 'Cash on Delivery (COD)',
      whatsappOrder: 'Instant WhatsApp Order',
    },
    categories: {
      all: 'All Drops',
      jackets: 'Windbreakers & Jackets',
      pants: 'Track Pants & Joggers',
      hoodies: 'Hoodies & Sweatshirts',
      tops: 'Technical Tops & Running Tees',
    },
    catalog: {
      title: 'CURATED DROPS',
      subtitle: 'Limited release high-grade streetwear & sportswear',
      filterAll: 'All Products',
      inStock: 'In Stock',
      newDrop: 'New Drop',
      priceMAD: 'MAD',
      selectSize: 'Select Size',
      addToCart: 'Add to Cart',
      addedToCart: 'Added!',
      viewDetails: 'Piece Details',
      searchPlaceholder: 'Search jackets, pants, hoodies...',
      noResults: 'No drops matched your search query.',
      resetFilters: 'Reset filters',
    },
    productModal: {
      detailsTitle: 'Product Details',
      features: 'Technical Specs',
      sizeGuide: 'Size Guide (Standard / Athletic Cut)',
      color: 'Color',
      size: 'Size',
      quantity: 'Quantity',
      close: 'Close',
      inStockLabel: 'In stock ready for immediate dispatch',
      cashOnDeliveryNote: 'Pay in cash after parcel inspection upon delivery',
    },
    cart: {
      title: 'Your Bag',
      emptyTitle: 'Your bag is empty',
      emptySubtitle: 'Explore our latest Casablanca streetwear and running drops to fill your bag.',
      startShopping: 'Explore drops',
      item: 'item',
      items: 'items',
      size: 'Size',
      color: 'Color',
      subtotal: 'Subtotal',
      shipping: 'Shipping',
      shippingCalculated: 'Calculated by city (Free in Casablanca over 500 MAD)',
      freeCasablanca: 'Free in Casablanca',
      total: 'Estimated Total',
      proceedToCheckout: 'Complete Order on WhatsApp',
      clearCart: 'Empty bag',
    },
    checkout: {
      modalTitle: 'Complete Your Order',
      modalSubtitle: 'Enter your shipping details for doorstep courier delivery with Cash on Delivery.',
      fullName: 'Full Name',
      fullNamePlaceholder: 'e.g., Yassine Berrada',
      phone: 'Phone Number',
      phonePlaceholder: 'e.g., 06 12 34 56 78',
      phoneHelper: 'Valid Moroccan number for courier contact (SMS/Call)',
      city: 'Delivery City',
      selectCity: 'Select your city...',
      address: 'Street Address & District',
      addressPlaceholder: 'e.g., Bd d\'Anfa, Residence Al Manar, Casablanca',
      tiktokHandle: 'TikTok or Instagram Handle (Optional)',
      tiktokPlaceholder: 'e.g., @yassine_run',
      tiktokHelper: 'To join the Casawi Running community',
      notes: 'Delivery Instructions (Optional)',
      notesPlaceholder: 'e.g., Available after 5 PM, call before arrival...',
      orderSummary: 'Order Summary',
      sendViaWhatsApp: 'Send Order via WhatsApp',
      preparingWhatsApp: 'Opening WhatsApp...',
      backToCart: 'Back to bag',
      codBadge: 'Cash on Delivery (COD)',
      validationError: 'Please provide your name, phone number, and city.',
    },
    success: {
      title: 'Order Ready to Send!',
      subtitle: 'Your receipt and items have been formatted for our WhatsApp team.',
      whatsappOpening: 'If WhatsApp didn\'t open automatically, tap below:',
      whatsappHelpText: 'The pre-formatted message contains your items, sizes, prices, and Moroccan delivery address.',
      openWhatsAppNow: 'Open WhatsApp (+212 694-940173)',
      copyReceipt: 'Copy Receipt Text',
      copied: 'Copied to clipboard!',
      followOnTikTok: 'Follow on TikTok @casawirunning1',
      done: 'Continue Shopping',
    },
    footer: {
      aboutText: 'Casawi Running is Casablanca\'s premier destination for curated streetwear and athletic running apparel. High-grade technical windbreakers, track pants, and limited releases.',
      deliveryInfo: 'Fast Shipping',
      deliveryText: 'Nationwide Morocco shipping in 24h to 48h via trusted couriers.',
      paymentInfo: '100% Safe Payment',
      paymentText: 'Cash on Delivery (COD). Check your items before payment.',
      contactInfo: 'Quick Contact',
      whatsappSupport: 'WhatsApp: +212 694-940173',
      tiktokChannel: 'TikTok: @casawirunning1',
      allRightsReserved: 'All rights reserved.',
      casablancaProud: 'Crafted with passion in Casablanca 🇲🇦',
    },
    settings: {
      title: 'Store Settings',
      whatsappNumber: 'WhatsApp Number (e.g. +212694940173)',
      tiktokHandle: 'TikTok Handle (e.g. casawirunning1)',
      save: 'Save Changes',
      reset: 'Reset to Default',
    },
  },
};
