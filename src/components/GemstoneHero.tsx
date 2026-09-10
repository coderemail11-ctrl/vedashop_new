import React from 'react';
import { Search, Sparkles, Compass, Gem } from 'lucide-react';

interface GemstoneHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onCategorySelect: (categorySlug: string) => void;
}

export const GemstoneHero: React.FC<GemstoneHeroProps> = ({
  searchQuery,
  onSearchChange,
  onCategorySelect
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-amber-950 via-amber-900 to-amber-950 text-amber-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-amber-500/20">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium tracking-wide mb-6">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Vedic Gemstone Marketplace • 100% Certified Natural</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-amber-100 tracking-tight leading-tight mb-4">
          Discover Your <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-300 bg-clip-text text-transparent">Perfect Gemstone</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-amber-200/90 max-w-2xl mx-auto font-light mb-8">
          Explore natural gemstones curated for beauty, tradition, and timeless elegance. Certified natural Vedic Rashi Ratnas & collector rarities.
        </p>

        {/* Hero Search Box */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative flex items-center bg-amber-900/60 backdrop-blur-md border border-amber-500/40 rounded-full p-1.5 shadow-2xl focus-within:border-amber-400 focus-within:ring-2 focus-within:ring-amber-500/30 transition-all">
            <Search className="w-5 h-5 text-amber-400 ml-3.5 flex-shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by gem name, Vedic name (e.g. Neelam, Pukhraj)..."
              className="w-full bg-transparent px-3 py-2 text-sm sm:text-base text-amber-100 placeholder-amber-400/60 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="text-xs text-amber-400 hover:text-amber-200 px-2 py-1"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
          <button
            onClick={() => onCategorySelect('zodiac-stones')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 text-amber-950 font-semibold text-sm hover:bg-amber-400 transition-colors shadow-lg hover:shadow-amber-500/25"
          >
            <Compass className="w-4 h-4" />
            Browse Zodiac Stones
          </button>
          <button
            onClick={() => onCategorySelect('exclusive')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-950/80 border border-amber-500/50 text-amber-200 font-semibold text-sm hover:bg-amber-900 transition-colors shadow-lg"
          >
            <Gem className="w-4 h-4 text-amber-400" />
            Explore Exclusive Gems
          </button>
        </div>
      </div>
    </div>
  );
};
