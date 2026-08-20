"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef, useMemo } from "react";

export default function Header() {
  const pathname = usePathname();
  const isFlagshipActive = [
    "/flagship-events/summer-sprint",
    "/flagship-events/hello-world",
    "/flagship-events/ictc",
  ].includes(pathname);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const path01Controls = useAnimation();
  const path02Controls = useAnimation();
  const headerRef = useRef<HTMLElement>(null);

  const path01Variants = useMemo(() => {
    return {
      open: { d: "M3.06061 2.99999L21.0606 21" },
      closed: { d: "M0 9.5L24 9.5" },
    };
  }, []);

  const path02Variants = useMemo(() => {
    return {
      open: { d: "M3.00006 21.0607L21 3.06064" },
      moving: { d: "M0 14.5L24 14.5" },
      closed: { d: "M0 14.5L15 14.5" },
    };
  }, []);

  const onClick = async () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

    if (!isMobileMenuOpen) {
      await path02Controls.start(path02Variants.moving);
      path01Controls.start(path01Variants.open);
      path02Controls.start(path02Variants.open);
    } else {
      path01Controls.start(path01Variants.closed);
      await path02Controls.start(path02Variants.moving);
      path02Controls.start(path02Variants.closed);
    }
  };

  useEffect(() => {
    const handleClickOutside = async (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
        path01Controls.start(path01Variants.closed);
        await path02Controls.start(path02Variants.moving);
        path02Controls.start(path02Variants.closed);
        setIsMobileDropdownOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen, path01Controls, path02Controls, path01Variants, path02Variants]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full bg-[#00051A] backdrop-blur-md"
    >
      <div className="flex w-full h-[80px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LEFT: Logo / Title */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-md">
              <Image
                src="/stclogo.png"
                alt="STC IITP Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 56px, 120px"
                priority
                loading="eager"
              />
            </div>
            <span className="text-5xl font-bold tracking-tight text-white w-max">
              STC
            </span>
          </Link>
        </div>

        {/* RIGHT: Navigation Links and Button */}
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8">
            <ul
              className="flex items-center justify-end gap-6 text-[21px] font-normal font-['Space_Grotesk'] leading-[12px] tracking-[-0.7px] align-middle uppercase"
              style={{ leadingTrim: "none" } as any}
            >
              <li className="relative group">
                <Link
                  href="/"
                  className={`relative block py-1 before:absolute before:-inset-4 before:content-[''] transition-colors duration-300 ease-in-out group-hover:text-[#6BFB9A] ${pathname === "/" ? "text-[#6BFB9A]" : "text-[#94A3B8]"}`}
                >
                  <span className="inline-block transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:-translate-y-1 relative z-10">
                    HOME
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#6BFB9A] transition-all duration-300 w-0 ${pathname === "/" ? "" : "group-hover:w-full"}`}
                  ></span>
                </Link>
              </li>

              <li className="relative group">
                <button
                  onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)}
                  aria-expanded={isDesktopDropdownOpen}
                  aria-haspopup="true"
                  className={`cursor-pointer relative block py-1 before:absolute before:-inset-4 before:content-[''] transition-colors duration-300 ease-in-out group-hover:text-[#6BFB9A] ${isFlagshipActive ? "text-[#6BFB9A]" : "text-[#94A3B8]"}`}
                >
                  <span className="inline-block transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:-translate-y-1 relative z-10">
                    FLAGSHIP EVENTS
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#6BFB9A] transition-all duration-300 w-0 ${isFlagshipActive ? "" : "group-hover:w-full"}`}
                  ></span>
                </button>
                <div className={`absolute top-full left-0 mt-2 bg-[#00051A] shadow-lg rounded-md py-3 px-6 z-60 min-w-[180px] transition-all duration-300 group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible ${isDesktopDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                  <Link
                    href="/flagship-events/summer-sprint"
                    className="block text-[#94A3B8] hover:text-[#6BFB9A] transition-colors duration-200 py-2 text-[16px]"
                  >
                    SUMMER SPRINT
                  </Link>
                  <Link
                    href="/flagship-events/hello-world"
                    className="block text-[#94A3B8] hover:text-[#6BFB9A] transition-colors duration-200 py-2 text-[16px]"
                  >
                    HELLO WORLD
                  </Link>
                  <Link
                    href="/flagship-events/ictc"
                    className="block text-[#94A3B8] hover:text-[#6BFB9A] transition-colors duration-200 py-2 text-[16px]"
                  >
                    ICTC
                  </Link>
                </div>
              </li>

              <li className="relative group">
                <Link
                  href="/inter-iit"
                  className={`relative block py-1 before:absolute before:-inset-4 before:content-[''] transition-colors duration-300 ease-in-out group-hover:text-[#6BFB9A] ${pathname === "/inter-iit" ? "text-[#6BFB9A]" : "text-[#94A3B8]"}`}
                >
                  <span className="inline-block transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:-translate-y-1 relative z-10">
                    INTER IIT
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#6BFB9A] transition-all duration-300 w-0 ${pathname === "/inter-iit" ? "" : "group-hover:w-full"}`}
                  ></span>
                </Link>
              </li>

              <li className="relative group">
                <Link
                  href="/clubs"
                  className={`relative block py-1 before:absolute before:-inset-4 before:content-[''] transition-colors duration-300 ease-in-out group-hover:text-[#6BFB9A] ${pathname === "/clubs" ? "text-[#6BFB9A]" : "text-[#94A3B8]"}`}
                >
                  <span className="inline-block transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:-translate-y-1 relative z-10">
                    CLUBS
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#6BFB9A] transition-all duration-300 w-0 ${pathname === "/clubs" ? "" : "group-hover:w-full"}`}
                  ></span>
                </Link>
              </li>

              <li className="relative group">
                <Link
                  href="/team"
                  className={`relative block py-1 before:absolute before:-inset-4 before:content-[''] transition-colors duration-300 ease-in-out group-hover:text-[#6BFB9A] ${pathname === "/team" ? "text-[#6BFB9A]" : "text-[#94A3B8]"}`}
                >
                  <span className="inline-block transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:-translate-y-1 relative z-10">
                    TEAM
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#6BFB9A] transition-all duration-300 w-0 ${pathname === "/team" ? "" : "group-hover:w-full"}`}
                  ></span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button (Hamburger) */}
          <button onClick={onClick}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <motion.path
                {...path01Variants.closed}
                animate={path01Controls}
                transition={{ duration: 0.2 }}
                stroke="#FFFFFF"
                strokeWidth={2}
              />
              <motion.path
                {...path02Variants.closed}
                animate={path02Controls}
                transition={{ duration: 0.2 }}
                stroke="#FFFFFF"
                strokeWidth={2}
              />
            </svg>
          </button>
        </div>
      </div>

      {/*
        Mobile Navigation Menu — rendered as a FIXED overlay so it floats
        over page content rather than pushing it down.

        The translate-y trick gives a clean slide-down entry and slide-up
        exit. `pointer-events-none` while closed prevents invisible tap targets.
      */}
      <div
        className={`
          md:hidden
          fixed left-0 right-0
          top-[80px]               /* sits flush below the 80px header bar */
          bottom-0                 /* stretches to bottom for the backdrop */
          z-40
          transition-all duration-300 ease-in-out
          ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        {/* Semi-transparent backdrop — tap to close */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* The actual menu panel slides down from the top */}
        <div
          className={`
            relative
            bg-[#00051A] border-t border-gray-700 shadow-2xl
            px-6 py-6
            transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-4"}
          `}
        >
          <ul
            className="flex flex-col gap-1 text-[21px] font-normal font-['Space_Grotesk'] leading-normal tracking-[-0.7px] uppercase"
            style={{ leadingTrim: "none" } as any}
          >
            <li className="relative group w-full">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`relative flex items-center min-h-[44px] w-full transition-colors duration-300 ease-in-out group-hover:text-[#6BFB9A] ${pathname === "/" ? "text-[#6BFB9A]" : "text-[#94A3B8]"}`}
              >
                <span className="inline-block transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:-translate-y-1 relative z-10">
                  HOME
                </span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#6BFB9A] transition-all duration-300 w-0 ${pathname === "/" ? "" : "group-hover:w-full"}`}
                ></span>
              </Link>
            </li>

            <li className="relative group w-full">
              <div className="w-max">
                <button
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  aria-expanded={isMobileDropdownOpen}
                  aria-haspopup="true"
                  className={`cursor-pointer relative flex items-center min-h-[44px] w-full transition-colors duration-300 ease-in-out group-hover:text-[#6BFB9A] ${isFlagshipActive ? "text-[#6BFB9A]" : "text-[#94A3B8]"}`}
                >
                  <span className="inline-flex items-center gap-2 transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:-translate-y-1 relative z-10">
                    FLAGSHIP EVENTS
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className={`w-4 h-4 transition-transform duration-300 ${isMobileDropdownOpen ? "rotate-180" : ""}`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#6BFB9A] transition-all duration-300 w-0 ${isFlagshipActive ? "" : "group-hover:w-full"}`}
                  ></span>
                </button>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isMobileDropdownOpen
                    ? "max-h-64 opacity-100 mt-2"
                    : "max-h-0 opacity-0 mt-0"
                }`}
              >
                <div className="flex flex-col pl-4 border-l-2 border-gray-700 py-2">
                  <Link
                    href="/flagship-events/summer-sprint"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center min-h-[44px] text-[#94A3B8] hover:text-[#6BFB9A] transition-colors duration-200 text-[18px]"
                  >
                    SUMMER SPRINT
                  </Link>
                  <Link
                    href="/flagship-events/hello-world"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center min-h-[44px] text-[#94A3B8] hover:text-[#6BFB9A] transition-colors duration-200 text-[18px]"
                  >
                    HELLO WORLD
                  </Link>
                  <Link
                    href="/flagship-events/ictc"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center min-h-[44px] text-[#94A3B8] hover:text-[#6BFB9A] transition-colors duration-200 text-[18px]"
                  >
                    ICTC
                  </Link>
                </div>
              </div>
            </li>

            <li className="relative group w-full">
              <Link
                href="/inter-iit"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`relative flex items-center min-h-[44px] w-full transition-colors duration-300 ease-in-out group-hover:text-[#6BFB9A] ${pathname === "/inter-iit" ? "text-[#6BFB9A]" : "text-[#94A3B8]"}`}
              >
                <span className="inline-block transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:-translate-y-1 relative z-10">
                  INTER IIT
                </span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#6BFB9A] transition-all duration-300 w-0 ${pathname === "/inter-iit" ? "" : "group-hover:w-full"}`}
                ></span>
              </Link>
            </li>

            <li className="relative group w-full">
              <Link
                href="/clubs"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`relative flex items-center min-h-[44px] w-full transition-colors duration-300 ease-in-out group-hover:text-[#6BFB9A] ${pathname === "/clubs" ? "text-[#6BFB9A]" : "text-[#94A3B8]"}`}
              >
                <span className="inline-block transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:-translate-y-1 relative z-10">
                  CLUBS
                </span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#6BFB9A] transition-all duration-300 w-0 ${pathname === "/clubs" ? "" : "group-hover:w-full"}`}
                ></span>
              </Link>
            </li>

            <li className="relative group w-full">
              <Link
                href="/team"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`relative flex items-center min-h-[44px] w-full transition-colors duration-300 ease-in-out group-hover:text-[#6BFB9A] ${pathname === "/team" ? "text-[#6BFB9A]" : "text-[#94A3B8]"}`}
              >
                <span className="inline-block transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:-translate-y-1 relative z-10">
                  TEAM
                </span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#6BFB9A] transition-all duration-300 w-0 ${pathname === "/team" ? "" : "group-hover:w-full"}`}
                ></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
