import Image from "next/image";
import Logo from "../../../public/tg.svg";
import Instagram from "../../../public/instagram.png";

export default function NavBar() {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2AOE61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-auto flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="h-auto w-auto flex items-center">
          <Image src={Logo} alt="Ivan Logo" width={80} height={80} className="hover:animate-slowspin" />
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-center w-full h-auto border border-[#7042F861] bg-gradient-to-br from-violet-500 to-fuchsia-500 mr-[15px] px-[20px] py-[10px] rounded-full gap-10">
            <a href="#about-me">About Me</a>
            <a href="#about-me">Skills</a>
            <a href="#about-me">Projects</a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <Image src={Instagram} alt="Instagram" height={24} width={24} />
        </div>
      </div>
    </div>
  );
}
