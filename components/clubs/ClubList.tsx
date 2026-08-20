"use client";

import { useState, useEffect } from "react";
import { Club } from "@/types/club";
import ClubCard, { SkeletonCard } from "./ClubCard";
import { motion } from "framer-motion";

interface ClubListProps {
  clubs: Club[];
}

export default function ClubList({ clubs }: ClubListProps) {
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  // Arriving at /clubs#some-club, the browser looks for the anchor before the
  // skeleton has been replaced by real cards and finds nothing, so the jump is
  // lost. Scroll once the list is actually on the page.
  useEffect(() => {
    if (loading) return;
    const id = window.location.hash.slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [loading]);

  if (loading) {
    return (
      <div className="flex flex-col gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (clubs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-gray-500">
        <svg className="w-16 h-16 mb-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        <p className="text-lg font-medium">No clubs found</p>
        <p className="text-sm mt-1">Check back later for updates.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {clubs.map((club, index) => (
        <motion.div
          key={club.id}
          initial={{ opacity: 0, y: 40 }}       
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ClubCard
            club={club}
            index={index}
            expanded={expandedId === club.id}
            onToggle={() =>
              setExpandedId(expandedId === club.id ? null : club.id)
            }
          />
        </motion.div>
      ))}
    </div>
  );
}