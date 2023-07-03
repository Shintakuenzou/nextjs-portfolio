"use client";

import { motion } from "framer-motion";
import { Posts } from "../components/Posts";

export default function FirstPost() {
  return (
    <div className="mx-auto mb-12 flex h-full w-[600px] select-none flex-col items-center justify-center text-zinc-50 max-[965px]:w-[350px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        className="mt-12 flex flex-col gap-3 px-5"
      >
        <h2 className="px-5 text-xl font-medium leading-relaxed text-zinc-100">
          My Blog
        </h2>
        <Posts />
      </motion.div>
    </div>
  );
}
