import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { z } from "zod";
import { Section, FadeIn } from "./Section";
import { Mail, Phone, Send, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const EMAILJS_SERVICE_ID = "service_sur6zqk";
const EMAILJS_TEMPLATE_ID = "template_zoidw7i";
const EMAILJS_PUBLIC_KEY = "uxyofyvZwOxUspKe8";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters")
    .max(150, "Subject must be less than 150 characters"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

type FieldName = "name" | "email" | "subject" | "message";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as FieldName]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<FieldName, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as FieldName;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Please fix the errors in the form.");
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: result.data.name,
          from_email: result.data.email,
          subject: result.data.subject,
          message: result.data.message,
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
            className="relative rounded-xl border border-border grain-card p-6 space-y-4 shadow-lg shadow-primary/5"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary/10 via-transparent to-chart-3/10 blur-xl -z-10" />
            <Field label="Name" name="name" value={formData.name} onChange={onChange} error={errors.name} disabled={isSubmitting} />
            <Field label="Email" name="email" type="email" value={formData.email} onChange={onChange} error={errors.email} disabled={isSubmitting} />
            <Field label="Subject" name="subject" value={formData.subject} onChange={onChange} error={errors.subject} disabled={isSubmitting} />
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={onChange}
                rows={5}
                disabled={isSubmitting}
                aria-invalid={!!errors.message}
                className={`w-full rounded-md bg-background border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40 resize-none transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${errors.message ? "border-destructive" : "border-input"}`}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-destructive">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              aria-disabled={isSubmitting}
              className="relative w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2.5 rounded-md font-medium text-sm overflow-hidden transition-all hover:opacity-95 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending your message…</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary-foreground/30 overflow-hidden">
                    <span className="block h-full w-1/3 bg-primary-foreground/80 animate-[loader-bar_1.2s_ease-in-out_infinite]" />
                  </span>
                  <style>{`@keyframes loader-bar{0%{transform:translateX(-100%)}100%{transform:translateX(400%)}}`}</style>
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
  value,
  onChange,
  error,
  disabled,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  disabled?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        aria-invalid={!!error}
        className={`w-full rounded-md bg-background border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40 transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${error ? "border-destructive" : "border-input"}`}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
