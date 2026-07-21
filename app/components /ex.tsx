

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Outfit } from "next/font/google";
import "tap-tone";


import {
  Setting07Icon
} from "@hugeicons/core-free-icons";


const outfit = Outfit({
  subsets:["latin"],
  weight:["600"],
});


export default function SettingsButton(){

  const [hovered,setHovered] = useState(false);


  return (

    <motion.button

      data-tone-tap

      onMouseEnter={()=>setHovered(true)}
      onMouseLeave={()=>setHovered(false)}

      className="
        inline-flex
        items-center
        rounded-full
        border
        border-neutral-300
        bg-white
        px-7
        py-2
        transition-colors
        hover:bg-neutral-50
        dark:border-neutral-700
        dark:bg-neutral-900
        dark:text-white
        dark:hover:bg-neutral-800
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
          icon={Setting07Icon}
          size={16}
        />

      </motion.div>



      <span
        className={`${outfit.className} text-[13px] ml-2`}
      >

        Settings

      </span>


    </motion.button>

  );

}

