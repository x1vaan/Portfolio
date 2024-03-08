import { Experience } from "@/constants/experience";
import { Minus } from "lucide-react";
export default function ExperienceItem(props: Experience) {
  return (
    <article className="w-full flex flex-col gap-2 justify-center items-start text-start text-wrap">
      <h2 className="text-xl sm:text-2xl font-semibold text-[#7A67FF] w-full flex gap-x-[0.10rem] sm:gap-x-3 items-center">
        {props.role}{" "}
        <span>
          <Minus className="text-[#D4D4D8]" />
        </span>{" "}
        <span className="text-[#D4D4D8] text-xl sm:text-2xl">{props.company}</span>
      </h2>
      <time dateTime="2023-06" className="text-[#D4D4D8] text-sm md:text-base">
        Jun 2023 - Actualmente
      </time>
      <p className="text-slate-400 text-start text-wrap">{props.description}</p>
    </article>
  );
}
