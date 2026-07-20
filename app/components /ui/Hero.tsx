import { main } from "framer-motion/client";
import React from "react";
import { Outfit } from "next/font/google";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon } from "@hugeicons/core-free-icons";
import { CodeXmlIcon } from "@hugeicons/core-free-icons";

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
    <main className="mx-auto max-w-xl text-center">
      <div className={` ${outfit2.className} text-5xl`}>
        <span className="">TheMicro</span> —{" "}
        <span className="text-neutral-600">Transitions</span>
      </div>

      <p className={`mt-4 ${outfit2.className} `}>
        A curated library of premium micro-interactions, sounds, and transition
        components that make interfaces feel physical.
      </p>

      <div className=" mt-6 inline-flex  gap-5">
        <button className=" inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-900 px-8 py-2 text-neutral-100 transition hover:bg-neutral-800">
          <HugeiconsIcon icon={GithubIcon} size={18} strokeWidth={1.8} />
          <span className={`${outfit2.className} text-[13px]`}>GitHub Repo</span>
        </button>

        <button className=" inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-8 py-2 text-neutral-900 transition hover:bg-neutral-200">
          <HugeiconsIcon icon={CodeXmlIcon} size={18} strokeWidth={1.8} />
          <span className={`${outfit2.className} text-[13px]`}>GitHub Repo</span>
        </button>
      </div>
    </main>
  );
};

export default Hero;
