"use client";

import {  motion } from "framer-motion";
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
          className="flex items-center gap-2"
          transition={{
            layout: {
              type: "spring",
              stiffness: 400,
              damping: 28,
            },
          }}
        >
          {/* Left Icon */}
          <motion.div
            animate={{
              x: hovered ? -30 : 0,
              opacity: hovered ? 0 : 1,
              width: hovered ? 0 : 16,
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="overflow-hidden flex items-center"
          >
            <HugeiconsIcon icon={Icon1} size={16} />
          </motion.div>
    
          {/* Label */}
          <motion.span
            layout
            className={`${outfit.className} whitespace-nowrap text-[13px]`}
            transition={{
              layout: {
                type: "spring",
                stiffness: 400,
                damping: 28,
              },
            }}
          >
            {label}
          </motion.span>
    
          {/* Right Icon */}
          <motion.div
            animate={{
              x: hovered ? 0 : 30,
              opacity: hovered ? 1 : 0,
              width: hovered ? 16 : 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="overflow-hidden flex items-center text-green-400"
          >
            <HugeiconsIcon icon={Icon2} size={16} />
          </motion.div>
        </motion.div>
  );
}