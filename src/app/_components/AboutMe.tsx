import { UserRoundSearch } from "lucide-react";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="relative w-full h-auto flex items-center justify-center scroll-m-20" id="about-me">
      <article className="w-full max-w-[900px] h-auto flex flex-col relative items-start justify-center ml-4 md:ml-10 lg:m-0">
        <h2 className="text-3xl font-semibold text-[#D4D4D8] w-full flex gap-x-3 items-center mb-6">
          <span>
            <UserRoundSearch size={30} strokeWidth={2.2} className="text-[#D4D4D8]" />
          </span>
          Sobre mí
        </h2>
        <div className="flex flex-col items-center justify-center text-slate-400 md:flex-row">
          <div className="text-pretty order-2 md:order-1 pr-2 text-slate-400">
            <p>
              Me llamo Sergio Ivan, tengo 22 años y soy de Argentina. Comence a estudiar programacion en 2022 como autodidacta, y ahora
              estoy cursando Tecnicatura en Programacion en la Universidad Tecnologica Nacional.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
