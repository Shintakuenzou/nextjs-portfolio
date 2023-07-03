"use client";

import { contacts } from "@/constants";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="mx-auto mb-12 flex h-full w-[600px] select-none flex-col gap-6 text-zinc-50 max-[965px]:w-[350px]">
      <motion.div
        className="mt-12 flex flex-col gap-3 px-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
      >
        <h2 className="px-5 text-xl font-medium leading-relaxed text-zinc-100">
          Contact Me
        </h2>

        {contacts.map((contact) => {
          return (
            <div
              key={contact.id}
              className="flex flex-col gap-4 rounded-xl border border-zinc-600 bg-zinc-800 p-6"
            >
              <h3 className="font-medium max-[820px]:text-sm">
                {contact.title}
              </h3>
              {contact.description.map((description) => {
                return (
                  <p
                    key={description.length}
                    className="-mt-2 text-sm leading-none text-zinc-300 max-[820px]:text-xs"
                  >
                    {description}
                  </p>
                );
              })}
              <div className="mt-2 flex justify-start text-sm font-medium max-[820px]:text-xs">
                <a
                  target="_blank"
                  href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                  className="rounded-lg border border-zinc-400 bg-zinc-800 px-5 py-2 transition-colors hover:bg-zinc-100 hover:text-zinc-900 max-[820px]:px-3"
                >
                  Send Me E-mail
                </a>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
