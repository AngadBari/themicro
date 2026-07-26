"use client";

import { span } from "framer-motion/client";
import { useEffect, useState } from "react";

export default function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    fetch(
      "https://page-views-api.ratneshc.com/api/v1/views?site=the-micro.vercel.app.app&path=/"
    )
      .then((res) => res.json())
      .then((data) => setViews(data.views))
      .catch(() => setViews(0));
  }, []);

  if (views === null) return <span className="text-neutral-400 font-mono text-[13px]">visitor</span>;

  return <p className="text-neutral-400 font-mono text-[13px]"> You're the <span className=" text-neutral-800 dark:text-neutral-100 ">  {views.toLocaleString()}<sup>th</sup> </span>  visitor  </p>;
}