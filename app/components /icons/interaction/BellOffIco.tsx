import React from "react";
import { motion } from "framer-motion";

const BellOffIco = () => {
  return (
    <motion.div
      className="bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
      initial="rest"
      whileHover="hover"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          rest: {
            scale: 1,
            rotate: 0,
          },
          hover: {
            scale: 1.1,
            rotate: [0, -6, 6, -4, 4, 0],
            transition: {
              duration: 0.7,
              ease: "easeInOut",
            },
          },
        }}
      >
        {/* Bell */}
        <motion.path
          d="M12 22C10.3431 22 9 20.6569 9 19H15C15 20.6569 13.6569 22 12 22ZM5 16H19L18 14.5C17.4 13.6 17 12.6 17 11.5V9C17 6.24 14.76 4 12 4C9.24 4 7 6.24 7 9V11.5C7 12.6 6.6 13.6 6 14.5L5 16Z"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.9,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Slash */}
        <motion.path
          d="M4 4L20 20"
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

export default BellOffIco;