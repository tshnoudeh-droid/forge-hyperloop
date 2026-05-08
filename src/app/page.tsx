import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Information from "@/components/sections/Information";
import Deck from "@/components/sections/Deck";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Information />
      <Deck />
      <Contact />
    </main>
  );
}
