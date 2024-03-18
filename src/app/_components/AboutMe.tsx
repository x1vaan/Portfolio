import { UserRoundSearch } from "lucide-react";

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
        <div className="text-pretty order-2 md:order-1 pr-2 text-slate-400">
          <p>
            Hi! My name is Ivan, I am a 20 years old Junior Full Stack developer from Argentina. I'm a Positive, empathic and curious
            person, always trying to get better. I like outdoor activites, photography and swimming. I started programming in May 2022 when
            i entered in a Full Stack Developer Bootcamp and gain experience working on some projects.
          </p>
        </div>
      </article>
    </section>
  );
}
