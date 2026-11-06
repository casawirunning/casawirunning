export type ColorwayId = 'hyper-blue' | 'pure-monochrome' | 'crimson-stealth' | 'electric-cyan';

export interface Colorway {
  id: ColorwayId;
  name: string;
  badge: string;
  accent: string;          // Main CTA and accent color
  accentHover: string;
  accentText: string;      // Text inside accent button
  glow: string;
  dotColor: string;
}

export const COLORWAYS: Record<ColorwayId, Colorway> = {
  'hyper-blue': {
    id: 'hyper-blue',
    name: 'Electric Blue',
    badge: 'BLUE',
    accent: '#2563EB',
    accentHover: '#1D4ED8',
    accentText: '#FFFFFF',
    glow: 'rgba(37, 99, 235, 0.25)',
    dotColor: '#3B82F6',
  },
  'pure-monochrome': {
    id: 'pure-monochrome',
    name: 'Stealth White',
    badge: 'MONO',
    accent: '#FFFFFF',
    accentHover: '#E4E4E7',
    accentText: '#000000',
    glow: 'rgba(255, 255, 255, 0.15)',
    dotColor: '#FFFFFF',
  },
  'crimson-stealth': {
    id: 'crimson-stealth',
    name: 'Hyper Crimson',
    badge: 'RED',
    accent: '#E11D48',
    accentHover: '#BE123C',
    accentText: '#FFFFFF',
    glow: 'rgba(225, 29, 72, 0.25)',
    dotColor: '#FB7185',
  },
  'electric-cyan': {
    id: 'electric-cyan',
    name: 'Cyber Cyan',
    badge: 'CYAN',
    accent: '#06B6D4',
    accentHover: '#0891B2',
    accentText: '#000000',
    glow: 'rgba(6, 182, 212, 0.25)',
    dotColor: '#22D3EE',
  },
};
