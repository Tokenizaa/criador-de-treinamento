import { ThemeStyle } from '../types';

export interface ThemeConfig {
  id: ThemeStyle;
  name: string;
  description: string;
  
  // Font Families
  fontDisplay: string; // CSS Font family class
  fontBody: string;
  fontMono: string;

  // Background Styling
  bgGlobal: string; // Root screen background
  bgCard: string; // Slidewide content cards background
  bgPanel: string; // Nested indicators/sidebar backgrounds
  bgAccent: string; // Minor highlight blocks background
  cardPattern: string; // Visual pattern overlay class (carbon-pattern, industrial-stripes, etc.)
  opacityPattern: string; // Overlay pattern opacity

  // Typography Colors
  textTitle: string;
  textSubtitle: string;
  textBody: string;
  textMuted: string;
  textPrimaryAccent: string; // Main high-octane color

  // Border & Rounded Settings
  borderColor: string;
  borderAccent: string;
  borderThickClass: string; // e.g. "border-l-4 border-l-primary"
  roundedSlide: string; // Roundness style
  roundedCard: string;
  skewAngle: string; // Structural skew angles for buttons/badges (e.g. "skew-x-[-12deg]" or "skew-x-0")
  unskewAngle: string; // Corresponding back-skew to straighten nested text

  // Interactivity Actions & Statuses
  btnPrimaryBg: string; // primary action button
  btnPrimaryText: string;
  btnPrimaryHover: string;
  btnSecondaryBg: string;
  btnSecondaryText: string;
  btnSecondaryHover: string;

  // Glowing & Shadow Enhancements
  shadowGlow: string;
  shadowGlowHeavy: string;
  progressBg: string; // Progress bar active color
  progressTrack: string; // Progress track color
}

