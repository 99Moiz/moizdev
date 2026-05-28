import { Toaster } from "sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <SmoothScroll />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <footer className="border-t border-border py-8 px-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Muhammad Moiz · Built with React & Vite
        </footer>
      </div>
      <Toaster richColors position="top-right" />
    </>
  );
}
