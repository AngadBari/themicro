import React from "react";
import { motion } from "framer-motion";

const SecondPlaceIco = () => {
  return (
    <motion.div
      className="bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
      initial="rest"
      whileHover="hover"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        {/* Trophy Body */}
        <motion.circle
          cx="12"
          cy="15.5"
          r="6.5"
          variants={{
            rest: {
              pathLength: 1,
              fill: "transparent",
            },
            hover: {
              pathLength: [0, 1],
              fill: ["transparent", "transparent", "#C0C0C0"],
              transition: {
                pathLength: {
                  duration: 0.8,
                  delay: 0.1,
                  ease: "easeInOut",
                },
                fill: {
                  delay: 0.8,
                  duration: 0.3,
                },
              },
            },
          }}
        />

        {/* Left Side */}
        <motion.path
          d="M9 9.5L5.5 2"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.4,
                delay: 0.15,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Right Side */}
        <motion.path
          d="M15 9.5L18.5 2"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.4,
                delay: 0.2,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Top Right */}
        <motion.path
          d="M15 2L14 4.5"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.3,
                delay: 0.25,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Top Left */}
        <motion.path
          d="M12.5 9L9.5 2"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.4,
                delay: 0.3,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Number 2 - Keep Above Fill */}
        <motion.path
          d="M10.5 14L11.0305 13.4285C11.653 12.799 12.6825 12.873 13.2107 13.5852C13.6233 14.1417 13.5915 14.915 13.1346 15.4349L10.5 18H13.4315"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            rest: {
              pathLength: 1,
              opacity: 1,
            },
            hover: {
              pathLength: [0, 1],
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.9,
                ease: "easeInOut",
              },
            },
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default SecondPlaceIco;