import { useState, useEffect } from 'react';
import { Presentation, MediaAsset, Category, ThemeStyle } from './types';
import { INITIAL_PRESENTATIONS, INITIAL_MEDIA_LIBRARY } from './mockData';
import Dashboard from './components/Dashboard';
import PresentationEditor from './components/PresentationEditor';
import PresenterMode from './components/PresenterMode';
import MediaLibrary from './components/MediaLibrary';
import ExportModal from './components/ExportModal';
import { THEMES } from './lib/themeStyles';
import { 
  Cpu, LayoutGrid, Image as ImageIcon, HelpCircle, 
  Settings2, Plus, Sparkles, BookOpen 
} from 'lucide-react';

export default function App() {
  const [presentations, setPresentations] = useState<Presentation[]>([]);
  const [mediaList, setMediaList] = useState<MediaAsset[]>([]);
  const [activeView, setActiveView] = useState<'dashboard' | 'editor' | 'presenter' | 'medialibrary'>('dashboard');
  const [selectedPresentationId, setSelectedPresentationId] = useState<string | null>(null);
  const [isExporting, setIsExporting] = useState<boolean>(false);

  const [globalThemeStyle, setGlobalThemeStyle] = useState<ThemeStyle>(() => {
    const saved = localStorage.getItem('industrial_os_global_themeStyle');
    return (saved as ThemeStyle) || 'racing';
  });

  const currentTheme = THEMES[globalThemeStyle] || THEMES.racing;

  // Synchronize style and full Design Tokens bundle to LocalStorage
  useEffect(() => {
    localStorage.setItem('industrial_os_global_themeStyle', globalThemeStyle);
    
    // Store precise tokens of design (cores, tipografia, bordas)
    const designTokens = {
      colors: {
        bgGlobal: currentTheme.bgGlobal,
        bgCard: currentTheme.bgCard,
        bgPanel: currentTheme.bgPanel,
        bgAccent: currentTheme.bgAccent,
        textTitle: currentTheme.textTitle,
        textSubtitle: currentTheme.textSubtitle,
        textBody: currentTheme.textBody,
        textMuted: currentTheme.textMuted,
        textPrimaryAccent: currentTheme.textPrimaryAccent,
        btnPrimaryBg: currentTheme.btnPrimaryBg,
        btnPrimaryText: currentTheme.btnPrimaryText,
        btnSecondaryBg: currentTheme.btnSecondaryBg,
        btnSecondaryText: currentTheme.btnSecondaryText,
        borderColor: currentTheme.borderColor,
        borderAccent: currentTheme.borderAccent,
      },
      typography: {
        fontDisplay: currentTheme.fontDisplay,
        fontBody: currentTheme.fontBody,
        fontMono: currentTheme.fontMono,
      },
      borders: {
        roundedSlide: currentTheme.roundedSlide,
        roundedCard: currentTheme.roundedCard,
        skewAngle: currentTheme.skewAngle,
        unskewAngle: currentTheme.unskewAngle,
      }
    };
    
    localStorage.setItem('industrial_os_design_tokens', JSON.stringify(designTokens));

    // Apply document-wide support custom properties
    const root = document.documentElement;
    root.style.setProperty('--bg-global', currentTheme.bgGlobal);
    root.style.setProperty('--rounded-card', currentTheme.roundedCard);
  }, [globalThemeStyle, currentTheme]);

  // Load initial content from LocalStorage or Fallback Mock Data
  useEffect(() => {
    const storedPres = localStorage.getItem('industrial_os_presentations');
    const storedMedia = localStorage.getItem('industrial_os_media_library');

    if (storedPres) {
      setPresentations(JSON.parse(storedPres));
    } else {
      setPresentations(INITIAL_PRESENTATIONS);
      localStorage.setItem('industrial_os_presentations', JSON.stringify(INITIAL_PRESENTATIONS));
    }

    if (storedMedia) {
      setMediaList(JSON.parse(storedMedia));
    } else {
      setMediaList(INITIAL_MEDIA_LIBRARY);
      localStorage.setItem('industrial_os_media_library', JSON.stringify(INITIAL_MEDIA_LIBRARY));
    }
  }, []);

  // Sync state to LocalStorage
  const savePresentationsToStorage = (updated: Presentation[]) => {
    setPresentations(updated);
    localStorage.setItem('industrial_os_presentations', JSON.stringify(updated));
  };

  const saveMediaToStorage = (updated: MediaAsset[]) => {
    setMediaList(updated);
    localStorage.setItem('industrial_os_media_library', JSON.stringify(updated));
  };

  // CRUD events
  const handleUpdatePresentation = (updated: Presentation) => {
    const nextList = presentations.map(p => p.id === updated.id ? updated : p);
    savePresentationsToStorage(nextList);
  };

  const handleDeletePresentation = (id: string) => {
    if (confirm('Tem certeza de que deseja excluir este módulo de apresentação de treinamento?')) {
      const nextList = presentations.filter(p => p.id !== id);
      savePresentationsToStorage(nextList);
      if (selectedPresentationId === id) {
        setSelectedPresentationId(null);
        setActiveView('dashboard');
      }
    }
  };

  const handleDuplicatePresentation = (id: string) => {
    const parent = presentations.find(p => p.id === id);
    if (!parent) return;

    const copy: Presentation = {
      ...parent,
      id: 'pres-dup-' + Date.now(),
      title: `${parent.title} (Cópia)`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: 'Rascunho'
    };

    const nextList = [copy, ...presentations];
    savePresentationsToStorage(nextList);
  };

  const handleCreatePresentation = (newPres: Presentation) => {
    const nextList = [newPres, ...presentations];
    savePresentationsToStorage(nextList);
    setSelectedPresentationId(newPres.id);
    setActiveView('editor');
  };

  // Media items controls
  const handleAddMedia = (newAsset: MediaAsset) => {
    const nextList = [newAsset, ...mediaList];
    saveMediaToStorage(nextList);
  };

  const handleDeleteMedia = (id: string) => {
    if (confirm('Deseja excluir este item da biblioteca de mídias?')) {
      const nextList = mediaList.filter(m => m.id !== id);
      saveMediaToStorage(nextList);
    }
  };

  const activePresentation = presentations.find(p => p.id === selectedPresentationId) || null;

  const navigateToSelectPres = (id: string, selectForPresentMode = false) => {
    setSelectedPresentationId(id);
    if (selectForPresentMode) {
      setActiveView('presenter');
    } else {
      setActiveView('editor');
    }
  };

  return (
    <div className={`min-h-screen ${currentTheme.bgGlobal} ${currentTheme.textBody} ${currentTheme.fontBody} flex flex-col transition-colors duration-300 relative`}>
      {/* Dynamic Background Pattern Overlay */}
      <div className={`absolute inset-0 ${currentTheme.cardPattern} ${currentTheme.opacityPattern} pointer-events-none`} />
      
      {/* Upper Navigation Bar */}
      <header className={`relative z-10 ${currentTheme.bgCard} ${currentTheme.textBody} border-b ${currentTheme.borderColor} no-print col-span-12`} id="main-brand-navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveView('dashboard')}>
            <div className={`w-3.5 h-3.5 ${currentTheme.btnPrimaryBg} rounded-xs shadow-md shrink-0 font-extrabold text-[10px] ${currentTheme.skewAngle ? currentTheme.skewAngle : ''}`}></div>
            <div>
              <h1 className={`text-base ${currentTheme.fontDisplay} tracking-tight flex items-center gap-2 ${currentTheme.textTitle}`}>
                COCKPIT <span className={`font-light opacity-60 italic text-sm ${currentTheme.textSubtitle}`}>TR-1</span>
                <span className={`${currentTheme.bgAccent} ${currentTheme.textSubtitle} border ${currentTheme.borderColor} text-[9px] px-2 py-0.5 rounded font-mono font-medium ${currentTheme.skewAngle ? currentTheme.skewAngle : ''}`}>
                  <span className={`inline-block ${currentTheme.unskewAngle ? currentTheme.unskewAngle : ''}`}>TELEMETRIA v3</span>
                </span>
              </h1>
              <p className={`text-[9px] ${currentTheme.textMuted} font-mono tracking-widest uppercase mt-0.5`}>MOTORSPORT HIGH-PERFORMANCE TRAINING PLATFORM</p>
            </div>
          </div>
 
          {/* Navigation selectors */}
          <div className="flex items-center gap-2 text-xs font-semibold select-none">
            <button
              onClick={() => { setActiveView('dashboard'); setSelectedPresentationId(null); }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded transition-all border cursor-pointer ${currentTheme.skewAngle ? currentTheme.skewAngle : ''} ${
                activeView === 'dashboard' || activeView === 'editor' || activeView === 'presenter'
                  ? `${currentTheme.bgAccent} ${currentTheme.textSubtitle} ${currentTheme.borderAccent || currentTheme.borderColor} font-bold shadow-md`
                  : 'text-slate-400 border-transparent hover:text-white hover:bg-slate-800/30'
              }`}
            >
              <span className={`inline-block ${currentTheme.unskewAngle ? currentTheme.unskewAngle : ''} flex items-center gap-1.5 font-mono`}>
                <LayoutGrid className={`w-3.5 h-3.5 ${currentTheme.textPrimaryAccent}`} />
                PAINEL CENTRAL
              </span>
            </button>
 
            <button
              onClick={() => { setActiveView('medialibrary'); setSelectedPresentationId(null); }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded transition-all border cursor-pointer ${currentTheme.skewAngle ? currentTheme.skewAngle : ''} ${
                activeView === 'medialibrary'
                  ? `${currentTheme.bgAccent} ${currentTheme.textSubtitle} ${currentTheme.borderAccent || currentTheme.borderColor} font-bold shadow-md`
                  : 'text-slate-400 border-transparent hover:text-white hover:bg-slate-800/30'
              }`}
            >
              <span className={`inline-block ${currentTheme.unskewAngle ? currentTheme.unskewAngle : ''} flex items-center gap-1.5 font-mono`}>
                <ImageIcon className="w-3.5 h-3.5" />
                DADOS DE MÍDIA
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Primary Workspace Viewport Container */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 no-print">
        {activeView === 'dashboard' && (
          <Dashboard
            presentations={presentations}
            onSelectPresentation={navigateToSelectPres}
            onDeletePresentation={handleDeletePresentation}
            onDuplicatePresentation={handleDuplicatePresentation}
            onAddPresentation={handleCreatePresentation}
            currentThemeStyle={globalThemeStyle}
            onThemeStyleChange={setGlobalThemeStyle}
            theme={currentTheme}
          />
        )}

        {activeView === 'editor' && activePresentation && (
          <PresentationEditor
            presentation={activePresentation}
            onSave={handleUpdatePresentation}
            onBack={() => { setActiveView('dashboard'); setSelectedPresentationId(null); }}
            onPresent={() => setActiveView('presenter')}
            onExport={() => setIsExporting(true)}
            mediaList={mediaList}
            onOpenMediaLibrary={() => setActiveView('medialibrary')}
          />
        )}

        {activeView === 'presenter' && activePresentation && (
          <PresenterMode
            presentation={activePresentation}
            onExit={() => setActiveView('editor')}
          />
        )}

        {activeView === 'medialibrary' && (
          <MediaLibrary
            mediaList={mediaList}
            onAddAsset={handleAddMedia}
            onDeleteAsset={handleDeleteMedia}
          />
        )}
      </main>

      {/* Dedicated Operational Footer */}
      <footer className="border-t border-[#262A35] bg-[#121214] py-6 mt-12 no-print text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs select-none">
          <div className="flex items-center gap-1 text-slate-500 font-mono">
            <span>© 2026 COCKPIT TR-1. Monitoramento ativo de telemetria homologada F1 Core.</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 font-medium">
            <span className="flex items-center gap-1 font-mono text-[11px] text-[#FAFF00]">
              <BookOpen className="w-3.5 h-3.5 text-[#FAFF00]" />
              DIRETRIZES DE ALTA PERFORMANCE DO CIRCUITO
            </span>
          </div>
        </div>
      </footer>

      {/* EXPORT OVERAL MODAL PANEL */}
      {isExporting && activePresentation && (
        <ExportModal
          presentation={activePresentation}
          onClose={() => setIsExporting(false)}
        />
      )}

      {/* PRINT-ONLY MASTER SLIDES OUTLINE DOCUMENT (Targeted by CSS media query print) */}
      {activePresentation && (
        <div id="printable-master-deck">
          <div className="p-8 border-b-4 border-slate-900 mb-8 flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs text-amber-600 uppercase font-bold tracking-widest">
                Apostila de Treinamento Técnico • Industrial OS
              </p>
              <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                {activePresentation.title}
              </h1>
              <p className="text-sm text-slate-700 leading-relaxed mt-3">
                {activePresentation.description}
              </p>
            </div>
            <div className="flex gap-6 mt-6 border-t pt-4 text-xs font-mono text-slate-500">
              <span><strong>MÓDULO:</strong> {activePresentation.category}</span>
              <span><strong>STATUS:</strong> {activePresentation.status}</span>
              <span><strong>TOTAL DE PÁGINAS:</strong> {activePresentation.slides.length} slides</span>
              <span><strong>DATA DO MANUAL:</strong> {new Date(activePresentation.updatedAt).toLocaleDateString()}</span>
            </div>
          </div>

          {activePresentation.slides.map((slide, index) => (
            <div key={slide.id} className="printable-slide-card">
              <div className="border-b pb-4">
                <div className="flex justify-between items-center text-[10px] font-mono text-amber-600 uppercase font-bold tracking-wider">
                  <span>Slide {index + 1} de {activePresentation.slides.length}</span>
                  <span>Estação {activePresentation.category}</span>
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                  {slide.title}
                </h2>
                {slide.subtitle && (
                  <p className="text-sm font-semibold text-slate-500 font-mono tracking-tight mt-0.5">
                    {slide.subtitle}
                  </p>
                )}
              </div>

              <div className="flex-grow py-8 space-y-6">
                {slide.freeText && (
                  <p className="text-sm text-slate-800 leading-relaxed whitespace-pre-line">
                    {slide.freeText}
                  </p>
                )}

                {slide.listItems && slide.listItems.length > 0 && (
                  <div className="space-y-3 pl-4">
                    {slide.listItems.map((item, bIndex) => (
                      <div key={item.id} className="flex items-start gap-2">
                        <span className="font-bold text-amber-600 text-sm mt-0.5">•</span>
                        <p className="text-sm text-slate-800 leading-normal font-mono">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {(slide.imageUrl || slide.videoUrl) && (
                  <div className="bg-slate-50 p-3 rounded border border-slate-200 text-xs text-slate-500 font-mono">
                    ⚠️ Ativo de Mídia Relacionado para Exibição Projetada: <span className="text-slate-700">{slide.imageUrl || slide.videoUrl}</span>
                  </div>
                )}
              </div>

              <div className="border-t pt-4 text-[9px] font-mono text-slate-400 flex justify-between uppercase">
                <span>Impresso a partir do Presentation Builder — Industrial OS Core</span>
                <span>Chão de Fábrica Inteligente</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
