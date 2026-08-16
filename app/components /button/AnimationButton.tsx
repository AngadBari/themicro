"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SlideArrow from "@/app/components /button/interactions/SlideArrow";
import type { ButtonConfig } from "./data";

import Setting from "./interactions/Setting";
import Like from "./interactions/Like";
import Send from "./interactions/Send";
import GitHubStar from "./interactions/GitHubStar";
import Submit from "./interactions/Submit";
import Sher from "./interactions/Sher";
import Search from "./interactions/Search";
import Delete from "./interactions/Delete";
import Theme from "./interactions/Theme";
import Reload from "./interactions/Reload"



interface AnimatedButtonProps {
  button: ButtonConfig;
}

export default function AnimatedButton({ button }: AnimatedButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-7 py-2 transition-all hover:bg-neutral-50
     dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800  hover:scale-110 duration-200 group "
    >
      {button.interactionType === "slide-arrow" && (
        <SlideArrow
          hovered={hovered}
          label={button.label}
          Icon1={button.icon1}
          Icon2={button.icon2}
        />
      )}

      {button.interactionType === "setting" && (
        <Setting hovered={hovered} label={button.label} Icon1={button.icon1} />
      )}

       {button.interactionType === "like" && (
        <Like hovered={hovered} label={button.label} Icon1={button.icon1} />
      )}

       {button.interactionType === "send" && (
        <Send hovered={hovered} label={button.label} Icon1={button.icon1} />
      )}

      {button.interactionType === "star" && (
        <GitHubStar hovered={hovered} label={button.label} Icon1={button.icon1}  Icon2={button.icon2} />
      )}

       {button.interactionType === "submit" && (
        <Submit hovered={hovered} label={button.label} Icon1={button.icon1}  Icon2={button.icon2} />
      )}

       {button.interactionType === "Sher" && (
        <Sher hovered={hovered} label={button.label} Icon1={button.icon1}  Icon2={button.icon2} />
      )}

      {button.interactionType === "Search" && (
        <Search hovered={hovered} label={button.label} Icon1={button.icon1}  Icon2={button.icon2} />
      )}

       {button.interactionType === "Delete" && (
        <Delete hovered={hovered} label={button.label} Icon1={button.icon1} />
      )}

       {button.interactionType === "theme" && (
        <Theme hovered={hovered} label={button.label} Icon1={button.icon1}  Icon2={button.icon2} />
      )}

       {button.interactionType === "reload" && (
        <Reload hovered={hovered} label={button.label} Icon1={button.icon1} />
      )}

     


      

      
    </motion.button>
  );
}
