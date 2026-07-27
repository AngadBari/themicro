"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RotateCarousel = () => {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    },
  ];

  const [active, setActive] = useState(2);

  const prev = () => {
    setActive((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const next = () => {
    setActive((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full">

      <div className="relative h-80 overflow-hidden rounded-2xl bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-950 ">

        {slides.map((item, index) => {
          const offset = index - active;
          const absOffset = Math.abs(offset);

          return (
            <img
              key={index}
              src={item.image}
              alt={`Slide ${index + 1}`}
              loading="lazy"
              className="absolute left-1/2 top-15 h-30 w-30 rounded-2xl object-cover transition-all duration-500"
              style={{
                transform: `translateX(calc(-80% + ${
                  offset * 140
                }px)) scale(${offset === 0 ? 1 : 0.86}) rotate(${
                  offset * 50
                }deg)`,

                opacity: absOffset > 2 ? 0 : 1,
                zIndex: 20 - absOffset,
                filter: `blur(${absOffset > 1 ? 2 : 0}px)`,
                boxShadow: "0 20px 50px rgba(0,0,0,.35)",
              }}
            />

          );


          
        })}

<div className=" absolute mt-6 bottom-5 left-1/2 flex -translate-x-1/2 flex items-center justify-center gap-4">

        <button
          onClick={prev}
          className="flex h-5 w-5 items-center justify-center rounded-full border border-neutral-300 transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
        >
          <ChevronLeft size={13} />
        </button>


        <div className="flex gap-2">

          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === index
                  ? "w-3 bg-neutral-900 dark:bg-white"
                  : "w-2 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-600"
              }`}
            />
          ))}

        </div>


        <button
          onClick={next}
          className="flex h-5 w-5 items-center justify-center rounded-full border border-neutral-300 transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
        >
          <ChevronRight size={18} />
        </button>

      </div>
      </div>


      

    </section>
  );
};

export default  RotateCarousel ;