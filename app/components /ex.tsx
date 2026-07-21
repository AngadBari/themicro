
"use client";

import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Outfit } from "next/font/google";
import "tap-tone";

import {
  Like
} from "@hugeicons/core-free-icons";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

export default function LikeButton() {
  return (
    <motion.button
      data-tone-tap
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2 }}
      className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-7 py-2 transition-all hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
    >
      <motion.div
        layout
        className="group flex items-center gap-2"
        transition={{
          layout: {
            type: "spring",
            stiffness: 500,
            damping: 28,
          },
        }}
      >
        <motion.div
          whileHover={{ scale: 1.15 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 18,
          }}
        >
          <HugeiconsIcon
            icon={Like}
            size={18}
            className="transition-colors duration-200 group-hover:text-blue-600"
          />
        </motion.div>

        <motion.span
          layout
          transition={{
            layout: {
              type: "spring",
              stiffness: 500,
              damping: 28,
            },
          }}
          className={`${outfit.className} whitespace-nowrap text-[13px]`}
        >
          Like
        </motion.span>
      </motion.div>
    </motion.button>
  );
}
