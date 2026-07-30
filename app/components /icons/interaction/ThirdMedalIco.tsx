import React from "react";
import { motion } from "framer-motion";

const ThirdPlaceIco = () => {
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
              fill: ["transparent", "transparent", "#CD7F32"],
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
          strokeLinecap="round"
          strokeLinejoin="round"
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
          strokeLinecap="round"
          strokeLinejoin="round"
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
          strokeLinecap="round"
          strokeLinejoin="round"
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
          strokeLinecap="round"
          strokeLinejoin="round"
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

        {/* Number 3 */}
        <motion.path
          d="M10.5 14C10.8265 13.347 11.2786 13 12 13C12.7296 13 13.5 13.4558 13.5 14.25C13.5 14.9404 12.9404 15.5 12.25 15.5C12.9404 15.5 13.5 16.0596 13.5 16.75C13.5 17.5442 12.7296 18 12 18C11.2786 18 10.8265 17.653 10.5 17"
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

export default ThirdPlaceIco;