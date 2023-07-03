"use client";
import { socialMidias } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";

export function SocialMidia() {
  return (
    <motion.div
      initial={{ y: 1000 }}
      animate={{ y: 0, transition: { duration: 0.5 } }}
      className="flex flex-col gap-5"
    >
      <h2 className="px-5 text-xl font-medium leading-relaxed text-zinc-100">
        Social Midia
      </h2>
      {socialMidias.map((social) => {
        return (
          <Link href={social.link} key={social.link}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex gap-5 rounded-xl border border-zinc-600 bg-zinc-800 p-6 transition-colors hover:bg-zinc-700"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-zinc-600 bg-zinc-700">
                {social.socialMidiaIcon}
              </div>
              <div className="flex flex-col justify-between">
                <p className="text-zinc-100">{social.soicalMidiaName}</p>
                <p className="text-xs text-zinc-300">{social.userName}</p>
              </div>
            </motion.div>
          </Link>
        );
      })}
    </motion.div>
  );
}
