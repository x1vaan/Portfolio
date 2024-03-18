export interface Experience extends JSX.IntrinsicAttributes {
  role: string;
  company: string;
  from: string;
  to: string;
  description: string;
}

const experiences: Experience[] = [
  {
    role: "Full-Stack Developer",
    company: "MyTaskPanel",
    from: "Jun 2023",
    to: "Actualmente",
    description:
      "Desarrollador Full-Stack trabajando como Contratista o Freelance remoto para empresa en España, desarrolle aplicaciones en Front y Back trabajando en los proyectos.",
  },
];

export default experiences;
