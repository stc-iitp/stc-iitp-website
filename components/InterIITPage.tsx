"use client";

import { useState } from "react";
import Image from "next/image";
import { m, LazyMotion, domAnimation, Variants } from "framer-motion";

interface Performance {
  problemStatement: string;
  category: "HIGH PREP" | "MID PREP" | "LOW PREP" | "NO PREP" | "RESEARCH AND INNOVATION";
  rank: number;
}

const performancesByYear: Record<string, Performance[]> = {
  "2023": [
    { "problemStatement": "JLR", "category": "HIGH PREP", "rank": 1 },
    { "problemStatement": "SAC", "category": "RESEARCH AND INNOVATION", "rank": 3 },
    { "problemStatement": "EC", "category": "RESEARCH AND INNOVATION", "rank": 3 },
    { "problemStatement": "IGDC", "category": "LOW PREP", "rank": 4 },
    { "problemStatement": "Math", "category": "NO PREP", "rank": 4 },
    { "problemStatement": "WorldQuant", "category": "HIGH PREP", "rank": 5 },
    { "problemStatement": "CERT-in", "category": "LOW PREP", "rank": 6 },
    { "problemStatement": "Trumio", "category": "HIGH PREP", "rank": 10 },
    { "problemStatement": "PanchayatiRaj", "category": "LOW PREP", "rank": 10 },
    { "problemStatement": "Mphasis", "category": "MID PREP", "rank": 11 },
    { "problemStatement": "Aptos", "category": "MID PREP", "rank": 12 },
    { "problemStatement": "Zelta", "category": "MID PREP", "rank": 12 },
    { "problemStatement": "DevRev", "category": "HIGH PREP", "rank": 14 },
    { "problemStatement": "Adobe", "category": "MID PREP", "rank": 14 },
    { "problemStatement": "Solinas", "category": "LOW PREP", "rank": 18 }
  ],
  "2024": [
    { "problemStatement": "EC", "category": "RESEARCH AND INNOVATION", "rank": 1 },
    { "problemStatement": "Pathway", "category": "HIGH PREP", "rank": 5 },
    { "problemStatement": "Bharatforge", "category": "MID PREP", "rank": 6 },
    { "problemStatement": "ideaForge", "category": "HIGH PREP", "rank": 7 },
    { "problemStatement": "FedEx", "category": "MID PREP", "rank": 9 },
    { "problemStatement": "IGDC", "category": "LOW PREP", "rank": 9 },
    { "problemStatement": "Albatross Energetics", "category": "LOW PREP", "rank": 10 },
    { "problemStatement": "Untrade", "category": "HIGH PREP", "rank": 11 },
    { "problemStatement": "Adobe", "category": "MID PREP", "rank": 12 },
    { "problemStatement": "ISRO", "category": "HIGH PREP", "rank": 13 },
    { "problemStatement": "HBCSE, TIFR", "category": "NO PREP", "rank": 13 },
    { "problemStatement": "Insolation Energy", "category": "LOW PREP", "rank": 14 },
    { "problemStatement": "Dream11", "category": "MID PREP", "rank": 20 },
    { "problemStatement": "SAC", "category": "RESEARCH AND INNOVATION", "rank": 20 },
    { "problemStatement": "Tessalate, CMI", "category": "NO PREP", "rank": 22 },
    { "problemStatement": "Rigbetel Labs", "category": "NO PREP", "rank": 22 }
  ],
  "2025": [
    { "problemStatement": "LAT Aerospace", "category": "HIGH PREP", "rank": 2 },
    { "problemStatement": "Pathway", "category": "HIGH PREP", "rank": 2 },
    { "problemStatement": "SAC", "category": "RESEARCH AND INNOVATION", "rank": 2 },
    { "problemStatement": "STEMvibe", "category": "NO PREP", "rank": 6 },
    { "problemStatement": "Drona Aviation", "category": "LOW PREP", "rank": 7 },
    { "problemStatement": "Game Connect (GDAI)", "category": "LOW PREP", "rank": 7 },
    { "problemStatement": "GenuityIO", "category": "NO PREP", "rank": 7 },
    { "problemStatement": "Jilo Health", "category": "NO PREP", "rank": 7 },
    { "problemStatement": "Adobe", "category": "MID PREP", "rank": 8 },
    { "problemStatement": "Ebullient Securities", "category": "HIGH PREP", "rank": 9 },
    { "problemStatement": "Arista Networks", "category": "HIGH PREP", "rank": 9 },
    { "problemStatement": "EC", "category": "RESEARCH AND INNOVATION", "rank": 9 },
    { "problemStatement": "ISRO VLSI", "category": "MID PREP", "rank": 10 },
    { "problemStatement": "Eternal", "category": "MID PREP", "rank": 14 },
    { "problemStatement": "ISRO Geospatial", "category": "MID PREP", "rank": 15 },
    { "problemStatement": "Qtrino Labs", "category": "LOW PREP", "rank": 17 },
    { "problemStatement": "Observe.AI", "category": "MID PREP", "rank": 18 }
  ]
};

