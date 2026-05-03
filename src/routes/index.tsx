import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Muhammad Moiz — .NET Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Muhammad Moiz, a .NET Full-Stack Developer building scalable enterprise web applications with C#, ASP.NET Core, and SQL Server.",
      },
      { property: "og:title", content: "Muhammad Moiz — .NET Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Scalable .NET web apps: POS, DMS, and E-Commerce systems built with ASP.NET Core and SQL Server.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
        © {new Date().getFullYear()} Muhammad Moiz · Built with React & TanStack Start
      </footer>
    </div>
  );
}
