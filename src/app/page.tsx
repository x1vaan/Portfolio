import HeroSection from "./_components/Home";
import NavBar from "./_components/NavBar";
import Experience from "./_components/Experience";

export default function Home() {
  return (
    <main className="relative h-full w-full">
      <div className="relative flex flex-col h-full w-full items-center overflow-y-scroll sm:overflow-y-hidden">
        <NavBar />
        <HeroSection />
        <Experience />
      </div>
    </main>
  );
}