// Inter IIT Tech Meet edition number for each hosting year.
const editionByYear: Record<string, string> = {
  "2025": "14.0",
  "2024": "13.0",
  "2023": "12.0",
};

const editionLabel = (year: string) =>
  editionByYear[year] ? `ED. ${editionByYear[year]} · ${year}` : year;

interface OverallStanding {
  year: string;
  rank: number;
  field: number;
}

// IIT Patna's overall standing at each Inter IIT Tech Meet, confirmed by STC.
// These are the official final standings — do not re-derive them from raw
// result sheets, which order teams by grand total and can disagree.
// Ordered oldest to newest so the strip reads left to right as a timeline.
const overallStandings: OverallStanding[] = [
  { year: "2023", rank: 8, field: 23 },
  { year: "2024", rank: 12, field: 23 },
  { year: "2025", rank: 9, field: 23 },
];

const visualArchiveImages = [
  "/interiit/interiit-1.jpeg",
  "/interiit/interiit-2.jpeg",
  "/interiit/interiit-3.jpeg",
  "/interiit/interiit-4.jpeg",
  "/interiit/interiit-5.jpeg",
  "/interiit/interiit-6.jpeg",
];

// ── Animation variants ─────────────────────────────────────────────────────
const customEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const heroHeadingVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(12px)", y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { delay: 0.1, duration: 1.8, ease: customEase },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: customEase } },
};

const fadeUpDelayed: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: customEase, delay: 0.25 } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const tableRowVariants: Variants = {
  hidden: { opacity: 0, x: -15, filter: "blur(4px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: customEase } },
};

const archiveGridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const archiveItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: customEase } },
};

const standingCellVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: customEase } },
};

