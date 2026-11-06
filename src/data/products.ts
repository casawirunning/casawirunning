import { Product } from '../types';
import heroBannerImg from '../assets/images/casawi_hero_banner_1793997703921.jpg';
import nikeWindrunnerImg from '../assets/images/nike_tech_windrunner_1793997717896.jpg';
import cargoPantsImg from '../assets/images/streetwear_cargo_pants_1793997718781.jpg';
import urbanHoodieImg from '../assets/images/casawi_urban_hoodie_1793997719406.jpg';
import athleticTopImg from '../assets/images/athletic_running_top_1793997718784.jpg';

export const HERO_BANNER_IMAGE = heroBannerImg;

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'nike-windrunner-volt',
    name: 'Nike Tech Running Windbreaker Volt Edition',
    brand: 'Nike Running',
    category: 'jackets',
    priceMAD: 650,
    originalPriceMAD: 850,
    image: nikeWindrunnerImg,
    badge: {
      fr: 'Drop Exclusif',
      ar: 'إصدار حصري',
      en: 'Exclusive Drop',
    },
    isNewDrop: true,
    inStock: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: { fr: 'Noir & Volt Neon', ar: 'أسود ونيون فولت', en: 'Black & Volt Neon' }, hex: '#CCFF00' },
      { name: { fr: 'Full Stealth Black', ar: 'أسود كامل', en: 'Stealth Black' }, hex: '#18181b' },
    ],
    description: {
      fr: 'Veste coupe-vent technique déperlante avec inserts réfléchissants pour les runs de nuit à Casablanca. Finition zippée thermo-collée ultra-légère.',
      ar: 'سترة رياضية تقنية مقاومة للماء مع أشرطة عاكسة للجري الليلي في شوارع كازا. سحاب حراري معزول وتصميم رياضي خفيف الوزن.',
      en: 'Technical water-resistant windbreaker jacket featuring reflective nocturnal accents for night runs through Casablanca. Thermo-sealed zippers and ultra-lightweight drape.',
    },
    features: {
      fr: [
        'Tissu technique ripstop déperlant et coupe-vent',
        'Capuche ergonomique ajustable avec cordons de serrage',
        'Poches zippées étanches pour téléphone et clés',
        'Détails réfléchissants haute visibilité de nuit',
      ],
      ar: [
        'قماش تقني ريبستوب مقاوم للماء والرياح',
        'غطاء رأس مريح قابل للتعديل بحبال إحكام',
        'جيوب بسحاب معزول لحفظ الهاتف والمفاتيح',
        'تفاصيل عاكسة للضوء للرؤية الليلية بأمان',
      ],
      en: [
        'Water-resistant and windproof technical ripstop fabric',
        'Ergonomic adjustable hood with bungee pull cords',
        'Waterproof zippered pockets for phone and gear',
        'High-visibility reflective details for night training',
      ],
    },
  },
  {
    id: 'casawi-cargo-track-pants',
    name: 'Tactical Urban Cargo Track Pants',
    brand: 'Casawi Athletics',
    category: 'pants',
    priceMAD: 450,
    originalPriceMAD: 550,
    image: cargoPantsImg,
    badge: {
      fr: 'Best-Seller',
      ar: 'الأكثر طلباً',
      en: 'Best-Seller',
    },
    isNewDrop: true,
    inStock: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: { fr: 'Noir Tactique', ar: 'أسود تكتيكي', en: 'Tactical Black' }, hex: '#121214' },
      { name: { fr: 'Gris Asphalte', ar: 'رمادي إسفلتي', en: 'Asphalt Grey' }, hex: '#3f3f46' },
    ],
    description: {
      fr: 'Pantalon de survêtement cargo hybride running et streetwear. Coupe fuselée aux chevilles, multipoches zippées et taille élastique renforcée.',
      ar: 'سروال تراك بانتس كارغو هجين بين الستريت وير والجري السريع. قصة ضيقة عند الكاحل مع جيوب تكتيكية متعددة بسحاب وحزام خصر مطاطي مقوى.',
      en: 'Hybrid running and streetwear tactical cargo track pants. Tapered ankle cuffs, multi-pocket zip utility compartments, and reinforced elastic waistband.',
    },
    features: {
      fr: [
        'Matière extensible 4-way stretch ultra-confortable',
        '6 poches dont 4 poches cargo zippées sécurisées',
        'Chevilles côtelées ajustées pour valoriser les sneakers',
        'Ceinture ajustable avec cordon de serrage technique',
      ],
      ar: [
        'قماش مطاطي مرن مريح جداً في الحركة اليومية',
        '6 جيوب منها 4 جيوب كارغو بسحابات متينة',
        'حواف كاحل مضلعة ومحكمة لإبراز الحذاء الرياضي',
        'حزام خصر مرن قابل للتعديل بحبل متين',
      ],
      en: [
        'Comfortable 4-way stretch performance fabric',
        '6 pockets including 4 secure zippered cargo pockets',
        'Ribbed tapered ankle cuffs tailored for sneakers',
        'Adjustable waistband with technical drawcord',
      ],
    },
  },
  {
    id: 'heavyweight-oversized-hoodie',
    name: 'Casablanca Night Runner Heavy Hoodie',
    brand: 'Casawi Street',
    category: 'hoodies',
    priceMAD: 490,
    originalPriceMAD: 600,
    image: urbanHoodieImg,
    badge: {
      fr: 'Édition Limitée',
      ar: 'كمية محدودة',
      en: 'Limited Batch',
    },
    isNewDrop: true,
    inStock: true,
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: { fr: 'Noir Délavé Charcoal', ar: 'أسود فحمي مغسول', en: 'Washed Charcoal' }, hex: '#27272a' },
      { name: { fr: 'Noir Onyx', ar: 'أسود أونيكس', en: 'Onyx Black' }, hex: '#09090b' },
    ],
    description: {
      fr: 'Sweat à capuche oversize 450 GSM en coton lourd brossé. Typographie athlétique discrète sur la poitrine, coupe tombante boxy moderne.',
      ar: 'هودي أوفرسايز من القطن الثقيل الممتاز 450 غرام. قصة بوكسي عصرية مريحة مع كتابة رياضية أنيقة على الصدر.',
      en: '450 GSM heavyweight brushed cotton oversized hoodie. Subtle athletic chest typography with a relaxed drop-shoulder boxy silhouette.',
    },
    features: {
      fr: [
        '100% Coton lourd premium 450 GSM',
        'Coupe oversize boxy contemporaine',
        'Capuche double épaisseur sans cordons encombrants',
        'Poche kangourou renforcée aux points de tension',
      ],
      ar: [
        'قطن طبيعي 100% ثقيل ومقاوم 450 غرام',
        'قصة بوكسي أوفرسايز عصرية ومريحة',
        'غطاء رأس مزدوج الطبقة بحياكة متقنة',
        'جيب كانغرو أمامي مدعم عند الأطراف',
      ],
      en: [
        '100% Premium heavyweight 450 GSM cotton',
        'Contemporary relaxed boxy streetwear drape',
        'Double-layered structured hood',
        'Reinforced kangaroo pocket at stress points',
      ],
    },
  },
  {
    id: 'quarter-zip-dri-fit-runner',
    name: 'Pro Dri-FIT Quarter-Zip Training Top',
    brand: 'Nike Pro Training',
    category: 'tops',
    priceMAD: 380,
    originalPriceMAD: 480,
    image: athleticTopImg,
    badge: {
      fr: 'Performance',
      ar: 'أداء عالي',
      en: 'Performance',
    },
    isNewDrop: false,
    inStock: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: { fr: 'Obsidian & Stealth Grey', ar: 'أوبسيديان ورمادي', en: 'Obsidian & Grey' }, hex: '#18181b' },
      { name: { fr: 'Noir Pur', ar: 'أسود ناصع', en: 'Pure Black' }, hex: '#000000' },
    ],
    description: {
      fr: 'Haut zippé d\'entraînement haute respirabilité avec passe-pouces intégrés. Conçu pour évacuer la transpiration pendant l\'effort intense ou les sorties urbaines fraîches.',
      ar: 'قميص تدريب نصف سحاب عالي التهوية مع فتحات إبهام مدمجة. مصمم لطرد العرق وتوفير راحة تامة أثناء الجري في الأجواء المعتدلة والباردة.',
      en: 'High-breathability quarter-zip training top with integrated thumb loops. Engineered for moisture-wicking comfort during high-cadence runs and cool city sessions.',
    },
    features: {
      fr: [
        'Technologie de régulation thermique et anti-humidité',
        'Col montant zippé 1/4 avec protège-menton doux',
        'Passe-pouces aux poignets pour maintien optimal',
        'Coutures plates anti-frottements',
      ],
      ar: [
        'تقنية مضادة للرطوبة وسريعة الجفاف',
        'ياقة مرتفعة بنصف سحاب مع حماية للذقن',
        'فتحات للأبهام في الأكمام لثبات مثالي أثناء الجري',
        'خياطة مسطحة تمنع الاحتكاك مع الجلد',
      ],
      en: [
        'Moisture-wicking quick-dry thermal balance tech',
        '1/4 zip mock collar with soft chin guard',
        'Thumbhole cuffs for secure sleeve placement',
        'Flatlock ergonomic anti-chafing seams',
      ],
    },
  },
  {
    id: 'casawi-utility-vest-black',
    name: 'Casawi Urban Tactical Runner Gilet',
    brand: 'Casawi Street',
    category: 'jackets',
    priceMAD: 420,
    originalPriceMAD: 520,
    image: nikeWindrunnerImg,
    badge: {
      fr: 'Nouveauté',
      ar: 'جديد',
      en: 'New In',
    },
    isNewDrop: true,
    inStock: true,
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: { fr: 'Noir Stealth', ar: 'أسود متخفي', en: 'Stealth Black' }, hex: '#121214' },
    ],
    description: {
      fr: 'Gilet sans manches technique multipoches ultra-léger. Parfait à superposer sur un hoodie ou un t-shirt pour un look streetwear Casablanca affirmé.',
      ar: 'صديرية تكتيكية رياضية خفيفة بدون أكمام بجيوب متعددة. مثالية للارتداء فوق الهودي أو التيشيرت لإطلالة ستريت وير كازاوية بامتياز.',
      en: 'Lightweight multi-pocket tactical utility vest. Ideal for layering over hoodies or tees for a defined Casablanca street-runner aesthetic.',
    },
    features: {
      fr: [
        'Matière Cordura ultra-résistante et déperlante',
        'Boucles modulaires et fermetures éclair tactiques',
        'Poche dorsale zippée pour coupe-vent repliable',
        'Ajustement latéral par sangles de compression',
      ],
      ar: [
        'قماش كوردورا مقاوم للتمزق والماء',
        'مشابك وسحابات تكتيكية عملية',
        'جيب خلفي بسحاب لوضع السترة الخفيفة',
        'أشرطة جانبية قابلة للشد لضبط المقاس بدقة',
      ],
      en: [
        'Durable water-resistant Cordura textile',
        'Tactical modular webbing and heavy-duty zippers',
        'Packable rear pocket for lightweight windbreakers',
        'Side compression straps for custom silhouette fit',
      ],
    },
  },
  {
    id: 'tech-fleece-cuffed-sweatpants',
    name: 'Nike Tech-Knit Street Joggers',
    brand: 'Nike Sportswear',
    category: 'pants',
    priceMAD: 520,
    originalPriceMAD: 680,
    image: cargoPantsImg,
    badge: {
      fr: 'Essentiel',
      ar: 'أساسي',
      en: 'Essential',
    },
    isNewDrop: false,
    inStock: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: { fr: 'Noir Intense', ar: 'أسود داكن', en: 'Pitch Black' }, hex: '#09090b' },
      { name: { fr: 'Gris Chiné', ar: 'رمادي ميلانج', en: 'Heather Grey' }, hex: '#52525b' },
    ],
    description: {
      fr: 'Jogging technique doux en maille double face thermique. Coupe slim ergonomique avec longue poche latérale thermosoudée pour le téléphone.',
      ar: 'سروال رياضي مريح من قماش دبل فيس الحراري الفاخر. قصة سليم عصرية مع جيب جانبي طويل معزول بالحرارة مخصص للهاتف.',
      en: 'Soft double-knit thermal fleece joggers. Ergonomic slim cut featuring an elongated thermo-bonded zip side pocket for smartphones.',
    },
    features: {
      fr: [
        'Maille douce Tech Fleece à isolation thermique sans volume',
        'Poche zippée latérale thermosoudée emblématique',
        'Taille élastique avec cordon de serrage réfléchissant',
        'Chevilles ajustées garantissant une tenue nette sur les baskets',
      ],
      ar: [
        'قماش تك فليس ناعم وعازل للحرارة بدون ثقل',
        'جيب جانبي معزول ومضغوط حرارياً بحجم كبير',
        'حزام خصر مرن بحبل سحب عاكس للضوء',
        'أطراف كاحل محكمة لظهور رائع مع السنيكرز',
      ],
      en: [
        'Premium lightweight thermal Tech Fleece knit',
        'Signature bonded vertical zippered tech pocket',
        'Elastic waist with reflective woven cord',
        'Clean tapered cuffs that frame your footwear',
      ],
    },
  },
];
