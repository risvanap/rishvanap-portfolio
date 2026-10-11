import React, { useState } from 'react';
import { 
  Maximize2, 
  Camera 
} from 'lucide-react';
import { CREATIVE_GALLERY_ITEMS } from '../data/portfolioData';
import type { CreativeItem } from '../data/portfolioData';

interface CreativeGalleryProps {
  onSelectItem: (item: CreativeItem) => void;
}

export const CreativeGallery: React.FC<CreativeGalleryProps> = ({ onSelectItem }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = ['All', 'Posters', 'Branding', 'Thumbnails', 'Video/Reels'];

  const filteredItems = CREATIVE_GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-[#080B12]/85 border-t border-white/5">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Camera size={12} />
              <span>Visual Arts & Media</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Creative Portfolio Gallery
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mt-3">
              An image-centric showcase of poster artwork, brand identities, high-retention video cuts, and promotional assets.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#101522] border border-white/10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === f
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-pink-500/40 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/10"
            >
              {/* Image Container with aspect ratio */}
              <div className={`w-full overflow-hidden bg-slate-900 ${
                item.aspectRatio === 'portrait'
                  ? 'aspect-[3/4]'
                  : item.aspectRatio === 'square'
                  ? 'aspect-square'
                  : 'aspect-[16/10]'
              }`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Hover Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B12]/95 via-[#080B12]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30">
                    {item.category}
                  </span>

                  <div className="p-2 rounded-full bg-white/10 text-white backdrop-blur-md">
                    <Maximize2 size={16} />
                  </div>
                </div>

                <h3 className="font-heading font-bold text-lg text-white mb-1">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-2 mb-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Static subtle tag when not hovered */}
              <div className="p-4 border-t border-white/5 flex items-center justify-between bg-[#0e1424]">
                <span className="text-xs font-medium text-white truncate max-w-[200px]">
                  {item.title}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
