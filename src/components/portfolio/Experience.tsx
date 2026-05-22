import { Section, FadeIn } from "./Section";

const roles = [
  {
    role: ".NET Developer",
    company: "Ciphertronix",
    location: "Karachi, Pakistan",
    period: "May 2025 — Present",
    bullets: [
      "Working on eSentinel, a Risk & Fraud Management System focused on fraud detection, transaction monitoring, and compliance workflows.",
      "Developing scalable backend services and APIs using .NET technologies for secure financial operations.",
      "Implementing modules for fraud analysis, alert management, case tracking, and real-time monitoring.",
      "Optimizing database queries and application performance for high-volume transactional systems.",
      "Contributing to system architecture, feature enhancements, and secure enterprise-grade solutions.",
      "Collaborating with development and QA teams to maintain application stability and improve overall system efficiency.",
    ],
  },
  {
    role: ".NET Full-Stack Web Developer",
    company: "Out2Sol",
    location: "Karachi, Pakistan",
    period: "Apr 2024 — Apr 2025",
    bullets: [
      "Developed and maintained core modules for a large-scale POS system, including Dine-In, Drive-Through, and Self-Service Kiosk solutions.",
      "Designed and optimized a Delivery Management System for order tracking, rider management, and logistics workflows.",
      "Built E-Commerce modules for products, categories, inventory, and real-time stock synchronization.",
      "Developed reporting dashboards including Daily Sales, Profit & Loss, and Sales Analytics.",
      "Optimized SQL queries, stored procedures, and backend APIs, significantly improving application performance and response times.",
      "Diagnosed and resolved production issues, ensuring system reliability in a live enterprise environment.",
      "Collaborated with cross-functional teams to deliver scalable features and enhancements for enterprise clients.",
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
