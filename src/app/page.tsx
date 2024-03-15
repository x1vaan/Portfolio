import HeroSection from "./_components/Home";
import NavBar from "./_components/NavBar";
import SectionMapper from "./_components/SectionMapper";
import experiences, { Experience } from "@/constants/experience";
import { Briefcase } from "lucide-react";
import ExperienceItem from "./_components/ExperienceItem";
import projects,{ Project } from "@/constants/project";
import Projectitem from "./_components/ProjectItem";
import { TerminalSquare } from "lucide-react";

export default function Home() {
  return (
    <main className="relative h-[100vh] w-[100vw]">
      <div className="relative flex flex-col h-full w-full items-center overflow-y-scroll">
        <NavBar />
        <HeroSection />
        {/* <Experience /> */}
        <SectionMapper<Experience>
          id="experience"
          items={experiences}
          ComponentToRender={ExperienceItem}
          icon={Briefcase}
          title="Experiencia Laboral"
        />
        <SectionMapper<Project>
          id="projects"
          items={projects}
          ComponentToRender={Projectitem}
          icon={TerminalSquare}
          title="Proyectos"
        />
      </div>
    </main>
  );
}
