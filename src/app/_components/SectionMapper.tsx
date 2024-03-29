import { LucideIcon } from "lucide-react";
import { FC } from "react";

export default function SectionMapper<T extends JSX.IntrinsicAttributes>(props: {
  icon: LucideIcon;
  title: string;
  ComponentToRender: FC<T>;
  items: T[];
  id: string;
}) {
  return (
    <div className="relative w-full h-auto flex items-center justify-center scroll-m-20" id={props.id}>
      <section className="w-full max-w-[900px] h-auto flex flex-col relative items-start justify-center ml-4 md:ml-10 lg:m-0 ">
        <h2 className="text-3xl font-semibold text-[#D4D4D8] w-full flex gap-x-3 items-center mb-6">
          <span>
            <props.icon size={30} strokeWidth={2.2} className="text-[#D4D4D8]" />
          </span>
          {props.title}
        </h2>
        <div className="w-full h-auto flex flex-col justify-center items-start gap-12">
          {props.items.map((item: T) => (
            <props.ComponentToRender {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}
