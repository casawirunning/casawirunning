export interface MoroccanCity {
  id: string;
  fr: string;
  ar: string;
  en: string;
  delayHours: string;
  shippingFeeMAD: number;
}

export const MOROCCAN_CITIES: MoroccanCity[] = [
  { id: 'casablanca', fr: 'Casablanca', ar: 'الدار البيضاء', en: 'Casablanca', delayHours: '24h - Express', shippingFeeMAD: 20 },
  { id: 'mohammedia', fr: 'Mohammédia', ar: 'المحمدية', en: 'Mohammedia', delayHours: '24h', shippingFeeMAD: 25 },
  { id: 'rabat', fr: 'Rabat / Salé', ar: 'الرباط / سلا', en: 'Rabat / Salé', delayHours: '24h - 48h', shippingFeeMAD: 35 },
  { id: 'kenitra', fr: 'Kénitra', ar: 'القنيطرة', en: 'Kenitra', delayHours: '24h - 48h', shippingFeeMAD: 35 },
  { id: 'marrakech', fr: 'Marrakech', ar: 'مراكش', en: 'Marrakech', delayHours: '24h - 48h', shippingFeeMAD: 35 },
  { id: 'tanger', fr: 'Tanger', ar: 'طنجة', en: 'Tangier', delayHours: '24h - 48h', shippingFeeMAD: 35 },
  { id: 'fes', fr: 'Fès', ar: 'فاس', en: 'Fez', delayHours: '24h - 48h', shippingFeeMAD: 35 },
  { id: 'meknes', fr: 'Meknès', ar: 'مكناس', en: 'Meknes', delayHours: '24h - 48h', shippingFeeMAD: 35 },
  { id: 'el_jadida', fr: 'El Jadida', ar: 'الجديدة', en: 'El Jadida', delayHours: '24h - 48h', shippingFeeMAD: 35 },
  { id: 'tetouan', fr: 'Tétouan', ar: 'تطوان', en: 'Tetouan', delayHours: '24h - 48h', shippingFeeMAD: 40 },
  { id: 'agadir', fr: 'Agadir', ar: 'أكادير', en: 'Agadir', delayHours: '48h', shippingFeeMAD: 40 },
  { id: 'safi', fr: 'Safi', ar: 'آسفي', en: 'Safi', delayHours: '48h', shippingFeeMAD: 40 },
  { id: 'beni_mellal', fr: 'Béni Mellal', ar: 'بني ملال', en: 'Beni Mellal', delayHours: '48h', shippingFeeMAD: 40 },
  { id: 'nador', fr: 'Nador', ar: 'الناظور', en: 'Nador', delayHours: '48h - 72h', shippingFeeMAD: 45 },
  { id: 'oujda', fr: 'Oujda', ar: 'وجدة', en: 'Oujda', delayHours: '48h - 72h', shippingFeeMAD: 45 },
  { id: 'autre', fr: 'Autre Ville (Maroc)', ar: 'مدينة أخرى (المغرب)', en: 'Other City (Morocco)', delayHours: '48h - 72h', shippingFeeMAD: 45 },
];
