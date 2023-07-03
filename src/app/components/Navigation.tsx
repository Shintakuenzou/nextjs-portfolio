"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathName = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative flex min-w-max justify-center rounded-b-2xl border border-zinc-700 bg-zinc-800"
    >
      <nav className="relative flex h-14 w-full flex-1 flex-col items-center">
        <ul className="m-auto flex w-full items-center justify-center gap-3 font-semibold text-zinc-100">
          <Link
            href="/"
            className={`rounded-xl px-5 py-3 transition-colors hover:bg-zinc-700 max-[1481px]:px-4 ${
              pathName === "/" ? "border border-zinc-400 bg-zinc-700" : ""
            }`}
          >
            Home
          </Link>

          <Link
            href="/post"
            className={`rounded-xl px-5 py-3 transition-colors hover:bg-zinc-700 max-[1481px]:px-4 ${
              pathName === "/post" ? "border border-zinc-400 bg-zinc-700" : ""
            }`}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className={`rounded-xl px-5 py-3 transition-colors hover:bg-zinc-700 max-[1481px]:px-4 ${
              pathName === "/about" ? "border border-zinc-400 bg-zinc-700" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`rounded-xl px-5 py-3 transition-colors hover:bg-zinc-700 max-[1481px]:px-4 ${
              pathName === "/contact"
                ? "border border-zinc-400 bg-zinc-700"
                : ""
            }`}
          >
            Contact
          </Link>
        </ul>
      </nav>
    </motion.header>
  );
}
