import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <section id="contact" className="min-h-screen" />
    </main>
  );
}
