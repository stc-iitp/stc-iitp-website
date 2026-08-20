"use client";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
// import EventsSection from "@/components/EventsSection";
import OneIITP from "@/components/OneIITP";
import CollabNest from "@/components/CollabNest";
import Alloc8 from "@/components/Alloc8";
import Celesta from "@/components/Celesta";
import AboutSection from "@/components/AboutSection";
import PhotosSection from "@/components/PhotosSection";
import ScrollReveal from "@/components/ScrollReveal";
import StudentClubsSection from "@/components/StudentClubsSection";

export default function Home() {
  return (
    <main>
      <div>
        <HeroSection />
        <ScrollReveal><div className="px-4 md:px-16"><AboutSection /></div></ScrollReveal>
        <ScrollReveal><MissionSection /></ScrollReveal>
        {/* <ScrollReveal><EventsSection /></ScrollReveal> */}
        <ScrollReveal><OneIITP /></ScrollReveal>
        <ScrollReveal><CollabNest /></ScrollReveal>
        <ScrollReveal><Alloc8 /></ScrollReveal>
        <ScrollReveal><StudentClubsSection /></ScrollReveal>
        <ScrollReveal><Celesta /></ScrollReveal>
        <ScrollReveal><PhotosSection /></ScrollReveal>
      </div>
    </main>
  );
}