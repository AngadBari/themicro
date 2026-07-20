"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "../theme/ThemeToggle";
import { Outfit } from "next/font/google";

import { usePathname } from "next/navigation";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["700"],
});

const outfit1 = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

export default function NavBar() {
  const pathname = usePathname();
  return (
    <header className=" h-16  backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80">

      <div className=" mx-auto max-w-6xl flex items-center justify-between mt-8">
        <div className="flex items-center gap-10">
          <Link
            href="/"
            className={` ${outfit.className}   text-xl font-bold tracking-tight`} >
            TheMicro
          </Link>

          <nav 
          className={`${outfit1.className} flex items-center gap-2 text-[13px]`} >
            <Link
              href="/"
              className={`rounded-full px-3 py-2 transition-colors ${
                pathname === "/"
                  ? "bg-gray-100 text-black dark:bg-neutral-800 dark:text-white"
                  : "text-gray-500 hover:bg-gray-100 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white"
              }`}
            >
              Components
            </Link>

            <Link
              href="/how-to-use"
              className={`rounded-full px-3 py-2 transition-colors ${
                pathname === "/how-to-use"
                  ? "bg-gray-100 text-black dark:bg-neutral-800 dark:text-white"
                  : "text-gray-500 hover:bg-gray-100 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white"
              }`}
            >
              How to Use
            </Link>
          </nav>
        </div>

       
        <div className="flex items-center gap-3">
          <a href="https://github.com/AngadBari">
            <motion.div
              className="bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md  border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200"
              initial="rest"
              whileHover="hover"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17"
                  variants={{
                    rest: {
                      pathLength: 1,
                      opacity: 1,
                    },
                    hover: {
                      pathLength: [0, 1],
                      opacity: 1,
                      transition: {
                        duration: 1.5,
                        ease: "easeInOut",
                      },
                    },
                  }}
                />

                <motion.path
                  d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22"
                  variants={{
                    rest: {
                      pathLength: 1,
                      opacity: 1,
                    },
                    hover: {
                      pathLength: [0, 1],
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 0.1,
                        ease: "easeInOut",
                      },
                    },
                  }}
                />
              </motion.svg>
            </motion.div>
          </a>

          <a href="https://x.com/angadbari01">
            <motion.div
              className=" bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border shadow-md  border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800
              duration-200"
              initial="rest"
              whileHover="hover"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516"
                  variants={{
                    rest: {
                      pathLength: 1,
                      opacity: 1,
                    },
                    hover: {
                      pathLength: [0, 1],
                      opacity: 1,
                      transition: {
                        duration: 1,
                        ease: "easeInOut",
                      },
                    },
                  }}
                />
              </motion.svg>
            </motion.div>
          </a>

          <div className="">
            <ThemeToggle />
          </div>

        </div>

        



      </div>
    </header>
  );
}
