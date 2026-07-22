"use client";

import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

interface Props {
  hovered: boolean;
  label: string;
  Icon1: IconSvgElement;
}

export default function Like({
  hovered,
  label,
  Icon1,
}: Props) {
  return (
    <motion.div
    data-tone-press
      layout
      className="flex items-center group "
      transition={{
        layout: {
          type: "spring",
          stiffness: 500,
          damping: 28,
        },
      }}
    >
      {/* Settings Icon */}
      <motion.div
        className="mr-2 flex items-center "
       
      >
        <HugeiconsIcon
          icon={Icon1}
          size={18}
          className="transition-colors duration-200 group-hover:text-blue-600 "
        />
      </motion.div>

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
        className={`${outfit.className} text-[13px] whitespace-nowrap`}
      >
        {label}
      </motion.span>
    </motion.div>
  );
}