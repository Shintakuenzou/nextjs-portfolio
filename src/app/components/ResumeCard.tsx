"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { ExperienceProps, experiences } from "@/constants";

function ResumeCardElement(experience: ExperienceProps) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        backgroundColor: "rgb(39,39,42,1)",
        border: "1px solid rgb(82,82,91,1)",
        color: "#FFF",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      icon={experience.icon}
      iconStyle={{ background: experience.iconBg }}
    >
      <div>
        <h3 className="text-white font-bold">{experience.title}</h3>
        <ul className="mt-5 ml-5 space-y-2 text-sm list-disc">
          {experience.points.map((point, index) => {
            return (
              <li
                key={index}
                className="text-zinc-100 text-[14px] pl-1 tracking-wider"
              >
                {point}
              </li>
            );
          })}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
}

export function ResumeCard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className="flex flex-col items-center mt-12 gap-3 px-5 w-[1115px] h-full max-[1115px]:w-auto"
    >
      <h2 className="font-semibold leading-relaxed text-zinc-100 text-center text-xl px-5">
        Works Experience{" "}
        <span className="max-[940px]:flex max-[940px]:flex-col">&</span>{" "}
        Certification
      </h2>

      <div className="mt-20 flex flex-col items-center justify-center max-[940px]:w-[350px]">
        <VerticalTimeline>
          {experiences.map((experience: ExperienceProps, index) => {
            return <ResumeCardElement key={index} {...experience} />;
          })}
        </VerticalTimeline>
      </div>
    </motion.div>
  );
}
