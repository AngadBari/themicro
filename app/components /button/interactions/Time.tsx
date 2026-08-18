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

export default function Time({
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
          stiffness: 500,
          damping: 28,
        },
      }}
    >
      {/* Icon */}
      <div className="relative flex h-4 w-4 items-center justify-center">
        <AnimatePresence mode="sync" initial={false}>
          {!hovered ? (
            <motion.div
              key="icon1"
              className="absolute"
              initial={{ opacity: 0, x: -4, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -4, scale: 0.9 }}
              transition={{
                duration: 0.15,
                ease: "easeOut",
              }}
            >
              <HugeiconsIcon icon={Icon1} size={16} />
            </motion.div>
          ) : (
            <motion.div
              key="icon2"
              className="absolute"
              initial={{ opacity: 0, x: 4, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 4, scale: 0.9 }}
              transition={{
                duration: 0.15,
                ease: "easeOut",
              }}
            >
              <HugeiconsIcon
                icon={Icon2}
                size={16}
              
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Label */}
      <motion.span
        layout
        className={`${outfit.className} whitespace-nowrap text-[13px]`}
        transition={{
          layout: {
            type: "spring",
            stiffness: 500,
            damping: 28,
          },
        }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
}