import Header from "./components/Header";
import Footer from "./components/Footer";
import EventTable from "./components/EventTable";
import Gallery from "./components/Gallery";

export default function SummerSprintPage() {
  return (
    <>
      <Header />
      <main
        style={{
          width: "100%",
          minHeight: "100vh",
          background: "linear-gradient(180deg, #000000 0%, #00051A 25%, #00072D 50%, #000A26 75%, #00051A 100%)",
          overflowX: "hidden",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        {/* TITLE */}
        <section className="pt-[80px] pb-[40px] flex flex-col items-center w-full px-4">
          <h1
            className="text-center font-extrabold mb-[60px] tracking-[0.05em] leading-none opacity-0 animate-[titleReveal_2.5s_cubic-bezier(0.22,1,0.36,1)_80ms_forwards]"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "clamp(52px, 10vw, 130px)",
            }}
          >
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #ffffff, #e2e8f0, #1E90FF)" }}
            >
              SUMMER SPRINT
            </span>
          </h1>

          {/* ABOUT */}
          <div
            className="w-full max-w-6xl px-4 md:px-0 opacity-0 animate-[fadeInUp_2s_cubic-bezier(0.22,1,0.36,1)_600ms_forwards]"
          >
            <h2 className="text-[28px] md:text-[32px] font-bold mb-[24px] text-white tracking-wide">
              About
            </h2>
            <p className="text-[#94a3b8] text-[16px] md:text-[18px] leading-[1.8] md:leading-[2] text-justify font-light">
              Summer Sprint is the flagship summer event by the Student Technical Council, IIT Patna.
              A season-long series of technical competitions spanning multiple clubs and domains —
              from robotics and coding to design and finance — Summer Sprint gives every student
              the chance to explore, compete, and build something remarkable over the summer break.
            </p>
          </div>
        </section>

        {/* TABLE + GALLERY */}
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 flex flex-col gap-10 pb-10">
          <EventTable />
          <Gallery />
        </div>
      </main>
      <Footer />
    </>
  );
}
