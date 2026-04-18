import React from 'react'
import Image from "next/image";

interface EventCardProps {
  img: string;
  eventName: string;
  clubName: string;
  date: string;
}

const EventCard = ({ img, eventName, clubName, date }: EventCardProps) => {
  return (
    <div className="
      rounded-xl overflow-hidden flex flex-col
      bg-gradient-to-b from-[#1745A3] to-[#091A3D]
      border-2 border-[#2D5BA3]
      shadow-[0_10px_30px_rgba(0,0,0,0.4)]
      transition-all duration-300 ease-out
      hover:scale-105 hover:brightness-125 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)]
      active:scale-105 active:brightness-125 active:shadow-[0_16px_40px_rgba(0,0,0,0.6)]
      cursor-pointer
    ">
      <Image
        src={img}
        alt={eventName}
        width={400}
        height={250}
        className="w-full h-[220px] object-cover"
      />
      <div className="p-4">
        <p className="font-[family-name:var(--font-roboto)] font-bold text-[20px] tracking-[1px] text-white uppercase mb-4">
          {eventName}
        </p>
        <p className="font-[family-name:var(--font-roboto)] font-bold text-[20px] tracking-[1px] text-[#A1A1AA] uppercase mb-4">
          {clubName}
        </p>
        <p className="font-[family-name:var(--font-roboto)] font-bold text-[20px] tracking-[1px] text-[#A1A1AA] uppercase mb-4">
          {date}
        </p>
      </div>
    </div>
  );
};

export default EventCard;