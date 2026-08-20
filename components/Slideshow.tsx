"use client";
import { useState, useRef } from "react";
import Image from "next/image";

interface SlideshowProps {
  images: string[];
}

const Slideshow = ({ images }: SlideshowProps) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goNext = () => setCurrentIdx((prev) => (prev + 1) % images.length);
  const goPrev = () => setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? goNext() : goPrev();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/60 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0 z-0">
        {images.map((src, idx) => (
          <Image
            key={src}
            src={src}
            alt={`Slide ${idx + 1}`}
            fill
            sizes="65vw"
            priority={idx === 0}
            className={`object-cover transition-opacity duration-700 ${
              idx === currentIdx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Prev button */}
      <button
        onClick={goPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/40 backdrop-blur-sm border border-white/50 text-white text-xl flex items-center justify-center hover:bg-[#2448E3] hover:border-[#2448E3] transition-all duration-300 cursor-pointer touch-manipulation"
      >
        ‹
      </button>

      {/* Next button */}
      <button
        onClick={goNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/40 backdrop-blur-sm border border-white/50 text-white text-xl flex items-center justify-center hover:bg-[#2448E3] hover:border-[#2448E3] transition-all duration-300 cursor-pointer touch-manipulation"
      >
        ›
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIdx(idx)}
            className={`h-2 rounded-full transition-all duration-300 touch-manipulation ${
              idx === currentIdx ? "bg-white w-4" : "bg-white/40 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;