"use client";
import React, { useState } from "react";
import { Outfit } from "next/font/google";
import { Copy, Check } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import { CodeXmlIcon } from "@hugeicons/core-free-icons";
import { motion } from "framer-motion";
import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";

import "tap-tone";
import Link from "next/link";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400"],
});

const outfit1 = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

const Cli = () => {
  const [copied, setCopied] = useState(false);

  const code = `npm install @hugeicons/core-free-icons @hugeicons/react framer-motion tap-tone`;

  async function handleCopy() {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }
  return (
    <>
   
<Link href={"/"} className={`mt-10 ml-30 inline-flex items-center text-[12px]  ${outfit1.className}`}>
  <HugeiconsIcon
      icon={ArrowLeft02Icon}
      size={16}
      color="currentColor"
      strokeWidth={1.5}
    />
  Back to Components
  </Link>

    <section className="mx-auto w-full mt-10 max-w-3xl px-4 mb-10">

      

      <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
        <h1 className={`${outfit1.className} text-[18px]`}>How to Use</h1>

        <div className=" mt-8">
          <h2 className={`${outfit1.className} text-[15px]`}>
            1 . Install Dependencies
          </h2>
          <p className={`${outfit.className} text-[13px] mt-2 px-2`}>
            Run the initialization command to detect your workspace setup and
            install peer dependencies.
            <span className=" text-neutral-500">
              {" "}
              ('motion/React and HugeiconsIcon / tap-tone{" "}
              <span className="text-neutral-100">( for Sound )</span> ')
            </span>
          </p>
        </div>

        <div className=" mt-8 px-1  ">
          <div className=" border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 px-4 py-2 rounded-md flex items-center justify-between ">
            <p className={` font-mono text-[12px]`}>{code}</p>

            <div className="">
              <button
                data-tone-success
                onClick={handleCopy}
                className={` ${outfit1.className} flex items-center gap-2 text-[13px]`}
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-green-500" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>

          <div className=" mt-8   ">
            <h2 className={`${outfit1.className} text-[15px]`}>
              2. Crate File And Copy & Paste Code
            </h2>

            <p className={`${outfit.className} text-[14px] mt-2 px-2`}>
              Create a new file inside your project where you keep reusable
              components.
            </p>
           
           <div className="px-4">
            <pre
              className={`${outfit.className} text-[15px] mt-2 px-5 whitespace-pre-wrap border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 py-2 rounded-md `}
            >
              {`Example:
                  src/
                   └── components/
                                    └── FileName.tsx`}
            </pre>
            </div>

           <p className={`${outfit.className} text-[14px] mt-3 px-2`}>Copy the component code you want to use and paste it into this file.</p>
          </div>




         <div className="mx-auto mt-20 flex max-w-xl items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 px-6 py-12">
  <div className="flex flex-col items-center gap-5 text-center">
    <p className={`${outfit1.className} text-xl`}>
      Ready to explore transition components
    </p>

    <Link href={"/#comp"} className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-8 py-2 text-neutral-900 transition hover:bg-neutral-200">
      <HugeiconsIcon
        icon={CodeXmlIcon}
        size={18}
        strokeWidth={1.8}
      />

      <span className={`${outfit1.className} text-[13px]`}>
        Explore the components
      </span>
    </Link>
  </div>
</div>


        </div>
        </motion.div>
      
    </section>
    </>
  );
  
};


export default Cli;
