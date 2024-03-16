import HeroSection from "./_components/Home";
import NavBar from "./_components/NavBar";
import SectionMapper from "./_components/SectionMapper";
import experiences, { Experience } from "@/constants/experience";
import { Briefcase } from "lucide-react";
import ExperienceItem from "./_components/ExperienceItem";
import projects, { Project } from "@/constants/project";
import Projectitem from "./_components/ProjectItem";
import { TerminalSquare } from "lucide-react";

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col items-center overflow-y-scroll">
      <div className="absolute inset-0 -z-10 h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      {/* <NavBar /> */}
      <HeroSection />
      {/* <Experience /> */}
      <SectionMapper<Experience>
        id="experience"
        items={experiences}
        ComponentToRender={ExperienceItem}
        icon={Briefcase}
        title="Experiencia Laboral"
      />
      <SectionMapper<Project> id="projects" items={projects} ComponentToRender={Projectitem} icon={TerminalSquare} title="Proyectos" />
    </main>
  );
}
