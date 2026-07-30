import React from "react";
import { motion } from "framer-motion";

const ShrinkIcon = () => {
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
          d="M6.00008 9.76109C6.74982 9.77066 9.23335 10.2829 9.75907 9.75561C10.2847 9.22828 9.76527 6.74557 9.75359 5.99568M9.36958 9.36718L2.99438 3.0022"
          variants={{
            rest: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Top Right */}
        <motion.path
          d="M17.9842 9.76109C17.2345 9.77066 14.751 10.2829 14.2253 9.75561C13.6996 9.22828 14.2191 6.74557 14.2307 5.99568M14.6147 9.36718L20.9899 3.0022"
          variants={{
            rest: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.5,
                delay: 0.1,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Bottom Left */}
        <motion.path
          d="M9.76223 17.9943C9.77273 17.2444 10.288 14.7608 9.76144 14.2343C9.2349 13.7079 6.75219 14.2244 6.00248 14.2351M2.99243 20.9977L9.37721 14.6143"
          variants={{
            rest: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.5,
                delay: 0.2,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Bottom Right */}
        <motion.path
          d="M14.2224 17.9944C14.2119 17.2445 13.6966 14.761 14.2231 14.2344C14.7497 13.708 17.2324 14.2245 17.9821 14.2352M20.9922 20.9978L14.6074 14.6144"
          variants={{
            rest: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.5,
                delay: 0.3,
                ease: "easeInOut",
              },
            },
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default ShrinkIcon;