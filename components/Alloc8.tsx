import Slideshow from "@/components/Slideshow";
import ExploreButton from "@/components/ExploreButton";

const ALLOC8_IMAGES = [
  "/ALLOC8/alloc8-1.jpg",
  "/ALLOC8/alloc8-2.jpg",
  "/ALLOC8/alloc8-3.jpg",
];

const Alloc8 = () => {
  return (
    <section className="w-full bg-[#0a0f2c] flex items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[60vh] md:h-[70vh] p-4 md:p-10 order-2 md:order-1">
          <Slideshow images={ALLOC8_IMAGES} />
        </div>

        <div className="flex flex-col justify-center px-6 md:px-16 py-10 md:py-14 gap-6 md:gap-8 order-1 md:order-2">
          <h1 className="text-white font-extrabold text-5xl md:text-[80px] leading-none tracking-tight">
            ALLOC8
          </h1>
          <p className="text-gray-300 text-base md:text-[18px] leading-relaxed max-w-[520px]">
            The hostel and SMP allotment platform of IIT Patna. Students across
            B.Tech, M.Tech and PhD programmes sign in with their institute
            account, pick their hostel, and choose a room block by block and
            floor by floor, with live availability shown at every step. ALLOC8
            replaces manual allotment lists with a transparent, self-service
            process open to every student.
          </p>
          <div className="mt-4">
            <ExploreButton href="https://alloc8.in/" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alloc8;
