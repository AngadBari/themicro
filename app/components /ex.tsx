
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Outfit } from "next/font/google";

import {
  GithubIcon,
  StarIcon,
} from "@hugeicons/core-free-icons";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

export default function StaronGitHubButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      data-tone-tap
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.08 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 22,
      }}
      className="  inline-flex items-center rounded-full border border-neutral-300 bg-white px-7 py-2 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
    >
      <motion.div
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
                x: 0,
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
              className="mr-2 flex items-center"
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
                  icon={GithubIcon}
                  size={16}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>


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
                whileHover={{ scale: 1.15 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 18,
                }}
              >
                <HugeiconsIcon
                  icon={StarIcon}
                  size={16}
                  fill="yellow"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
       
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
           Star on GitHub
        </motion.span>

       
      </motion.div>
    </motion.button>
  );
}

