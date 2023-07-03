import { StaticImageData } from "next/image";
import { ReactNode } from "react";

import { FaMailBulk, FaGithub, FaLinkedin, FaBriefcase } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";

import capa01 from "../../public/capa01.png";
import capa02 from "../../public/Next_Link_component_image.png";

import dayjs from "dayjs";
import ptBr from "dayjs/locale/pt-br";

dayjs.locale(ptBr);
const date = new Date();
const formateDate = dayjs(date).format("D[ de ]MMMM[, ]YYYY");

interface SocialMidiaProps {
  soicalMidiaName: string;
  userName: string;
  socialMidiaIcon: ReactNode;
  link: string;
}

interface Postsprops {
  title: string;
  url: StaticImageData;
  createdAt: string;
  href: string;
  description: string[];
}

export interface ExperienceProps {
  title: string;
  icon: ReactNode;
  iconBg: string;
  date: string;
  points: string[];
}

export const projectsDatas = [
  {
    title: "Projeto 01",
    subTitle: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Projeto 02",
    subTitle: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
];

export const socialMidias: SocialMidiaProps[] = [
  {
    soicalMidiaName: "E-mail",
    userName: "bob@gmail.com",
    socialMidiaIcon: <FaMailBulk size={23} />,
    link: "https://mail.google.com",
  },
  {
    soicalMidiaName: "Linkedin",
    userName: "@bob",
    socialMidiaIcon: <FaLinkedin size={23} />,
    link: "https://www.linkedin.com",
  },
  {
    soicalMidiaName: "Github",
    userName: "@Bob",
    socialMidiaIcon: <FaGithub size={23} />,
    link: "https://github.com/github",
  },
];

export const posts: Postsprops[] = [
  {
    title: "Princípios S.O.L.I.D",
    url: capa01,
    createdAt: formateDate,
    href: "/post/principios_solid",
    description: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi perferendis commodi, alias quo quia natus optio molestiae aliquid.Fugiat fugit, unde perferendis alias quidem veniam expedita voluptas commodi quasi vero!",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi perferendis commodi, alias quo quia natus optio molestiae aliquid Fugiat fugit, unde perferendis alias quidem veniam expedita voluptas commodi quasi vero!",
    ],
  },
  {
    title: "Next Links",
    url: capa02,
    createdAt: formateDate,
    href: "/post/next_links",
    description: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi perferendis commodi, alias quo quia natus optio molestiae aliquid.Fugiat fugit, unde perferendis alias quidem veniam expedita voluptas commodi quasi vero!",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi perferendis commodi, alias quo quia natus optio molestiae aliquid Fugiat fugit, unde perferendis alias quidem veniam expedita voluptas commodi quasi vero!",
    ],
  },
];

export const experiences: ExperienceProps[] = [
  {
    title: "React.js Developer",
    icon: <FaBriefcase />,
    iconBg: "#383E56",
    date: formateDate,
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    icon: <FaBriefcase />,
    iconBg: "#383E56",
    date: formateDate,
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Udemy - React Certification",
    icon: <TbCertificate />,
    iconBg: "#007bff",
    date: formateDate,
    points: [
      "Configure an application with Webpack",
      "Create components in React",
      "Integrate Redux into a React application",
      "Develop an application from scratch with React/Redux",
      "Develop a full-stack application in Javascript",
      "Apply good development practices",
    ],
  },
];

export const contacts = [
  {
    id: 1,
    title: "Collaboration with me",
    description: [
      "Are you looking for a designer to work with you to implement your ideas?",
      "Please feel free to contact me.",
    ],
  },
  {
    id: 2,
    title: "Hire Me",
    description: [
      "Are you looking for a designer to join your team?",
      " Please feel free to contact me.",
    ],
  },
];
