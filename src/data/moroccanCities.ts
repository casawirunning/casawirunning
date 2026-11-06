export interface MoroccanCity {
  fr: string;
  ar: string;
  en: string;
  delayHours: string;
}

export const MOROCCAN_CITIES: MoroccanCity[] = [
  { fr: 'Casablanca', ar: 'الدار البيضاء', en: 'Casablanca', delayHours: '24h - Express' },
  { fr: 'Rabat / Salé', ar: 'الرباط / سلا', en: 'Rabat / Salé', delayHours: '24h - 48h' },
  { fr: 'Marrakech', ar: 'مراكش', en: 'Marrakech', delayHours: '24h - 48h' },
  { fr: 'Tanger', ar: 'طنجة', en: 'Tangier', delayHours: '24h - 48h' },
  { fr: 'Fès', ar: 'فاس', en: 'Fez', delayHours: '24h - 48h' },
  { fr: 'Agadir', ar: 'أكادير', en: 'Agadir', delayHours: '48h' },
  { fr: 'Meknès', ar: 'مكناس', en: 'Meknes', delayHours: '24h - 48h' },
  { fr: 'Oujda', ar: 'وجدة', en: 'Oujda', delayHours: '48h - 72h' },
  { fr: 'Kénitra', ar: 'القنيطرة', en: 'Kenitra', delayHours: '24h - 48h' },
  { fr: 'Tétouan', ar: 'تطوان', en: 'Tetouan', delayHours: '24h - 48h' },
  { fr: 'Mohammédia', ar: 'المحمدية', en: 'Mohammedia', delayHours: '24h' },
  { fr: 'Nador', ar: 'الناظور', en: 'Nador', delayHours: '48h - 72h' },
  { fr: 'El Jadida', ar: 'الجديدة', en: 'El Jadida', delayHours: '24h - 48h' },
  { fr: 'Safi', ar: 'آسفي', en: 'Safi', delayHours: '48h' },
  { fr: 'Béni Mellal', ar: 'بني ملال', en: 'Beni Mellal', delayHours: '48h' },
  { fr: 'Autre Ville (Maroc)', ar: 'مدينة أخرى (المغرب)', en: 'Other City (Morocco)', delayHours: '48h - 72h' },
];
