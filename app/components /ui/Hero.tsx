"use client";

import React from "react";
import { motion } from "framer-motion";
import { Outfit } from "next/font/google";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon, CodeXmlIcon } from "@hugeicons/core-free-icons";
import Link from "next/link";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["700"],
});

const outfit1 = Outfit({
  subsets: ["latin"],
  weight: ["600"],
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
      className="mx-auto max-w-xl text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.5,
        }}
        className={`${outfit.className} text-5xl`}
      >
        <span>TheMicro</span> —{" "}
        <span className="text-neutral-600">Transitions</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.35,
          duration: 0.5,
        }}
        className={`mt-4 ${outfit2.className}`}
      >
        A curated library of premium micro-interactions, sounds, and transition
        components that make interfaces feel physical.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
        className="mt-6 inline-flex gap-5"
      >
        < Link href="https://github.com/AngadBari/themicro" className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-900 px-8 py-2 text-neutral-100 transition hover:bg-neutral-800 cursor-pointer">
          <HugeiconsIcon
            icon={GithubIcon}
            size={18}
            strokeWidth={1.8}
          />

          <span className={`${outfit2.className} text-[13px]`}>
            GitHub Repo
          </span>
        </Link>

        <Link href="/#comp" className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-8 py-2 text-neutral-900 transition hover:bg-neutral-200 cursor-pointer">
          <HugeiconsIcon
            icon={CodeXmlIcon}
            size={18}
            strokeWidth={1.8}
          />

          <span className={`${outfit2.className} text-[13px]`}>
            Components
          </span>
        </Link>
      </motion.div>
    </motion.main>
  );
};

export default Hero;