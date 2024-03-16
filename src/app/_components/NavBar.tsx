export default function NavBar() {
  return (
    <nav className="w-full h-[65px] fixed top-0 bg-transparent z-50 px-1 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-center m-auto px-[10px]">
        <div className="w-[330px] md:w-[450px] h-full flex flex-row items-center justify-center relative py-4">
          <div className="flex items-center justify-between w-full h-auto px-[20px] py-[10px] bg-white/10 backdrop-blur-md rounded-full text-[#FAFAFA] font-light text-sm">
            <a href="#home" className="hover:text-[#7A67FF]">
              Inicio
            </a>
            <a href="#experience" className="hover:text-[#7A67FF]">
              Experiencia
            </a>
            <a href="#about-me" className="hover:text-[#7A67FF]">
              Sobre Mi
            </a>
            <a href="#projects" className="hover:text-[#7A67FF]">
              Proyectos
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
