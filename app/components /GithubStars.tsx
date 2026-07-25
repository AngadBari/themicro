"use client";

import { useEffect, useState } from "react";
import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

export default function GithubStars() {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    async function getStars() {
      const res = await fetch(
        "https://api.github.com/repos/AngadBari/themicro"
      );

      const data = await res.json();

      setStars(data.stargazers_count);
    }

    getStars();
  }, []);

  return <p className={` ${outfit.className} text-xs`}>{stars || "Loading..."}</p>;
}