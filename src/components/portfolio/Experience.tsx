import { Section, FadeIn } from "./Section";

const roles = [
  {
    role: ".NET Full-Stack Web Developer",
    company: "Out2Sol",
    location: "Karachi, Pakistan",
    period: "Jun 2025 — Present",
    bullets: [
      "Developed and maintained core modules for a large-scale POS system (Dine-In, Drive-Through, Kiosk).",
      "Designed and optimized a Delivery Management System for order tracking and logistics.",
      "Built E-Commerce product, category, and inventory modules with real-time updates.",
      "Created reporting modules: Daily Sales, Profit & Loss, and Sales Analytics.",
      "Optimized SQL queries and backend logic, significantly improving performance.",
    ],
  },
  {
    role: ".NET Developer Intern",
    company: "Out2Sol",
    location: "Karachi, Pakistan",
    period: "Apr 2025 — Jun 2025",
    bullets: [
      "Optimized SQL queries and API endpoints for measurable performance gains.",
      "Diagnosed and resolved production bugs to ensure system stability.",
      "Contributed feature enhancements in a live enterprise environment.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="04 — Career" title="Experience">
      <div className="relative">
        <div className="absolute left-3 top-2 bottom-2 w-px bg-border md:left-[7.5rem]" />
        <div className="space-y-10">
          {roles.map((r, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="relative pl-10 md:pl-0 md:grid md:grid-cols-[7rem_1fr] md:gap-8">
                <div className="md:text-right">
                  <p className="text-xs font-mono text-muted-foreground">{r.period}</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[1.875rem] md:-left-[1.625rem] top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                  <h3 className="font-semibold text-lg">{r.role}</h3>
                  <p className="text-sm text-primary mb-3">
                    {r.company} · {r.location}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-4">
                    {r.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
