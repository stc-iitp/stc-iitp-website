import { teams } from "../data/teamData";

export default function TeamCards() {
	return (
		<section className="w-full max-w-[1304px] mx-auto mb-[60px] px-4 md:px-0">
			<h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-left">
				Tracks
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-[33px] w-full">
				{teams.map((team, index) => (
					<div
						key={team.id}
						className="opacity-0 animate-fade-in-up w-full"
						style={{ animationDelay: `${index * 200 + 200}ms` }}
					>
						<div className="bg-[#0d1424] border border-[#1e293b] rounded-[20px] p-[32px] md:p-[40px] w-full h-full transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-[0_8px_30px_rgba(59,130,246,0.3)] hover:border-[#3b82f6] cursor-pointer flex flex-col items-center">
							<h3 className="text-center font-bold mb-[8px] text-white text-[24px] md:text-[28px] leading-[38px]">
								{team.name}
							</h3>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