export const THEMES: Record<ThemeStyle, ThemeConfig> = {
  racing: {
    id: 'racing',
    name: 'Racing F1 Cockpit',
    description: 'Estética esportiva de alta velocidade e alto contraste noturno.',
    fontDisplay: 'font-display italic font-black',
    fontBody: 'font-sans',
    fontMono: 'font-mono uppercase',
    bgGlobal: 'bg-[#050505]',
    bgCard: 'bg-[#121214]/90',
    bgPanel: 'bg-[#0A0C10]/95',
    bgAccent: 'bg-[#FAFF00]/10',
    cardPattern: 'bg-carbon-pattern',
    opacityPattern: 'opacity-15',
    textTitle: 'text-white',
    textSubtitle: 'text-[#FAFF00]',
    textBody: 'text-[#E2E8F0]',
    textMuted: 'text-[#94A3B8]',
    textPrimaryAccent: 'text-[#FAFF00]',
    borderColor: 'border-[#1E293B]',
    borderAccent: 'border-[#FAFF00]',
    borderThickClass: 'border-l-4 border-[#FAFF00]',
    roundedSlide: 'rounded-2xl',
    roundedCard: 'rounded-xl',
    skewAngle: 'skew-x-[-12deg]',
    unskewAngle: 'skew-x-[12deg]',
    btnPrimaryBg: 'bg-[#FAFF00]',
    btnPrimaryText: 'text-black font-black',
    btnPrimaryHover: 'hover:bg-[#E6EB00]',
    btnSecondaryBg: 'bg-[#121214]',
    btnSecondaryText: 'text-[#E2E8F0]',
    btnSecondaryHover: 'hover:bg-[#1E293B]',
    shadowGlow: 'shadow-[0_0_30px_rgba(250,255,0,0.25)]',
    shadowGlowHeavy: 'shadow-[0_0_60px_rgba(250,255,0,0.45)]',
    progressBg: 'bg-[#FAFF00]',
    progressTrack: 'bg-[#121214]'
  },
  industrial: {
    id: 'industrial',
    name: 'Industrial Amber',
    description: 'Estilo de telemetria pesada com sinalizações industriais de alerta.',
    fontDisplay: 'font-mono uppercase font-black tracking-widest',
    fontBody: 'font-sans',
    fontMono: 'font-mono',
    bgGlobal: 'bg-[#0E0F12]',
    bgCard: 'bg-[#181A20]/95',
    bgPanel: 'bg-[#111216]/98',
    bgAccent: 'bg-[#FF5A00]/10',
    cardPattern: 'bg-industrial-stripes',
    opacityPattern: 'opacity-20',
    textTitle: 'text-slate-100',
    textSubtitle: 'text-[#FF5A00]',
    textBody: 'text-[#D1D5DB]',
    textMuted: 'text-[#6B7280]',
    textPrimaryAccent: 'text-[#FF5A00]',
    borderColor: 'border-[#262A35]',
    borderAccent: 'border-[#FF5A00]',
    borderThickClass: 'border-l-4 border-[#FF5A00]',
    roundedSlide: 'rounded-none',
    roundedCard: 'rounded-none border-2',
    skewAngle: 'skew-x-[-6deg]',
    unskewAngle: 'skew-x-[6deg]',
    btnPrimaryBg: 'bg-[#FF5A00]',
    btnPrimaryText: 'text-white font-mono font-bold tracking-wider',
    btnPrimaryHover: 'hover:bg-[#E04F00]',
    btnSecondaryBg: 'bg-[#181A20]',
    btnSecondaryText: 'text-slate-300 font-mono',
    btnSecondaryHover: 'hover:bg-[#262A35]',
    shadowGlow: 'shadow-[0_0_20px_rgba(255,90,0,0.2)]',
    shadowGlowHeavy: 'shadow-[0_0_40px_rgba(255,90,0,0.35)]',
    progressBg: 'bg-[#FF5A00]',
    progressTrack: 'bg-[#1F2937]'
  },
  corporate: {
    id: 'corporate',
    name: 'Corporativo Elite',
    description: 'Visual clássico de diretoria, focado em clareza, confiança e solidez.',
    fontDisplay: 'font-sans font-bold tracking-tight',
    fontBody: 'font-sans',
    fontMono: 'font-mono text-xs',
    bgGlobal: 'bg-[#0F172A]',
    bgCard: 'bg-[#1E293B]/85',
    bgPanel: 'bg-[#0B0F19]/95',
    bgAccent: 'bg-[#3B82F6]/10',
    cardPattern: 'bg-grid-slate-900',
    opacityPattern: 'opacity-5',
    textTitle: 'text-white',
    textSubtitle: 'text-[#60A5FA]',
    textBody: 'text-[#E2E8F0]',
    textMuted: 'text-[#64748B]',
    textPrimaryAccent: 'text-[#3B82F6]',
    borderColor: 'border-[#334155]',
    borderAccent: 'border-[#3B82F6]',
    borderThickClass: 'border-l-4 border-[#3B82F6]',
    roundedSlide: 'rounded-3xl',
    roundedCard: 'rounded-2xl',
    skewAngle: 'skew-x-0',
    unskewAngle: 'skew-x-0',
    btnPrimaryBg: 'bg-gradient-to-r from-blue-600 to-indigo-600',
    btnPrimaryText: 'text-white font-bold',
    btnPrimaryHover: 'hover:from-blue-500 hover:to-indigo-505',
    btnSecondaryBg: 'bg-[#1E293B]',
    btnSecondaryText: 'text-slate-205',
    btnSecondaryHover: 'hover:bg-[#334155]',
    shadowGlow: 'shadow-2xl shadow-blue-500/10',
    shadowGlowHeavy: 'shadow-[0_15px_60px_rgba(59,130,246,0.15)]',
    progressBg: 'bg-[#3B82F6]',
    progressTrack: 'bg-[#1E293B]'
  },
  modern: {
    id: 'modern',
    name: 'Moderno Cyber',
    description: 'Interface futurista imersiva com degradês vibrantes e brilho neon.',
    fontDisplay: 'font-sans font-black tracking-tighter uppercase',
    fontBody: 'font-sans',
    fontMono: 'font-mono text-xs text-[#00F0FF]',
    bgGlobal: 'bg-[#06060B]',
    bgCard: 'bg-[#111115]/95 backdrop-blur-md',
    bgPanel: 'bg-[#0A0B0E]/98',
    bgAccent: 'bg-[#D000FF]/15',
    cardPattern: 'bg-cyber-dots',
    opacityPattern: 'opacity-25',
    textTitle: 'text-transparent bg-clip-text bg-gradient-to-r from-white via-[#EC4899] to-[#D000FF]',
    textSubtitle: 'text-[#00F0FF]',
    textBody: 'text-[#E4E4E7]',
    textMuted: 'text-[#71717A]',
    textPrimaryAccent: 'text-[#00F0FF]',
    borderColor: 'border-[#27272A]',
    borderAccent: 'border-[#D000FF]',
    borderThickClass: 'border-l-4 border-l-transparent border-t-0 p-0 before:content-[""] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[#00F0FF] before:to-[#D000FF] relative',
    roundedSlide: 'rounded-xl',
    roundedCard: 'rounded-xl border border-[#27272A]',
    skewAngle: 'skew-x-0',
    unskewAngle: 'skew-x-0',
    btnPrimaryBg: 'bg-gradient-to-r from-[#D000FF] to-[#EC4899]',
    btnPrimaryText: 'text-white font-black uppercase tracking-wider',
    btnPrimaryHover: 'hover:from-[#B300DD] hover:to-[#D83685]',
    btnSecondaryBg: 'bg-[#1F1F23]',
    btnSecondaryText: 'text-[#E4E4E7]',
    btnSecondaryHover: 'hover:bg-[#2D2D33]',
    shadowGlow: 'shadow-[0_0_25px_rgba(208,0,255,0.25)]',
    shadowGlowHeavy: 'shadow-[0_0_50px_rgba(0,240,255,0.35)]',
    progressBg: 'bg-gradient-to-r from-[#00F0FF] to-[#D000FF]',
    progressTrack: 'bg-[#1D1D23]'
  },
  dark: {
    id: 'dark',
    name: 'Escuro Minimalista',
    description: 'Preto e branco refinado, elegante e que reduz a fadiga ocular.',
    fontDisplay: 'font-sans font-bold tracking-widest uppercase',
    fontBody: 'font-sans',
    fontMono: 'font-mono',
    bgGlobal: 'bg-[#0B0B0C]',
    bgCard: 'bg-[#131315]/95',
    bgPanel: 'bg-[#1C1C1F]/98',
    bgAccent: 'bg-[#27272A]/40',
    cardPattern: 'bg-dots-pattern',
    opacityPattern: 'opacity-5',
    textTitle: 'text-white',
    textSubtitle: 'text-zinc-350',
    textBody: 'text-zinc-200',
    textMuted: 'text-zinc-500',
    textPrimaryAccent: 'text-white',
    borderColor: 'border-zinc-800',
    borderAccent: 'border-white',
    borderThickClass: 'border-l-2 border-white',
    roundedSlide: 'rounded-none',
    roundedCard: 'rounded-lg border border-zinc-800',
    skewAngle: 'skew-x-0',
    unskewAngle: 'skew-x-0',
    btnPrimaryBg: 'bg-white',
    btnPrimaryText: 'text-black font-semibold',
    btnPrimaryHover: 'hover:bg-zinc-200',
    btnSecondaryBg: 'bg-[#131315]',
    btnSecondaryText: 'text-zinc-300',
    btnSecondaryHover: 'hover:bg-zinc-800',
    shadowGlow: 'shadow-xl shadow-black/80',
    shadowGlowHeavy: 'shadow-2xl shadow-black',
    progressBg: 'bg-white',
    progressTrack: 'bg-zinc-800'
  },
  light: {
    id: 'light',
    name: 'Estúdio Claro',
    description: 'Interface de alta refratariedade solar, excelente legibilidade com bom contraste.',
    fontDisplay: 'font-sans font-bold tracking-tight',
    fontBody: 'font-sans',
    fontMono: 'font-mono',
    bgGlobal: 'bg-[#F1F5F9]',
    bgCard: 'bg-white border-slate-200',
    bgPanel: 'bg-[#F8FAFC]',
    bgAccent: 'bg-slate-100',
    cardPattern: 'bg-dots-light',
    opacityPattern: 'opacity-10',
    textTitle: 'text-slate-900',
    textSubtitle: 'text-blue-700',
    textBody: 'text-slate-705',
    textMuted: 'text-slate-400',
    textPrimaryAccent: 'text-blue-600',
    borderColor: 'border-slate-200',
    borderAccent: 'border-blue-600',
    borderThickClass: 'border-l-4 border-blue-605',
    roundedSlide: 'rounded-3xl shadow-xl',
    roundedCard: 'rounded-2xl border border-slate-200 shadow-sm',
    skewAngle: 'skew-x-0',
    unskewAngle: 'skew-x-0',
    btnPrimaryBg: 'bg-blue-600',
    btnPrimaryText: 'text-white font-bold',
    btnPrimaryHover: 'hover:bg-blue-700',
    btnSecondaryBg: 'bg-slate-200',
    btnSecondaryText: 'text-slate-700',
    btnSecondaryHover: 'hover:bg-slate-300',
    shadowGlow: 'shadow-lg shadow-slate-200/50',
    shadowGlowHeavy: 'shadow-2xl shadow-slate-300/60',
    progressBg: 'bg-blue-600',
    progressTrack: 'bg-slate-200'
  }
};
