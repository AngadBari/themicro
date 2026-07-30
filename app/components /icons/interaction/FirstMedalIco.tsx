import React from "react";
import { motion } from "framer-motion";

const FristPlaceIco = () => {
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
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Trophy Cup */}
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
              fill: ["transparent", "transparent", "#EAB308"],
              transition: {
                pathLength: {
                  duration: 0.9,
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

        {/* Left Handle */}
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
                delay: 0.05,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Right Handle */}
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
                delay: 0.1,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Right Top Detail */}
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
                delay: 0.15,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Left Top Detail */}
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
                delay: 0.2,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Trophy Stem + Base Detail */}
        <motion.path
          d="M11 18H12M12 18H13M12 18V13L11 13.5"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.5,
                delay: 0.25,
                ease: "easeInOut",
              },
            },
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default FristPlaceIco;