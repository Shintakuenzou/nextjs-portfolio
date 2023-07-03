import { posts } from "@/constants";
import Image from "next/image";

import capa01 from "../../../../public/capa01.png";

export default function Page() {
  return (
    <article className="group mx-auto mb-12 flex h-full w-[600px] flex-col items-center justify-center text-zinc-50 max-[965px]:w-[350px]">
      <div className="mt-10 flex flex-col gap-2">
        <h3 className="text-sm font-medium text-zinc-400">
          {posts[0].createdAt}
        </h3>

        <Image
          src={capa01}
          width={500}
          height={500}
          alt=""
          className="h-full w-full rounded-xl border border-zinc-600 object-cover shadow-xl transition-colors group-hover:grayscale-[50%] dark:shadow-zinc-700/25"
        />
      </div>

      <div className="p-5">
        <h1 className="text-center text-2xl font-medium text-zinc-50">
          {posts[0].title}
        </h1>

        {posts[0].description.map((textDescription, i) => {
          return (
            <p
              key={i}
              className="text mt-2 line-clamp-3 text-base/relaxed text-zinc-400"
            >
              {textDescription}
            </p>
          );
        })}
      </div>
    </article>
  );
}
