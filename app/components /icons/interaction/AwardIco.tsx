import React from "react";
import { motion } from "framer-motion";

const AwardIco = () => {
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
        strokeLinejoin="round"
      >
        {/* Award Badge */}
        <motion.path
          d="M9.42613 3.06269C10.6836 2.35423 11.3124 2 12 2C12.6876 2 13.3164 2.35423 14.5739 3.06269L16.3239 4.04861C17.6292 4.78401 18.2819 5.15171 18.6409 5.76664C19 6.38157 19 7.13157 19 8.63158V10.3684C19 11.8684 19 12.6184 18.6409 13.2334C18.2819 13.8483 17.6292 14.216 16.3239 14.9514L14.5739 15.9373C13.3164 16.6458 12.6876 17 12 17C11.3124 17 10.6836 16.6458 9.42613 15.9373L7.67613 14.9514C6.37081 14.216 5.71815 13.8483 5.35908 13.2334C5 12.6184 5 11.8684 5 10.3684V8.63158C5 7.13157 5 6.38157 5.35908 5.76664C5.71815 5.15171 6.37081 4.78401 7.67613 4.04861L9.42613 3.06269Z"
          variants={{
            rest: {
              pathLength: 1,
              scale: 1,
            },
            hover: {
              pathLength: [0, 1],
              scale: [1, 1.04, 1],
              transition: {
                pathLength: {
                  duration: 0.8,
                  ease: "easeInOut",
                },
                scale: {
                  duration: 0.5,
                  ease: "easeOut",
                },
              },
            },
          }}
        />

        {/* Check Mark */}
        <motion.path
          d="M9 10.1667C9 10.1667 9.75 10.1667 10.5 11.5C10.5 11.5 12.8824 8.16667 15 7.5"
          strokeLinecap="round"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.5,
                delay: 0.6,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Award Ribbons */}
        <motion.path
          d="M16.8825 15L17.5527 18.2099C17.9833 20.2723 18.1986 21.3035 17.7563 21.7923C17.3141 22.281 16.546 21.8606 15.0099 21.0198L12.7364 19.7753C12.3734 19.5766 12.1919 19.4773 12 19.4773C11.8081 19.4773 11.6266 19.5766 11.2636 19.7753L8.99008 21.0198C7.45397 21.8606 6.68592 22.281 6.24365 21.7923C5.80139 21.3035 6.01669 20.2723 6.44731 18.2099L7.11752 15"
          strokeLinecap="round"
          variants={{
            rest: {
              pathLength: 1,
              y: 0,
            },
            hover: {
              pathLength: [0, 1],
              y: [0, 1.5, 0],
              transition: {
                pathLength: {
                  duration: 0.7,
                  delay: 0.2,
                  ease: "easeInOut",
                },
                y: {
                  duration: 0.5,
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

export default AwardIco;