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
import { getComponentCode } from "@/app/components /CodeMakerbtn";
import { cards } from "../card/data";
import { icons } from "@/app/components /icons/data";
import CardAnimation from "../card/CarouselAnimation";
import { getComponentCodeCousel } from "../CodeMakerCousel";
import IconAnimation from "../icons/IconAnimation";

const outfit1 = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

const categories = ["Button", "Carousel", "Icons"];

const data = [...buttons, ...cards, ...icons];

const Category = () => {
  const [selected, setSelected] = useState("Button");

  return (
    <section className="mx-auto mt-20 w-full max-w-7xl px-4 py-8">
      <div
        id="comp"
        className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between"
      >
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
            href="https://github.com/AngadBari/themicro"
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

      <div
        className={
          selected === "Button"
            ? "mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
            : selected === "Icons"
            ? "mx-auto flex max-w-5xl flex-wrap gap-6"
            : "mx-auto grid max-w-5xl gap-6 sm:grid-cols-1 lg:grid-cols-2"
        }
      >
        {/* Buttons */}
        {selected === "Button" &&
          buttons.map((item) => {
            const buttonCode = getComponentCode(item);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="rounded-2xl border border-neutral-200 bg-white p-4 transition-all hover:shadow-md dark:border-neutral-800 dark:bg-[#181818]"
              >
                <div className="flex h-40 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-[#131313]">
                  <AnimatedButton button={item} />
                </div>

                <div className="mt-6 flex items-center justify-between px-2">
                  <div>
                    <h2
                      className={`${outfit1.className} text-sm text-neutral-900 dark:text-neutral-100`}
                    >
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

        {/* Carousels */}
        {selected === "Carousel" &&
          cards.map((item) => {
            const buttonCode = getComponentCodeCousel(item);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-[#181818]"
              >
                <CardAnimation card={item} />

                <div className="mt-6 flex justify-between">
                  <div>
                    <h2
                      className={`${outfit1.className} text-sm text-neutral-900 dark:text-neutral-100`}
                    >
                      {item.title}
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

        {/* Icons */}
        {selected === "Icons" &&
          icons.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <IconAnimation icons={item} />

              <div className="mt-2 flex justify-between">
                <div>
                  <h2
                    className={`${outfit1.className} text-sm text-neutral-900 dark:text-neutral-100`}
                  >
                    {item.label}
                  </h2>

                 
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
};
export default Category;
