'use client';
import { useState, useEffect, useRef } from 'react';

const fullText = "STUDENTS TECHNICAL COUNCIL";
const TYPING_SPEED = 70;
const START_DELAY = 800;

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [typingDone, setTypingDone] = useState(false);
  const idxRef = useRef(0);

  useEffect(() => {
    if (idxRef.current >= fullText.length) {
      setDisplayedText(fullText);
      setTypingDone(true);
      return;
    }

    let interval: ReturnType<typeof setInterval>;

    const delay = setTimeout(() => {
      interval = setInterval(() => {
        const next = idxRef.current + 1;
        setDisplayedText(fullText.slice(0, next));
        idxRef.current = next;
        if (next >= fullText.length) {
          clearInterval(interval);
          setTypingDone(true);
        }
      }, TYPING_SPEED);
    }, START_DELAY);

    return () => {
      clearTimeout(delay);
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16 relative overflow-hidden"
    >
      <video
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover z-0 blur-[4px]"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/HERO/hero-poster.webp"
      >
        <source src="/HERO/hero_vide.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/55 z-[1]" />

      <div className="relative z-[2] flex flex-col items-center text-center w-full">
        

        <h1 
          className="font-black text-white mb-6 md:mb-10 text-5xl md:text-7xl lg:text-[88px] leading-tight md:leading-[79.2px] tracking-tighter font-[family-name:var(--font-inter)] [text-shadow:0px_2px_12px_rgba(0,0,0,0.85)]"
        >
          {typingDone ? fullText : displayedText}
          <span className={`inline-block w-[3px] h-[70px] bg-white ml-1 align-middle transition-opacity duration-300 ${typingDone ? "opacity-0" : "opacity-100 animate-[blink_1s_step-end_infinite]"}`} />
        </h1>

        <p 
          className={`text-white max-w-[640px] text-sm md:text-base leading-relaxed font-[family-name:var(--font-inter)] font-normal [text-shadow:0px_1px_8px_rgba(0,0,0,0.75)] transition-all duration-[900ms] delay-[400ms] ease-out ${typingDone ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[12px]"}`}
        >
          The Student Technical Council at IIT Patna is the apex body of all
          technical activities on campus. We foster innovation, organize technical
          events, manage clubs, and provide a platform for students to showcase
          their talents. From workshops to hackathons, from seminars to
          competitions, STC is at the forefront of technical excellence at IIT
          Patna, empowering students to learn, create, and innovate.
        </p>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;