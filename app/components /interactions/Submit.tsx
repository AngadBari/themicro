"use client";

import { AnimatePresence, motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";
import { Outfit } from "next/font/google";
import "tap-tone"



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
      className="flex gap-3 items-center"
      transition={{
        layout: {
          type: "spring",
          stiffness: 500,
          damping: 28,
        },
      }}
    >
      {/* Left Icon */}
      <AnimatePresence mode="popLayout">
        {!hovered && (
          <motion.div
            key="left-icon"
            layout
            initial={{
              opacity: 0,
              x: -12,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              x: 12,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: -12,
              scale: 0.7,
            }}
            transition={{
              type: "spring",
              stiffness: 650,
              damping: 22,
            }}
            className="mr-2 flex  items-center"
          >
            <motion.div
              animate={{
                scale: hovered ? 1.15 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 18,
              }}
            >
              <HugeiconsIcon
                icon={Icon1}
                size={16}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Label */}
      <motion.span
        layout
        transition={{
          layout: {
            type: "spring",
            stiffness: 500,
            damping: 28,
          },
        }}
        className={ `${outfit.className} text-[13px]  whitespace-nowrap `}
      >
        {label}
      </motion.span>

      {/* Right Icon */}
      <AnimatePresence mode="popLayout">
        {hovered && (
          <motion.div
            key="right-icon"
            layout
            initial={{
              opacity: 0,
              x: 12,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: 12,
              scale: 0.7,
            }}
            transition={{
              type: "spring",
              stiffness: 650,
              damping: 22,
            }}
            className="ml-2 flex items-center"
          >
            <motion.div
              animate={{
                scale: hovered ? 1.15 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 18,
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