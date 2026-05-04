import { Section, FadeIn } from "./Section";
import { Tilt3D } from "./Tilt3D";
import { Code2, Database, Layers, Rocket } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean Architecture" },
  { icon: Database, label: "SQL Optimization" },
  { icon: Layers, label: "REST API Design" },
  { icon: Rocket, label: "Agile Delivery" },
];

export function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="About Me">
      <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-start">
        <FadeIn>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a results-driven .NET Full-Stack Developer based in Karachi,
              with hands-on experience designing and shipping scalable enterprise
              web applications using <span className="text-foreground font-medium">C#, ASP.NET Core MVC</span>, and <span className="text-foreground font-medium">SQL Server</span>.
            </p>
            <p>
              At Out2Sol, I've built and maintained core modules across a large-scale
              Point of Sale system, a Delivery Management platform, and an
              E-Commerce product suite — focusing on backend performance, API
              design, and maintainable code in agile environments.
            </p>
            <p>
              I care about software that's fast, secure, and easy to evolve. My
              recent work has centered on query optimization, repository patterns,
              and reporting modules that drive real business decisions.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 gap-3">
            {highlights.map((h) => (
              <Tilt3D key={h.label} max={12} scale={1.04}>
                <div className="rounded-xl border border-border grain-card p-4 hover:border-primary/40 transition-all shadow-sm hover:shadow-md">
                  <div
                    className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    <h.icon className="w-5 h-5" />
                  </div>
                  <p
                    className="text-sm font-medium"
                    style={{ transform: "translateZ(15px)" }}
                  >
                    {h.label}
                  </p>
                </div>
              </Tilt3D>
            ))}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
