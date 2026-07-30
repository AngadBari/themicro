import React from "react";
import { motion } from "framer-motion";

const ExPandIco = () => {
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
        {/* Top Left */}
        <motion.path
          d="M8.00001 3.09779C8.00001 3.09779 4.03375 2.74194 3.38784 3.38785C2.74192 4.03375 3.09784 8 3.09784 8"
          variants={{
            rest: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              x: 1,
              y: 1,
              transition: { duration: 0.35 },
            },
          }}
        />

        {/* Bottom Left */}
        <motion.path
          d="M8.00001 20.9022C8.00001 20.9022 4.03375 21.2581 3.38784 20.6122C2.74192 19.9662 3.09784 16 3.09784 16"
          variants={{
            rest: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              x: 1,
              y: -1,
              transition: { duration: 0.35, delay: 0.05 },
            },
          }}
        />

        {/* Top Right */}
        <motion.path
          d="M16 3.09779C16 3.09779 19.9663 2.74194 20.6122 3.38785C21.2581 4.03375 20.9022 8 20.9022 8"
          variants={{
            rest: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              x: -1,
              y: 1,
              transition: { duration: 0.35, delay: 0.1 },
            },
          }}
        />

        {/* Bottom Right */}
        <motion.path
          d="M16 20.9022C16 20.9022 19.9663 21.2581 20.6122 20.6122C21.2581 19.9662 20.9022 16 20.9022 16"
          variants={{
            rest: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              x: -1,
              y: -1,
              transition: { duration: 0.35, delay: 0.15 },
            },
          }}
        />

        {/* Diagonal Lines */}
        <motion.path
          d="M14.0107 9.99847L20.0625 3.94678"
          variants={{
            rest: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              x: -1,
              y: 1,
              transition: { duration: 0.4, delay: 0.2 },
            },
          }}
        />

        <motion.path
          d="M9.99696 14.0024L3.63966 20.3807"
          variants={{
            rest: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              x: 1,
              y: -1,
              transition: { duration: 0.4, delay: 0.25 },
            },
          }}
        />

        <motion.path
          d="M9.99732 10.0024L3.84571 3.85889"
          variants={{
            rest: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              x: 1,
              y: 1,
              transition: { duration: 0.4, delay: 0.3 },
            },
          }}
        />

        <motion.path
          d="M13.9795 14.0024L20.5279 20.4983"
          variants={{
            rest: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              x: -1,
              y: -1,
              transition: { duration: 0.4, delay: 0.35 },
            },
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default ExPandIco;