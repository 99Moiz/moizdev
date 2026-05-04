import { Section, FadeIn } from "./Section";
import { Tilt3D } from "./Tilt3D";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Point of Sale (POS) System",
    description:
      "Large-scale POS supporting Dine-In, Drive-Through, and Kiosk ordering workflows for restaurant and retail operations.",
    stack: ["ASP.NET Core MVC", "C#", "SQL Server", "EF Core"],
    link: null,
  },
  {
    title: "Delivery Management System",
    description:
      "Designed and optimized a DMS to streamline order tracking and logistics processes with real-time status updates.",
    stack: ["ASP.NET Core", "REST APIs", "SQL Server"],
    link: null,
  },
  {
    title: "E-Commerce Product Management",
    description:
      "Product catalog, categories, and real-time inventory management for enterprise e-commerce operations.",
    stack: ["ASP.NET Core MVC", "EF Core", "Repository Pattern"],
    link: null,
  },
  {
    title: "Video Uploading Platform",
    description:
      "Full-featured app with auth, video upload, categorization, likes, comments, and content moderation.",
    stack: ["ASP.NET Core MVC", "EF Core", "REST APIs"],
    link: null,
  },
  {
    title: "Developer Portfolio",
    description:
      "Personal showcase of projects, technical skills, and experience — deployed on Netlify.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://mmoiz.netlify.app",
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="03 — Work" title="Selected Projects">
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.05}>
            <Tilt3D max={7} scale={1.02} className="h-full">
              <article className="group relative h-full rounded-xl border border-border grain-card p-6 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-colors" />
                <div className="relative flex items-start justify-between gap-3 mb-3">
                  <h3
                    className="font-semibold text-lg leading-tight"
                    style={{ transform: "translateZ(25px)" }}
                  >
                    {p.title}
                  </h3>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${p.title}`}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    >
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                    </a>
                  )}
                </div>
                <p className="relative text-sm text-muted-foreground leading-relaxed flex-1">
                  {p.description}
                </p>
                <div
                  className="relative flex flex-wrap gap-1.5 mt-4"
                  style={{ transform: "translateZ(20px)" }}
                >
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    Visit <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </article>
            </Tilt3D>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
