"use client";
import { useRef } from "react";
import EventCard from "./EventCard";

const events = [
  {
    img: "/events/event1-img.jpg",
    eventName: "EVENT NAME 1",
    clubName: "CLUB NAME",
    date: "DATE: 13 JULY - 23 JULY",
  },
  {
    img: "/events/event1-img.jpg",
    eventName: "EVENT NAME 2",
    clubName: "CLUB NAME",
    date: "DATE: 13 JULY - 23 JULY",
  },
  {
    img: "/events/event1-img.jpg",
    eventName: "EVENT NAME 3",
    clubName: "CLUB NAME",
    date: "DATE: 13 JULY - 23 JULY",
  },
  {
    img: "/events/event1-img.jpg",
    eventName: "EVENT NAME 4",
    clubName: "CLUB NAME",
    date: "DATE: 13 JULY - 23 JULY",
  },
];

const EventsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "right" ? 340 : -340,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16">
      {/* Heading + buttons row */}
      <div className="flex items-center justify-between mb-6 md:mb-8 px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-[36px] font-extrabold uppercase text-white">
          CURRENT EVENTS
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border-2 border-[#2D5BA3] bg-[#091A3D] text-white flex items-center justify-center hover:bg-[#1745A3] transition-colors duration-200"
          >
            &#8592;
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border-2 border-[#2D5BA3] bg-[#091A3D] text-white flex items-center justify-center hover:bg-[#1745A3] transition-colors duration-200"
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* Scrollable cards row */}
      <div
        ref={scrollRef}
        className="
          flex gap-5
          overflow-x-auto
          snap-x snap-mandatory
          no-scrollbar
          pb-4
          px-4 md:px-8 lg:px-16
        "
      >
        {events.map((event) => (
          <div
            key={event.eventName}
            className="
              min-w-[280px]
              sm:min-w-[320px]
              lg:min-w-[calc(25%-15px)]
              shrink-0
              snap-start
            "
          >
            <EventCard
              img={event.img}
              eventName={event.eventName}
              clubName={event.clubName}
              date={event.date}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;