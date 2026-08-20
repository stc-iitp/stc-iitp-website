"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Club } from "@/types/club";
import ClubGallery from "./ClubGallery";
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { Globe } from "lucide-react";

interface ClubCardProps {
  club: Club;
  index: number;
  expanded: boolean;
  onToggle: () => void;
}

function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-2xl bg-blue-900/20 border border-blue-500/10 p-5 sm:p-6 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-800/40 flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-blue-800/40 rounded w-1/2" />
          <div className="h-3 bg-blue-800/30 rounded w-1/3" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-blue-800/30 rounded w-full" />
        <div className="h-3 bg-blue-800/30 rounded w-5/6" />
        <div className="h-3 bg-blue-800/30 rounded w-4/6" />
      </div>
    </div>
  );
}

export { SkeletonCard };

export default function ClubCard({ club, index, expanded, onToggle }: ClubCardProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [height, setHeight] = useState(0);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const fullHeight = el.scrollHeight;
    const COLLAPSED_HEIGHT = 115;
    setHeight(fullHeight);
    setIsOverflowing(fullHeight > COLLAPSED_HEIGHT);
  }, [club.description, expanded]);

  const COLLAPSED_HEIGHT = 115;
  const isEven = index % 2 === 0;

  return (
    <>
      <article
        id={club.id}
        className={`scroll-mt-28 group relative flex flex-col sm:flex-row ${
          isEven ? "sm:flex-row" : "sm:flex-row-reverse"
        } gap-5 sm:gap-8 md:gap-10 items-center sm:items-start bg-gradient-to-br from-[#123498]/80 to-[#0a0f2e]/80 border border-blue-500/15 rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]`}
      >
        {/* Accent line — hidden on mobile */}
        <div className="hidden sm:block absolute left-0 top-6 bottom-6 w-0.5 rounded-full bg-gradient-to-b from-transparent via-blue-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Logo + Social */}
        <div className="flex-shrink-0 flex flex-col items-center gap-3">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-blue-500/30 bg-blue-900/30 group-hover:border-blue-400/60 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
            {!imgError ? (
              <Image
                src={club.logo}
                alt={`${club.name} logo`}
                fill
                className="object-cover"
                onError={() => setImgError(true)}
                sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 160px"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-blue-400 font-bold text-xl">
                {club.name.charAt(0)}
              </div>
            )}
          </div>

          {/* Social Links */}
          <div className="flex items-center flex-wrap justify-center gap-2 max-w-[160px]">
            {club.socialLinks.instagram && (
              <a
                href={club.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${club.name} Instagram`}
                className="w-8 h-8 rounded-full border border-blue-500/30 flex items-center justify-center text-blue-400 hover:text-white hover:border-pink-400 hover:bg-pink-600/20 transition-all duration-200"
              >
                <FaInstagram size={14} />
              </a>
            )}
            {club.socialLinks.linkedin && (
              <a
                href={club.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${club.name} LinkedIn`}
                className="w-8 h-8 rounded-full border border-blue-500/30 flex items-center justify-center text-blue-400 hover:text-white hover:border-blue-400 hover:bg-blue-600/20 transition-all duration-200"
              >
                <FaLinkedin size={14} />
              </a>
            )}
            {club.socialLinks.youtube && (
              <a
                href={club.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${club.name} Youtube`}
                className="w-8 h-8 rounded-full border border-blue-500/30 flex items-center justify-center text-blue-400 hover:text-white hover:border-red-400 hover:bg-red-600/20 transition-all duration-200"
              >
                <FaYoutube size={14} />
              </a>
            )}
            {club.socialLinks.facebook && (
              <a
                href={club.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${club.name} Facebook`}
                className="w-8 h-8 rounded-full border border-blue-500/30 flex items-center justify-center text-blue-400 hover:text-white hover:border-blue-400 hover:bg-blue-600/20 transition-all duration-200"
              >
                <FaFacebook size={14} />
              </a>
            )}
            {club.socialLinks.website && (
              <a
                href={club.socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${club.name} website`}
                className="w-8 h-8 rounded-full border border-blue-500/30 flex items-center justify-center text-blue-400 hover:text-white hover:border-green-400 hover:bg-green-600/20 transition-all duration-200"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-3 w-full min-w-0">
          <div>
            <div className="flex items-start flex-wrap gap-2 mb-1">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
                {club.name}
              </h2>
              {club.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/20 font-medium whitespace-nowrap mt-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
            {club.department && (
              <p className="text-blue-400/70 text-sm font-medium">{club.department}</p>
            )}
          </div>

          <div>
            <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: expanded ? `${height}px` : `${COLLAPSED_HEIGHT}px` }}
            >
              <p
                ref={textRef}
                className="text-gray-200/80 text-sm leading-relaxed whitespace-pre-line"
              >
                {club.description}
              </p>
            </div>

            {isOverflowing && (
              <button
                onClick={onToggle}
                className="cursor-pointer mt-2 text-green-300 text-sm font-medium hover:text-green-400 transition"
              >
                {expanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>

          <button
            onClick={() => setGalleryOpen(true)}
            className="cursor-pointer self-start mt-1 flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium hover:bg-blue-600/40 hover:border-blue-400 hover:text-white transition-all duration-200 active:scale-95"
            aria-label={`View photos for ${club.name}`}
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            View Photos
          </button>
        </div>
      </article>

      {galleryOpen && (
        <ClubGallery
          clubName={club.name}
          photos={club.photos}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </>
  );
}