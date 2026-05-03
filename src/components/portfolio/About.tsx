import { Section, FadeIn } from "./Section";
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
              <div
                key={h.label}
                className="rounded-xl border border-border bg-card p-4 hover:border-primary/40 hover:-translate-y-0.5 transition-all"
              >
                <h.icon className="w-5 h-5 text-primary mb-3" />
                <p className="text-sm font-medium">{h.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
