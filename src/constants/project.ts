import NextJsSVG from "@/app/svgs/NextJs";
import TailwindSVG from "../app/svgs/Tailwind";
import TypeScriptSVG from "@/app/svgs/TypeScript";
import { StaticImageData } from "next/image";
import MewingDetector from "../../public/Mewing Detector.png";
import { FC, SVGProps } from "react";

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
      { name: "TypeScript", svg: TypeScriptSVG, class: "bg-[#007acc] text-[#ffffff]" },
      { name: "Tailwind CSS", svg: TailwindSVG, class: "bg-[#73bcf6] text-white" },
      { name: "Python", svg: NextJsSVG, class: "bg-[#FFDE57] text-[#4584B6]" },
    ],
    image: MewingDetector,
  },
  {
    title: "Mewing Detector",
    description:
      "Front para Aplicación que reconoce si la persona tiene “Mewing” (Los practicantes de esta técnica a menudo reportan una mandíbula más marcada y un rostro más estructurado).Y también backend con FastApi en Python para conectar con el engine y el modelo de reconocimiento de mewing.",
    technologies: [
      { name: "Next.js", svg: NextJsSVG, class: "bg-black text-white" },
      { name: "TypeScript", svg: NextJsSVG, class: "bg-[#007acc] text-[#ffffff]" },
      { name: "Tailwind CSS", svg: NextJsSVG, class: "bg-[#73bcf6] text-white" },
      { name: "Python", svg: NextJsSVG, class: "bg-[#FFDE57] text-[#4584B6]" },
    ],
    image: MewingDetector,
  },
];

export default projects;
