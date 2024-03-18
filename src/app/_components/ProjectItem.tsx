import { Project } from "@/constants/project";
import Image from "next/image";
import { Chip } from "@nextui-org/react";

export default function Projectitem(props: Project) {
  return (
    <article className="w-[95%] md:max-w-[850px] h-auto md:h-[310px] flex flex-col md:flex-row justify-center items-start md:justify-start md:items-center relative mr-4 my-4 rounded-lg gap-7">
      <div className="w-full h-full relative shadow-lg">
        <Image src={props.image} alt="Project" sizes="100%" style={{ width: "100%", height: "100%" }} className="rounded-[0.5rem]" />
      </div>
      <div className="w-full h-full flex flex-col justify-start items-start gap-2 text-start">
        <h2 className="text-xl sm:text-2xl font-semibold gradient-text-projects text-transparent animate-gradient">{props.title}</h2>
        <div className="w-full flex flex-row gap-2 flex-wrap">
          {" "}
          {props.technologies.map((tech) => (
            <Chip variant="flat" className={`${tech.class} text-xs`} startContent={<tech.svg width={20} height={20} />}>
              {tech.name}
            </Chip>
          ))}
        </div>
        <p className="text-slate-400 text-start text-pretty">{props.description}</p>
      </div>
    </article>
  );
}

//classNames={{base: "bg-[#73bcf6]", content: "text-white"}}
