import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import przedImage from '../assets/images/przed.webp';
import poImage from '../assets/images/po.webp';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  // Global mouse up listener
  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full"
    >
      {/* Slider Container */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl border border-slate-600"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* After Image (Bottom layer - full size, always visible) */}
        <img
          src={poImage}
          alt="Po czyszczeniu"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable={false}
        />
        {/* Label PO */}
        <div className="absolute top-4 right-4 px-4 py-2 bg-emerald-500/90 backdrop-blur-sm rounded-lg text-white font-bold text-sm uppercase tracking-wider shadow-lg z-10">
          Po czyszczeniu
        </div>

        {/* Before Image (Top layer - uses clip-path for reveal effect) */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={przedImage}
            alt="Przed czyszczeniem"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
          {/* Label PRZED */}
          <div className="absolute top-4 left-4 px-4 py-2 bg-red-500/90 backdrop-blur-sm rounded-lg text-white font-bold text-sm uppercase tracking-wider shadow-lg">
            Przed czyszczeniem
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Handle Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-slate-200 hover:scale-110 transition-transform">
            <div className="flex items-center gap-0.5">
              <svg className="w-3 h-3 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
              <svg className="w-3 h-3 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
              </svg>
            </div>
          </div>
          
          {/* Top decorative line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-full shadow"></div>
          {/* Bottom decorative line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-full shadow"></div>
        </div>

        {/* Gradient overlays for depth */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Instructions */}
      <p className="text-center text-slate-400 mt-4 text-sm">
        Przesuń suwak, aby zobaczyć różnicę
      </p>
    </motion.div>
  );
}
