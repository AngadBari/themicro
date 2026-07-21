"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SlideArrow from "@/app/components /interactions/SlideArrow";
import type { ButtonConfig } from "./data";
import "tap-tone";
import Setting from "../interactions/Setting";

interface AnimatedButtonProps {
  button: ButtonConfig;
}

export default function AnimatedButton({
  button,
}: AnimatedButtonProps) {
  const [hovered, setHovered] = useState(false);

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
transition-colors
hover:bg-neutral-50
dark:border-neutral-700
dark:bg-neutral-900
dark:text-white
dark:hover:bg-neutral-800
"    >
      {button.interactionType === "slide-arrow" && (
        <SlideArrow
          hovered={hovered}
          label={button.label}
          Icon1={button.icon1}
          Icon2={button.icon2}
        />
      )}

       {button.interactionType === "setting" && (
        <Setting
          hovered={hovered}
          label={button.label}
          Icon1={button.icon1}
          
        />
      )}
    </motion.button>
  );
}