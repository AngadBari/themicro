"use client";

import React from "react";
import { motion } from "framer-motion";
import { Outfit } from "next/font/google";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon, CodeXmlIcon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import ViewCounter from "../VisteCount";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["700"],
});

const outfit2 = Outfit({
  subsets: ["latin"],
  weight: ["500"],
});

const Hero = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
          className={`${outfit.className} text-3xl sm:text-4xl lg:text-5xl xl:text-5xl leading-tight`}
        >
          <span>TheMicro</span>{" "}
          <span className="text-neutral-500">— Transitions</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.35,
            duration: 0.5,
          }}
          className={`mx-auto mt-5 max-w-2xl text-sm sm:text-base lg:text-lg leading-7 text-neutral-600 ${outfit2.className}`}
        >
          A curated library of premium micro-interactions, sounds, and
          transition components that make interfaces feel physical.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <Link
            href="https://github.com/AngadBari/themicro"
            target="_blank"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-neutral-300 bg-neutral-900 px-6 sm:px-8 py-3 text-neutral-100 transition hover:bg-neutral-800"
          >
            <HugeiconsIcon
              icon={GithubIcon}
              size={18}
              strokeWidth={1.8}
            />

            <span className={`${outfit2.className} text-sm`}>
              GitHub Repo
            </span>
          </Link>

          <Link
            href="/#comp"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-6 sm:px-8 py-3 text-neutral-900 transition hover:bg-neutral-200"
          >
            <HugeiconsIcon
              icon={CodeXmlIcon}
              size={18}
              strokeWidth={1.8}
            />

            <span className={`${outfit2.className} text-sm`}>
              Components
            </span>
          </Link>
        </motion.div>

        {/* View Counter */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <ViewCounter />
        </div>
      </div>
    </motion.main>
  );
};

export default Hero;