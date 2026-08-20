"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const CLUBS: { id: number; name: string; logo: string }[] = [
  { id: 1,  name: "E-Cell",                          logo: "/clubs/ecell-logo.png" },
  { id: 2,  name: "NJack",                           logo: "/clubs/njack-logo.png" },
  { id: 3,  name: "Finance Club",                    logo: "/clubs/finance-logo.png" },
  { id: 4,  name: "Team Phoenix",                    logo: "/clubs/phonix-logo.png" },
  { id: 5,  name: "MoodBoard",                       logo: "/clubs/moodboard-logo.png" },
  { id: 6,  name: "Tinkerers' Lab",                  logo: "/clubs/tinklarer-logo.png" },
  { id: 7,  name: "Rocketry And Aviation",           logo: "/clubs/rnaa-logo.png" },
  { id: 8,  name: "Quantum Technology Club",         logo: "/clubs/qtc-logo.png" },
  { id: 9, name: "Sparkonics",                      logo: "/clubs/sparconics-logo.png" },
  { id: 10, name: "Astronomy And Particle Physics Club", logo: "/clubs/appc-logo.png" },
  { id: 11, name: "ChESSx",                          logo: "/clubs/chessx-logo.png" },
  { id: 12, name: "ACE",                             logo: "/clubs/ace-logo.png" },
  { id: 13, name: "MaTES",                           logo: "/clubs/mate-logo.png" },
  { id: 14, name: "SCME",                            logo: "/clubs/scmee-logo.png" },
  { id: 15, name: "Optimatx",                        logo: "/clubs/optimax-logo.png" },
  { id: 16, name: "Do Well, Do Good",                logo: "/clubs/dwdg-logo.png" },
];

const DOUBLED = [...CLUBS, ...CLUBS];

export default function StudentClubsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);
  const SPEED = 0.5;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      if (!pausedRef.current) {
        const totalWidth = track.scrollWidth / 2;
        posRef.current += SPEED;
        if (posRef.current >= totalWidth) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section className="relative w-full flex flex-col justify-center px-4 md:px-16 py-14 md:py-16 overflow-hidden">
      <div className="relative flex flex-col sm:flex-row items-center sm:items-end justify-between mb-8 gap-4">
        <h2 className="text-4xl md:text-6xl font-black uppercase text-white leading-none tracking-tight text-center sm:text-left font-['Barlow_Condensed',sans-serif]">
          STUDENT CLUBS
        </h2>

        <a href="/clubs" className="inline-flex items-center gap-3 border border-slate-500 px-6 py-3 text-xs font-semibold tracking-[0.25em] text-slate-300 transition-all duration-200 hover:border-slate-300 hover:text-white active:scale-95 font-['Space_Mono',monospace]">
          ENTER ARCHIVE →
        </a>
      </div>

      <div className="relative w-full h-px bg-slate-700 mb-10" />

      <div className="relative w-full overflow-hidden">
        <div ref={trackRef} className="flex items-start gap-10 will-change-transform w-max">
          {DOUBLED.map((club, i) => (
            <ClubCard key={`${club.id}-${i}`} club={club} />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <Link
          href="/clubs"
          className="inline-flex items-center gap-3 border border-slate-500 px-8 py-4 text-xs font-semibold tracking-[0.25em] text-slate-300 transition-all duration-200 hover:border-slate-300 hover:text-white active:scale-95 font-['Space_Mono',monospace]"
        >
          SEE MORE →
        </Link>
      </div>
    </section>
  );
}

interface ClubCardProps {
  club: { id: number; name: string; logo: string };
}

function ClubCard({ club }: ClubCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href="/clubs"
      aria-label={`View ${club.name} on the clubs page`}
      className="flex flex-col items-center gap-5 group w-[160px] shrink-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-40 h-40 rounded-full border border-slate-700 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-slate-400">
        <Image
          src={club.logo}
          alt={`${club.name} logo`}
          fill
          className="object-cover transition-opacity duration-300"
          sizes="160px"
        />

        {hovered && (
          <div className="absolute inset-0 rounded-full border border-slate-400 opacity-30 animate-ping" />
        )}
      </div>

      <p className="text-xs font-semibold tracking-[0.3em] text-slate-300 transition-colors duration-200 group-hover:text-white text-center font-['Space_Mono',monospace]">
        {club.name}
      </p>
    </Link>
  );
}