import React from "react";
import { motion } from "framer-motion";

const ArrowDownIco = () => {
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
          d="M15.544 12.5H15V6.5C15 5.56812 15 5.10218 14.8478 4.73463C14.6448 4.24458 14.2554 3.85523 13.7654 3.65224C13.3978 3.5 12.9319 3.5 12 3.5C11.0681 3.5 10.6022 3.5 10.2346 3.65224C9.74458 3.85523 9.35523 4.24458 9.15224 4.73463C9 5.10218 9 5.56812 9 6.5V12.5H8.45596C6.37322 12.5 5.33185 12.5 5.05779 13.1003C4.78372 13.7006 5.49744 14.4183 6.92487 15.8536L10.4689 19.4172C11.1868 20.1391 11.5458 20.5 12 20.5C12.4542 20.5 12.8132 20.1391 13.5311 19.4172L17.0751 15.8536C18.5026 14.4183 19.2163 13.7006 18.9422 13.1003C18.6681 12.5 17.6268 12.5 15.544 12.5Z"
          variants={{
            rest: {
              pathLength: 1,
              y: 0,
            },
            hover: {
              pathLength: [0, 1],
              y: [0, 2, 0], // gentle downward bounce
              transition: {
                pathLength: {
                  duration: 0.7,
                  ease: "easeInOut",
                },
                y: {
                  duration: 0.45,
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

export default ArrowDownIco;