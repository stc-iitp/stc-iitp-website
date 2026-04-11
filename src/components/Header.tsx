"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
	const pathname = usePathname();
	const isFlagshipActive = ["/summer-sprint", "/hello-world", "/ictc"].includes(
		pathname,
	);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full bg-[#1A2238] shadow-md">
			<div className="flex w-full h-[80px] items-center justify-between px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
				{/* LEFT: Logo / Title */}
				<div className="flex items-center">
					<Link href="/" className="flex items-center gap-3">
						<div className="relative h-10 w-10 overflow-hidden rounded-md">
							<Image
								src="/stclogo.png"
								alt="STC IITP Logo"
								fill
								className="object-contain"
								sizes="40px"
								priority
							/>
						</div>
						<span className="text-3xl font-bold tracking-tight text-white w-max">
							STC
						</span>
					</Link>
				</div>

				{/* RIGHT: Navigation Links and Button */}
				<div className="flex items-center gap-8">
					<nav className="hidden md:flex items-center gap-8">
						<ul className="flex items-center justify-end gap-8 text-sm font-medium tracking-wide uppercase">
							<li className="relative group">
								<Link
									href="/"
									className={`relative block py-1 before:absolute before:-inset-4 before:content-[''] transition-colors duration-300 ease-in-out group-hover:text-[#6BFB9A] ${pathname === "/" ? "text-[#6BFB9A]" : "text-[#94A3B8]"}`}
								>
									<span className="inline-block transition-transform duration-300 ease-in-out relative z-10">
										HOME
									</span>
								</Link>
							</li>

							<li className="relative group">
								<button
									onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
									className={`flex items-center gap-1 relative py-1 before:absolute before:-inset-4 before:content-[''] transition-colors duration-300 ease-in-out group-hover:text-[#6BFB9A] ${isFlagshipActive ? "text-[#6BFB9A]" : "text-[#94A3B8]"}`}
								>
									<span className="inline-block transition-transform duration-300 ease-in-out relative z-10">
										FLAGSHIP EVENTS
									</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={2}
										stroke="currentColor"
										className={`w-3 h-3 transition-transform duration-300 ${isMobileDropdownOpen ? "rotate-180" : ""}`}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19.5 8.25l-7.5 7.5-7.5-7.5"
										/>
									</svg>
								</button>
								{/* Desktop Dropdown Menu (WITH ACTIVE HIGHLIGHTS) */}
								<div className="absolute top-full left-0 mt-4 bg-[#1A2238] border border-gray-700 shadow-lg rounded-md py-3 px-6 z-60 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
									<Link
										href="/summer-sprint"
										className={`block transition-colors duration-200 py-2 text-[13px] ${pathname === "/summer-sprint" ? "text-[#6BFB9A]" : "text-[#94A3B8] hover:text-[#6BFB9A]"}`}
									>
										SUMMER SPRINT
									</Link>
									<Link
										href="/hello-world"
										className={`block transition-colors duration-200 py-2 text-[13px] ${pathname === "/hello-world" ? "text-[#6BFB9A]" : "text-[#94A3B8] hover:text-[#6BFB9A]"}`}
									>
										HELLO WORLD
									</Link>
									<Link
										href="/ictc"
										className={`block transition-colors duration-200 py-2 text-[13px] ${pathname === "/ictc" ? "text-[#6BFB9A]" : "text-[#94A3B8] hover:text-[#6BFB9A]"}`}
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
									<span className="inline-block transition-transform duration-300 ease-in-out relative z-10">
										INTER IIT
									</span>
								</Link>
							</li>

							<li className="relative group">
								<Link
									href="/clubs"
									className={`relative block py-1 before:absolute before:-inset-4 before:content-[''] transition-colors duration-300 ease-in-out group-hover:text-[#6BFB9A] ${pathname === "/clubs" ? "text-[#6BFB9A]" : "text-[#94A3B8]"}`}
								>
									<span className="inline-block transition-transform duration-300 ease-in-out relative z-10">
										CLUBS
									</span>
								</Link>
							</li>

							<li className="relative group">
								<Link
									href="/team"
									className={`relative block py-1 before:absolute before:-inset-4 before:content-[''] transition-colors duration-300 ease-in-out group-hover:text-[#6BFB9A] ${pathname === "/team" ? "text-[#6BFB9A]" : "text-[#94A3B8]"}`}
								>
									<span className="inline-block transition-transform duration-300 ease-in-out relative z-10">
										TEAM
									</span>
								</Link>
							</li>
						</ul>
					</nav>

					{/* Mobile Menu Button */}
					<button
						className="block md:hidden text-gray-200 hover:text-white transition-colors p-2"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					>
						{isMobileMenuOpen ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-7 h-7"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-7 h-7"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						)}
					</button>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			{isMobileMenuOpen && (
				<div className="md:hidden border-t border-gray-700 bg-[#1A2238] px-6 py-6 shadow-xl">
					<ul className="flex flex-col gap-6 text-sm font-medium tracking-wide uppercase">
						<li>
							<Link
								href="/"
								onClick={() => setIsMobileMenuOpen(false)}
								className={`block transition-colors ${pathname === "/" ? "text-[#6BFB9A]" : "text-[#94A3B8]"}`}
							>
								HOME
							</Link>
						</li>
						<li>
							<button
								onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
								className={`flex items-center gap-2 transition-colors ${isFlagshipActive ? "text-[#6BFB9A]" : "text-[#94A3B8]"}`}
							>
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
							</button>
							{/* Mobile Dropdown Menu (WITH ACTIVE HIGHLIGHTS) */}
							<div
								className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileDropdownOpen ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}
							>
								<div className="flex flex-col pl-4 space-y-4 border-l-2 border-gray-700 pb-2">
									<Link
										href="/summer-sprint"
										onClick={() => setIsMobileMenuOpen(false)}
										className={`transition-colors ${pathname === "/summer-sprint" ? "text-[#6BFB9A]" : "text-[#94A3B8] hover:text-[#6BFB9A]"}`}
									>
										SUMMER SPRINT
									</Link>
									<Link
										href="/hello-world"
										onClick={() => setIsMobileMenuOpen(false)}
										className={`transition-colors ${pathname === "/hello-world" ? "text-[#6BFB9A]" : "text-[#94A3B8] hover:text-[#6BFB9A]"}`}
									>
										HELLO WORLD
									</Link>
									<Link
										href="/ictc"
										onClick={() => setIsMobileMenuOpen(false)}
										className={`transition-colors ${pathname === "/ictc" ? "text-[#6BFB9A]" : "text-[#94A3B8] hover:text-[#6BFB9A]"}`}
									>
										ICTC
									</Link>
								</div>
							</div>
						</li>
						<li>
							<Link
								href="/inter-iit"
								onClick={() => setIsMobileMenuOpen(false)}
								className={`block transition-colors ${pathname === "/inter-iit" ? "text-[#6BFB9A]" : "text-[#94A3B8]"}`}
							>
								INTER IIT
							</Link>
						</li>
						<li>
							<Link
								href="/clubs"
								onClick={() => setIsMobileMenuOpen(false)}
								className={`block transition-colors ${pathname === "/clubs" ? "text-[#6BFB9A]" : "text-[#94A3B8]"}`}
							>
								CLUBS
							</Link>
						</li>
						<li>
							<Link
								href="/team"
								onClick={() => setIsMobileMenuOpen(false)}
								className={`block transition-colors ${pathname === "/team" ? "text-[#6BFB9A]" : "text-[#94A3B8]"}`}
							>
								TEAM
							</Link>
						</li>
					</ul>
				</div>
			)}
		</header>
	);
}