// ── Sub-components ─────────────────────────────────────────────────────────
function StandingCell({
  standing,
  previous,
  isLatest,
}: {
  standing: OverallStanding;
  previous?: OverallStanding;
  isLatest: boolean;
}) {
  // A lower rank number is a better placing, so an improvement is the drop
  // from the previous edition's rank to this one's.
  const delta = previous ? previous.rank - standing.rank : 0;
  const improved = delta > 0;
  // Better placings fill more of the bar.
  const fill = ((standing.field - standing.rank + 1) / standing.field) * 100;

  return (
    <m.div
      variants={standingCellVariants}
      className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-6 first:border-t-0 first:pt-0 sm:first:border-l-0 sm:first:pl-0"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#94A3B8]">
          {editionLabel(standing.year)}
        </p>
        {isLatest ? (
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#21ED58] whitespace-nowrap">
            ● Active
          </span>
        ) : (
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/25 whitespace-nowrap">
            Archived
          </span>
        )}
      </div>

      <div className="flex items-baseline gap-2">
        <span
          className={`text-5xl md:text-6xl font-bold leading-none tracking-tight tabular-nums ${
            isLatest ? "text-[#21ED58]" : "text-white/70"
          }`}
        >
          {String(standing.rank).padStart(2, "0")}
        </span>
        <span className="font-mono text-[12px] text-white/40 tabular-nums">
          /{standing.field}
        </span>

        {previous && (
          <span
            className={`ml-auto font-mono text-[11px] tracking-[0.1em] whitespace-nowrap ${
              improved ? "text-[#21ED58]" : "text-[#F87171]"
            }`}
          >
            <span aria-hidden="true">
              {improved ? "▲" : "▼"}
              {Math.abs(delta)}
            </span>
            <span className="sr-only">
              {improved ? "Up" : "Down"} {Math.abs(delta)}{" "}
              {Math.abs(delta) === 1 ? "place" : "places"} from the previous
              edition
            </span>
          </span>
        )}
      </div>

      <div
        aria-hidden="true"
        className="h-[3px] w-full bg-white/10 overflow-hidden"
      >
        <div
          className={`h-full transition-[width] duration-700 ease-out motion-reduce:transition-none ${
            isLatest ? "bg-[#21ED58]" : "bg-white/30"
          }`}
          style={{ width: `${fill}%` }}
        />
      </div>
    </m.div>
  );
}

function ArchiveImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      className={`object-cover ${className}`}
      onError={() => {
        setImgSrc("/stclogo.png");
      }}
    />
  );
}

