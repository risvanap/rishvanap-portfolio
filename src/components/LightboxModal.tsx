import React, { useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';
import type { CreativeItem } from '../data/portfolioData';

interface LightboxModalProps {
  item: CreativeItem | null;
  items: CreativeItem[];
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelectIndex
}) => {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelectIndex(prevIndex);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % items.length;
    onSelectIndex(nextIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        onSelectIndex(prevIndex);
      }
      if (e.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % items.length;
        onSelectIndex(nextIndex);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items.length, onClose, onSelectIndex]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fade-in-down"
      onClick={onClose}
    >
      {/* Top action bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-50">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-cyan-400 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-500/30">
            {item.category}
          </span>
          <span className="text-xs font-mono text-slate-400">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close Lightbox"
        >
          <X size={20} />
        </button>
      </div>

      {/* Prev button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/10 transition-colors z-40 hidden sm:flex items-center justify-center"
        aria-label="Previous creative item"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/10 transition-colors z-40 hidden sm:flex items-center justify-center"
        aria-label="Next creative item"
      >
        <ChevronRight size={24} />
      </button>

      {/* Main Image Container */}
      <div 
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl overflow-hidden border border-white/15 max-h-[70vh] shadow-2xl shadow-black">
          <img
            src={item.image}
            alt={item.title}
            className="w-auto h-auto max-h-[68vh] max-w-full object-contain"
          />
        </div>

        {/* Caption & Tool chips below image */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-1">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-3">
            {item.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {item.tools.map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/10 text-cyan-300 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
