import { Section, FadeIn } from "./Section";

const roles = [
  {
    role: "Software Developer",
    company: "Ciphertronix",
    location: "Karachi, Pakistan",
    period: "May 2026 — Present",
    bullets: [
      "Working on eSentinel, a Risk & Fraud Management System focused on fraud detection, transaction monitoring, and compliance workflows.",
      "Developing scalable backend services and secure APIs using .NET technologies.",
      "Implementing modules for fraud analysis, alert management, case tracking, and real-time monitoring.",
      "Optimizing database performance and improving system efficiency for high-volume transactional environments.",
      "Collaborating with development and QA teams to enhance application stability and security.",
    ],
  },
  {
    role: ".NET Full-Stack Developer",
    company: "Out2Sol",
    location: "Karachi, Pakistan",
    period: "Jun 2025 — Apr 2026",
    bullets: [
      "Developed and maintained core modules for a large-scale POS system, including Dine-In, Drive-Through, and Self-Service Kiosk solutions.",
      "Designed and optimized a Delivery Management System for order tracking, rider management, and logistics workflows.",
      "Built E-Commerce modules for products, categories, inventory, and real-time stock synchronization.",
      "Developed reporting dashboards including Daily Sales, Profit & Loss, and Sales Analytics.",
      "Optimized SQL queries, stored procedures, and backend APIs, significantly improving application performance and response times.",
      "Collaborated with cross-functional teams to deliver scalable and enterprise-grade solutions.",
    ],
  },
  {
    role: ".NET Developer",
    company: "Out2Sol",
    location: "Karachi, Pakistan",
    period: "Mar 2025 — May 2025",
    bullets: [
      "Developed and optimized backend APIs and SQL queries for enterprise applications.",
      "Diagnosed and resolved production issues to maintain system stability.",
      "Contributed to feature enhancements and performance improvements in live projects.",
      "Worked closely with senior developers on scalable application modules.",
    ],
  },
  {
    role: ".NET Intern",
    company: "Awesome Technologies",
    location: "Karachi, Pakistan",
    period: "Dec 2024 — Feb 2025",
    bullets: [
      "Assisted in developing and maintaining .NET-based web applications.",
      "Worked on SQL queries, API integration, and backend functionality.",
      "Fixed bugs and improved application performance under senior developer guidance.",
      "Gained hands-on experience with enterprise development workflows and database management.",
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
