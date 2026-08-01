"use client";

import { AnimatePresence, motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";
import { Outfit } from "next/font/google";
import "tap-tone";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

interface Props {
  hovered: boolean;
  label: string;
  Icon1: IconSvgElement;
  Icon2: IconSvgElement;
}

export default function Submit({
  hovered,
  label,
  Icon1,
  Icon2,
}: Props) {
  return (
    <motion.div
      data-tone-tap
      layout
      className="flex items-center gap-3"
      transition={{
        layout: {
          type: "spring",
          stiffness: 350,
          damping: 28,
        },
      }}
    >

      {/* Left Icon */}
      <AnimatePresence mode="popLayout" initial={false}>
        {!hovered && (
          <motion.div
            key="left-icon"
            layout
            initial={{
              opacity: 0,
              x: -6,
              rotate: -15,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              x: 0,
              rotate: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: -6,
              rotate: 15,
              scale: 0.9,
            }}
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 24,
            }}
            className="flex items-center"
          >
            <HugeiconsIcon
              icon={Icon1}
              size={16}
            />
          </motion.div>
        )}
      </AnimatePresence>


      {/* Label */}
      <motion.span
        layout
        className={`${outfit.className} text-[13px] whitespace-nowrap`}
      >
        {label}
      </motion.span>


      {/* Right Submit Icon */}
      <AnimatePresence mode="popLayout" initial={false}>
        {hovered && (
          <motion.div
            key="right-icon"
            layout
            initial={{
              opacity: 0,
              x: 6,
              scale: 0.8,
              rotate: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              rotate: 0,
            }}
            exit={{
              opacity: 0,
              x: 6,
              scale: 0.8,
              rotate: 20,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 22,
              mass: 0.6,
            }}
            className="flex items-center"
          >
            <motion.div
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
            >
              <HugeiconsIcon
                icon={Icon2}
                size={16}
                className="text-green-400"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}