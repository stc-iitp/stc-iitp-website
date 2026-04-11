import HeroAbout from "../components/HeroAbout";
import EventCarousel from "../components/EventCarousel";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SummerSprintPage() {
	return (
		<main className="min-h-screen flex flex-col items-center">
			<Header />
			<div className="w-full max-w-6xl px-6 md:px-12">
				<HeroAbout />
				<EventCarousel />
			</div>
			<Footer />
		</main>
	);
}
