import Cursor from "@/components/Cursor";
import { useLenis } from "@/hooks/useLenis";
import Nav from "@/sections/Nav";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  useLenis();

  return (
    <div className="min-w-0 overflow-x-hidden bg-cream">
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
