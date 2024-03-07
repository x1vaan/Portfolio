import { Briefcase } from "lucide-react";
import experiences from "../../constants/experience";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  return (
    <div className="relative w-full h-auto flex items-center justify-center py-4 md:py-12" id="experience">
      <section className="w-full max-w-[900px] flex flex-col gap-6 relative items-start justify-center ml-4 md:ml-10 lg:m-0 ">
        <h2 className="text-3xl font-semibold text-[#D4D4D8] w-full flex gap-x-3 items-center">
          <span>
            <Briefcase size={30} strokeWidth={2.2} className="text-[#D4D4D8]" />
          </span>
          Experiencia Laboral
        </h2>
        <div className="w-full h-auto flex flex-col justify-center items-center gap-7">
          {experiences.map((experience) => (
            <ExperienceItem {...experience} key={experience.company}/>
          ))}
        </div>
      </section>
    </div>
  );
}
