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

export default function Sher({
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
          stiffness: 400,
          damping: 28,
        },
      }}
    >
      {/* Left Icon */}
      <AnimatePresence mode="popLayout" initial={false}>
        {!hovered && (
          <motion.div
            key="left-icon"
            initial={{
              opacity: 0,
              scale: 0.92,
              rotate: -8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
              rotate: 8,
            }}
            transition={{
              type: "spring",
              stiffness: 450,
              damping: 28,
              mass: 0.6,
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
        transition={{
          layout: {
            type: "spring",
            stiffness: 400,
            damping: 28,
          },
        }}
        className={`${outfit.className} text-[13px] whitespace-nowrap`}
      >
        {label}
      </motion.span>


      {/* Right Icon */}
      <AnimatePresence mode="popLayout" initial={false}>
        {hovered && (
          <motion.div
            key="right-icon"
            initial={{
              opacity: 0,
              scale: 0.92,
              rotate: -8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
              rotate: 8,
            }}
            transition={{
              type: "spring",
              stiffness: 450,
              damping: 28,
              mass: 0.6,
            }}
            className="flex items-center"
          >
            <HugeiconsIcon
              icon={Icon2}
              size={16}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}