import NextJsSVG from "@/app/svgs/NextJs";
import TailwindSVG from "../app/svgs/Tailwind";
import TypeScriptSVG from "@/app/svgs/TypeScript";
import PythonSVG from "@/app/svgs/Python";
import NodeSVG from "@/app/svgs/Node";
import PostgresSVG from "@/app/svgs/PostgreSQL";
import { StaticImageData } from "next/image";
import Localside from "../../public/Localside.png";
import MewingDetector from "../../public/Mewing Detector.png";
import Wellat from "../../public/Wellat.png";
import { FC, SVGProps } from "react";
import MaterialUISVG from "../app/svgs/MaterialUI";
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
    description: "Web App de guia y turismo en España donde ademas se pueden reservar tours y actividades.",
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
  {
    title: "Wellat",
    description:
      "Desarrolle un dashboard para administración de wellat haciendo que sea más eficiente y rápido ingresar datos que antes hacían manualmente en un excel para su aplicación relacionada a deportes y salud construido en Next.js, y usando el servicio AWS Cognito como provider con next-auth para autenticación.",
    technologies: [
      { name: "Next.js", svg: NextJsSVG, class: "bg-black text-white" },
      { name: "Material UI", svg: MaterialUISVG, class: "bg-[#fff] text-[#007fff]" },
    ],
    image: Wellat,
  },
];

export default projects;
