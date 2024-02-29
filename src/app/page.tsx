import HeroSection from "./_components/Home";
import NavBar from "./_components/NavBar";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="relative flex flex-col h-full w-full items-center">
        <NavBar />
        <HeroSection />
      </div>
    </main>
  );
}
