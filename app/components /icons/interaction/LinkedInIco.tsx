import React from "react";
import { motion } from "framer-motion";

const LinkedInIco = () => {
  return (
    <motion.div
      className="bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
      initial="rest"
      whileHover="hover"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          rest: {
            scale: 1,
          },
          hover: {
            scale: 1.15,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
        }}
      >
        {/* i dot */}
        <motion.path
          d="M7.125 6.75H7M7.25 6.75C7.25 6.88807 7.13807 7 7 7C6.86193 7 6.75 6.88807 6.75 6.75C6.75 6.61193 6.86193 6.5 7 6.5C7.13807 6.5 7.25 6.61193 7.25 6.75Z"
          stroke="currentColor"
          variants={{
            rest: {
              pathLength: 1,
              stroke: "currentColor",
            },
            hover: {
              pathLength: [0, 1],
              stroke: "#0A66C2",
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* i line */}
        <motion.path
          d="M7 10V17"
          stroke="currentColor"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              stroke: "#0A66C2",
              transition: {
                duration: 0.7,
                delay: 0.1,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* n */}
        <motion.path
          d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10"
          stroke="currentColor"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              stroke: "#0A66C2",
              transition: {
                duration: 0.9,
                delay: 0.2,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Outer box */}
        <motion.path
          d="M3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3C16.2426 3 18.364 3 19.682 4.31802C21 5.63604 21 7.75736 21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682C3 18.364 3 16.2426 3 12Z"
          stroke="currentColor"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              stroke: "#0A66C2",
              transition: {
                duration: 1.2,
                delay: 0.3,
                ease: "easeInOut",
              },
            },
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default LinkedInIco;