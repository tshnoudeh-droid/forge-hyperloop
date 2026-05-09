import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Vision from "@/components/sections/Vision";
import Projects from "@/components/sections/Projects";
import Information from "@/components/sections/Information";
import Deck from "@/components/sections/Deck";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Vision />
      <Projects />
      <Information />
      <Deck />
      <Contact />
    </main>
  );
}
