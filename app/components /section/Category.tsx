"use client";

import Link from "next/link";
import { useState } from "react";
import { Outfit } from "next/font/google";
import { motion } from "framer-motion";

import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon } from "@hugeicons/core-free-icons";

import { buttons } from "@/app/components /button/data";
import AnimatedButton from "../button/AnimationButton";

import CopyCode from "@/app/components /section/CopyCode";
import { getComponentCode } from "@/app/components /CodeMakerbtn";

import { cards } from "../card/data";
import CardAnimation from "../card/CarouselAnimation";
import { getComponentCodeCousel } from "../CodeMakerCousel";

import { icons } from "@/app/components /icons/data";
import IconAnimation from "../icons/IconAnimation";

import { orbs } from "@/app/components /orbs/data";
import OrbAnimation from "@/app/components /orbs/OrbAnimation";
import { getComponentCodeOrb } from "@/app/OrbCodeMaker";

const outfit1 = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

const categories = ["Button", "Carousel", "Icons", "Orbs"];

const Category = () => {
  const [selected, setSelected] = useState("Button");

  return (
    <section className="w-full px-4 py-10">
      {/* Header */}
      <div className="mx-auto mb-10 flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2">
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

        {/* GitHub */}
        <div className={`flex items-center gap-3 ${outfit1.className}`}>
          <Link
            href="https://github.com/AngadBari/themicro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-8 py-2 text-neutral-900 transition hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
          >
            <HugeiconsIcon
              icon={GithubIcon}
              size={18}
              strokeWidth={1.8}
            />

            <span className={`${outfit1.className} text-[13px]`}>
              Star on GitHub
            </span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div
        className={
          selected === "Button"
            ? "mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
            : selected === "Icons"
              ? "mx-auto flex max-w-5xl flex-wrap gap-6"
              : selected === "Orbs"
                ? "mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-2"
                : "mx-auto grid max-w-5xl gap-6 sm:grid-cols-1 lg:grid-cols-2"
        }
      >
        {/* ================= BUTTONS ================= */}
        {selected === "Button" &&
          buttons.map((item) => {
            const buttonCode = getComponentCode(item);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="rounded-2xl border border-neutral-200 bg-white p-4 transition-all hover:shadow-md dark:border-neutral-800 dark:bg-[#181818]"
              >
                {/* Preview */}
                <div className="flex h-40 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-[#131313]">
                  <AnimatedButton button={item} />
                </div>

                {/* Info */}
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

        {/* ================= CAROUSELS ================= */}
        {selected === "Carousel" &&
          cards.map((item) => {
            const carouselCode = getComponentCodeCousel(item);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-[#181818]"
              >
                {/* Preview */}
                <CardAnimation card={item} />

                {/* Info */}
                <div className="mt-6 flex items-center justify-between">
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

                  <CopyCode code={carouselCode} />
                </div>
              </motion.div>
            );
          })}

        {/* ================= ICONS ================= */}
        {selected === "Icons" &&
          icons.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
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

        {/* ================= ORBS ================= */}
        {selected === "Orbs" &&
  orbs.map((item) => {
    const orbCode = getComponentCodeOrb(item);

    return (
      <motion.div
        key={item.id}
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="rounded-2xl border border-neutral-200 bg-white p-4 transition-all hover:shadow-md dark:border-neutral-800 dark:bg-[#181818]"
      >
        {/* Orb Preview */}
        <div className="flex h-48 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-100 text-black dark:border-neutral-800 dark:bg-[#131313] dark:text-white">
          <OrbAnimation orb={item} />
        </div>

        {/* Orb Info */}
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

          {/* Copy Code */}
          <CopyCode code={orbCode} />
        </div>
      </motion.div>
    );
  })}
      </div>
    </section>
  );
};

export default Category;