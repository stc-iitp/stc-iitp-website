"use client";

import { useState } from "react";
import { leaderboardData } from "../data/leaderboardData";

export default function Leaderboard() {
	const [selectedYear, setSelectedYear] = useState<string>("2024");
	const currentData = leaderboardData[selectedYear];

	const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedYear(e.target.value);
	};

	return (
		<section
			className="mb-[64px] w-full max-w-[1304px] mx-auto px-4 opacity-0 animate-fade-in-up"
			style={{ animationDelay: "200ms" }}
		>
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-[32px]">
				<h2 className="text-[24px] md:text-[32px] font-bold text-white tracking-wide">
					Leaderboard
				</h2>

				<select
					value={selectedYear}
					onChange={handleYearChange}
					className="bg-transparent border border-gray-600 text-white text-[14px] md:text-[16px] rounded-[8px] px-[16px] py-[8px] outline-none cursor-pointer hover:border-gray-400 transition-colors w-full sm:w-auto"
				>
					{Object.keys(leaderboardData)
						.sort((a, b) => Number(b) - Number(a))
						.map((year) => (
							<option
								key={year}
								value={year}
								className="bg-[#050914] text-white"
							>
								{year}
							</option>
						))}
				</select>
			</div>

			<div className="w-full overflow-x-auto pb-4 no-scrollbar">
				<div className="min-w-[600px] w-full flex flex-col">
					<div className="grid grid-cols-3 bg-[#0d1424] border-b border-[#1e293b] text-[#94a3b8] font-bold text-[12px] tracking-widest uppercase h-[42px] items-center text-center rounded-t-[12px]">
						<div>POSITION</div>
						<div>TEAM</div>
						<div>TOTAL SCORE</div>
					</div>

					{currentData?.map((row, index) => (
						<div
							key={`${selectedYear}-${index}`}
							className="border-b border-[#1e293b] last:border-b-0 opacity-0 animate-slide-in-right"
							style={{ animationDelay: `${index * 100}ms` }}
						>
							<div className="grid grid-cols-3 text-[14px] md:text-[16px] h-[53px] items-center text-center text-gray-300 hover:bg-[#0f1629] transition-colors">
								<div className="font-medium text-white">{row.position}</div>
								<div>{row.team}</div>
								<div className="font-medium text-[#3b82f6]">{row.score}</div>
							</div>
						</div>
					))}

					{!currentData && (
						<div className="text-center py-[40px] text-gray-500 text-[14px]">
							No data available for {selectedYear}
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
