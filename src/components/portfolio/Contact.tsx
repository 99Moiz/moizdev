import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Section, FadeIn } from "./Section";
import { Mail, Phone, Send, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const EMAILJS_SERVICE_ID = "service_sur6zqk";
const EMAILJS_TEMPLATE_ID = "template_zoidw7i";
const EMAILJS_PUBLIC_KEY = "uxyofyvZwOxUspKe8";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY,
      );
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error("Failed to send message. Try again!");
    } finally {
      setIsSubmitting(false);
    }
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
              icon={LinkedinIcon}
              label="linkedin.com/in/m-moiz"
              href="https://www.linkedin.com/in/m-moiz-a4a378258"
            />
            <ContactRow icon={GithubIcon} label="GitHub" href="https://github.com/" />
          </ul>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="rounded-xl border border-border bg-card p-6 space-y-4"
          >
            <Field label="Name" name="name" value={formData.name} onChange={onChange} required />
            <Field label="Email" name="email" type="email" value={formData.email} onChange={onChange} required />
            <Field label="Subject" name="subject" value={formData.subject} onChange={onChange} required />
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={onChange}
                required
                rows={5}
                className="w-full rounded-md bg-background border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2.5 rounded-md font-medium text-sm hover:opacity-90 transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
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
  icon: React.ComponentType<{ className?: string }>;
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
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
        value={value}
        onChange={onChange}
        className="w-full rounded-md bg-background border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
      />
    </div>
  );
}
