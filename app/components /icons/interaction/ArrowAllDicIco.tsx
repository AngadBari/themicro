import React from "react";
import { motion } from "framer-motion";

const ArrowAllDirIco = () => {
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
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Vertical */}
        <motion.path
          d="M11.9902 8.98595V3.31543"
          variants={{
            rest: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              y: -1.5,
              transition: { duration: 0.35 },
            },
          }}
        />

        <motion.path
          d="M11.9902 20.6705V15"
          variants={{
            rest: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              y: 1.5,
              transition: { duration: 0.35, delay: 0.05 },
            },
          }}
        />

        {/* Horizontal */}
        <motion.path
          d="M20.6702 12.0001L14.9999 11.9482"
          variants={{
            rest: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              x: 1.5,
              transition: { duration: 0.35, delay: 0.1 },
            },
          }}
        />

        <motion.path
          d="M9.00031 12.0001L3.33002 11.9482"
          variants={{
            rest: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              x: -1.5,
              transition: { duration: 0.35, delay: 0.15 },
            },
          }}
        />

        {/* Arrow Heads */}
        <motion.path
          d="M14.9999 5.99998C14.9999 5.99998 12.7904 3.00001 11.9999 3C11.2093 2.99999 8.99995 6 8.99995 6"
          variants={{
            rest: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              y: -1.5,
              transition: { duration: 0.35, delay: 0.2 },
            },
          }}
        />

        <motion.path
          d="M5.99993 15C5.99993 15 2.99996 12.7905 2.99995 12C2.99994 11.2094 5.99995 9 5.99995 9"
          variants={{
            rest: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              x: -1.5,
              transition: { duration: 0.35, delay: 0.25 },
            },
          }}
        />

        <motion.path
          d="M17.9999 9C17.9999 9 20.9999 11.2095 20.9999 12C20.9999 12.7906 17.9999 15 17.9999 15"
          variants={{
            rest: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              x: 1.5,
              transition: { duration: 0.35, delay: 0.3 },
            },
          }}
        />

        <motion.path
          d="M8.99995 18C8.99995 18 11.2094 21 11.9999 21C12.7905 21 14.9999 18 14.9999 18"
          variants={{
            rest: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              y: 1.5,
              transition: { duration: 0.35, delay: 0.35 },
            },
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default ArrowAllDirIco;