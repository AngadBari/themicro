import { ButtonConfig } from "./button/data";

export function getComponentCode(button: ButtonConfig) {
  switch (button.interactionType) {
    case "slide-arrow":
      return `
 "use client";
 import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Outfit } from "next/font/google";
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
      className=" inline-flex items-center rounded-full border border-neutral-300 bg-white px-7 py-2 transition-colors hover:bg-neutral-50 dark:border-neutral-700   dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 "
    >
    <motion.div
        layout
        className="flex items-center gap-3"
        transition={{
          layout:{
            type:"spring",
            stiffness:500,
            damping:28
          }
        }}
      >
        <AnimatePresence mode="popLayout">
          {!hovered && (
            <motion.div
              key="left-icon"
              layout
              initial={{
                opacity:0,
                x:-12,
                scale:0.7
              }}

              animate={{
                opacity:1,
                x:12,
                scale:1
              }}

              exit={{
                opacity:0,
                x:-12,
                scale:0.7
              }}

              transition={{
                type:"spring",
                stiffness:650,
                damping:22
              }}

              className="mr-2 flex items-center"
            >

              <motion.div
                animate={{
                  scale:1
                }}

                transition={{
                  type:"spring",
                  stiffness:500,
                  damping:18
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

        <motion.span
          layout
          transition={{
            layout:{
              type:"spring",
              stiffness:500,
              damping:28
            }
          }}

          className={\`\${outfit.className} text-[13px] whitespace-nowrap\`}
        >

          ${button.label}
        </motion.span>
        <AnimatePresence mode="popLayout">
          {hovered && (
            <motion.div
              key="right-icon"
              layout
              initial={{
                opacity:0,
                x:12,
                scale:0.7
              }}
              animate={{
                opacity:1,
                x:0,
                scale:1
              }}
              exit={{
                opacity:0,
                x:12,
                scale:0.7
              }}
              transition={{
                type:"spring",
                stiffness:650,
                damping:22
              }}

              className="ml-2 flex items-center"
            >

              <motion.div
                animate={{
                  scale:1
                }}
                transition={{
                  type:"spring",
                  stiffness:500,
                  damping:18
                }}
              >
                <HugeiconsIcon
                  icon={${button.icon2Name}}
                  size={16}
                />

              </motion.div>

            </motion.div>

          )}
        </AnimatePresence>
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
import "tap-tone";


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
    v data-tone-tap
      onMouseEnter={()=>setHovered(true)}
      onMouseLeave={()=>setHovered(false)}
      className=" inline-flexvitems-center rounded-full border border-neutral-300 bg-white px-7 py-2 transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800
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

    default:
      return "";
  }
}
