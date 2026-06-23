export type Category = 
  | 'Visão Geral'
  | 'Implantação'
  | 'Cadastros'
  | 'Produção'
  | 'Estoque'
  | 'Qualidade'
  | 'Treinamentos';

export type Status = 'Rascunho' | 'Em Revisão' | 'Publicado';

export interface ListItem {
  id: string;
  text: string;
  checked?: boolean; // Support interactive checklists!
}

export interface FlowNode {
  id: string;
  label: string;
  description?: string;
}

export type SlideLayout = 
  | 'hero' 
  | 'text-only' 
  | 'split-image' 
  | 'split-video' 
  | 'bullets-only'
  // Phase 3 layout names:
  | 'cover'
  | 'content'
  | 'step-by-step'
  | 'two-columns'
  | 'checklist'
  | 'conclusion'
  | 'video'
  | 'flow';

export interface Slide {
  id: string;
  title: string;
  subtitle?: string;
  freeText?: string;
  imageUrl?: string;
  videoUrl?: string; // YouTube or direct MP4 URL
  iconName?: string; // Name of Lucide icon
  listItems?: ListItem[];
  layout?: SlideLayout;
  // Specialized system components
  alertText?: string;
  tipText?: string;
  highlightText?: string;
  flowNodes?: FlowNode[]; // Used for Flow, Timeline, Process representations
}

export type ThemeColor = 'yellow' | 'green' | 'red' | 'cyan' | 'purple';
export type ThemeStyle = 'racing' | 'industrial' | 'corporate' | 'modern' | 'dark' | 'light' | 'minimalist';

export interface Presentation {
  id: string;
  title: string;
  description: string;
  category: Category;
  createdAt: string;
  updatedAt: string;
  status: Status;
  slides: Slide[];
  themeColor?: ThemeColor;
  themeStyle?: ThemeStyle; // System visual themes
}

export interface MediaAsset {
  id: string;
  title: string;
  type: 'image' | 'video';
  url: string;
  category: string;
}