function GeometricGrid() {
  const outerW = 230;
  const outerH = 220;
  const cx = outerW / 2;
  const cy = outerH / 2;

  const nests = [
    { w: outerW, h: outerH },
    { w: outerW - 55, h: outerH - 55 },
    { w: outerW - 105, h: outerH - 105 },
  ];

  const green = "#21ED58";
  const greenFill = "rgba(33,237,88,0.09)";
  const blueFill = "rgba(20,60,160,0.09)";

  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
      <svg
        width={outerW}
        height={outerH}
        viewBox={`0 0 ${outerW} ${outerH}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        <rect x={0} y={0} width={cx} height={cy} fill={greenFill} />
        <rect x={cx} y={cy} width={cx} height={cy} fill={blueFill} />

        {nests.map((n, i) => {
          const x = (outerW - n.w) / 2;
          const y = (outerH - n.h) / 2;
          return (
            <rect
              key={i}
              x={x}
              y={y}
              width={n.w}
              height={n.h}
              stroke={green}
              strokeWidth={i === 0 ? 1.2 : 0.8}
              strokeOpacity={i === 0 ? 0.7 : 0.35}
            />
          );
        })}

        <line x1={0} y1={cy} x2={outerW} y2={cy} stroke={green} strokeWidth={0.6} strokeOpacity={0.5} />
        <line x1={cx} y1={0} x2={cx} y2={outerH} stroke={green} strokeWidth={0.6} strokeOpacity={0.5} />

        <g>
          <rect x={cx - 26} y={cy - 26} width={40} height={40} fill="#051650" />
          <rect x={cx - 18} y={cy - 18} width={24} height={24} rx={2} stroke={green} strokeWidth={4} fill="none" />
          <rect x={cx - 9.5} y={cy - 9.5} width={7} height={7} stroke={green} strokeWidth={4} fill="none" />
          <rect x={cx - 12} y={cy - 26} width={4} height={9} fill={green} />
          <rect x={cx - 4} y={cy - 26} width={4} height={9} fill={green} />
          <rect x={cx - 12} y={cy + 5} width={4} height={9} fill={green} />
          <rect x={cx - 4} y={cy + 5} width={4} height={9} fill={green} />
          <rect x={cx - 26} y={cy - 12} width={9} height={4} fill={green} />
          <rect x={cx - 26} y={cy - 4} width={9} height={4} fill={green} />
          <rect x={cx + 5} y={cy - 12} width={9} height={4} fill={green} />
          <rect x={cx + 5} y={cy - 4} width={9} height={4} fill={green} />
        </g>

        <text
          x={outerW - 6}
          y={outerH - 7}
          fontFamily="monospace"
          fontSize={8}
          fill={green}
          fillOpacity={0.55}
          textAnchor="end"
          letterSpacing="1.5"
        >
          SYS.OP.ON
        </text>
      </svg>
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────
export default function InterIITPage() {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const years = Object.keys(performancesByYear).sort((a, b) => +b - +a);
  const performances = performancesByYear[selectedYear] ?? [];

  const scrollToArchive = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("archive");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <main
        className="min-h-screen w-full text-white overflow-hidden"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {/* ── Hero Section ─────────────────────────────────────────── */}
        {/* FIX 1: Removed min-h-[480px] on mobile to prevent empty gap. Kept md:min-h-[520px] for desktop/tablet. */}
        <section className="relative w-full md:min-h-[520px] flex flex-col md:flex-row items-stretch overflow-hidden border-b border-white/5">
          <div
            className="relative z-10 flex flex-col justify-center px-6 sm:px-10 md:px-16 py-20 md:py-16 w-full md:w-[62%]"
            style={{
              backgroundImage: `
                linear-gradient(to right,  rgba(33,237,88,0.18) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(33,237,88,0.18) 1px, transparent 1px)
              `,
              backgroundSize: "33.333% 33.333%",
            }}
          >
            <m.p
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="font-mono text-[10px] tracking-[0.25em] text-[#21ED58]/80 mb-5 flex items-center gap-2"
            >
              <span className="inline-block w-6 h-px bg-[#21ED58]/60" />
              LEGACY DATABASE: IITP
            </m.p>

            <m.h1
              variants={heroHeadingVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight uppercase mb-5"
            >
              INTER IIT
              <br />
              TECH MEET
            </m.h1>

            <m.div
              variants={fadeUpDelayed}
              initial="hidden"
              animate="visible"
              className="flex items-stretch gap-0 mb-7 w-max"
            >
              <div className="w-1 bg-[#21ED58] rounded-sm" />
              <p className="pl-3 text-[#94A3B8] text-[14px] md:text-base leading-relaxed">
                A legacy of engineering excellence.
              </p>
            </m.div>

            <m.a
              variants={fadeUpDelayed}
              initial="hidden"
              animate="visible"
              href="#archive"
              onClick={scrollToArchive}
              className="cursor-pointer inline-flex items-center gap-2 border border-[#21ED58] px-5 py-2.5 text-xs font-mono tracking-[0.2em] uppercase text-[#21ED58]/80 hover:text-[#21ED58] transition-all duration-300 w-max group bg-[#21ED58]/5"
            >
              ENTER ARCHIVE
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </m.a>
          </div>

          <m.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex relative w-full md:w-[38%] flex-col items-center justify-center py-12 md:py-0 bg-[#020611]"
          >
            <div className="absolute top-0 left-0 w-[90%] h-[10px] bg-[#21ED58]/15 z-20" />
            <div className="hidden md:block absolute top-[10px] left-0 w-[8px] h-[calc(100%-10px)] bg-[#21ED58]/15 z-20" />
            <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-[radial-gradient(circle_at_top_left,rgba(33,237,88,0.06),transparent_60%)] pointer-events-none z-10" />

            <div className="w-full h-full flex items-center justify-center px-8 relative z-10">
              <GeometricGrid />
            </div>

            <div className="md:absolute bottom-6 right-8 mt-8 md:mt-0 font-mono text-[9px] text-center md:text-right leading-5 z-10">
              <span className="text-white">LAT. 25.5809° N</span>
              <br />
              <span className="text-white">LONG. 84.8326° E</span>
              <br />
              <span className="text-[#21ED58]">STATUS: ACTIVE</span>
            </div>
          </m.div>
        </section>

        {/* ── Mandate Section ──────────────────────────────────────── */}
        <m.section
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full px-6 sm:px-10 lg:pl-[200px] lg:pr-[180px] py-16 lg:py-[128px] border-b border-[#5EAF73]/20 flex justify-center scroll-mt-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 lg:gap-[150px] w-full max-w-[1600px]">
            {/* FIX 2: Removed text-center so it stays left-aligned everywhere, matching the hero section */}
            <div className="flex-1 min-w-0 w-full text-left">
              <p
                className="font-mono text-[#21ED58] uppercase font-semibold mb-4 tracking-[0.3em]"
                style={{ fontSize: "30px" }}
              >
                Mandate
              </p>
              <p className="text-[#94A3B8] text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.75]">
                The Students&apos; Technical Council (STC) of IIT Patna serves as
                the vanguard for technological innovation and competitive
                excellence. This ledger stands as the unflinching, immutable
                record of our institutional performance at the annual Inter IIT
                Tech Meet — a crucible where the nation&apos;s premier engineering
                minds converge. Every entry herein represents rigorous
                engineering, strategic foresight, and the relentless pursuit of
                absolute technical superiority.
              </p>
            </div>

            <m.div
              variants={fadeUpDelayed}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="hidden md:block flex-shrink-0 w-full md:max-w-[350px] lg:max-w-[428px] aspect-square relative"
            >
              <Image
                src="/technical-schematic.png"
                alt="Technical schematic graphic"
                fill
                sizes="(max-width: 768px) 100vw, 428px"
                style={{ objectFit: "contain" }}
              />
            </m.div>
          </div>
        </m.section>

        {/* ── Overall Standing ──────────────────────────────────────── */}
        <m.section
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full px-6 sm:px-10 md:px-16 py-12 md:py-16 border-b border-[#5EAF73]/20"
        >
          <div className="mb-8 border-b border-white/10 pb-6">
            <p className="font-mono text-[9px] tracking-[0.25em] text-[#21ED58]/80 uppercase mb-2">
              Institutional Rank / All Editions
            </p>
            <h2 className="text-xl md:text-2xl font-bold tracking-wide uppercase text-white">
              Overall Standing
            </h2>
          </div>

          <m.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
          >
            {overallStandings.map((standing, i) => (
              <StandingCell
                key={standing.year}
                standing={standing}
                previous={i > 0 ? overallStandings[i - 1] : undefined}
                isLatest={i === overallStandings.length - 1}
              />
            ))}
          </m.div>
        </m.section>

        {/* ── Performance Table ─────────────────────────────────────── */}
        <section id="archive" className="w-full px-6 sm:px-10 md:px-16 py-16 lg:pb-20">
          <m.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 border-b border-white/10 pb-6 gap-4"
          >
            <div>
              <p className="font-mono text-[9px] tracking-[0.25em] text-[#21ED58]/80 uppercase mb-2">
                Active Database View
              </p>
              <h2 className="text-xl md:text-2xl font-bold tracking-wide uppercase text-white">
                Top Performances
              </h2>
            </div>

            <div className="relative w-full sm:w-auto">
              <button
                onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                className="cursor-pointer flex items-center justify-between sm:justify-start w-full sm:w-auto gap-3 border border-[#21ED58] px-4 py-2 font-mono text-xs tracking-[0.15em] text-[#21ED58] hover:bg-[#21ED58]/10 transition-all duration-200"
              >
                {editionLabel(selectedYear)}
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${isYearDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {isYearDropdownOpen && (
                <div className="absolute right-0 top-full mt-1 bg-[#00072D] border border-[#21ED58]/50 z-30 min-w-full">
                  {years.map((yr) => (
                    <button
                      key={yr}
                      onClick={() => {
                        setSelectedYear(yr);
                        setIsYearDropdownOpen(false);
                      }}
                      className={`cursor-pointer block w-full text-left px-4 py-2 font-mono text-xs tracking-[0.15em] transition-colors duration-150
                        ${yr === selectedYear ? "text-[#21ED58] bg-[#21ED58]/10" : "text-white/50 hover:text-white hover:bg-white/5"}`}
                    >
                      {editionLabel(yr)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </m.div>

          <div className="w-full overflow-x-auto pb-4">
            <table className="w-full text-left border-collapse min-w-[360px]">
              <m.thead
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <tr className="border-b border-white/10">
                  {["PROBLEM STATEMENT", "CATEGORY", "RANK"].map((h) => (
                    <th
                      key={h}
                      className="pb-4 font-mono text-[13px] sm:text-[15px] tracking-[0.2em] text-[#94A3B8] uppercase pr-4 md:pr-6 whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </m.thead>
              <m.tbody
                key={selectedYear}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
              >
                {performances.map((p) => (
                  <m.tr
                    key={p.problemStatement}
                    variants={tableRowVariants}
                    className="border-b border-white/5 hover:bg-white/[0.02] transition-colors duration-150 group"
                  >
                    <td className="py-5 pr-4 md:pr-6 text-[14px] text-white">
                      {p.problemStatement}
                    </td>
                    <td className="py-5 pr-4 md:pr-6 font-mono text-[12px] tracking-[0.1em] text-white whitespace-nowrap">
                      {p.category}
                    </td>
                    <td className="py-5 font-mono text-[11px] text-[#94A3B8]">
                      <span className="border border-white/20 px-2 py-1 rounded-[2px]">
                        {String(p.rank).padStart(2, "0")}
                      </span>
                    </td>
                  </m.tr>
                ))}
              </m.tbody>
            </table>
          </div>
        </section>

        {/* ── Visual Archives ───────────────────────────────────────── */}
        <m.section
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full px-6 sm:px-10 md:px-16 pb-24 scroll-mt-10"
        >
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold tracking-wide uppercase text-[#21ED58]">
              Visual Archives
            </h2>
            <p className="font-mono text-[12px] tracking-[0.2em] text-white/30 mt-1 uppercase">
              Sector Records / Media
            </p>
          </div>

          <m.div
            variants={archiveGridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2"
          >
            {visualArchiveImages.slice(0, 2).map((src, index) => (
              <m.div
                key={index}
                variants={archiveItemVariants}
                className="aspect-[4/3] overflow-hidden relative bg-[#0a1020]"
              >
                <ArchiveImage src={src} alt={`Archive Image ${index + 1}`} />
                <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-300" />
                <div className="absolute inset-0 border border-transparent hover:border-[#21ED58]/20 transition-colors duration-300 pointer-events-none" />
              </m.div>
            ))}

            <m.div
              variants={archiveItemVariants}
              className="row-span-1 lg:row-span-2 aspect-[4/3] lg:aspect-auto overflow-hidden relative bg-[#090f1a]"
            >
              <ArchiveImage src={visualArchiveImages[2] || "/archive-3.jpg"} alt="Archive Image 3" />
              <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-300" />
              <div className="absolute inset-0 border border-transparent hover:border-[#21ED58]/20 transition-colors duration-300 pointer-events-none" />
            </m.div>

            {visualArchiveImages.slice(3, 6).map((src, index) => (
              <m.div
                key={index + 3}
                variants={archiveItemVariants}
                className="aspect-[4/3] overflow-hidden relative bg-[#0a1020]"
              >
                <ArchiveImage src={src} alt={`Archive Image ${index + 4}`} />
                <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-300" />
                <div className="absolute inset-0 border border-transparent hover:border-[#21ED58]/20 transition-colors duration-300 pointer-events-none" />
              </m.div>
            ))}

            <m.div
              variants={archiveItemVariants}
              className="aspect-[4/3] bg-[#00072D] border border-[#21ED58]/20 overflow-hidden relative flex flex-col items-center justify-center gap-3"
            >
              <svg
                className="w-7 h-7 text-[#21ED58]/60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
                />
              </svg>
              <p className="font-mono text-[9px] tracking-[0.2em] text-[#21ED58]/60 uppercase text-center">
                End of Record
              </p>
            </m.div>
          </m.div>
        </m.section>
      </main>
    </LazyMotion>
  );
}