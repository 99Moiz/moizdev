import { Section, FadeIn } from "./Section";
import { Server, Database, Monitor, Wrench } from "lucide-react";

const groups = [
  {
    icon: Server,
    title: "Backend & Frameworks",
    items: [
      "C#",
      "ASP.NET Core MVC",
      ".NET Core",
      "Entity Framework Core",
      "Repository Pattern",
      "REST APIs",
      "JWT Auth",
      "Unit Testing",
    ],
  },
  {
    icon: Database,
    title: "Database",
    items: ["SQL Server", "MySQL", "Query Optimization", "SQL Injection Prevention"],
  },
  {
    icon: Monitor,
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Angular"],
  },
  {
    icon: Wrench,
    title: "Tools & Practices",
    items: [
      "Git & GitHub",
      "Tortoise SVN",
      "Visual Studio",
      "Agile / SDLC",
      "API Security",
      "Input Validation",
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="02 — Skills" title="Technical Skills">
      <div className="grid sm:grid-cols-2 gap-5">
        {groups.map((g, i) => (
          <FadeIn key={g.title} delay={i * 0.05}>
            <div className="h-full rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <g.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="text-xs font-medium bg-secondary text-secondary-foreground px-2.5 py-1 rounded-md border border-border"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
