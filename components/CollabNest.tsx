import Slideshow from "@/components/Slideshow";
import ExploreButton from "@/components/ExploreButton";

const COLLABNEST_IMAGES = [
  "/COLLABNEST/IMG-1.svg",
  "/COLLABNEST/IMG-2.jpeg",
  "/COLLABNEST/IMG-3.jpeg",
];

const CollabNest = () => {
  return (
    <section className="w-full bg-[#0a0f2c] flex items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 md:px-16 py-10 md:py-14 gap-6 md:gap-8">
          <h1 className="text-white font-extrabold text-5xl md:text-[80px] leading-none tracking-tight">
            CollabNest
          </h1>
          <p className="text-gray-300 text-base md:text-[18px] leading-relaxed max-w-[520px]">
            Professional networking platform designed specifically for students
            and professionals to collaborate, learn, and grow together. Connect
            with peers, find mentors, discover opportunities, and build meaningful
            professional relationships. CollabNest bridges the gap between
            academic learning and industry requirements.
          </p>
          <div className="mt-4">
            <ExploreButton href="https://collabnest.iitp.ac.in/" />
          </div>
        </div>
        <div className="relative h-[60vh] md:h-[70vh] p-4 md:p-10">
          <Slideshow images={COLLABNEST_IMAGES} />
        </div>

      </div>
    </section>
  );
};

export default CollabNest;