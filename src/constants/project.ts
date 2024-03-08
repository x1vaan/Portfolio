import NextJsSVG from "@/app/svgs/NextJs";
import TailwindSVG from "../app/svgs/Tailwind";
import TypeScriptSVG from "@/app/svgs/TypeScript";
import PythonSVG from "@/app/svgs/Python";
import NodeSVG from "@/app/svgs/Node";
import PostgresSVG from "@/app/svgs/PostgreSQL";
import { StaticImageData } from "next/image";
import MewingDetector from "../../public/Mewing Detector.png";
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
    title: "Mewing Detector",
    description:
      "Front para Aplicación que reconoce si la persona tiene “Mewing” (Los practicantes de esta técnica a menudo reportan una mandíbula más marcada y un rostro más estructurado).Y también backend con FastApi en Python para conectar con el engine y el modelo de reconocimiento de mewing.",
    technologies: [
      { name: "Next.js", svg: NextJsSVG, class: "bg-black text-white" },
      { name: "TypeScript", svg: TypeScriptSVG, class: "bg-[#fff] text-[#007acc]" },
      { name: "Tailwind CSS", svg: TailwindSVG, class: "bg-[#003159] text-white" },
      { name: "Python", svg: PythonSVG, class: "bg-[#FFDE57] text-[#4584B6]" },
    ],
    image: MewingDetector,
  },
  {
    title: "Mewing Detector",
    description:
      "Front para Aplicación que reconoce si la persona tiene “Mewing” (Los practicantes de esta técnica a menudo reportan una mandíbula más marcada y un rostro más estructurado).Y también backend con FastApi en Python para conectar con el engine y el modelo de reconocimiento de mewing.",
    technologies: [
      { name: "Node.js", svg: NodeSVG, class: "bg-[#303030] text-[#3c873a]" },
      { name: "Strapi", svg: StrapiSVG, class: "bg-[#4945ff] text-[#ffffff]" },
      { name: "PostgreSQL", svg: PostgresSVG, class: "bg-[#336791] text-white" },
    ],
    image: MewingDetector,
  },
];

export default projects;
