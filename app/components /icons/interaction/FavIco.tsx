import React from "react";
import { motion } from "framer-motion";

const FavIco = () => {
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
        <motion.path
          d="M10.4107 19.9677C7.58942 17.858 2 13.0348 2 8.69444C2 5.82563 4.10526 3.5 7 3.5C8.5 3.5 10 4 12 6C14 4 15.5 3.5 17 3.5C19.8947 3.5 22 5.82563 22 8.69444C22 13.0348 16.4106 17.858 13.5893 19.9677C12.6399 20.6776 11.3601 20.6776 10.4107 19.9677Z"
          variants={{
            rest: {
              pathLength: 1,
              fill: "transparent",
              scale: 1,
            },
            hover: {
              pathLength: [0, 1],
              fill: ["transparent", "transparent", "#EF4444"],
              scale: [1, 1.05, 1],
              transition: {
                pathLength: {
                  duration: 0.8,
                  ease: "easeInOut",
                },
                fill: {
                  delay: 0.8,
                  duration: 0.3,
                },
                scale: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            },
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default FavIco;