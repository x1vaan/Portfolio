export default function Home() {
  return (
    <div className="w-full h-[400px] flex justify-center items-center relative">
      <section className="flex flex-col w-full max-w-[900px] items-start justify-center ml-4 md:ml-10 lg:m-0">
        <h1 className="text-[#D4D4D8] text-5xl font-bold text-wrap">Hola, Soy Ivan Garcia</h1>
        <h2 className="mt-3 mb-6 gradient-text text-transparent animate-gradient text-xl">Desarrollador FullStack</h2>
        <p className="text-[#D4D4D8] w-[90%] md:w-[70%] text-wrap text-lg">
          <span className="text-[#7A67FF]">1 año de experiencia</span> como desarrollador Full Stack, actualmente estudiando tecnicatura en
          programación en la Universidad Tecnologica Nacional 🧉 🇦🇷.{" "}
        </p>
      </section>
    </div>
  );
}
