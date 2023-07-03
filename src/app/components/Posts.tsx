import { posts } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Posts() {
  return (
    <div className="grid gap-5">
      {posts.map((post) => {
        return (
          <motion.div
            key={post.title}
            whileHover={{ backgroundColor: "rgb(63, 63,70,1)" }}
            className="flex flex-col gap-3 rounded-xl border border-zinc-600 bg-zinc-800 p-6"
          >
            <Link href={post.href} className="space-y-3">
              <Image
                src={post.url}
                width={700}
                height={700}
                alt=""
                className="rounded-lg"
              />
              <h2 className="text-xl min-[320px]:text-lg">{post.title}</h2>
              <p className="text-sm text-zinc-300 min-[320px]:text-xs">
                {post.createdAt}
              </p>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
