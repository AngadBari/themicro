"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Outfit } from "next/font/google";
import "tap-tone"

const outfit1 = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});


interface CopyButtonProps {
  code: string;
}

export default function CopyCode({ code }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);


  async function handleCopy() {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }


  return (
    <button
       data-tone-success
      onClick={handleCopy}
      className={` ${outfit1.className} flex items-center gap-2 text-[13px]`}
    >
      {
        copied ? (
          <>
            <Check size={16} className="text-green-500" />
            Copied
          </>
        ) : (
          <>
            <Copy size={16} />
            Copy
          </>
        )
      }
    </button>
  );
}