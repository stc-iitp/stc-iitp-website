"use client";

import { useState } from "react";
import { m, LazyMotion, domAnimation, Variants } from "framer-motion";
import EventCarousel from "@/components/EventCarousel";
import YearSelector from "@/components/YearSelectorHW";
import AnimatedRowHW from "@/components/AnimatedRowHW";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  timelineData,
  leaderboardData,
  carouselSlides,
} from "@/data/helloworldData";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const heroHeadingVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { delay: 0.08, duration: 2.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HelloWorldPage() {
  const [timelineYear, setTimelineYear] = useState("2025");
  const [leaderboardYear, setLeaderboardYear] = useState("2025");

  const [timelineHeaderRef, timelineHeaderVisible] =
    useScrollReveal<HTMLDivElement>(0.1);
  const [leaderboardHeaderRef, leaderboardHeaderVisible] =
    useScrollReveal<HTMLDivElement>(0.1);

  const carouselImages = carouselSlides.map((slide, i) => ({
    id: i,
    src: slide.src,
  }));

  return (
    <LazyMotion features={domAnimation}>
      {/* 1. Applied ICTC Outer Main Dimensions */}
      <main className="min-h-screen flex flex-col items-center font-manrope text-white overflow-x-hidden">
        {/* 2. Applied ICTC Inner max-w-6xl and px-6 md:px-12 */}
        <div className="w-full max-w-6xl px-6 md:px-12 flex flex-col pt-10 pb-[100px]">
          {/* HERO SECTION */}
          <section className="relative flex items-center justify-center pt-4 sm:pt-8 md:pt-10 pb-20 sm:pb-32">
            <m.h1
              variants={heroHeadingVariants}
              initial="hidden"
              animate="visible"
              className="text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-widest"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-blue-500">
                HELLO WORLD
              </span>
            </m.h1>
          </section>

          {/* ABOUT SECTION */}
          <m.section
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full pb-10 sm:pb-14"
          >
            <h2 className="text-[28px] md:text-[32px] font-bold mb-[24px] text-white tracking-wide font-roboto">
              About
            </h2>
            <p className="text-[#94a3b8] text-[16px] md:text-[18px] leading-[1.8] md:leading-[2] text-justify font-light">
              Hello World is the Student Technical Council's welcome to every
              incoming batch at IIT Patna. Over three days, each technical club
              on campus takes the stage to introduce what it does, the projects
              it runs and the competitions it enters, so that first year
              students can see the full breadth of technical life here before
              deciding where they want to spend their time.

              Sessions run back to back across all clubs, from robotics and
              coding to finance, design and astronomy, and close with the
              Celesta exhibition. Freshers earn points for participating through
              the event, and the leaderboard below records who finished on top.
              For most students it is the first thing they do with STC, and for
              many it is where they find the club they stay with for the next
              four years.
            </p>
          </m.section>

          {/* TIMELINE SECTION */}
          <m.section
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full pb-10 sm:pb-14"
          >
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center justify-between mb-3">
              <h2 className="text-white font-extrabold text-3xl md:text-4xl">
                Event Time Line
              </h2>
              <YearSelector
                availableYears={Object.keys(timelineData)}
                year={timelineYear}
                onChange={setTimelineYear}
              />
            </div>

            <div className="w-full overflow-x-auto pb-4 no-scrollbar mt-6">
              <div className="min-w-[500px] md:min-w-full flex flex-col font-roboto">
                <div
                  ref={timelineHeaderRef}
                  className="grid grid-cols-2 items-center bg-white border-b border-white/10 rounded-t-[20px] h-[53px]"
                  style={{
                    opacity: timelineHeaderVisible ? 1 : 0,
                    transform: timelineHeaderVisible
                      ? "translateX(0px)"
                      : "translateX(40px)",
                    transition:
                      "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
                  }}
                >
                  {["CLUB", "DATES"].map((h) => (
                    <div
                      key={h}
                      className="flex items-center justify-center font-bold text-[13px] md:text-[15px] tracking-[0.15em] text-[#00051A] uppercase"
                    >
                      {h}
                    </div>
                  ))}
                </div>

                {(timelineData[timelineYear] ?? []).map((row, i) => (
                  <AnimatedRowHW key={`${timelineYear}-${i}`} index={i}>
                    <div className="grid grid-cols-2 text-[14px] md:text-[16px] h-16 items-center text-center">
                      <div className="font-bold text-white">{row.club}</div>
                      <div className="font-normal text-white/70">
                        {row.dates}
                      </div>
                    </div>
                  </AnimatedRowHW>
                ))}
              </div>
            </div>
          </m.section>

          {/* LEADERBOARD SECTION */}
          <m.section
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full pb-10 sm:pb-14"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-white font-extrabold text-3xl md:text-4xl">
                Leaderboard
              </h2>

              {/* Only show the selector if there's more than one year of data available */}
              {Object.keys(leaderboardData).length > 1 && (
                <YearSelector
                  availableYears={Object.keys(leaderboardData)}
                  year={leaderboardYear}
                  onChange={setLeaderboardYear}
                />
              )}
            </div>

            <div className="w-full overflow-x-auto pb-4 no-scrollbar">
              <div className="min-w-[600px] md:min-w-full flex flex-col font-roboto">
                <div
                  ref={leaderboardHeaderRef}
                  className="grid grid-cols-4 items-center bg-white border-b border-white/10 rounded-t-[20px] h-[53px]"
                  style={{
                    opacity: leaderboardHeaderVisible ? 1 : 0,
                    transform: leaderboardHeaderVisible
                      ? "translateX(0px)"
                      : "translateX(40px)",
                    transition:
                      "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
                  }}
                >
                  {["Position", "Name", "Roll Number", "Total Score"].map(
                    (h) => (
                      <div
                        key={h}
                        className="flex items-center justify-center font-bold text-[13px] md:text-[15px] tracking-[0.15em] text-[#00051A] uppercase"
                      >
                        {h}
                      </div>
                    ),
                  )}
                </div>

                {/* Renders data for the selected year, or 2025 as a safe fallback */}
                {(
                  leaderboardData[leaderboardYear] ||
                  leaderboardData["2025"] ||
                  []
                ).map((row, i) => (
                  <AnimatedRowHW key={`${leaderboardYear}-${i}`} index={i}>
                    <div className="grid grid-cols-4 text-[13px] md:text-[15px] h-16 items-center text-center">
                      <div className="font-bold text-white">{row.position}</div>
                      <div className="font-bold text-white">{row.name}</div>
                      <div className="font-normal text-white/70 truncate px-2">
                        {row.rollNumber}
                      </div>
                      <div className="font-semibold text-[#3b82f6]">
                        {row.totalScore}
                      </div>
                    </div>
                  </AnimatedRowHW>
                ))}
              </div>
            </div>
          </m.section>

          {/* CAROUSEL SECTION */}
          <m.section
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full pb-8 sm:pb-12"
          >
            <EventCarousel images={carouselImages} />
          </m.section>
        </div>
      </main>
    </LazyMotion>
  );
}
