import React from "react";
import { motion } from "framer-motion";

const CloseIco = () => {
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
        variants={{
          rest: {
            scale: 1,
          },
          hover: {
            scale: 1.15,
            rotate: 90,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
        }}
      >
        {/* Outer Shape */}
        <motion.path
          d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H13C14.9628 4 15.9443 4 16.7889 4.42229C17.6334 4.84458 18.2223 5.62972 19.4 7.2C21.1333 9.51111 22 10.6667 22 12C22 13.3333 21.1333 14.4889 19.4 16.8C18.2223 18.3703 17.6334 19.1554 16.7889 19.5777C15.9443 20 14.9628 20 13 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 1,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Cross */}
        <motion.path
          d="M14 9L8 14.9996M14 15L8 9.00039"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.6,
                delay: 0.2,
                ease: "easeInOut",
              },
            },
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default CloseIco;