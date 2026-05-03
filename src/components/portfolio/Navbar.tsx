import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(id);
          });
        },
        { rootMargin: "-45% 0px -50% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("home")}
          className="font-bold text-lg tracking-tight"
        >
          <span className="text-primary">M</span>oiz<span className="text-muted-foreground">.dev</span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => scrollTo(l.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  active === l.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-primary rounded-full"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span className={`h-0.5 bg-foreground transition-all ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`h-0.5 bg-foreground transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-foreground transition-all ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden border-t border-border bg-background/95 backdrop-blur-md"
        >
          <ul className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => scrollTo(l.id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    active === l.id ? "bg-accent text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
