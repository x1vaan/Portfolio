import NextJsSVG from "@/app/svgs/NextJs";
import { StaticImageData } from "next/image";
import MewingDetector from "../../public/Mewing Detector.png";

interface Technologies {
  name: string;
  svg: any;
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
      { name: "Next.js", svg: NextJsSVG },
      { name: "TypeScript", svg: "typescript" },
      { name: "Tailwind CSS", svg: "Tailwind" },
      { name: "Python", svg: "Python" },
    ],
    image: MewingDetector,
  },
  {
    title: "Mewing Detector",
    description:
      "Front para Aplicación que reconoce si la persona tiene “Mewing” (Los practicantes de esta técnica a menudo reportan una mandíbula más marcada y un rostro más estructurado).Y también backend con FastApi en Python para conectar con el engine y el modelo de reconocimiento de mewing.",
    technologies: [
      { name: "Next.js", svg: NextJsSVG },
      { name: "TypeScript", svg: "typescript" },
      { name: "Tailwind CSS", svg: "Tailwind" },
      { name: "Python", svg: "Python" },
    ],
    image: MewingDetector,
  },
];

export default projects;
