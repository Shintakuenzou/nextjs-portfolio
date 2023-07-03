"use client";

import { BsBoxArrowDownRight } from "react-icons/bs";
import { projectsDatas } from "@/constants";
import { motion } from "framer-motion";

export function SectionProjects() {
  return (
    <motion.div
      initial={{ y: 1000 }}
      animate={{ y: 0, transition: { duration: 0.5 } }}
      className="relative flex flex-col gap-5"
    >
      <h2 className="px-5 text-xl font-medium leading-relaxed text-zinc-100">
        Projects
      </h2>
      {projectsDatas.map((data) => {
        return (
          <motion.div
            key={data.title}
            whileHover={{ scale: 1.1 }}
            className="flex gap-5 rounded-xl border border-zinc-600 bg-zinc-800 p-6 transition-colors hover:bg-zinc-700"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-zinc-600 bg-zinc-700">
              <BsBoxArrowDownRight color="#FFF" />
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-zinc-100">{data.title}</p>
              <p className="text-sm text-zinc-300">{data.subTitle}</p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
