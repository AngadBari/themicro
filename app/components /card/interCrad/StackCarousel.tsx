"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

type Slide = {
  image: string;
  title: string;
};

const DEFAULT_ASSETS: Slide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    title: "Sunset Beach",
  },
  {
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
    title: "Misty Mountains",
  },
  {
    image:
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80",
    title: "Forest Trail",
  },
  {
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
    title: "Sunlight Woods",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80",
    title: "Green Hills",
  },
];

interface StackCarouselProps {
  images?: Slide[];
  className?: string;
}

export default function StackCarousel({
  images = DEFAULT_ASSETS,
  className = "",
}: StackCarouselProps) {
  const [active, setActive] = useState<number>(2);

  const prev = () => {
    setActive((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const next = () => {
    setActive((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section
      className={`relative flex h-[420px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-950`}
      style={{
        perspective: "1000px",
      }}
    >
      {/* Cards */}
      <div
        className="relative flex h-[300px] w-full items-center justify-center"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {images.map((item, index) => {
          const offset = index - active;
          const distance = Math.abs(offset);

          return (
            <motion.div
              key={index}
              className="absolute h-64 w-44 cursor-pointer"
              initial={false}
              onClick={() => setActive(index)}
              animate={{
                x: offset * 100,

                rotateY:
                  offset === 0
                    ? 0
                    : offset < 0
                    ? 40
                    : -40,

                z:
                  offset === 0
                    ? 100
                    : -distance * 50,

                scale:
                  offset === 0
                    ? 1.1
                    : 1 - distance * 0.12,

                opacity:
                  distance > 2
                    ? 0
                    : 1 - distance * 0.25,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
              }}
              style={{
                zIndex: 100 - distance,
                transformStyle: "preserve-3d",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full rounded-2xl border border-white/10 object-cover shadow-2xl"
              />

              {/* Title */}
              <motion.p
                className={`absolute -bottom-8 left-0 w-full text-center text-[12px] ${outfit.className} dark:text-white`}
                animate={{
                  opacity: offset === 0 ? 1 : 0,
                  y: offset === 0 ? 0 : -5,
                }}
              >
                {item.title}
              </motion.p>
            </motion.div>
          );
        })}
      </div>


      {/* Controls */}
      <div className="mt-10 flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md">

        <button
          onClick={prev}
          className="rounded-full p-1  drak:text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          <ChevronLeft size={18} />
        </button>


        <div className="flex items-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === index
                  ? "w-3 bg-black dark:bg-white"
                  : "w-2 bg-black/30 dark:bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>


        <button
          onClick={next}
          className="rounded-full p-1 text-b dark:text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          <ChevronRight size={18} />
        </button>

      </div>
    </section>
  );
}