import { ButtonConfig } from "./button/data";

export function getComponentCode(button: ButtonConfig) {
  switch (button.interactionType) {
    case "slide-arrow":
      return `
"use client";

import {  motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";
import { Outfit } from "next/font/google";
import { useState } from "react";
import "tap-tone";

import {
        ${button.icon1Name},
        ${button.icon2Name}
    } from "@hugeicons/core-free-icons";


            const outfit = Outfit({
            subsets:["latin"],
            weight:["600"],
            });


        export default function ${button.label.replace(/\s+/g, "")}Button(){

         const [hovered,setHovered] = useState(false);


             return (
    <motion.button
      data-tone-tap
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className=" inline-flex items-center rounded-full border border-neutral-300 bg-white px-7 py-2 transition-colors hover:bg-neutral-50 dark:border-neutral-700   dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 hover:scale-110 duration-200 "
    >
      <motion.div
      data-tone-tap
      layout
      className="flex items-center gap-2"
      transition={{
        layout: {
          type: "spring",
          stiffness: 400,
          damping: 28,
        },
      }}
    >
      {/* Left Icon */}
      <motion.div
        animate={{
          x: hovered ? -30 : 0,
          opacity: hovered ? 0 : 1,
          width: hovered ? 0 : 16,
        }}
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
        className="overflow-hidden flex items-center"
      >
        <HugeiconsIcon icon={${button.icon1Name}} size={16} />
      </motion.div>

      {/* Label */}
      <motion.span
        layout
       className={\`\${outfit.className} whitespace-nowrap text-[13px]\`}
        transition={{
          layout: {
            type: "spring",
            stiffness: 400,
            damping: 28,
          },
        }}
      >
        ${button.label}
      </motion.span>

      {/* Right Icon */}
      <motion.div
        animate={{
          x: hovered ? 0 : 30,
          opacity: hovered ? 1 : 0,
          width: hovered ? 16 : 0,
        }}
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
        className="overflow-hidden flex items-center"
      >
        <HugeiconsIcon icon={${button.icon2Name}} size={16} />
      </motion.div>
    </motion.div>

    </motion.button>
  );
}
`;

    case "setting":
      return `

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Outfit } from "next/font/google";



import {
  ${button.icon1Name}
} from "@hugeicons/core-free-icons";


const outfit = Outfit({
  subsets:["latin"],
  weight:["600"],
});


export default function ${button.label.replace(/\s+/g, "")}Button(){

  const [hovered,setHovered] = useState(false);
  return (
    <motion.button
     
      onMouseEnter={()=>setHovered(true)}
      onMouseLeave={()=>setHovered(false)}
      className=" inline-flex items-center rounded-full border border-neutral-300 bg-white px-7 py-2 transition-all hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 hover:scale-110 duration-200
      "
    >

      <motion.div

        animate={{
          rotate:hovered ? 360 : 0
        }}

        transition={{
          duration:1,
          ease:"linear",
          repeat:hovered ? Infinity : 0
        }}
      >
        <HugeiconsIcon
          icon={${button.icon1Name}}
          size={16}
        />
      </motion.div>

      <span className={\`\${outfit.className} text-[13px] ml-2\`} >
        ${button.label}
      </span>

    </motion.button>

  );

}

`;

 case "like":
  return `
"use client";

import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Outfit } from "next/font/google";


import {
  ${button.icon1Name}
} from "@hugeicons/core-free-icons";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

export default function ${button.label.replace(/\s+/g, "")}Button() {
  return (
    <motion.button
     
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2 }}
      className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-7 py-2 transition-all hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 group"
    >
      <motion.div
        layout
        className=" flex items-center gap-2"
        transition={{
          layout: {
            type: "spring",
            stiffness: 500,
            damping: 28,
          },
        }}
      >
        <motion.div
          whileHover={{ scale: 1.15 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 18,
          }}
        >
          <HugeiconsIcon
            icon={${button.icon1Name}}
            size={18}
            className="transition-colors duration-200 group-hover:text-blue-600"
          />
        </motion.div>

        <motion.span
          layout
          transition={{
            layout: {
              type: "spring",
              stiffness: 500,
              damping: 28,
            },
          }}
          className={\`\${outfit.className} whitespace-nowrap text-[13px]\`}
        >
          ${button.label}
        </motion.span>
      </motion.div>
    </motion.button>
  );
}
`;



  case "send":
      return `
 "use client";
 import { useState } from "react";
import { motion} from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Outfit } from "next/font/google";
import "tap-tone";

import {
        ${button.icon1Name},
        
    } from "@hugeicons/core-free-icons";


            const outfit = Outfit({
            subsets:["latin"],
            weight:["600"],
            });


        export default function ${button.label.replace(/\s+/g, "")}Button(){

         const [hovered,setHovered] = useState(false);


             return (
    <motion.button
      data-tone-tap
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className=" inline-flex items-center rounded-full border border-neutral-300 bg-white px-7 py-2 transition-colors hover:bg-neutral-50 dark:border-neutral-700   dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 hover:scale-110 duration-200 "
    >
     <motion.div
         data-tone-tap
         layout
         className="flex items-center gap-2"
         transition={{
           layout: {
             type: "spring",
             stiffness: 400,
             damping: 28,
           },
         }}
       >
         {/* Left Icon */}
         <motion.div
           animate={{
             x: hovered ? -30 : 0,
             opacity: hovered ? 0 : 1,
             width: hovered ? 0 : 16,
           }}
           transition={{
             duration: 0.25,
             ease: "easeInOut",
           }}
           className="overflow-hidden flex items-center"
         >
           <HugeiconsIcon icon={${button.icon1Name}} size={16} />
         </motion.div>
   
         {/* Label */}
         <motion.span
           layout
          className={\`\${outfit.className} whitespace-nowrap text-[13px]\`}
           transition={{
             layout: {
               type: "spring",
               stiffness: 400,
               damping: 28,
             },
           }}
         >
           ${button.label}
         </motion.span>
   
         {/* Right Icon */}
         <motion.div
           animate={{
             x: hovered ? 0 : 30,
             opacity: hovered ? 1 : 0,
             width: hovered ? 16 : 0,
           }}
           transition={{
             duration: 0.25,
             ease: "easeInOut",
           }}
           className="overflow-hidden flex items-center text-green-400"
         >
           <HugeiconsIcon icon={${button.icon1Name}} size={16} />
         </motion.div>
       </motion.div>
    </motion.button>
  );
}
`;

case "star":
      return `
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Outfit } from "next/font/google";

import {
  ${button.icon1Name},
  ${button.icon2Name},
} from "@hugeicons/core-free-icons";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

export default function ${button.label.replace(/\s+/g, "")}Button() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      data-tone-tap
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.08 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 22,
      }}
      className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-7 py-2 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
    >
      <motion.div
        layout
        className="flex items-center gap-3"
        transition={{
          layout: {
            type: "spring",
            stiffness: 500,
            damping: 28,
          },
        }}
      >
        {/* Left Icon */}
        <AnimatePresence mode="popLayout">
          {!hovered && (
            <motion.div
              key="left-icon"
              layout
              initial={{
                opacity: 0,
                x: -12,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: -12,
                scale: 0.7,
              }}
              transition={{
                type: "spring",
                stiffness: 650,
                damping: 22,
              }}
              className="mr-2 flex items-center"
            >
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 18,
                }}
              >
                <HugeiconsIcon
                  icon={${button.icon1Name}}
                  size={16}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>


         {/* Right Icon */}
        <AnimatePresence mode="popLayout">
          {hovered && (
            <motion.div
              key="right-icon"
              layout
              initial={{
                opacity: 0,
                x: 12,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: 12,
                scale: 0.7,
              }}
              transition={{
                type: "spring",
                stiffness: 650,
                damping: 22,
              }}
              className="ml-2 flex items-center"
            >
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 18,
                }}
              >
                <HugeiconsIcon
                  icon={${button.icon2Name}}
                  size={16}
                  fill="yellow"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
       
        <motion.span
          layout
                  className={\`\${outfit.className} whitespace-nowrap text-[13px]\`}

          transition={{
            layout: {
              type: "spring",
              stiffness: 500,
              damping: 28,
            },
          }}
        >
          ${button.label}
        </motion.span>

       
      </motion.div>
    </motion.button>
  );
}

`;


case "submit":
      return `
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Outfit } from "next/font/google";

import {
  ${button.icon1Name},
  ${button.icon2Name},
} from "@hugeicons/core-free-icons";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

export default function ${button.label.replace(/\s+/g, "")}Button() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      data-tone-tap
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.08 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 22,
      }}
      className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-7 py-2 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
    >
    <motion.div
      data-tone-tap
      layout
      className="flex items-center gap-2"
      transition={{
        layout: {
          type: "spring",
          stiffness: 400,
          damping: 28,
        },
      }}
    >
      {/* Left Icon */}
      <motion.div
        animate={{
          x: hovered ? -30 : 0,
          opacity: hovered ? 0 : 1,
          width: hovered ? 0 : 16,
        }}
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
        className="overflow-hidden flex items-center"
      >
        <HugeiconsIcon icon={${button.icon1Name}} size={16} />
      </motion.div>

      {/* Label */}
      <motion.span
        layout
        className={\`\${outfit.className} whitespace-nowrap text-[13px]\`}
        transition={{
          layout: {
            type: "spring",
            stiffness: 400,
            damping: 28,
          },
        }}
      >
        ${button.label}
      </motion.span>

      {/* Right Icon */}
      <motion.div
        animate={{
          x: hovered ? 0 : 30,
          opacity: hovered ? 1 : 0,
          width: hovered ? 16 : 0,
        }}
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
        className="overflow-hidden flex items-center text-green-400"
      >
        <HugeiconsIcon icon={${button.icon2Name}} size={16} />
      </motion.div>
    </motion.div>
    </motion.button>
  );
}

`;



case "Sher":
      return `
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Outfit } from "next/font/google";

import {
  ${button.icon1Name},
  ${button.icon2Name},
} from "@hugeicons/core-free-icons";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

export default function ${button.label.replace(/\s+/g, "")}Button() {
  const [hovered, setHovered] = useState(false);

   return (

     <motion.button
      data-tone-tap
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.08 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 22,
      }}
      className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-7 py-2 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
    >
       <motion.div
         data-tone-tap
         layout
         className="flex items-center gap-2"
         transition={{
           layout: {
             type: "spring",
             stiffness: 400,
             damping: 28,
           },
         }}
       >
         {/* Left Icon */}
         <motion.div
           animate={{
             x: hovered ? -30 : 0,
             opacity: hovered ? 0 : 1,
             width: hovered ? 0 : 16,
           }}
           transition={{
             duration: 0.25,
             ease: "easeInOut",
           }}
           className="overflow-hidden flex items-center"
         >
           <HugeiconsIcon icon={${button.icon1Name}} size={16} />
         </motion.div>
   
         {/* Label */}
         <motion.span
           layout
            className={\`\${outfit.className} whitespace-nowrap text-[13px]\`}
           transition={{
             layout: {
               type: "spring",
               stiffness: 400,
               damping: 28,
             },
           }}
         >
           ${button.label}
         </motion.span>
   
         {/* Right Icon */}
         <motion.div
           animate={{
             x: hovered ? 0 : 30,
             opacity: hovered ? 1 : 0,
             width: hovered ? 16 : 0,
           }}
           transition={{
             duration: 0.25,
             ease: "easeInOut",
           }}
           className="overflow-hidden flex items-center text-green-400"
         >
           <HugeiconsIcon icon={${button.icon2Name}} size={16} />
         </motion.div>
       </motion.div>
    </motion.button>
  );
}

`;


case "Search":
      return `
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Outfit } from "next/font/google";

import {
  ${button.icon1Name},
  ${button.icon2Name},
} from "@hugeicons/core-free-icons";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

export default function ${button.label.replace(/\s+/g, "")}Button() {
  const [hovered, setHovered] = useState(false);

   return (

     <motion.button
      data-tone-tap
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.08 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 22,
      }}
      className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-7 py-2 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
    >
      <motion.div
      data-tone-tap
      layout
      className="flex items-center gap-3"
      transition={{
        layout: {
          type: "spring",
          stiffness: 500,
          damping: 28,
        },
      }}
    >
      {/* Icon */}
      <div className="relative flex h-4 w-4 items-center justify-center">
        <AnimatePresence mode="sync" initial={false}>
          {!hovered ? (
            <motion.div
              key="icon1"
              className="absolute"
              initial={{ opacity: 0, x: -4, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -4, scale: 0.9 }}
              transition={{
                duration: 0.15,
                ease: "easeOut",
              }}
            >
              <HugeiconsIcon icon={${button.icon1Name}} size={16} />
            </motion.div>
          ) : (
            <motion.div
              key="icon2"
              className="absolute"
              initial={{ opacity: 0, x: 4, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 4, scale: 0.9 }}
              transition={{
                duration: 0.15,
                ease: "easeOut",
              }}
            >
              <HugeiconsIcon
                icon={${button.icon2Name}}
                size={16}
               
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Label */}
      <motion.span
        layout
         className={\`\${outfit.className} whitespace-nowrap text-[13px]\`}
        transition={{
          layout: {
            type: "spring",
            stiffness: 500,
            damping: 28,
          },
        }}
      >
        ${button.label}
      </motion.span>
    </motion.div>
    </motion.button>
  );
}

`;



case "Delete":
      return `
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Outfit } from "next/font/google";

import {
  ${button.icon1Name}
} from "@hugeicons/core-free-icons";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

export default function ${button.label.replace(/\s+/g, "")}Button() {
  const [hovered, setHovered] = useState(false);

   return (

     <motion.button
      data-tone-tap
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.08 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 22,
      }}
      className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-7 py-2 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white group"
    >
      <motion.div
    data-tone-press
      layout
      className="flex items-center  "
      transition={{
        layout: {
          type: "spring",
          stiffness: 500,
          damping: 28,
        },
      }}
    >
     
      <motion.div
        className=" mr-2 flex items-center group-hover:text-red-600 "
       
      >
        <HugeiconsIcon
          icon={${button.icon1Name}}
          size={18}
          className="transition-colors duration-200  "
        />
      </motion.div>

      {/* Label */}
      <motion.span
        layout
        transition={{
          layout: {
            type: "spring",
            stiffness: 500,
            damping: 28,
          },
        }}
        className={\`\${outfit.className} whitespace-nowrap text-[13px]\`}
      >
        ${button.label}
      </motion.span>
    </motion.div>
    </motion.button>
  );
}

`;


case "theme":
      return `
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";
import { Outfit } from "next/font/google";
import { useState } from "react";
import "tap-tone";

import {
  ${button.icon1Name},
  ${button.icon2Name}
} from "@hugeicons/core-free-icons";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

export default function ${button.label.replace(/\s+/g, "")}Button() {
  const [hovered, setHovered] = useState(false);

   return (

     <motion.button
      data-tone-tap
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.08 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 22,
      }}
      className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-7 py-2 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white group"
    >
      <motion.div
      data-tone-tap
      layout
      className="flex items-center gap-3"
      transition={{
        layout: {
          type: "spring",
          stiffness: 500,
          damping: 28,
        },
      }}
    >
      {/* Icon */}
      <div className="relative flex h-4 w-4 items-center justify-center">
        <AnimatePresence mode="sync" initial={false}>
          {!hovered ? (
            <motion.div
              key="icon1"
              className="absolute"
              initial={{ opacity: 0, x: -4, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -4, scale: 0.9 }}
              transition={{
                duration: 0.15,
                ease: "easeOut",
              }}
            >
              <HugeiconsIcon icon={${button.icon1Name}} size={16} />
            </motion.div>
          ) : (
            <motion.div
              key="icon2"
              className="absolute"
              initial={{ opacity: 0, x: 4, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 4, scale: 0.9 }}
              transition={{
                duration: 0.15,
                ease: "easeOut",
              }}
            >
              <HugeiconsIcon
                icon={${button.icon2Name}}
                size={16}
                className="text-yellow-300"
                fill="none"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Label */}
      <motion.span
        layout
         className={\`\${outfit.className} whitespace-nowrap text-[13px]\`}
        transition={{
          layout: {
            type: "spring",
            stiffness: 500,
            damping: 28,
          },
        }}
      >
        ${button.label}
      </motion.span>
    </motion.div>
    </motion.button>
  );
}

`;




      

    default:
      return "";
  }
}

