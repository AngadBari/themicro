import React from "react";
import { motion } from "framer-motion";

const CheckIco = () => {
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
        {/* Circle */}
        <motion.path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          variants={{
            rest: {
              pathLength: 1,
              rotate: 0,
            },
            hover: {
              pathLength: [0, 1],
              rotate: 360,
              transition: {
                pathLength: {
                  duration: 0.8,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 0.8,
                  ease: "easeInOut",
                },
              },
            },
          }}
        />

        {/* Check */}
        <motion.path
          d="M8 12.5L10 14.5L15.5 9.5"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.5,
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

export default CheckIco;