import React from 'react'
import { motion } from "framer-motion";

const TwitterIco = () => {
  return (
     <motion.div
              className="bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md  border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex gap-2 justify-center items-center"
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
                  d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516"
                  variants={{
                    rest: {
                      pathLength: 1,
                      opacity: 1,
                    },
                    hover: {
                      pathLength: [0, 1],
                      opacity: 1,
                      transition: {
                        duration: 1,
                        ease: "easeInOut",
                      },
                    },
                  }}
                />
              </motion.svg>

            </motion.div>
  )
}

export default TwitterIco