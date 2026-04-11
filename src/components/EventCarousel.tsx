"use client";

import { useState } from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";
import { eventsByYear } from "../data/eventData";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"], display: "swap" });

const years = ["2026", "2025"];
const photos = ["/events/events.WEBP", "/events/first.png", "/events/second.png"];

export default function EventCarousel() {
	const [selectedYear, setSelectedYear] = useState("2025");
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	const filteredEvents = eventsByYear[selectedYear] ?? [];

	const handlePrev = () => setCurrentIndex((prev) => prev - 1);
	const handleNext = () => setCurrentIndex((prev) => prev + 1);

	return (
		<section className="mb-[120px] w-full">
			{/* Header */}
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-[32px]">
				<h2 className="text-[24px] md:text-[32px] font-bold text-white tracking-wide">
					Event Timeline
				</h2>
				<div className="relative">
					<button
						onClick={() => setIsDropdownOpen(!isDropdownOpen)}
						className="flex items-center gap-2 bg-transparent border border-gray-600 text-white text-[14px] md:text-[16px] rounded-[8px] px-[16px] py-[8px] hover:border-gray-400 transition-colors cursor-pointer"
					>
						{selectedYear}
						<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"
							style={{ transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 300ms ease" }}>
							<path d="M2.38804 -9.34601e-05L13.6147 -9.34601e-05C14.0579 -0.000735283 14.4923 0.124154 14.8674 0.360118C15.2426 0.596083 15.5433 0.933474 15.7347 1.33324C15.9587 1.80756 16.045 2.33528 15.9837 2.85626C15.9225 3.37724 15.716 3.87053 15.388 4.27991L9.77471 11.0799C9.55442 11.3341 9.28206 11.5379 8.9761 11.6776C8.67014 11.8173 8.33772 11.8896 8.00137 11.8896C7.66502 11.8896 7.3326 11.8173 7.02664 11.6776C6.72068 11.5379 6.44833 11.3341 6.22804 11.0799L0.614705 4.27991C0.286697 3.87053 0.080286 3.37724 0.0189943 2.85626C-0.0422974 2.33528 0.0439968 1.80756 0.268041 1.33324C0.45943 0.933474 0.760118 0.596083 1.1353 0.360118C1.51049 0.124154 1.94482 -0.000735283 2.38804 -9.34601e-05Z" fill="#F6F6F6" />
						</svg>
					</button>
					{isDropdownOpen && (
						<div className="absolute right-0 mt-2 bg-[#1A2238] border border-gray-700 shadow-lg rounded-md py-2 z-50 min-w-full">
							{years.map((year) => (
								<button key={year} onClick={() => { setSelectedYear(year); setIsDropdownOpen(false); }}
									className={`block w-full text-left px-4 py-2 text-[14px] transition-colors ${selectedYear === year ? "text-[#6BFB9A]" : "text-[#94A3B8] hover:text-[#6BFB9A]"}`}>
									{year}
								</button>
							))}
						</div>
					)}
				</div>
			</div>

			{/* Table */}
			<div className="w-full overflow-x-auto no-scrollbar mb-[60px]">
				<div className="min-w-[600px] w-full flex flex-col">
					<div className="grid grid-cols-3 bg-[#0d1424] border-b border-[#1e293b] text-[#94a3b8] font-bold text-[12px] tracking-widest uppercase h-[42px] items-center text-center rounded-t-[12px]">
						<div>EVENT</div>
						<div>CLUB</div>
						<div>DATES</div>
					</div>
					{filteredEvents.length > 0 ? (
						filteredEvents.map((event, index) => (
							<div key={event.id} className="border-b border-[#1e293b] last:border-b-0 opacity-0 animate-slide-in-right"
								style={{ animationDelay: `${index * 60}ms` }}>
								<div className="grid grid-cols-3 text-[14px] md:text-[16px] h-[53px] items-center text-center text-gray-300 hover:bg-[#0f1629] transition-colors">
									<div className="font-medium text-white">{event.name}</div>
									<div className="text-[#94a3b8]">{event.club}</div>
									<div className="font-medium text-[#3b82f6]">{event.dates}</div>
								</div>
							</div>
						))
					) : (
						<div className="text-center py-[40px] text-gray-500 text-[14px]">
							No events available for {selectedYear}
						</div>
					)}
				</div>
			</div>

			{/* Photo Carousel */}
			<div className="w-full flex flex-col gap-[12px]">

				{/* Image with overlaid arrows */}
				<div className="relative flex items-center">
					{/* Left Arrow — hide on first image */}
					{currentIndex > 0 && (
						<button
							onClick={handlePrev}
							className="absolute left-4 z-10 w-[56px] h-[56px] flex items-center justify-center transition-opacity duration-200 hover:opacity-70"
							aria-label="Previous"
						>
							<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="28" cy="28" r="27.5" stroke="white" strokeOpacity="0.4" fill="rgba(0,0,0,0.3)"/>
								<path d="M32 18L22 28L32 38" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</button>
					)}

					{/* Image */}
					<div className="relative w-full rounded-[20px] overflow-hidden" style={{ height: "499px" }}>
						<Image
							key={currentIndex}
							src={photos[currentIndex]}
							alt="Summer Sprint Events"
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 1071px"
							priority
						/>
					</div>

					{/* Right Arrow — hide on last image */}
					{currentIndex < photos.length - 1 && (
						<button
							onClick={handleNext}
							className="absolute right-4 z-10 w-[56px] h-[56px] flex items-center justify-center transition-opacity duration-200 hover:opacity-70"
							aria-label="Next"
						>
							<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="28" cy="28" r="27.5" stroke="white" strokeOpacity="0.4" fill="rgba(0,0,0,0.3)"/>
								<path d="M24 18L34 28L24 38" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</button>
					)}
				</div>

				{/* Dots */}
				<div className="flex items-center justify-center gap-[16px] mt-[4px]">
					{photos.map((_, index) => (
						<button key={index} onClick={() => setCurrentIndex(index)}
							className={`transition-all duration-300 rounded-full ${index === currentIndex ? "w-[32px] h-[8px] bg-[#3b82f6]" : "w-[8px] h-[8px] bg-gray-600 hover:bg-gray-400"}`}
							aria-label={`Go to slide ${index + 1}`} />
					))}
				</div>

				{/* Heading below image */}
				<h2
					className={`text-white text-center mt-[8px] ${roboto.className}`}
					style={{
						fontSize: "36px",
						fontWeight: 400,
						lineHeight: "100%",
						letterSpacing: "0%",
						textTransform: "capitalize",
					}}
				>
					Summer Sprint Events
				</h2>
			</div>
		</section>
	);
}
