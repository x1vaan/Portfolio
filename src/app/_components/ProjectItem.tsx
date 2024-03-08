import { Project } from "@/constants/project";
import Image from "next/image";

export default function Projectitem(props: Project) {
  return (
    <article className="w-[90%] md:max-w-[800px] h-auto flex flex-col md:flex-row justify-center items-start md:justify-start md:items-center relative mr-4 bg-[#09090B] rounded-lg">
      <div className="w-full relative shadow-md">
        <Image src={props.image} alt="Project" sizes="100%" style={{ width: "100%", height: "auto" }} className="rounded-[0.5rem]"/>
      </div>
      <div className="w-full h-auto flex flex-col justify-center items-start gap-2">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#7A67FF]">{props.title}</h2>
      </div>
    </article>
  );
}
