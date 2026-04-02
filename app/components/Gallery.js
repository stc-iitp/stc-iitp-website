"use client";

import { useState } from "react";

const slides = [
  { src: "/events.WEBP", caption: "Summer Sprint Events" },
  { src: "/first.png",caption: "Summer Sprint Events" },
  { src: "/seond.png",caption: "Summer Sprint Events" },
];

const ArrowIcon = ({ size = 42 }) => (
  <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.0493 10.2584L34.1878 26.6559C34.5417 27.0137 34.7403 27.4967 34.7403 27.9999C34.7403 28.5032 34.5417 28.9862 34.1878 29.3439L18.0528 45.7414C17.699 46.1014 17.5008 46.586 17.5008 47.0907C17.5008 47.5954 17.699 48.0799 18.0528 48.4399C18.2256 48.6172 18.4322 48.7581 18.6603 48.8543C18.8884 48.9505 19.1335 49 19.381 49C19.6286 49 19.8737 48.9505 20.1018 48.8543C20.3299 48.7581 20.5365 48.6172 20.7093 48.4399L36.8443 32.0459C37.9045 30.9661 38.4985 29.5133 38.4985 27.9999C38.4985 26.4866 37.9045 25.0338 36.8443 23.9539L20.7093 7.55994C20.5364 7.38213 20.3296 7.2408 20.1012 7.14428C19.8727 7.04777 19.6273 6.99805 19.3793 6.99805C19.1313 6.99805 18.8858 7.04777 18.6574 7.14428C18.4289 7.2408 18.2221 7.38213 18.0493 7.55994C17.6955 7.91993 17.4973 8.40447 17.4973 8.90919C17.4973 9.41391 17.6955 9.89845 18.0493 10.2584Z" fill="white"/>
  </svg>
);

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const slide  = slides[current];
  const isFirst = current === 0;
  const isLast  = current === slides.length - 1;

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "12px", paddingBottom: "80px", alignItems: "center" }}>

      {/* IMAGE + ARROWS */}
      <div style={{ width: "100%", maxWidth: "900px", height: "499px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>

        <button onClick={() => setCurrent((c) => c - 1)} aria-label="Previous"
          style={{ position: "absolute", left: 0, width: "56px", height: "56px", background: "transparent", border: "none", cursor: isFirst ? "default" : "pointer", padding: 0, display: "flex", alignItems: "center", justifyContent: "center", transform: "rotate(180deg)", opacity: isFirst ? 0 : 1, pointerEvents: isFirst ? "none" : "auto", transition: "opacity 0.2s" }}>
          <ArrowIcon />
        </button>

        {slide.src ? (
          <img src={slide.src} alt={slide.caption} style={{ width: "100%", height: "100%", borderRadius: "20px", objectFit: "cover" }} />
        ) : (
          <div style={{ width: "100%", height: "100%", borderRadius: "20px", background: "linear-gradient(135deg, #0d1a2b, #1a2d47)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "12px", color: "rgba(255,255,255,0.3)", fontSize: "16px", fontFamily: "'Roboto', sans-serif" }}>
            <div style={{ width: "56px", height: "56px", border: "2px dashed rgba(255,255,255,0.2)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px" }}>🖼️</div>
            <span>Add event photos in /public folder</span>
          </div>
        )}

        <button onClick={() => setCurrent((c) => c + 1)} aria-label="Next"
          style={{ position: "absolute", right: 0, width: "56px", height: "56px", background: "transparent", border: "none", cursor: isLast ? "default" : "pointer", padding: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: isLast ? 0 : 1, pointerEvents: isLast ? "none" : "auto", transition: "opacity 0.2s" }}>
          <ArrowIcon />
        </button>
      </div>

      {/* CAPTION */}
      <p key={current} className="text-center text-[18px] md:text-[20px] font-bold text-white tracking-wide animate-[fadeInUp_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]">
        {slide.caption}
      </p>

      {/* BLUE DOTS — same as ICTC EventCarousel */}
      <div className="flex gap-[12px] mt-[8px]">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-[8px] rounded-full transition-all duration-500 ${index === current ? "w-[32px] bg-[#3b82f6] shadow-[0_0_10px_rgba(59,130,246,0.5)]" : "w-[8px] bg-gray-600 hover:bg-gray-400"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
