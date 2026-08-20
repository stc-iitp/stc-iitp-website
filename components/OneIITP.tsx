import SlideshowWithVideo from "@/components/SlideshowWithVideo";
import ExploreButton from "@/components/ExploreButton";

const ONEITTP_IMAGES = [
  "/ONEIITP/IMG_7960.jpeg",
  "/ONEIITP/IMG_7961.jpeg",
  "/ONEIITP/IMG_7962.jpeg",
  "/ONEIITP/IMG_7963.jpeg",
];

const OneIITP = () => {
  return (
    <section className="w-full bg-[#0a0f2c] flex items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-2">

        <div className="relative h-auto md:h-[70vh] p-4 md:p-10 flex items-center order-2 md:order-1">
          <SlideshowWithVideo
            video="/ONEIITP/intro.mp4"
            images={ONEITTP_IMAGES}
          />
        </div>

        <div className="flex flex-col justify-center px-6 md:px-16 py-10 md:py-14 gap-6 md:gap-8 order-1 md:order-2">
          <h1 className="text-white font-extrabold text-5xl md:text-[80px] leading-none tracking-tight">
            OneIITP
          </h1>
          <p className="text-gray-300 text-base md:text-[18px] leading-relaxed max-w-130">
            A unified platform connecting all IIT Patna students, faculty, and
            alumni. Access everything from course materials to campus news,
            event registrations to club activities - all in one place. OneIITP
            streamlines campus life and enhances communication across the entire
            IIT Patna community.
          </p>
          <div className="mt-4">
            <ExploreButton href="https://www.instagram.com/reel/DBZUMwEJQPi/?igsh=MW40aXBmdThzcDRydA==" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default OneIITP;