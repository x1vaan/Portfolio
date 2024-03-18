import NextJsSVG from "@/app/svgs/NextJs";
import TailwindSVG from "../app/svgs/Tailwind";
import TypeScriptSVG from "@/app/svgs/TypeScript";
import PythonSVG from "@/app/svgs/Python";
import NodeSVG from "@/app/svgs/Node";
import PostgresSVG from "@/app/svgs/PostgreSQL";
import { StaticImageData } from "next/image";
import MewingDetector from "../../public/Mewing Detector.png";
import Localside from "../../public/Localside.png";
import { FC, SVGProps } from "react";
import StrapiSVG from "@/app/svgs/Strapi";

interface Technologies {
  name: string;
  svg: FC<SVGProps<SVGSVGElement>>;
  class: string;
}

export interface Project extends JSX.IntrinsicAttributes {
  title: string;
  description: string;
  technologies: Technologies[];
  image: StaticImageData;
}

const projects: Project[] = [
  {
    title: "Localside",
    description: "Web App de guia y lugares turisticos en España donde ademas se pueden reservar tours y actividades.",
    technologies: [
      { name: "Next.js", svg: NextJsSVG, class: "bg-black text-white" },
      { name: "Tailwind CSS", svg: TailwindSVG, class: "bg-[#003159] text-white" },
      { name: "Node.js", svg: NodeSVG, class: "bg-[#303030] text-[#3c873a]" },
      { name: "Strapi", svg: StrapiSVG, class: "bg-[#4945ff] text-[#ffffff]" },
      { name: "PostgreSQL", svg: PostgresSVG, class: "bg-[#336791] text-white" },
    ],
    image: Localside,
  },
  {
    title: "Mewing Detector",
    description:
      "Web App que reconoce si la persona tiene “Mewing” (Los practicantes de esta técnica a menudo reportan una mandíbula más marcada y un rostro más estructurado). Desarrollo de Frontend con Next.js y Backend con FastApi en Python para conectar con el engine y el modelo de reconocimiento de mewing.",
    technologies: [
      { name: "Next.js", svg: NextJsSVG, class: "bg-black text-white" },
      { name: "Tailwind CSS", svg: TailwindSVG, class: "bg-[#003159] text-white" },
      { name: "TypeScript", svg: TypeScriptSVG, class: "bg-[#fff] text-[#007acc]" },
      { name: "Python", svg: PythonSVG, class: "bg-[#FFDE57] text-[#4584B6]" },
    ],
    image: MewingDetector,
  },
];

export default projects;
