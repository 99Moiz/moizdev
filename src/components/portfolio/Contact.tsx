import { useState } from "react";
import { Section, FadeIn } from "./Section";
import { Mail, Linkedin, Github, Phone, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:mmoiz9259@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    form.reset();
  };

  return (
    <Section id="contact" eyebrow="05 — Contact" title="Let's work together">
      <div className="grid md:grid-cols-2 gap-10">
        <FadeIn>
          <p className="text-muted-foreground leading-relaxed mb-6">
            I'm open to backend, full-stack, and .NET-focused opportunities. Drop a
            message — I usually reply within a day.
          </p>
          <ul className="space-y-3">
            <ContactRow
              icon={Mail}
              label="mmoiz9259@gmail.com"
              href="mailto:mmoiz9259@gmail.com"
            />
            <ContactRow icon={Phone} label="+92 312 1158240" href="tel:+923121158240" />
            <ContactRow
              icon={Linkedin}
              label="linkedin.com/in/muhammad-moiz"
              href="https://linkedin.com/in/muhammad-moiz"
            />
            <ContactRow icon={Github} label="GitHub" href="https://github.com/" />
          </ul>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="rounded-xl border border-border bg-card p-6 space-y-4"
          >
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full rounded-md bg-background border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2.5 rounded-md font-medium text-sm hover:opacity-90 transition-all hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
            {sent && (
              <p className="text-xs text-primary text-center">Opening your mail app…</p>
            )}
          </form>
        </FadeIn>
      </div>
    </Section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  href,
}: {
  icon: typeof Mail;
  label: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center text-primary group-hover:border-primary/40 transition-colors">
          <Icon className="w-4 h-4" />
        </span>
        {label}
      </a>
    </li>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md bg-background border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
      />
    </div>
  );
}
