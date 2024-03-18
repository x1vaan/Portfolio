import { Button } from "@nextui-org/button";
import { Download } from "lucide-react";
import BadgeComponent from "./BadgeComponent";
import Image from "next/image";
import ProfileImage from "../../../public/Ivan.jpg";
import Webs from "./Webs";

export default function Home() {
  return (
    <div className="w-full h-[500px] flex justify-center items-center relative py-20 sm:py-36" id="home">
      <section className="flex flex-col w-full max-w-[900px] items-start justify-center ml-4 md:ml-10 lg:m-0">
        <div className="flex flex-row w-full h-auto justify-start items-center gap-5 mb-4">
          <Image src={ProfileImage} alt="Profile Image" className="rounded-full size-16" />
          <a
            href="https://www.linkedin.com/in/sergio-ivan-garcia/"
            className="flex items-center transition md:justify-center md:hover:scale-105"
          >
            <BadgeComponent title="Disponible para trabajar" />
          </a>
        </div>
        <h1 className="text-[#D4D4D8] text-4xl md:text-5xl font-bold text-wrap">Hola, Soy Ivan Garcia</h1>
        <h2 className="mt-3 mb-6 gradient-text text-transparent animate-gradient text-xl">Desarrollador Full-Stack</h2>
        <p className="text-[#D4D4D8] w-[90%] md:w-[70%] text-wrap text-md md:text-lg">
          <span className="text-[#7A67FF]">1 año de experiencia</span> como desarrollador Full-Stack, actualmente estudiando tecnicatura en
          programación en la Universidad Tecnologica Nacional 🧉 🇦🇷.{" "}
        </p>
        <nav className="flex flex-wrap gap-6 mt-8">
          <a href="CV Sergio Ivan Garcia - Full Stack.pdf" className="h-auto w-auto" download="CV Sergio Ivan Garcia - Full Stack.pdf">
            <Button
              className="bg-gradient-to-r from-[#C082FF] to-[#7A67FF] shadow-lg text-[#FAFAFA] font-bold md:text-base px-4 md:px-8 tracking-wide"
              variant="flat"
              radius="sm"
              startContent={<Download className="size-[20px] md:size-[24px]" />}
            >
              Descargar CV
            </Button>
          </a>
          <Webs />
        </nav>
      </section>
    </div>
  );
}
