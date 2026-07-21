import { ButtonConfig } from "./button/data";


export function getComponentCode(button: ButtonConfig) {

  const icon1Name = button.icon1Name;
  const icon2Name = button.icon2Name;


  return `
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Outfit } from "next/font/google";
import "tap-tone";

import {
  ${icon1Name},
  ${icon2Name}
} from "@hugeicons/core-free-icons";


const outfit = Outfit({
  subsets:["latin"],
  weight:["600"],
});


export default function ${button.label.replace(/\s+/g,"")}Button(){

  const [hovered,setHovered] = useState(false);


  return (

<motion.button

  data-tone-tap

  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}

  className="
    inline-flex
    items-center
    rounded-full
    border
    border-neutral-300
    bg-white
    px-7
    py-2
  "

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

icon={${icon1Name}}

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

icon={${icon2Name}}

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
}