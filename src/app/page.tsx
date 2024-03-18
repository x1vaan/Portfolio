import HeroSection from "./_components/Home";
import SectionMapper from "./_components/SectionMapper";
import experiences, { Experience } from "@/constants/experience";
import { Briefcase } from "lucide-react";
import ExperienceItem from "./_components/ExperienceItem";
import projects, { Project } from "@/constants/project";
import Projectitem from "./_components/ProjectItem";
import { TerminalSquare } from "lucide-react";
import AboutMe from "./_components/AboutMe";

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col items-center overflow-y-scroll">
      <HeroSection />
      <div className="space-y-24 mb-5">
        <SectionMapper<Experience>
          id="experience"
          items={experiences}
          ComponentToRender={ExperienceItem}
          icon={Briefcase}
          title="Experiencia Laboral"
        />
        <SectionMapper<Project> id="projects" items={projects} ComponentToRender={Projectitem} icon={TerminalSquare} title="Proyectos" />
        <AboutMe />
      </div>
    </main>
  );
}
