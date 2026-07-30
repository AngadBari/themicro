import React from "react";
import { motion } from "framer-motion";

const RupeeIco= () => {
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
        {/* Rupee Symbol */}
        <motion.path
          d="M6 3H9C11.7614 3 14 5.23858 14 8C14 10.7614 11.7614 13 9 13C7.75179 13 7.12769 13 6.86036 13.2016C6.53165 13.4496 6.38851 13.8737 6.49971 14.2701C6.59015 14.5925 7.08659 14.9707 8.07944 15.7272L15 21"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.8,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Top Line */}
        <motion.path
          d="M6 3H18"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.35,
                delay: 0.2,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Middle Line */}
        <motion.path
          d="M6 8H18"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.35,
                delay: 0.4,
                ease: "easeInOut",
              },
            },
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default RupeeIco;