import React, { useState, useEffect, useRef } from 'react';
import { Presentation, Slide, ListItem, FlowNode } from '../types';
import { THEMES } from '../lib/themeStyles';
import { 
  ArrowLeft, ArrowRight, Play, Pause, Maximize, 
  Menu, X, Clock, HelpCircle, MonitorPlay, ListOrdered, Flag, Target, Award,
  AlertTriangle, Lightbulb, Focus, CheckSquare, Square, ChevronRight, Activity, 
  HelpCircle as QuestionIcon, Sparkles, BookOpen, Layers
} from 'lucide-react';

interface PresenterModeProps {
  presentation: Presentation;
  onExit: () => void;
}

export default function PresenterMode({ presentation, onExit }: PresenterModeProps) {
  // Current Slide. Index -1 means the "Agenda / Capa / Página Inicial" Screen
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(-1);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [timeSpent, setTimeSpent] = useState<number>(0);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  
  // Interactive checklist state map
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // References to points for scrolling support on small views
  const pointRefs = useRef<React.RefObject<HTMLDivElement | null>[]>([]);

  // Setup Dynamic Theme Configurations
  const activeStyleName = presentation.themeStyle || 'racing';
  const theme = THEMES[activeStyleName] || THEMES.racing;

  // Track elapsed presentation timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Escape') {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, currentStep, presentation.slides.length]);

  // Load presentation progress session initially (from localStorage)
  useEffect(() => {
    const saved = localStorage.getItem(`allin_presentation_progress_${presentation.id}`);
    if (saved) {
      try {
        const { slideIndex, step } = JSON.parse(saved);
        if (typeof slideIndex === 'number' && slideIndex >= -1 && slideIndex < presentation.slides.length) {
          setCurrentSlideIndex(slideIndex);
          setCurrentStep(step || 1);
        }
      } catch (e) {
        console.warn('Error reading stored telemetry session:', e);
      }
    }
  }, [presentation.id]);

  // Synchronize progress to localStorage
  useEffect(() => {
    localStorage.setItem(
      `allin_presentation_progress_${presentation.id}`,
      JSON.stringify({ slideIndex: currentSlideIndex, step: currentStep })
    );
  }, [currentSlideIndex, currentStep, presentation.id]);

  // Auto-play interval ticking
  useEffect(() => {
    let playTimer: ReturnType<typeof setInterval> | null = null;
    if (isPlaying) {
      playTimer = setInterval(() => {
        handleNext();
      }, 7000); // 7 seconds slide intervals
    }
    return () => {
      if (playTimer) clearInterval(playTimer);
    };
  }, [isPlaying, currentSlideIndex, currentStep, presentation.slides.length]);

  const activeSlide: Slide | null = 
    currentSlideIndex >= 0 && currentSlideIndex < presentation.slides.length 
      ? presentation.slides[currentSlideIndex] 
      : null;

  // Align legacy layouts seamlessly to Phase 3 design specs
  const getLayoutType = (slide: Slide | null): string => {
    if (!slide) return 'content';
    const raw = slide.layout || 'text-only';
    
    // Map previous layouts for 100% backward tolerance
    if (raw === 'hero') return 'cover';
    if (raw === 'text-only') return 'content';
    if (raw === 'split-image') return 'step-by-step';
    if (raw === 'split-video') return 'video';
    if (raw === 'bullets-only') return 'two-columns';
    return raw;
  };

  const currentLayoutType = getLayoutType(activeSlide);

  // Get current slide total progressive disclose steps
  const getMaxSteps = (): number => {
    if (!activeSlide) return 1;
    const layout = getLayoutType(activeSlide);
    
    if (layout === 'step-by-step' && activeSlide.listItems) {
      return activeSlide.listItems.length;
    }
    if (layout === 'flow' && activeSlide.flowNodes) {
      return activeSlide.flowNodes.length;
    }
    if (layout === 'checklist' && activeSlide.listItems) {
      return activeSlide.listItems.length;
    }
    if (layout === 'two-columns' && activeSlide.listItems) {
      return activeSlide.listItems.length;
    }
    
    return 1;
  };

  const handleNext = () => {
    const maxSteps = getMaxSteps();
    
    if (maxSteps > 1 && currentStep < maxSteps) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      
      // Auto-focus scroll transitions
      setTimeout(() => {
        if (pointRefs.current[nextStep - 1]?.current) {
          pointRefs.current[nextStep - 1].current?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      }, 60);
    } else if (currentSlideIndex < presentation.slides.length - 1) {
      const nextSlideIndex = currentSlideIndex + 1;
      setCurrentSlideIndex(nextSlideIndex);
      setCurrentStep(1);
    } else {
      // Loop slide cycle
      setCurrentSlideIndex(-1);
      setCurrentStep(1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else if (currentSlideIndex > -1) {
      const prevIdx = currentSlideIndex - 1;
      setCurrentSlideIndex(prevIdx);
      if (prevIdx >= 0) {
        // Fall back to the maximum progressive disclose steps in previous slide
        const prevSlide = presentation.slides[prevIdx];
        const prevLayout = getLayoutType(prevSlide);
        let prevMax = 1;
        
        if (prevLayout === 'step-by-step' && prevSlide.listItems) prevMax = prevSlide.listItems.length;
        if (prevLayout === 'flow' && prevSlide.flowNodes) prevMax = prevSlide.flowNodes.length;
        if (prevLayout === 'checklist' && prevSlide.listItems) prevMax = prevSlide.listItems.length;
        if (prevLayout === 'two-columns' && prevSlide.listItems) prevMax = prevSlide.listItems.length;
        
        setCurrentStep(prevMax);
      } else {
        setCurrentStep(1);
      }
    }
  };

  const jumpToSlide = (idx: number) => {
    setCurrentSlideIndex(idx);
    setCurrentStep(1);
    setSidebarOpen(false);
  };

  const toggleChecklist = (itemId: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid disclosing next step accidentally on click
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const formatTime = (secs: number) => {
    const min = Math.floor(secs / 60);
    const sec = secs % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  // Build element refs for progressive disclosures
  useEffect(() => {
    const totalCount = getMaxSteps();
    pointRefs.current = Array(totalCount).fill(null).map(() => React.createRef<HTMLDivElement>());
  }, [activeSlide?.id, currentSlideIndex]);

  // Determine Custom Tailwind Color Swaps matching user accent picks
  // This safeguards "As cores poderão ser alteradas posteriormente sem afetar o layout"
  const getThemeAccentColorClass = (): string => {
    const color = presentation.themeColor || 'yellow';
    switch (color) {
      case 'green': return '#00FF94';
      case 'red': return '#FF2E2E';
      case 'cyan': return '#00F0FF';
      case 'purple': return '#D000FF';
      default: return '#FAFF00'; // Yellow
    }
  };

  const activeAccentColor = getThemeAccentColorClass();

  return (
    <div 
      className={`min-h-screen ${theme.bgGlobal} ${theme.textBody} flex flex-col transition-all duration-300 relative overflow-hidden select-none ${
        isFullscreen ? 'fixed inset-0 z-50 p-4' : `relative ${theme.roundedSlide} border ${theme.borderColor} ${theme.shadowGlowHeavy} p-4 md:p-6`
      }`}
      id="presenter-mode-container"
      style={{
        // Inject runtime CSS variables mapping the selected accent color!
        // This guarantees all structural buttons, highlights, badges reference pure custom attributes.
        ['--theme-primary-accent' as any]: activeAccentColor,
        ['--theme-primary-accent-glow' as any]: `rgba(${
          activeAccentColor === '#FF2E2E' ? '255,46,46' : 
          activeAccentColor === '#00FF94' ? '0,255,148' : 
          activeAccentColor === '#00F0FF' ? '0,240,255' : 
          activeAccentColor === '#D000FF' ? '208,0,255' : '250,255,0'
        }, 0.25)`
      }}
    >
      {/* Background design pattern rendering derived from active theme styles sheets */}
      <div className={`absolute inset-0 ${theme.cardPattern} ${theme.opacityPattern} pointer-events-none z-0`} />
      
      {/* Immersive ambient lights reflection system */}
      <div 
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full filter blur-[130px] opacity-15 pointer-events-none z-0 transition-all duration-700"
        style={{ backgroundColor: activeAccentColor }}
      />
      <div 
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full filter blur-[130px] opacity-15 pointer-events-none z-0 transition-all duration-700"
        style={{ backgroundColor: activeAccentColor }}
      />

      {/* Embedded Upper Navigation Header */}
      <div className={`flex items-center justify-between border-b ${theme.borderColor} pb-3.5 mb-4 select-none relative z-10 shrink-0`}>
        <div className="flex items-center gap-3">
          <button
            onClick={onExit}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs ${theme.btnSecondaryBg} border ${theme.borderColor} ${theme.btnSecondaryText} ${theme.btnSecondaryHover} rounded-lg transition-colors cursor-pointer select-none`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Voltar ao Editor
          </button>
          
          <div className={`h-4 w-px ${theme.borderColor}`} />
          
          <div>
            <h3 
              className={`text-[9px] font-black ${theme.fontMono} tracking-wider uppercase flex items-center gap-1.5`}
              style={{ color: activeAccentColor }}
            >
              🏁 PLATAFORMA INTEGRADA ALL-IN
            </h3>
            <h2 className="text-xs md:text-sm font-semibold truncate max-w-[150px] sm:max-w-xs text-white">
              {presentation.title}
            </h2>
          </div>
        </div>

        {/* Presenter cockpit telemetries */}
        <div className="flex items-center gap-2 sm:gap-3 text-xs font-mono">
          <div className={`hidden sm:flex items-center gap-1.5 ${theme.bgPanel} text-slate-300 px-3 py-1 rounded-md border ${theme.borderColor} font-semibold`}>
            <Clock className="w-3.5 h-3.5" style={{ color: activeAccentColor }} />
            <span>TREINAMENTO: {formatTime(timeSpent)}</span>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`p-1.5 rounded-lg transition-all border cursor-pointer ${
              isPlaying 
                ? 'text-black font-bold scale-102 font-black' 
                : 'bg-transparent text-slate-400 hover:text-white'
            }`}
            style={{ 
              backgroundColor: isPlaying ? activeAccentColor : 'transparent',
              borderColor: isPlaying ? 'transparent' : 'rgba(255,255,255,0.1)',
              boxShadow: isPlaying ? `0 0 15px ${activeAccentColor}` : 'none'
            }}
            title={isPlaying ? 'Pausar loop de apresentações' : 'Apresentar em Loop'}
          >
            {isPlaying ? <Pause className="w-4 h-4 text-black" /> : <Play className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`p-1.5 ${theme.btnSecondaryBg} ${theme.btnSecondaryText} hover:text-white border ${theme.borderColor} rounded-lg transition cursor-pointer`}
            title="Menu do Treinamento"
          >
            <Menu className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(() => {});
                setIsFullscreen(true);
              } else {
                document.exitFullscreen().catch(() => {});
                setIsFullscreen(false);
              }
            }}
            className={`p-1.5 ${theme.btnSecondaryBg} ${theme.btnSecondaryText} hover:text-white border ${theme.borderColor} rounded-lg transition cursor-pointer`}
            title="Alternar Tela Cheia"
          >
            <Maximize className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Slide / Index Content Frame (Scrollable) */}
      <div 
        onClick={(e) => {
          // Exclude direct button/link clicks inside the slide
          const target = e.target as HTMLElement;
          if (target.closest('button') || target.closest('input') || target.closest('a') || target.closest('video') || target.closest('video-controls') || target.closest('.no-screen-click')) {
            return;
          }
          handleNext();
        }}
        className="flex-grow flex relative items-center justify-center py-4 md:py-6 min-h-[460px] max-h-[75vh] overflow-y-auto cursor-pointer select-none relative z-10"
        title="Clique na tela para abrir o próximo tópico"
      >
        
        {/* SIDEBAR TÓPICOS DA APRESENTAÇÃO */}
        {sidebarOpen && (
          <div className={`absolute right-0 top-0 bottom-0 w-80 ${theme.bgPanel} border-l ${theme.borderColor} z-30 p-4 shadow-2xl flex flex-col select-none rounded-r-xl animate-fadeIn`}>
            <div className={`flex items-center justify-between border-b ${theme.borderColor} pb-3 mb-4`}>
              <span 
                className={`font-bold text-xs tracking-wider uppercase flex items-center gap-1.5`}
                style={{ color: activeAccentColor }}
              >
                <ListOrdered className="w-4 h-4" /> MAPA DE VOLTAS
              </span>
              <button 
                onClick={() => setSidebarOpen(false)}
                className={`hover:text-white p-1 hover:bg-[#1E293B] rounded-md cursor-pointer ${theme.textMuted}`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex-grow overflow-y-auto space-y-1.5 pr-1">
              <button
                onClick={() => jumpToSlide(-1)}
                className={`w-full text-left p-2.5 rounded-lg text-xs font-semibold font-mono uppercase tracking-wider transition border ${
                  currentSlideIndex === -1 
                    ? `border-transparent` 
                    : `text-slate-400 border-transparent hover:${theme.bgAccent} hover:text-white`
                }`}
                style={{
                  backgroundColor: currentSlideIndex === -1 ? activeAccentColor : 'transparent',
                  color: currentSlideIndex === -1 ? 'black' : '',
                  fontWeight: currentSlideIndex === -1 ? '900' : ''
                }}
              >
                🏁 GRID DE INICIALIZAÇÃO
              </button>
              
              {presentation.slides.map((sl, index) => (
                <button
                  key={sl.id}
                  onClick={() => jumpToSlide(index)}
                  className="w-full text-left p-2.5 rounded-lg text-xs transition flex items-start gap-2 border border-transparent"
                  style={{
                    backgroundColor: currentSlideIndex === index ? activeAccentColor : 'transparent',
                    color: currentSlideIndex === index ? 'black' : '',
                    fontWeight: currentSlideIndex === index ? '900' : ''
                  }}
                >
                  <span className="font-mono text-[9px] opacity-75 mt-0.5">LAP 0{index + 1}</span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold">{sl.title}</p>
                    {sl.subtitle && (
                      <p className={`truncate text-[9px] ${currentSlideIndex === index ? 'text-black/75 font-semibold' : 'text-slate-500'}`}>
                        {sl.subtitle}
                      </p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* RENDER ACTIVE SLIDE WITH DESIGN SYSTEM LAYOUTS */}
        {currentSlideIndex === -1 ? (
          /* ========================================================== */
          /* LAYOUT CAPA (COVER)                                        */
          /* ========================================================== */
          <div className={`${theme.bgCard} border ${theme.borderColor} p-6 md:p-10 rounded-2xl shadow-2xl hover:border-slate-800 transition duration-300 animate-fadeIn relative overflow-hidden flex flex-col items-center text-center max-w-3xl w-full`}>
            
            {/* Checker/Badge representing target category */}
            <div 
              className={`w-14 h-14 rounded-full bg-[#050505] border flex items-center justify-center mb-6 animate-pulse`}
              style={{ borderColor: activeAccentColor, boxShadow: `0 0 15px ${activeAccentColor}` }}
            >
              <Flag className="w-7 h-7" style={{ color: activeAccentColor }} />
            </div>

            <span 
              className={`text-[9px] font-black ${theme.fontMono} tracking-widest uppercase mb-1`}
              style={{ color: activeAccentColor }}
            >
              CIRCULO DE TREINAMENTO SPRINT ALL-IN
            </span>

            {/* Title with dynamic slanted design backing */}
            <div className={`relative inline-block mb-4 select-none ${theme.skewAngle}`}>
              <div 
                className="absolute inset-0 opacity-100" 
                style={{ backgroundColor: activeAccentColor, boxShadow: `0 0 20px ${activeAccentColor}` }}
              />
              <h1 className={`relative text-2xl md:text-4xl font-black italic text-black px-6 py-2.5 uppercase leading-tight ${theme.unskewAngle}`}>
                {presentation.title}
              </h1>
            </div>

            <p className="text-slate-300 text-xs md:text-sm max-w-lg leading-relaxed mt-2 font-medium">
              {presentation.description}
            </p>

            <div className={`h-px ${theme.borderColor} w-full my-6`} />

            {/* Grid layout of procedures (Index agenda) */}
            <div className="w-full text-left mb-6 no-screen-click">
              <h3 className={`text-[10px] font-mono font-bold tracking-wider uppercase ${theme.textMuted} mb-3 flex items-center gap-1.5`}>
                <Layers className="w-3.5 h-3.5" style={{ color: activeAccentColor }} /> Grid Operacional de Aprendizado
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {presentation.slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => jumpToSlide(index)}
                    className={`group flex items-start gap-3 p-2.5 bg-black/40 hover:bg-black/80 border ${theme.borderColor} rounded-xl transition-all text-left cursor-pointer duration-200`}
                    style={{ ['--hover-border-color' as any]: activeAccentColor }}
                  >
                    <div 
                      className={`w-7 h-7 rounded bg-[#121214] flex items-center justify-center text-slate-350 font-mono text-xs font-bold transition-all shrink-0`}
                      style={{ border: `1px solid ${theme.borderColor}` }}
                    >
                      {index + 1}
                    </div>
                    <div className="min-w-0 flex-grow">
                      <span className="text-[8px] text-slate-500 font-mono uppercase block">LAP 0{index + 1}</span>
                      <p className="text-slate-200 group-hover:text-white font-bold text-xs truncate mt-0.5" title={slide.title}>
                        {slide.title}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div 
              className={`mt-2 animate-pulse text-[10px] ${theme.fontMono} tracking-wider font-bold`}
              style={{ color: activeAccentColor }}
            >
              ⚡ PRESSIONE ESPAÇO OU CLIQUE NA TELA PARA INICIAR O COCKPIT ⚡
            </div>
          </div>
        ) : (
          /* ========================================================== */
          /* ACTIVE SLIDE VIEWER RENDER                                 */
          /* ========================================================== */
          <div className={`max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center ${theme.bgCard} border ${theme.borderColor} p-5 md:p-8 rounded-2xl shadow-xl relative overflow-hidden backdrop-blur-sm`}>
            
            {/* Standard Upper Section: Presenter metadata */}
            <div className="md:col-span-12 flex items-center justify-between pb-3 border-b border-white/5">
              <span className={`text-[9px] font-black ${theme.fontMono} tracking-wider`} style={{ color: activeAccentColor }}>
                MÓDULO DE PROCEDIMENTO OPERACIONAL SPRINT {currentSlideIndex + 1} DE {presentation.slides.length}
              </span>
              <span className="font-mono text-[8px] opacity-60 bg-black/45 border border-white/5 text-slate-400 px-2.5 py-0.5 rounded uppercase">
                LAYOUT: {currentLayoutType}
              </span>
            </div>

            {/* Asymmetric Header details */}
            <div className="md:col-span-12 border-l-4 pl-4 py-1 flex flex-col" style={{ borderLeftColor: activeAccentColor }}>
              <h1 className="text-xl md:text-3xl font-black italic uppercase text-white tracking-tight">
                {activeSlide?.title}
              </h1>
              {activeSlide?.subtitle && (
                <p className={`text-xs font-mono tracking-tight font-bold mt-1`} style={{ color: activeAccentColor }}>
                  {activeSlide?.subtitle}
                </p>
              )}
            </div>

            {/* ======================================================== */}
            {/* COMPONENT: TÓPICOS / REVELAÇÃO PROGRESSIVA DETALHADOS    */}
            {/* ======================================================== */}
            
            {/* Layout Case: COVER                                      */}
            {currentLayoutType === 'cover' && (
              <div className="md:col-span-12 text-center py-6 flex flex-col items-center max-w-xl mx-auto space-y-4">
                <Sparkles className="w-12 h-12 animate-spin" style={{ color: activeAccentColor }} />
                <h3 className="text-lg font-bold uppercase font-display text-white">Grid do Slide de Capa</h3>
                <p className="text-slate-400 text-xs">Página de Introdução do operador.</p>
              </div>
            )}

            {/* Layout Case: CONTENT (TEXT CARDS CORRIDO)                 */}
            {currentLayoutType === 'content' && (
              <div className="md:col-span-12 space-y-4">
                {activeSlide?.freeText && (
                  <p className="text-slate-200 text-xs md:text-sm leading-relaxed whitespace-pre-line bg-black/20 p-4 border border-white/5 rounded-xl">
                    {activeSlide.freeText}
                  </p>
                )}
                
                {/* Visual support images or videos in side column if loaded */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeSlide?.imageUrl && (
                    <div className="aspect-video bg-slate-900 border border-white/5 rounded-xl overflow-hidden relative shadow-md">
                      <img src={activeSlide.imageUrl} referrerPolicy="no-referrer" alt="Support image layout" className="w-full h-full object-cover" />
                    </div>
                  )}
                  {activeSlide?.videoUrl && (
                    <div className="aspect-video bg-black border border-white/5 rounded-xl overflow-hidden shadow-md">
                      <video src={activeSlide.videoUrl} controls loop autoPlay muted className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Layout Case: STEP-BY-STEP (PASSO A PASSO PROGRESSIVE)     */}
            {currentLayoutType === 'step-by-step' && (
              <div className={`grid grid-cols-1 ${activeSlide?.imageUrl || activeSlide?.videoUrl ? 'md:grid-cols-12' : 'md:grid-cols-1'} gap-6 md:col-span-12 w-full`}>
                <div className={`${activeSlide?.imageUrl || activeSlide?.videoUrl ? 'md:col-span-7' : ''} space-y-4`}>
                  {activeSlide?.freeText && (
                    <p className="text-slate-350 text-xs leading-relaxed whitespace-pre-line">
                      {activeSlide.freeText}
                    </p>
                  )}

                  {activeSlide?.listItems && activeSlide.listItems.length > 0 && (
                    <div className="space-y-3">
                      {activeSlide.listItems.slice(0, currentStep).map((item, idx) => {
                        const itemRef = pointRefs.current[idx];
                        return (
                          <div 
                            key={item.id} 
                            ref={itemRef as any}
                            className={`flex items-start gap-4 p-4 rounded-xl border ${theme.borderColor} bg-gradient-to-r from-black/40 to-black/10 group transition-all duration-300 border-l-4 animate-fadeIn`}
                            style={{ borderLeftColor: activeAccentColor }}
                          >
                            <div 
                              className={`w-6 h-6 rounded shrink-0 flex items-center justify-center font-mono text-[10px] font-black text-black`}
                              style={{ backgroundColor: activeAccentColor }}
                            >
                              <span>{idx + 1}</span>
                            </div>
                            <div className="min-w-0 flex-grow pr-2">
                              <p className="text-slate-200 leading-normal text-xs font-semibold">{item.text}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Supporting media if loaded */}
                {(activeSlide?.imageUrl || activeSlide?.videoUrl) && (
                  <div className="md:col-span-5 flex items-center justify-center">
                    {activeSlide?.videoUrl ? (
                      <div className="w-full aspect-video bg-black rounded-xl overflow-hidden border border-white/5 relative z-10 shadow-lg">
                        <video src={activeSlide.videoUrl} controls className="w-full h-full object-cover" autoPlay muted loop />
                      </div>
                    ) : (
                      activeSlide?.imageUrl && (
                        <div className="w-full aspect-video md:aspect-square bg-slate-950 rounded-xl overflow-hidden border border-white/5 relative z-10 shadow-lg group">
                          <img src={activeSlide.imageUrl} alt="Procedural graphics" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-102 transition duration-500" />
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pointer-events-none">
                            <span className="text-[9px] text-slate-400 font-mono">SUPORTE VISUAL DE TRABALHO</span>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Layout Case: TWO-COLUMNS (DUAS COLUNAS BENTO GRID)     */}
            {currentLayoutType === 'two-columns' && (
              <div className="md:col-span-12 space-y-4">
                {activeSlide?.freeText && (
                  <p className="text-slate-350 text-xs leading-relaxed bg-black/10 p-3 rounded">
                    {activeSlide.freeText}
                  </p>
                )}

                {activeSlide?.listItems && activeSlide.listItems.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 select-none">
                    {activeSlide.listItems.slice(0, currentStep).map((item, idx) => {
                      const itemRef = pointRefs.current[idx];
                      return (
                        <div 
                          key={item.id} 
                          ref={itemRef as any}
                          className={`relative p-4 rounded-xl border ${theme.borderColor} bg-black/30 hover:bg-black/60 transition-all duration-300 flex flex-col justify-between min-h-[110px] animate-fadeIn group`}
                        >
                          <div className="absolute right-4 bottom-1 text-6xl font-black italic select-none text-white/5 font-display transition-all group-hover:scale-110 pointer-events-none">
                            0{idx + 1}
                          </div>
                          <div className="space-y-1 relative z-10">
                            <span className="text-[8px] font-mono tracking-wider font-bold uppercase" style={{ color: activeAccentColor }}>
                              INDICADOR INTEGRADO 0{idx + 1}
                            </span>
                            <p className="text-slate-205 text-xs font-semibold leading-relaxed pr-8">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-slate-500 italic text-center py-4">Nenhum bullet item cadastrado para layout duas-colunas.</p>
                )}
              </div>
            )}

            {/* Layout Case: CHECKLIST INTERATIVA (INTERACTIVE CHECKLIST) */}
            {currentLayoutType === 'checklist' && (
              <div className="md:col-span-12 space-y-4 no-screen-click">
                {activeSlide?.freeText && (
                  <p className="text-slate-350 text-xs bg-black/20 p-3.5 border border-white/5 rounded-lg">
                    {activeSlide.freeText}
                  </p>
                )}

                <div className="grid grid-cols-1 gap-2.5">
                  {activeSlide?.listItems?.slice(0, currentStep).map((item, idx) => {
                    const isChecked = !!checkedItems[item.id];
                    const itemRef = pointRefs.current[idx];
                    return (
                      <div
                        key={item.id}
                        ref={itemRef as any}
                        onClick={(e) => toggleChecklist(item.id, e)}
                        className={`flex items-start gap-3.5 p-4 rounded-xl border cursor-pointer select-none transition-all duration-200 animate-fadeIn ${
                          isChecked 
                            ? 'bg-emerald-950/20 border-emerald-500/30 text-slate-200 shadow-sm' 
                            : `bg-black/40 hover:bg-black/60 ${theme.borderColor}`
                        }`}
                      >
                        <button 
                          type="button"
                          className="mt-0.5 shrink-0 transition hover:scale-110"
                        >
                          {isChecked ? (
                            <CheckSquare className="w-5 h-5 text-emerald-400 stroke-[2.5]" />
                          ) : (
                            <Square className="w-5 h-5 text-slate-500 hover:text-white" />
                          )}
                        </button>
                        
                        <div className="flex-1 min-w-0">
                          <p className={`text-xs md:text-sm font-bold ${isChecked ? 'line-through text-slate-400' : 'text-slate-200'}`}>
                            {item.text}
                          </p>
                        </div>
                        
                        <span className={`text-[9px] font-mono font-bold px-2.5 py-0.5 rounded uppercase shrink-0 ${
                          isChecked ? 'bg-emerald-900/40 text-emerald-400' : 'bg-black/40 text-slate-500'
                        }`}>
                          {isChecked ? 'CONCLUÍDO' : 'PENDENTE'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Layout Case: WEBSUPPORT OPERATOR VIDEO                      */}
            {currentLayoutType === 'video' && (
              <div className="md:col-span-12 flex flex-col items-center justify-center space-y-4">
                {activeSlide?.videoUrl ? (
                  <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden border border-white/5 shadow-2xl relative">
                    <video src={activeSlide.videoUrl} controls loop autoPlay muted className="w-full h-full object-cover animate-fadeIn" />
                    <div className="absolute top-2 left-2 bg-black/60 border border-white/5 text-[9px] font-mono text-white px-3 py-1 rounded">
                      TELEMETRIA PROCEDIMENTAL MP4 DE SUPORTE
                    </div>
                  </div>
                ) : (
                  <div className={`aspect-video w-full bg-[#16191E] text-slate-400 rounded-2xl flex flex-col items-center justify-center text-xs border border-dashed border-[#1E293B]`}>
                     <Layers className="w-10 h-10 text-slate-600 mb-2 animate-pulse" />
                     <span>Nenhum endereço de vídeo foi adicionado a este slide.</span>
                  </div>
                )}
                {activeSlide?.freeText && (
                  <p className="text-slate-300 text-xs leading-relaxed text-center max-w-2xl">
                    {activeSlide.freeText}
                  </p>
                )}
              </div>
            )}

            {/* Layout Case: GRAPHICAL PROCESS FLOW / FLOWCHART / TIMELINE      */}
            {currentLayoutType === 'flow' && (
              <div className="md:col-span-12 space-y-4">
                {activeSlide?.freeText && (
                  <p className="text-slate-350 text-xs italic text-center leading-relaxed">
                    {activeSlide.freeText}
                  </p>
                )}

                {/* Vertical / Horizontal Connective Timeline Node Diagram Graph */}
                <div className="p-4 bg-black/30 rounded-2xl border border-white/5 shadow-lg max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                    
                    {/* Render connectors for wide screens */}
                    <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-1 bg-white/5 -z-10" />

                    {(activeSlide?.flowNodes && activeSlide.flowNodes.length > 0) ? (
                      activeSlide.flowNodes.map((node, nodeIdx) => {
                        const isNodeStepActive = nodeIdx === (currentStep - 1);
                        const isNodeStepPassed = nodeIdx < (currentStep - 1);
                        
                        return (
                          <div 
                            key={node.id}
                            className={`flex flex-col items-center text-center p-4 rounded-xl border transition-all duration-300 relative animate-fadeIn ${
                              isNodeStepActive 
                                ? 'bg-black/60 border-blue-500 scale-102 shadow-lg' 
                                : isNodeStepPassed 
                                  ? 'bg-emerald-950/10 border-emerald-500/30' 
                                  : 'bg-[#121214]/40 border-[#1E293B]'
                            }`}
                            style={{
                              borderColor: isNodeStepActive ? activeAccentColor : undefined,
                              boxShadow: isNodeStepActive ? `0 0 15px ${activeAccentColor}` : 'none'
                            }}
                          >
                            <div 
                              className={`w-11 h-11 rounded-full flex items-center justify-center text-xs font-black font-mono shadow-md mb-3 shrink-0 ${
                                isNodeStepActive 
                                  ? 'text-black' 
                                  : isNodeStepPassed 
                                    ? 'bg-emerald-500 text-black' 
                                    : 'bg-[#1E293B] text-slate-400'
                              }`}
                              style={{
                                backgroundColor: isNodeStepActive ? activeAccentColor : undefined
                              }}
                            >
                              <span>0{nodeIdx + 1}</span>
                            </div>

                            <p className="text-xs font-bold text-white mb-1 line-clamp-1">{node.label}</p>
                            {node.description && (
                              <p className="text-[10px] text-slate-400 line-clamp-2">{node.description}</p>
                            )}
                          </div>
                        );
                      })
                    ) : (
                      <p className="text-[11px] text-slate-500 italic py-6 text-center md:col-span-3 w-full">
                        Nenhum nó de fluxo cadastrado. Adicione seus nós de timeline/processo no editor.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Layout Case: CONCLUSION (ENCERRAMENTO DE CURSO)                */}
            {currentLayoutType === 'conclusion' && (
              <div className="md:col-span-12 flex flex-col items-center text-center py-6 space-y-4 max-w-xl mx-auto">
                <div 
                  className={`w-14 h-14 rounded-full bg-[#121214] border shadow flex items-center justify-center animate-bounce`}
                  style={{ borderColor: activeAccentColor, boxShadow: `0 0 15px ${activeAccentColor}` }}
                >
                  <Award className="w-8 h-8" style={{ color: activeAccentColor }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-mono text-white tracking-widest uppercase mb-1">
                    🏁 CONCLUÍDO COM SUCESSO!
                  </h3>
                  <p className="text-xs text-slate-400 max-w-sm">
                    Você cruzou a linha de chegada de treinamento All-In. Revise seus indicadores ou encerre o cockpit.
                  </p>
                </div>
                {activeSlide?.freeText && (
                  <p className="text-xs text-slate-300 leading-relaxed bg-[#121214] p-3.5 border border-white/5 rounded-xl">
                    {activeSlide.freeText}
                  </p>
                )}
                
                <div className="flex gap-3 justify-center items-center">
                  <button
                    onClick={onExit}
                    className="relative overflow-hidden group px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-black italic rounded-lg text-xs tracking-wider uppercase transition shadow-lg cursor-pointer skew-x-[-12deg]"
                  >
                    <span className="inline-block skew-x-[12deg] flex items-center gap-1.5">
                      CONCLUIR CIRCUITO
                    </span>
                    <div className="absolute inset-0 w-1/3 h-full bg-white/20 -translate-x-full animate-shimmer pointer-events-none" />
                  </button>
                  <button
                    onClick={() => jumpToSlide(-1)}
                    className={`px-4 py-2 ${theme.btnSecondaryBg} ${theme.btnSecondaryText} hover:text-white rounded-lg text-xs font-bold font-mono border ${theme.borderColor} transition cursor-pointer`}
                  >
                    GRID DE INÍCIO
                  </button>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* RICH SYSTEM COMPONENT RENDERING WIDGETS                  */}
            {/* ======================================================== */}
            <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-1 gap-3.5 mt-2">
              
              {/* Alert Warning Component Option */}
              {activeSlide?.alertText && (
                <div className={`p-4 rounded-xl border-l-4 bg-red-950/15 border-red-500 text-[#FF8585] flex items-start gap-3 animate-fadeIn`}>
                  <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5 animate-pulse" />
                  <div className="text-xs font-semibold">
                    <span className="block font-bold text-red-400 uppercase tracking-widest text-[9px] mb-0.5">AVISO DE ALERTA DE SEGURANÇA</span>
                    <p>{activeSlide.alertText}</p>
                  </div>
                </div>
              )}

              {/* Tip Component Option */}
              {activeSlide?.tipText && (
                <div className={`p-4 rounded-xl border-l-4 bg-amber-500/10 border-amber-500 text-[#FCD34D] flex items-start gap-3 animate-fadeIn`}>
                  <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs font-semibold">
                    <span className="block font-bold text-amber-400 uppercase tracking-widest text-[9px] mb-0.5">DICA OPERACIONAL DE FIXAÇÃO</span>
                    <p>{activeSlide.tipText}</p>
                  </div>
                </div>
              )}

              {/* Highlight Focal Option */}
              {activeSlide?.highlightText && (
                <div className={`p-4 rounded-xl border-l-4 bg-[#7C3AED]/10 border-purple-500 text-[#D8B4FE] flex items-start gap-3 animate-fadeIn`}>
                  <Focus className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div className="text-xs font-semibold">
                    <span className="block font-bold text-purple-400 uppercase tracking-widest text-[9px] mb-0.5">FATOR DE IMPACTO ACENTUADO</span>
                    <p>{activeSlide.highlightText}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Progressive disclose instructions banner help indicator */}
            {activeSlide && getMaxSteps() > currentStep && (
              <div className={`md:col-span-12 bg-black/40 p-2.5 rounded-lg border border-dashed ${theme.borderColor} flex items-center justify-between text-[11px] text-slate-400 font-mono animate-pulse mt-4`}>
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" style={{ color: activeAccentColor }} />
                  <span>Espaço / Seta Direita / Toque tela para revelar o próximo tópico do slide!</span>
                </div>
                <span className="font-bold shrink-0" style={{ color: activeAccentColor }}>
                  ({currentStep} / {getMaxSteps()})
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Embedded Real-time Telemetry Dashboard Footer (Navigation) */}
      <div className="mt-auto pt-4 border-t border-white/5 select-none relative z-10 shrink-0">
        
        {/* Dynamic laser-glowing Progress indicator Line */}
        <div className={`relative w-full h-1 bg-black/50 rounded-full overflow-hidden mb-3.5 border ${theme.borderColor}`}>
          <div 
            className="absolute top-0 left-0 bottom-0 transition-all duration-300"
            style={{ 
              width: `${((currentSlideIndex + 2) / (presentation.slides.length + 1)) * 100}%`,
              backgroundColor: activeAccentColor,
              boxShadow: `0 0 10px ${activeAccentColor}`
            }}
          />
        </div>

        {/* Action Board lower navigation buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            
            {/* Visual safety indicators */}
            <div className="flex items-center gap-1.5" title="Integrity of active runtime status">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_#EF4444]" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 shadow-[0_0_8px_#D97706]" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10B981] animate-pulse" />
            </div>

            <div className={`h-4 w-px ${theme.borderColor}`} />

            <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
              <span className="text-[9px] uppercase tracking-widest opacity-60">PROCEDIMENTO:</span>
              <span className={`font-black tracking-wider text-sm`} style={{ color: activeAccentColor }}>
                {currentSlideIndex === -1 ? "GRID DE INÍCIO" : `LAP 0${currentSlideIndex + 1}`}
              </span>
              <span className="text-[10px] opacity-60">/ 0{presentation.slides.length}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={() => jumpToSlide(-1)}
              className={`px-3 py-1.5 text-[10.5px] font-mono font-bold uppercase rounded-lg transition-colors border cursor-pointer ${
                currentSlideIndex === -1 
                  ? 'text-black font-extrabold' 
                  : `bg-transparent text-slate-400 border-white/10 hover:text-white`
              }`}
              style={{
                backgroundColor: currentSlideIndex === -1 ? activeAccentColor : 'transparent',
                borderColor: currentSlideIndex === -1 ? 'transparent' : ''
              }}
            >
              📋 GRID INÍCIO
            </button>

            <button
              onClick={handlePrev}
              disabled={currentSlideIndex === -1 && currentStep === 1}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 ${theme.btnSecondaryBg} ${theme.btnSecondaryText} hover:text-white disabled:opacity-40 border ${theme.borderColor} rounded-lg text-xs font-bold font-mono transition-all cursor-pointer`}
            >
              <ArrowLeft className="w-3.5 h-3.5" /> VOLTAR
            </button>

            <button
              onClick={handleNext}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-5 py-2 hover:opacity-90 active:scale-[0.98] text-black font-black italic rounded-lg text-xs font-mono transition-all cursor-pointer`}
              style={{
                backgroundColor: activeAccentColor,
                boxShadow: `0 0 12px ${activeAccentColor}`
              }}
            >
              AVANÇAR <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
            </button>
          </div>
        </div>

        {/* Informative quick shortcuts */}
        <div className="hidden md:flex justify-center items-center gap-6 mt-4.5 text-[9px] text-slate-500 font-mono select-none">
          <span>DICA: Use a <kbd className="bg-black/40 px-1 py-0.5 rounded border border-white/5 text-slate-400 text-[8px]">Seta Direita</kbd> ou tecla <kbd className="bg-black/40 px-1 py-0.5 rounded border border-white/5 text-slate-400 text-[8px]">Espaço</kbd> para avançar tópicos progresivamente.</span>
          <span>●</span>
          <span>Seta Esquerda para retroceder passos ou slides.</span>
        </div>
      </div>
    </div>
  );
}
