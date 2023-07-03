"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export async function Profile() {
  const response = await fetch("https://api.github.com/users/Shintakuenzou");
  const data = await response.json();
  const img = data.avatar_url;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className="mt-12 flex flex-col justify-start gap-3 px-5"
    >
      <Image
        src={img}
        width={100}
        height={100}
        alt={""}
        className="flex h-20 w-20 rounded-full border border-zinc-500"
      />

      <div className="flex flex-col items-start gap-2">
        <p className="flex select-none items-center gap-2 text-2xl font-semibold  leading-relaxed">
          Shintaku Enzou
          <span className="rounded-lg border border-zinc-500 bg-zinc-800 p-1 text-sm font-medium text-zinc-300 max-[975px]:text-[10px]">
            UI/UX, Front-End Dev
          </span>
        </p>
        <p className="text-sm text-zinc-300 max-[975px]:text-xs">
          I am a passionate Front-End Developer and UI/UX Designer who loves
          creating intuitive interfaces, with over 2 years of experience in web
          development and user experience design.
        </p>
      </div>
    </motion.div>
  );
}
