"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Outfit } from "next/font/google";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon } from "@hugeicons/core-free-icons";
import { buttons } from "@/app/components /button/data";
import AnimatedButton from "../button/AnimationButton";
import CopyCode from "@/app/components /section/CopyCode";
import { getComponentCode } from "@/app/components /CodeMaker";



const outfit1 = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

const categories = ["All", "Button"];

const data = buttons;

const Category = () => {
  const [selected, setSelected] = useState("All");

  const filteredData =
    selected === "All"
      ? data
      : data.filter((item) => item.category === selected);

  return (
    <section className="mx-auto mt-20 w-full max-w-7xl px-4 py-8">
    
      <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
       
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelected(category)}
              className={`${outfit1.className} rounded-full px-5 py-2 text-sm transition-all duration-200 ${
                selected === category
                  ? "bg-gray-100 text-black dark:bg-neutral-800 dark:text-white"
                  : "text-gray-500 hover:bg-gray-100 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

       
        <div className={`flex items-center gap-3 ${outfit1.className}`}>
          <Link
            href="https://github.com/AngadBari/Launchpad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-8 py-2 text-neutral-900 transition hover:bg-neutral-200"
          >
            <HugeiconsIcon icon={GithubIcon} size={18} strokeWidth={1.8} />
            <span className={`${outfit1.className} text-[13px]`}>
               Star on GitHub
            </span>
          </Link>
        </div>
      </div>

      
      <motion.div 
      key={selected}
         initial={{opacity:0,y:40}}
         animate={{opacity:1,y:0}}
         exit={{ opacity: 0, y: -20 }}
    transition={{
      duration: 0.3,
      ease: "easeOut",
    }}

      className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
       {filteredData.map((item) => {
  const buttonCode = getComponentCode(item);

  return (
    <motion.div
    //   key={item.id}
    //   initial={{opacity:0,y:20}}
    //      animate={{opacity:1,y:0}}
    //      transition={{
    //   duration: 0.35,
    //   delay:item.id*0.1,
    //   ease: "easeOut",
    // }}
      className="rounded-2xl border border-neutral-200 bg-white p-4 transition-all hover:shadow-md dark:border-neutral-800 dark:bg-[#181818]"
    >
      <div className="flex h-40 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-[#131313]">
        <AnimatedButton button={item} />
      </div>

      <div className="mt-6 flex items-center justify-between px-2">
        <div>
          <h2 className={`${outfit1.className} text-sm text-neutral-900 dark:text-neutral-100`}>
            {item.label}
          </h2>

          <p className="mt-1 text-xs text-neutral-500">
            {item.dis}
          </p>
        </div>

        <CopyCode code={buttonCode} />
      </div>
    </motion.div>
  );
})}
      </motion.div>
    </section>
  );
};

export default Category;
