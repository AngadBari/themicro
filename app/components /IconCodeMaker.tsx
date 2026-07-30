
import { IconConfig } from "./icons/data";
export const iconCodes: Record<string, string> = {

  GitHub: `

"use client"

  import React from 'react'
import { motion } from "framer-motion";

const GitHubIco = () => {
  return (
     <motion.div
              className="w-10 h-10 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md  border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex gap-2 justify-center items-center"
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
                  d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17"
                  variants={{
                    rest: {
                      pathLength: 1,
                      opacity: 1,
                    },
                    hover: {
                      pathLength: [0, 1],
                      opacity: 1,
                      transition: {
                        duration: 1.5,
                        ease: "easeInOut",
                      },
                    },
                  }}
                />

                <motion.path
                  d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22"
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
                        delay: 0.1,
                        ease: "easeInOut",
                      },
                    },
                  }}
                />
              </motion.svg>
             
             

            </motion.div>
  )
}

export default GitHubIco

`
,


 X: `


 import React from 'react'
import { motion } from "framer-motion";

const TwitterIco = () => {
  return (
     <motion.div
              className="h-10 w-10 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md  border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex gap-2 justify-center items-center"
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


 `
 ,



 YouTube: `
 
 import React from "react";
import { motion } from "framer-motion";

const YouTubeIco = () => {
  return (
    <motion.div
      className=" h-10 w-10 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
      initial="rest"
      whileHover="hover"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          rest: {
            scale: 1,
            rotate: 0,
          },
          hover: {
            scale: 1.15,
            rotate: 5,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
        }}
      >
        {/* YouTube Box */}
        <motion.path
          d="M12 20.5C13.8097 20.5 15.5451 20.3212 17.1534 19.9934C19.1623 19.5839 20.1668 19.3791 21.0834 18.2006C22 17.0221 22 15.6693 22 12.9635V11.0365C22 8.33073 22 6.97787 21.0834 5.79937C20.1668 4.62088 19.1623 4.41613 17.1534 4.00662C15.5451 3.67877 13.8097 3.5 12 3.5C10.1903 3.5 8.45489 3.67877 6.84656 4.00662C4.83766 4.41613 3.83321 4.62088 2.9166 5.79937C2 6.97787 2 8.33073 2 11.0365V12.9635C2 15.6693 2 17.0221 2.9166 18.2006C3.83321 19.3791 4.83766 19.5839 6.84656 19.9934C8.45489 20.3212 10.1903 20.5 12 20.5Z"
          stroke="currentColor"
          variants={{
            rest: {
              pathLength: 1,
              opacity: 1,
              stroke: "currentColor",
              
            },
            hover: {
              pathLength: [0, 1],
              opacity: 1,
              stroke: "#ff0000",
              transition: {
                duration: 1,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Play Button */}
        <motion.path
          d="M15.9621 12.3129C15.8137 12.9187 15.0241 13.3538 13.4449 14.2241C11.7272 15.1705 10.8684 15.6438 10.1728 15.4615C9.9372 15.3997 9.7202 15.2911 9.53799 15.1438C9 14.7089 9 13.8059 9 12C9 10.1941 9 9.29112 9.53799 8.85618C9.7202 8.70886 9.9372 8.60029 10.1728 8.53854C10.8684 8.35621 11.7272 8.82945 13.4449 9.77593C15.0241 10.6462 15.8137 11.0813 15.9621 11.6871C16.0126 11.8933 16.0126 12.1067 15.9621 12.3129Z"
          stroke="currentColor"
          strokeLinejoin="round"
          variants={{
            rest: {
              pathLength: 1,
              opacity: 1,
              stroke: "currentColor",
            },
            hover: {
              pathLength: [0, 1],
              opacity: 1,
              stroke: "#ff0000",
              transition: {
                duration: 0.8,
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

export default YouTubeIco;
 
 
 `
 ,

 LinkedIn :`

 import React from "react";
import { motion } from "framer-motion";

const LinkedInIco = () => {
  return (
    <motion.div
      className=" h-10 w-10 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
      initial="rest"
      whileHover="hover"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          rest: {
            scale: 1,
          },
          hover: {
            scale: 1.15,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
        }}
      >
        {/* i dot */}
        <motion.path
          d="M7.125 6.75H7M7.25 6.75C7.25 6.88807 7.13807 7 7 7C6.86193 7 6.75 6.88807 6.75 6.75C6.75 6.61193 6.86193 6.5 7 6.5C7.13807 6.5 7.25 6.61193 7.25 6.75Z"
          stroke="currentColor"
          variants={{
            rest: {
              pathLength: 1,
              stroke: "currentColor",
            },
            hover: {
              pathLength: [0, 1],
              stroke: "#0A66C2",
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* i line */}
        <motion.path
          d="M7 10V17"
          stroke="currentColor"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              stroke: "#0A66C2",
              transition: {
                duration: 0.7,
                delay: 0.1,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* n */}
        <motion.path
          d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10"
          stroke="currentColor"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              stroke: "#0A66C2",
              transition: {
                duration: 0.9,
                delay: 0.2,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Outer box */}
        <motion.path
          d="M3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3C16.2426 3 18.364 3 19.682 4.31802C21 5.63604 21 7.75736 21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682C3 18.364 3 16.2426 3 12Z"
          stroke="currentColor"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              stroke: "#0A66C2",
              transition: {
                duration: 1.2,
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

export default LinkedInIco;

 `
 ,

 Notification:`
 
 import React from "react";
import { motion } from "framer-motion";

const NotificationIco = () => {
  return (
    <motion.div
      className="h-10 w-10  bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
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
            rotate: 0,
          },
          hover: {
            scale: 1.15,
            rotate: [0, -10, 10, -5, 5, 0],
            transition: {
              duration: 0.6,
              ease: "easeInOut",
            },
          },
        }}
      >
        {/* Bell Bottom */}
        <motion.path
          d="M16 18C16 20.2091 14.2091 22 12 22C9.79086 22 8 20.2091 8 18"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Bell Body */}
        <motion.path
          d="M4.43654 18H19.5625C20.2903 18 20.6542 18 20.8648 17.8951C21.274 17.6913 21.4929 17.2359 21.3964 16.789C21.3468 16.559 21.1194 16.2749 20.6648 15.7066L20.4951 15.4944C20.0392 14.9246 19.8113 14.6397 19.6184 14.3409C19.0187 13.4119 18.6477 12.354 18.5356 11.254C18.4995 10.9002 18.4995 10.5353 18.4995 9.8056V8.5C18.4995 8.03572 18.4995 7.80358 18.4867 7.60758C18.2898 4.60304 15.8965 2.20977 12.892 2.01285C12.696 2 12.4638 2 11.9995 2C11.5353 2 11.3031 2 11.1071 2.01285C8.10258 2.20977 5.70931 4.60304 5.51239 7.60758C5.49954 7.80358 5.49954 8.03572 5.49954 8.5V9.8056C5.49954 10.5353 5.49954 10.9002 5.46349 11.254C5.35143 12.354 4.98035 13.4119 4.38067 14.3409C4.18779 14.6397 3.95985 14.9246 3.50401 15.4944L3.33427 15.7066C2.87964 16.2749 2.65233 16.559 2.60268 16.789C2.50621 17.2359 2.72509 17.6913 3.13431 17.8951C3.3449 18 3.70878 18 4.43654 18Z"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 1,
                delay: 0.1,
                ease: "easeInOut",
              },
            },
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default NotificationIco;
 
 `
 ,

 SparkText:`
 
 import React from "react";
import { motion } from "framer-motion";

const SparkTextIco = () => {
  return (
    <motion.div
      className="h-10 w-10 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
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
            rotate: 0,
          },
          hover: {
            scale: 1.12,
            rotate: 3,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
        }}
      >
        {/* Main Box */}
        <motion.path
          d="M11 20C7.25027 20 5.3754 20 4.06107 19.0451C3.6366 18.7367 3.26331 18.3634 2.95491 17.9389C2 16.6246 2 14.7497 2 11C2 7.25027 2 5.3754 2.95491 4.06107C3.26331 3.6366 3.6366 3.26331 4.06107 2.95491C5.3754 2 7.25027 2 11 2H11.5C14.7734 2 16.4101 2 17.6125 2.7368C18.2853 3.14908 18.8509 3.71473 19.2632 4.38751C20 5.58985 20 7.22657 20 10.5"
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

        {/* Spark */}
        <motion.path
          d="M17.4069 14.4036C17.6192 13.8655 18.3808 13.8655 18.5931 14.4036L18.6298 14.4969C19.1482 15.8113 20.1887 16.8518 21.5031 17.3702L21.5964 17.4069C22.1345 17.6192 22.1345 18.3808 21.5964 18.5931L21.5031 18.6298C20.1887 19.1482 19.1482 20.1887 18.6298 21.5031L18.5931 21.5964C18.3808 22.1345 17.6192 22.1345 17.4069 21.5964L17.3702 21.5031C16.8518 20.1887 15.8113 19.1482 14.4969 18.6298L14.4036 18.5931C13.8655 18.3808 13.8655 17.6192 14.4036 17.4069L14.4969 17.3702C15.8113 16.8518 16.8518 15.8113 17.3702 14.4969L17.4069 14.4036Z"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.8,
                delay: 0.2,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Text */}
        <motion.path
          d="M11 7H7V8M11 7H15V8M11 7V15M11 15H10M11 15H12"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.9,
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

export default SparkTextIco;
 
 
 `

 ,

 Book :`
 
 import React from "react";
import { motion } from "framer-motion";

const BookIco = () => {
  return (
    <motion.div
      className="h-10 w-10 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
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
            rotate: 0,
          },
          hover: {
            scale: 1.12,
            rotate: -3,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
        }}
      >
        {/* Book Cover */}
        <motion.path
          d="M20.5 16.9286V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2H11.5C7.72876 2 5.84315 2 4.67157 3.17157C3.5 4.34315 3.5 6.22876 3.5 10V19.5"
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

        {/* Bottom Page */}
        <motion.path
          d="M20.5 17H6C4.61929 17 3.5 18.1193 3.5 19.5C3.5 20.8807 4.61929 22 6 22H20.5"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.8,
                delay: 0.15,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Book Side */}
        <motion.path
          d="M20.5 22C19.1193 22 18 20.8807 18 19.5C18 18.1193 19.1193 17 20.5 17"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.6,
                delay: 0.3,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Text */}
        <motion.path
          d="M12.3077 12L10.847 7.47891C10.7552 7.19466 10.4734 7 10.1538 7C9.83425 7 9.55249 7.19466 9.46066 7.47891L8 12M15 7V12M8.53846 10.5H11.7692"
          strokeLinejoin="round"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.9,
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

export default BookIco;
 
 
 `
 ,

 Delete:`
 
 import React from "react";
import { motion } from "framer-motion";

const DeleteIco = () => {
  return (
    <motion.div
      className="h-10 w-10 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
      initial="rest"
      whileHover="hover"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={{
          rest: {
            scale: 1,
          },
          hover: {
            scale: 1.15,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
        }}
      >
        {/* Trash Body */}
        <motion.path
          d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
          stroke="currentColor"
          variants={{
            rest: {
              pathLength: 1,
              stroke: "currentColor",
            },
            hover: {
              pathLength: [0, 1],
              stroke: "#ff0000",
              transition: {
                duration: 1,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Lid */}
        <motion.path
          d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
          stroke="currentColor"
          variants={{
            rest: {
              pathLength: 1,
              stroke: "currentColor",
            },
            hover: {
              pathLength: [0, 1],
              stroke: "#ff0000",
              transition: {
                duration: 0.8,
                delay: 0.15,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Left Line */}
        <motion.path
          d="M9.5 16.5L9.5 10.5"
          stroke="currentColor"
          variants={{
            rest: {
              pathLength: 1,
              stroke: "currentColor",
            },
            hover: {
              pathLength: [0, 1],
              stroke: "#ff0000",
              transition: {
                duration: 0.5,
                delay: 0.3,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Right Line */}
        <motion.path
          d="M14.5 16.5L14.5 10.5"
          stroke="currentColor"
          variants={{
            rest: {
              pathLength: 1,
              stroke: "currentColor",
            },
            hover: {
              pathLength: [0, 1],
              stroke: "#ff0000",
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

export default DeleteIco;
 
 
 `
 ,
 
 Close:`
 
 import React from "react";
import { motion } from "framer-motion";

const CloseIco = () => {
  return (
    <motion.div
      className="h-10 w-10 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
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
 
 `

 ,

 Hd:`
 
 import React from "react";
import { motion } from "framer-motion";

const  HdIco = () => {
  return (
    <motion.div
      className="h-10 w-10 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
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
            rotate: 0,
          },
          hover: {
            scale: 1.1,
            rotate: 3,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
        }}
      >
        {/* Card */}
        <motion.path
          d="M13 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12V10"
          variants={{
            rest: {
              pathLength: 1,
              opacity: 1,
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

        {/* Left Text */}
        <motion.path
          d="M7 9L6 15M11 9L10 15M7 12H10"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.6,
                delay: 0.15,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Right Text */}
        <motion.path
          d="M13 15L14 9H15.6391C16.875 9 17.815 10.1097 17.6119 11.3288L17.3482 12.911C17.1473 14.1165 16.1043 15 14.8822 15H13Z"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.7,
                delay: 0.3,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Spark */}
        <motion.path
          d="M19.5 2.9375V4.5M19.5 4.5V6.0625M19.5 4.5H18.25M19.5 4.5H20.75M22 4.5L20.9156 4.13852C20.4179 3.97263 20.0274 3.58211 19.8615 3.08443L19.5 2L19.1385 3.08443C18.9726 3.58211 18.5821 3.97263 18.0844 4.13852L17 4.5L18.0844 4.86148C18.5821 5.02737 18.9726 5.41789 19.1385 5.91557L19.5 7L19.8615 5.91557C20.0274 5.41789 20.4179 5.02737 20.9156 4.86148L22 4.5Z"
          variants={{
            rest: {
              pathLength: 1,
              scale: 1,
              rotate: 0,
            },
            hover: {
              pathLength: [0, 1],
              scale: [1, 1.35, 1],
              rotate: [0, 15, -15, 0],
              transition: {
                duration: 0.8,
                delay: 0.5,
                ease: "easeInOut",
              },
            },
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default HdIco;
 

 `
,

NotificationRing:`

import React from "react";
import { motion } from "framer-motion";

const NotificationIco = () => {
  return (
    <motion.div
      className="h-10 w-10 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
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
            rotate: 0,
          },
          hover: {
            scale: 1.15,
            rotate: [0, -10, 10, -5, 5, 0],
            transition: {
              duration: 0.6,
              ease: "easeInOut",
            },
          },
        }}
      >
        {/* Bell Bottom */}
        <motion.path
          d="M16 18C16 20.2091 14.2091 22 12 22C9.79086 22 8 20.2091 8 18"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Bell Body */}
        <motion.path
          d="M4.43654 18H19.5625C20.2903 18 20.6542 18 20.8648 17.8951C21.274 17.6913 21.4929 17.2359 21.3964 16.789C21.3468 16.559 21.1194 16.2749 20.6648 15.7066L20.4951 15.4944C20.0392 14.9246 19.8113 14.6397 19.6184 14.3409C19.0187 13.4119 18.6477 12.354 18.5356 11.254C18.4995 10.9002 18.4995 10.5353 18.4995 9.8056V8.5C18.4995 8.03572 18.4995 7.80358 18.4867 7.60758C18.2898 4.60304 15.8965 2.20977 12.892 2.01285C12.696 2 12.4638 2 11.9995 2C11.5353 2 11.3031 2 11.1071 2.01285C8.10258 2.20977 5.70931 4.60304 5.51239 7.60758C5.49954 7.80358 5.49954 8.03572 5.49954 8.5V9.8056C5.49954 10.5353 5.49954 10.9002 5.46349 11.254C5.35143 12.354 4.98035 13.4119 4.38067 14.3409C4.18779 14.6397 3.95985 14.9246 3.50401 15.4944L3.33427 15.7066C2.87964 16.2749 2.65233 16.559 2.60268 16.789C2.50621 17.2359 2.72509 17.6913 3.13431 17.8951C3.3449 18 3.70878 18 4.43654 18Z"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 1,
                delay: 0.1,
                ease: "easeInOut",
              },
            },
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default NotificationIco;

`
,

BellOff:`


import React from "react";
import { motion } from "framer-motion";

const BellOffIco = () => {
  return (
    <motion.div
      className="h-10 w-10 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
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

`
,

ArrowAllDir:`

import React from "react";
import { motion } from "framer-motion";

const ArrowAllDirIco = () => {
  return (
    <motion.div
      className="h-10 w-10 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
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
        {/* Vertical */}
        <motion.path
          d="M11.9902 8.98595V3.31543"
          variants={{
            rest: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              y: -1.5,
              transition: { duration: 0.35 },
            },
          }}
        />

        <motion.path
          d="M11.9902 20.6705V15"
          variants={{
            rest: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              y: 1.5,
              transition: { duration: 0.35, delay: 0.05 },
            },
          }}
        />

        {/* Horizontal */}
        <motion.path
          d="M20.6702 12.0001L14.9999 11.9482"
          variants={{
            rest: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              x: 1.5,
              transition: { duration: 0.35, delay: 0.1 },
            },
          }}
        />

        <motion.path
          d="M9.00031 12.0001L3.33002 11.9482"
          variants={{
            rest: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              x: -1.5,
              transition: { duration: 0.35, delay: 0.15 },
            },
          }}
        />

        {/* Arrow Heads */}
        <motion.path
          d="M14.9999 5.99998C14.9999 5.99998 12.7904 3.00001 11.9999 3C11.2093 2.99999 8.99995 6 8.99995 6"
          variants={{
            rest: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              y: -1.5,
              transition: { duration: 0.35, delay: 0.2 },
            },
          }}
        />

        <motion.path
          d="M5.99993 15C5.99993 15 2.99996 12.7905 2.99995 12C2.99994 11.2094 5.99995 9 5.99995 9"
          variants={{
            rest: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              x: -1.5,
              transition: { duration: 0.35, delay: 0.25 },
            },
          }}
        />

        <motion.path
          d="M17.9999 9C17.9999 9 20.9999 11.2095 20.9999 12C20.9999 12.7906 17.9999 15 17.9999 15"
          variants={{
            rest: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              x: 1.5,
              transition: { duration: 0.35, delay: 0.3 },
            },
          }}
        />

        <motion.path
          d="M8.99995 18C8.99995 18 11.2094 21 11.9999 21C12.7905 21 14.9999 18 14.9999 18"
          variants={{
            rest: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              y: 1.5,
              transition: { duration: 0.35, delay: 0.35 },
            },
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default ArrowAllDirIco;

`
,

Expand:`

import React from "react";
import { motion } from "framer-motion";

const ExPandIco = () => {
  return (
    <motion.div
      className="h-10 w-10 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
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

`
,

ArrowLeft:`

import React from "react";
import { motion } from "framer-motion";

const ArrowLeftIco = () => {
  return (
    <motion.div
      className="h-10 w-10 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
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
          d="M11.5 8.45596V9L17.5 9C18.4319 9 18.8978 9 19.2654 9.15224C19.7554 9.35523 20.1448 9.74458 20.3478 10.2346C20.5 10.6022 20.5 11.0681 20.5 12C20.5 12.9319 20.5 13.3978 20.3478 13.7654C20.1448 14.2554 19.7554 14.6448 19.2654 14.8478C18.8978 15 18.4319 15 17.5 15H11.5V15.544C11.5 17.6268 11.5 18.6681 10.8997 18.9422C10.2994 19.2163 9.58174 18.5026 8.14642 17.0751L4.58281 13.5311C3.86094 12.8132 3.5 12.4542 3.5 12C3.5 11.5458 3.86094 11.1868 4.58281 10.4689L8.14643 6.92487C9.58175 5.49743 10.2994 4.78372 10.8997 5.05779C11.5 5.33185 11.5 6.37322 11.5 8.45596Z"
          variants={{
            rest: {
              pathLength: 1,
              x: 0,
            },
            hover: {
              pathLength: [0, 1],
              x: [-2, 0, -1, 0], // subtle left slide
              transition: {
                pathLength: {
                  duration: 0.7,
                  ease: "easeInOut",
                },
                x: {
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

export default ArrowLeftIco;


`
,

ArrowDown:`

import React from "react";
import { motion } from "framer-motion";

const ArrowDownIco = () => {
  return (
    <motion.div
      className="h-10 w-10 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
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


`
,

ArrowUp:`


import React from "react";
import { motion } from "framer-motion";

const ArrowUpIco = () => {
  return (
    <motion.div
      className="h-10 w-10 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
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
          d="M15.544 11.5H15V17.5C15 18.4319 15 18.8978 14.8478 19.2654C14.6448 19.7554 14.2554 20.1448 13.7654 20.3478C13.3978 20.5 12.9319 20.5 12 20.5C11.0681 20.5 10.6022 20.5 10.2346 20.3478C9.74458 20.1448 9.35523 19.7554 9.15224 19.2654C9 18.8978 9 18.4319 9 17.5V11.5H8.45596C6.37322 11.5 5.33185 11.5 5.05779 10.8997C4.78372 10.2994 5.49744 9.58174 6.92487 8.14642L10.4689 4.58281C11.1868 3.86094 11.5458 3.5 12 3.5C12.4542 3.5 12.8132 3.86094 13.5311 4.58281L17.0751 8.14643C18.5026 9.58175 19.2163 10.2994 18.9422 10.8997C18.6681 11.5 17.6268 11.5 15.544 11.5Z"
          variants={{
            rest: {
              pathLength: 1,
              y: 0,
            },
            hover: {
              pathLength: [0, 1],
              y: [0, -2, 0], // gentle upward bounce
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

export default ArrowUpIco;

`
,

ArrowRight :`


import React from "react";
import { motion } from "framer-motion";

const ArrowRightIco = () => {
  return (
    <motion.div
      className="h-10 w-10 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
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
          d="M12.5 8.45596V9L6.5 9C5.56812 9 5.10218 9 4.73463 9.15224C4.24458 9.35523 3.85523 9.74458 3.65224 10.2346C3.5 10.6022 3.5 11.0681 3.5 12C3.5 12.9319 3.5 13.3978 3.65224 13.7654C3.85523 14.2554 4.24458 14.6448 4.73463 14.8478C5.10218 15 5.56812 15 6.5 15H12.5V15.544C12.5 17.6268 12.5 18.6681 13.1003 18.9422C13.7006 19.2163 14.4183 18.5026 15.8536 17.0751L19.4172 13.5311C20.1391 12.8132 20.5 12.4542 20.5 12C20.5 11.5458 20.1391 11.1868 19.4172 10.4689L15.8536 6.92487C14.4183 5.49743 13.7006 4.78372 13.1003 5.05779C12.5 5.33185 12.5 6.37322 12.5 8.45596Z"
          variants={{
            rest: {
              pathLength: 1,
              x: 0,
            },
            hover: {
              pathLength: [0, 1],
              x: [0, 2, 0], // gentle right bounce
              transition: {
                pathLength: {
                  duration: 0.7,
                  ease: "easeInOut",
                },
                x: {
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

export default ArrowRightIco;

`
,

Check:`

import React from "react";
import { motion } from "framer-motion";

const CheckIco = () => {
  return (
    <motion.div
      className="h-10 w-10 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
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

`
,

Shrink:`


import React from "react";
import { motion } from "framer-motion";

const ShrinkIcon = () => {
  return (
    <motion.div
      className="h-10 w-10 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
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

`
,


Award:`

import React from "react";
import { motion } from "framer-motion";

const AwardIco = () => {
  return (
    <motion.div
      className="h-10 w-10 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
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

`
,

VerifiedBadge:`

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const VerifiedBadgeIco = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="h-10 w-10 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
      initial="rest"
      animate={hovered ? "hover" : "rest"}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
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
        {/* Badge */}
        <motion.path
          d="M11.5143 2.09327C11.8265 1.96891 12.1735 1.96891 12.4857 2.09327C13.4921 2.49406 13.6887 4.03744 14.8762 4.12336C15.7124 4.18386 16.533 3.48677 17.3721 3.69574C17.7105 3.78003 18.0028 3.99579 18.186 4.29657C18.7472 5.21824 18.0229 6.57292 18.9383 7.33768C19.5743 7.86877 20.6251 7.80004 21.178 8.4511C21.4108 8.72534 21.5252 9.08303 21.4953 9.4437C21.4068 10.5166 20.0389 11.1876 20.3395 12.3439C20.5475 13.1443 21.4253 13.707 21.4953 14.5563C21.5252 14.917 21.4108 15.2747 21.178 15.5489C20.4832 16.3669 18.9808 16.0975 18.5476 17.2062C18.2434 17.9844 18.634 18.9677 18.186 19.7034C18.0028 20.0042 17.7105 20.22 17.3721 20.3043C16.3302 20.5637 15.2727 19.4445 14.2701 20.0758C13.5543 20.5264 13.2978 21.5835 12.4857 21.9067C12.1735 22.0311 11.8265 22.0311 11.5143 21.9067C10.7022 21.5835 10.4457 20.5264 9.72989 20.0758C8.73971 19.4524 7.65213 20.5593 6.62791 20.3043C6.28947 20.22 5.9972 20.0042 5.81405 19.7034C5.25286 18.7818 5.97704 17.427 5.0617 16.6623C4.42582 16.1312 3.37494 16.2 2.82204 15.5489C2.58921 15.2747 2.47484 14.917 2.50465 14.5563C2.57485 13.707 3.4524 13.1443 3.6605 12.3439C3.95808 11.1997 2.59204 10.5009 2.50465 9.4437C2.47484 9.08303 2.58921 8.72534 2.82204 8.4511C3.51676 7.63284 5.01899 7.90253 5.45238 6.79383C5.75662 6.0156 5.36608 5.03227 5.81405 4.29657C5.9972 3.99579 6.28947 3.78003 6.62791 3.69574C7.46705 3.48677 8.28757 4.18387 9.12378 4.12336C10.3113 4.03746 10.5079 2.49406 11.5143 2.09327Z"
          variants={{
            rest: {
              pathLength: 1,
              fill: "transparent",
              scale: 1,
            },
            hover: {
              pathLength: [0, 1],
              fill: "#22c55e",
              scale: [1, 1.05, 1],
              transition: {
                pathLength: {
                  duration: 0.8,
                  ease: "easeInOut",
                },
                fill: {
                  delay: 0.75,
                  duration: 0.25,
                },
                scale: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            },
          }}
        />

        {/* Check */}
        <motion.path
          d="M9 13.3333C9 13.3333 9.875 13.3333 10.75 15C10.75 15 13.5294 10.8333 16 10"
          strokeLinecap="round"
          variants={{
            rest: {
              pathLength: 1,
              opacity: 1,
            },
            hover: {
              pathLength: [0, 1],
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.7,
                ease: "easeInOut",
              },
            },
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default VerifiedBadgeIco;

`
,

Star:`

import React from "react";
import { motion } from "framer-motion";

const StarAwardIco = () => {
  return (
    <motion.div
      className="h-10 w-10 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
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
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Star */}
        <motion.path
          d="M11.6686 5.21225C11.8066 4.92946 12.1934 4.92947 12.3314 5.21225L13.1449 6.87978C13.1989 6.99046 13.3003 7.06749 13.4178 7.08703L15.1862 7.38122C15.4859 7.43108 15.6054 7.81473 15.391 8.0392L14.125 9.36513C14.0412 9.45297 14.0025 9.57736 14.021 9.69991L14.3 11.5504C14.3473 11.8638 14.0345 12.101 13.7638 11.957L12.1688 11.1083C12.0628 11.0518 11.9372 11.0518 11.8312 11.1083L10.2362 11.957C9.96554 12.101 9.65271 11.8638 9.69996 11.5504L9.979 9.69991C9.99748 9.57736 9.95882 9.45297 9.87495 9.36513L8.60896 8.0392C8.39464 7.81473 8.51408 7.43108 8.8138 7.38122L10.5822 7.08703C10.6997 7.06749 10.8011 6.99046 10.8551 6.87978L11.6686 5.21225Z"
          variants={{
            rest: {
              fill: "transparent",
              scale: 1,
              rotate: 0,
            },
            hover: {
              fill: "#F59E0B",
              scale: [1, 1.25, 1.05],
              rotate: [0, 8, 0],
              transition: {
                fill: {
                  duration: 0.25,
                },
                scale: {
                  duration: 0.45,
                  ease: "easeOut",
                },
                rotate: {
                  duration: 0.45,
                  ease: "easeOut",
                },
              },
            },
          }}
        />

        {/* Award Circle */}
        <motion.path
          d="M19 9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9Z"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.7,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Right Ribbon */}
        <motion.path
          d="M13 16.3424L14.6264 20.6513C14.9541 21.5195 15.118 21.9536 15.403 22C15.6887 21.9578 16.0387 21.4804 16.3808 20.6172C16.6258 19.9991 16.7482 19.6901 17.0005 19.5235C17.0779 19.4724 17.1625 19.432 17.252 19.4035C17.5436 19.3108 17.879 19.4015 18.5497 19.5828C19.2669 19.7767 19.7651 19.7226 19.9618 19.5828C20.0197 19.5417 19.9618 19.5797 19.9618 19.5797C20.0776 19.3743 19.9213 19.0539 19.6088 18.4131L17.4561 14"
          variants={{
            rest: {
              pathLength: 1,
              y: 0,
            },
            hover: {
              pathLength: [0, 1],
              y: [0, 1, 0],
              transition: {
                pathLength: {
                  duration: 0.6,
                  delay: 0.15,
                  ease: "easeInOut",
                },
                y: {
                  duration: 0.4,
                  ease: "easeOut",
                },
              },
            },
          }}
        />

        {/* Left Ribbon */}
        <motion.path
          d="M11 16.3421L9.3736 20.6503C9.0459 21.5183 8.72171 21.9536 8.43671 22C8.15097 21.9578 7.97992 21.5263 7.63781 20.6632C7.39287 20.0453 7.25175 19.6893 6.99948 19.5226C6.92213 19.4715 6.83745 19.4312 6.74803 19.4027C6.45638 19.31 6.12101 19.4007 5.45027 19.582C4.73308 19.7758 4.2349 19.7186 4.03815 19.5788C3.92237 19.3735 4.07866 19.0531 4.39123 18.4124L6.54387 14"
          variants={{
            rest: {
              pathLength: 1,
              y: 0,
            },
            hover: {
              pathLength: [0, 1],
              y: [0, 1, 0],
              transition: {
                pathLength: {
                  duration: 0.6,
                  delay: 0.25,
                  ease: "easeInOut",
                },
                y: {
                  duration: 0.4,
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

export default StarAwardIco;


`
,

Place1:`


import React from "react";
import { motion } from "framer-motion";

const FristPlaceIco = () => {
  return (
    <motion.div
      className="h-10 w-10 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
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
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Trophy Cup */}
        <motion.circle
          cx="12"
          cy="15.5"
          r="6.5"
          variants={{
            rest: {
              pathLength: 1,
              fill: "transparent",
            },
            hover: {
              pathLength: [0, 1],
              fill: ["transparent", "transparent", "#EAB308"],
              transition: {
                pathLength: {
                  duration: 0.9,
                  ease: "easeInOut",
                },
                fill: {
                  delay: 0.8,
                  duration: 0.3,
                },
              },
            },
          }}
        />

        {/* Left Handle */}
        <motion.path
          d="M9 9.5L5.5 2"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.4,
                delay: 0.05,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Right Handle */}
        <motion.path
          d="M15 9.5L18.5 2"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.4,
                delay: 0.1,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Right Top Detail */}
        <motion.path
          d="M15 2L14 4.5"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.3,
                delay: 0.15,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Left Top Detail */}
        <motion.path
          d="M12.5 9L9.5 2"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.4,
                delay: 0.2,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Trophy Stem + Base Detail */}
        <motion.path
          d="M11 18H12M12 18H13M12 18V13L11 13.5"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.5,
                delay: 0.25,
                ease: "easeInOut",
              },
            },
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default FristPlaceIco;
`
,

Place2:`

import React from "react";
import { motion } from "framer-motion";

const SecondPlaceIco = () => {
  return (
    <motion.div
      className="h-10 w-10 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
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
      >
        {/* Trophy Body */}
        <motion.circle
          cx="12"
          cy="15.5"
          r="6.5"
          variants={{
            rest: {
              pathLength: 1,
              fill: "transparent",
            },
            hover: {
              pathLength: [0, 1],
              fill: ["transparent", "transparent", "#C0C0C0"],
              transition: {
                pathLength: {
                  duration: 0.8,
                  delay: 0.1,
                  ease: "easeInOut",
                },
                fill: {
                  delay: 0.8,
                  duration: 0.3,
                },
              },
            },
          }}
        />

        {/* Left Side */}
        <motion.path
          d="M9 9.5L5.5 2"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.4,
                delay: 0.15,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Right Side */}
        <motion.path
          d="M15 9.5L18.5 2"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.4,
                delay: 0.2,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Top Right */}
        <motion.path
          d="M15 2L14 4.5"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.3,
                delay: 0.25,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Top Left */}
        <motion.path
          d="M12.5 9L9.5 2"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.4,
                delay: 0.3,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Number 2 - Keep Above Fill */}
        <motion.path
          d="M10.5 14L11.0305 13.4285C11.653 12.799 12.6825 12.873 13.2107 13.5852C13.6233 14.1417 13.5915 14.915 13.1346 15.4349L10.5 18H13.4315"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            rest: {
              pathLength: 1,
              opacity: 1,
            },
            hover: {
              pathLength: [0, 1],
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.9,
                ease: "easeInOut",
              },
            },
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default SecondPlaceIco;

`
,


Place3:`

import React from "react";
import { motion } from "framer-motion";

const ThirdPlaceIco = () => {
  return (
    <motion.div
      className="h-10 w-10 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
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
      >
        {/* Trophy Body */}
        <motion.circle
          cx="12"
          cy="15.5"
          r="6.5"
          variants={{
            rest: {
              pathLength: 1,
              fill: "transparent",
            },
            hover: {
              pathLength: [0, 1],
              fill: ["transparent", "transparent", "#CD7F32"],
              transition: {
                pathLength: {
                  duration: 0.8,
                  delay: 0.1,
                  ease: "easeInOut",
                },
                fill: {
                  delay: 0.8,
                  duration: 0.3,
                },
              },
            },
          }}
        />

        {/* Left Side */}
        <motion.path
          d="M9 9.5L5.5 2"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.4,
                delay: 0.15,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Right Side */}
        <motion.path
          d="M15 9.5L18.5 2"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.4,
                delay: 0.2,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Top Right */}
        <motion.path
          d="M15 2L14 4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.3,
                delay: 0.25,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Top Left */}
        <motion.path
          d="M12.5 9L9.5 2"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.4,
                delay: 0.3,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Number 3 */}
        <motion.path
          d="M10.5 14C10.8265 13.347 11.2786 13 12 13C12.7296 13 13.5 13.4558 13.5 14.25C13.5 14.9404 12.9404 15.5 12.25 15.5C12.9404 15.5 13.5 16.0596 13.5 16.75C13.5 17.5442 12.7296 18 12 18C11.2786 18 10.8265 17.653 10.5 17"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            rest: {
              pathLength: 1,
              opacity: 1,
            },
            hover: {
              pathLength: [0, 1],
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.9,
                ease: "easeInOut",
              },
            },
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default ThirdPlaceIco;

`
,

Fav:`


import React from "react";
import { motion } from "framer-motion";

const FavIco = () => {
  return (
    <motion.div
      className="h-10 w-10 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
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

`
,

Star01:`

import React from "react";
import { motion } from "framer-motion";

const StarIco = () => {
  return (
    <motion.div
      className="h-10 w-10 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
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
          d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
          variants={{
            rest: {
              pathLength: 1,
              fill: "transparent",
              scale: 1,
            },
            hover: {
              pathLength: [0, 1],
              fill: ["transparent", "transparent", "#FACC15"],
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

export default StarIco;

`
,

Support:`


import React from "react";
import { motion } from "framer-motion";

const SupportIco = () => {
  return (
    <motion.div
      className="h-10 w-10 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex justify-center items-center"
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
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Outer circle */}
        <motion.path
          d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
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

        {/* Heart */}
        <motion.path
          d="M12 17C12 17 7 13.8235 7 10.75C7 9.23122 8.05263 8 9.5 8C10.25 8 11 8.26471 12 9.32353C13 8.26471 13.75 8 14.5 8C15.9474 8 17 9.23122 17 10.75C17 13.8235 12 17 12 17Z"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.6,
                delay: 0.7,
                ease: "easeInOut",
              },
            },
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default SupportIco;



`
,

Like:`



import React from "react";
import { motion } from "framer-motion";

const LikeIcon = () => {
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
        {/* Small thumb/base */}
        <motion.path
          d="M2 12.5C2 11.3954 2.89543 10.5 4 10.5C5.65685 10.5 7 11.8431 7 13.5V17.5C7 19.1569 5.65685 20.5 4 20.5C2.89543 20.5 2 19.6046 2 18.5V12.5Z"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.45,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Main thumb */}
        <motion.path
          d="M15.4787 7.80626L15.2124 8.66634C14.9942 9.37111 14.8851 9.72349 14.969 10.0018C15.0369 10.2269 15.1859 10.421 15.389 10.5487C15.64 10.7065 16.0197 10.7065 16.7791 10.7065H17.1831C19.7532 10.7065 21.0382 10.7065 21.6452 11.4673C21.7145 11.5542 21.7762 11.6467 21.8296 11.7437C22.2965 12.5921 21.7657 13.7351 20.704 16.0211C19.7297 18.1189 19.2425 19.1678 18.338 19.7852C18.2505 19.8449 18.1605 19.9013 18.0683 19.9541C17.116 20.5 15.9362 20.5 13.5764 20.5H13.0646C10.2057 20.5 8.77628 20.5 7.88814 19.6395C7 18.7789 7 17.3939 7 14.6239V13.6503C7 12.1946 7 11.4668 7.25834 10.8006C7.51668 10.1344 8.01135 9.58664 9.00069 8.49112L13.0921 3.96056C13.1947 3.84694 13.246 3.79012 13.2913 3.75075C13.7135 3.38328 14.3652 3.42464 14.7344 3.84235C14.774 3.8871 14.8172 3.94991 14.9036 4.07554C15.0388 4.27205 15.1064 4.37031 15.1654 4.46765C15.6928 5.33913 15.8524 6.37436 15.6108 7.35715C15.5838 7.46692 15.5488 7.5801 15.4787 7.80626Z"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.8,
                delay: 0.15,
                ease: "easeInOut",
              },
            },
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default LikeIcon;

`
,



Dislike:`


import React from "react";
import { motion } from "framer-motion";

const DislikeIcon = () => {
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
        {/* Small thumb / base */}
        <motion.path
          d="M2 11.5C2 12.6046 2.89543 13.5 4 13.5C5.65685 13.5 7 12.1569 7 10.5V6.5C7 4.84315 5.65685 3.5 4 3.5C2.89543 3.5 2 4.39543 2 5.5V11.5Z"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.45,
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Main thumb */}
        <motion.path
          d="M15.4787 16.1937L15.2124 15.3337C14.9942 14.6289 14.8851 14.2765 14.969 13.9982C15.0369 13.7731 15.1859 13.579 15.389 13.4513C15.64 13.2935 16.0197 13.2935 16.7791 13.2935H17.1831C19.7532 13.2935 21.0382 13.2935 21.6452 12.5327C21.7145 12.4458 21.7762 12.3533 21.8296 12.2563C22.2965 11.4079 21.7657 10.2649 20.704 7.9789C19.7297 5.88111 19.2425 4.83222 18.338 4.21485C18.2505 4.15508 18.1605 4.0987 18.0683 4.04586C17.116 3.5 15.9362 3.5 13.5764 3.5H13.0646C10.2057 3.5 8.77628 3.5 7.88814 4.36053C7 5.22106 7 6.60607 7 9.37607V10.3497C7 11.8054 7 12.5332 7.25834 13.1994C7.51668 13.8656 8.01135 14.4134 9.00069 15.5089L13.0921 20.0394C13.1947 20.1531 13.246 20.2099 13.2913 20.2493C13.7135 20.6167 14.3652 20.5754 14.7344 20.1577C14.774 20.1129 14.8172 20.0501 14.9036 19.9245C15.0388 19.728 15.1064 19.6297 15.1654 19.5323C15.6928 18.6609 15.8524 17.6256 15.6108 16.6429C15.5838 16.5331 15.5488 16.4199 15.4787 16.1937Z"
          variants={{
            rest: {
              pathLength: 1,
            },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: 0.8,
                delay: 0.15,
                ease: "easeInOut",
              },
            },
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default DislikeIcon;

`
,










}




export const getIconCode = (icon: IconConfig) => {
  return iconCodes[icon.interactionType];
};