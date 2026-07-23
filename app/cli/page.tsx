"use client";
import React, { useState } from "react";
import { Outfit } from "next/font/google";
import { Copy, Check } from "lucide-react";
import "tap-tone"

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

   const code = `Hello`;
  async function handleCopy() {
   

    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }
  return (
    <section className="mx-auto w-full mt-20 max-w-xl px-4">
      <div>
        <h1 className={`${outfit1.className} text-[18px]`}>How to Use</h1>

        <div className=" mt-8">
          <h2 className={`${outfit1.className} text-[15px]`}>
            1 . Install Dependencies
          </h2>
          <p className={`${outfit.className} text-[13px] mt-2 px-2`}>
            Run the initialization command to detect your workspace setup and
            install peer dependencies.
            <span className=" text-neutral-600">
              {" "}
              ('motion/React and HugeiconsIcon')
            </span>
          </p>
        </div>

        <div className=" mt-8 px-3  ">
          <div className=" border border-neutral-200 px-4 py-1 rounded-xl flex items-center justify-between ">
            <p className="">{code}</p>

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
        </div>
      </div>
    </section>
  );
};

export default Cli;
