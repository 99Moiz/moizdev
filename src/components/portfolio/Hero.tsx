import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { Tilt3D } from "./Tilt3D";

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-chart-3/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-primary mb-4"
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            Muhammad Moiz
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 text-2xl md:text-3xl font-semibold text-muted-foreground"
          >
            .NET Full-Stack Web Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            I design and build scalable enterprise web applications with C#, ASP.NET
            Core, and SQL Server — focused on clean architecture, performance, and
            real business impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-sm"
            >
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 border border-border bg-card px-5 py-3 rounded-lg font-medium text-sm hover:bg-accent transition-all hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center gap-4 text-muted-foreground"
          >
            <a
              href="https://linkedin.com/in/muhammad-moiz"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:mmoiz9259@gmail.com"
              className="hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden md:block"
        >
          <Tilt3D max={10} className="relative">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary/20 via-chart-3/10 to-transparent blur-xl -z-10" />
            <div
              className="relative aspect-square rounded-2xl border border-border grain-card p-6 shadow-xl shadow-primary/5"
              style={{ transform: "translateZ(40px)" }}
            >
              <div className="flex items-center gap-1.5 mb-4">
                <span className="w-3 h-3 rounded-full bg-destructive/60" />
                <span className="w-3 h-3 rounded-full bg-chart-4/60" />
                <span className="w-3 h-3 rounded-full bg-chart-2/60" />
                <span className="ml-2 text-xs font-mono text-muted-foreground">
                  developer.cs
                </span>
              </div>
              <pre
                className="font-mono text-xs leading-relaxed text-foreground/90 overflow-hidden"
                style={{ transform: "translateZ(30px)" }}
              >
{`public class Developer
{
  public string Name => "Muhammad Moiz";
  public string Role => ".NET Full-Stack";
  public string[] Stack => new[] {
    "C#", "ASP.NET Core",
    "EF Core", "SQL Server",
    "Angular", "REST APIs"
  };
  public bool OpenToWork => true;
}`}
              </pre>
              <div
                className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl border border-border bg-card flex items-center justify-center text-primary font-mono text-2xl font-bold float-y shadow-lg"
                style={{ transform: "translateZ(60px)" }}
              >
                {"<>"}
              </div>
            </div>
          </Tilt3D>
        </motion.div>
      </div>
    </section>
  );
}
