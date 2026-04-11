export default function HeroAbout() {
	return (
		<section className="mt-[40px] mb-[60px] flex flex-col items-center w-full">
			<h1
				className="text-center text-[70px] md:text-[130px] font-extrabold mb-[100px] tracking-[0.05em] leading-none opacity-0 animate-title-reveal"
				style={{ animationDelay: "80ms" }}
			>
				<span className="text-transparent bg-clip-text bg-gradient-to-br from-[#ffffff] via-[#e2e8f0] to-[#3b82f6]">
					SUMMER SPRINT
				</span>
			</h1>

			<div
				className="w-full text-left opacity-0 animate-fade-in-up"
				style={{ animationDelay: "600ms" }}
			>
				<h2 className="text-[28px] md:text-[32px] font-bold mb-[24px] text-white tracking-wide">
					About
				</h2>
				<p className="text-[#94a3b8] text-[16px] md:text-[18px] leading-[1.8] md:leading-[2] text-justify font-light">
					Summer Sprint is a flagship technical event organized by the
					Students&apos; Technical Council of IIT Patna, designed to ignite
					innovation and technical excellence during the summer season. This
					intensive program brings together the brightest minds on campus to
					collaborate, compete, and create impactful projects across diverse
					engineering domains. Participants dive deep into real-world problem
					statements, working under tight deadlines to deliver solutions that
					demonstrate both technical depth and creative thinking. Summer Sprint
					provides students a unique platform to hone their skills, learn from
					peers, and gain hands-on experience that bridges the gap between
					classroom theory and industry practice. With mentorship from faculty
					and industry professionals, teams push the boundaries of what&apos;s
					possible, making Summer Sprint one of the most anticipated and
					rewarding events on the STC calendar.
				</p>
			</div>
		</section>
	);
}
