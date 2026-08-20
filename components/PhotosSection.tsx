"use client";

import Image from "next/image";
import Slideshow from "@/components/Slideshow";

const carouselImages = [
  "/PHOTOSECTION/3.jpg",
  "/PHOTOSECTION/2.JPG",
  "/PHOTOSECTION/12.jpg",
  "/PHOTOSECTION/14.jpeg",
  "/PHOTOSECTION/15.JPG",
  "/PHOTOSECTION/7.jpeg",
  "/PHOTOSECTION/13.jpeg"
];

const staticPhotos = [
  "/PHOTOSECTION/4.jpg",
  "/PHOTOSECTION/5.jpg",
  "/PHOTOSECTION/6.jpeg",
  "/PHOTOSECTION/1.jpg",
  "/PHOTOSECTION/9.jpg",
  "/PHOTOSECTION/8.jpeg"
];

const PhotosSection = () => {
  return (
    <section className="bg-[#05071a] px-4 md:px-8 py-8 md:py-12">
      <h2 className="text-white text-4xl md:text-5xl font-black tracking-tight mb-6 md:mb-8">
        PHOTOS
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-3 items-stretch">

        {/* Left: carousel */}
        <div className="relative aspect-video">
          <Slideshow images={carouselImages} />
        </div>

        {/* Right: 2×2 thumbnail grid */}
        <div className="grid grid-cols-2 gap-1.5">
          {staticPhotos.map((src, i) => (
            <div key={i} className="relative overflow-hidden rounded-sm aspect-4/3">
              <Image
                src={src}
                alt={`Event photo ${i + 1}`}
                fill
                sizes="(max-width: 1024px) 45vw, 15vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PhotosSection;