import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageIntro } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { BookButton } from "@/components/site/BookButton";
import { site } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Opening Hours — Olive & Rose, Guildford" },
      { name: "description", content: "Find Olive & Rose at 14 Quarry Street, Guildford. Opening hours, phone, email and enquiry form." },
      { property: "og:title", content: "Contact Olive & Rose" },
      { property: "og:description", content: "Opening hours, directions and how to get in touch with our Guildford salon." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please tell us your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().max(20).regex(/^[0-9+()\s-]*$/, "Please enter a valid phone number").optional(),
  message: z.string().trim().min(10, "Please write a little more (at least 10 characters)").max(1000),
});
type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function Field({ id, label, error, optional, children }: { id: string; label: string; error?: string | undefined; optional?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow text-muted-foreground">
        {label} {optional && <span className="normal-case tracking-normal text-foreground/40">(optional)</span>}
      </label>
      {children}
      {error && <p id={`${id}-error`} className="mt-2 text-sm text-destructive">{error}</p>}
    </div>
  );
}

const inputCls =
  "mt-2 w-full border-0 border-b border-input bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-foreground/30 focus:border-primary aria-[invalid=true]:border-destructive";

function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = schema.safeParse(data);
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) next[issue.path[0] as keyof Errors] ??= issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setStatus("sending");
    // TODO: connect to Netlify Forms (or chosen provider) when the backend is set up.
    await new Promise((r) => setTimeout(r, 700));
    setStatus("sent");
    e.currentTarget?.reset();
  }

  return (
    <>
      <PageIntro eyebrow="Contact" title={<>Come and <em className="text-primary">say hello.</em></>}>
        For appointments, booking online is quickest. For anything else — questions, bridal enquiries, or just to chat about your hair — drop us a note.
      </PageIntro>

      <section className="container-site grid gap-16 pb-24 md:grid-cols-12 md:gap-12 md:pb-32">
        <Reveal className="md:col-span-6">
          {status === "sent" ? (
            <div role="status" className="border border-primary/30 bg-secondary p-10">
              <h2 className="text-4xl">Thank you.</h2>
              <p className="mt-3 text-muted-foreground">Your message is on its way. We reply to every enquiry within one working day.</p>
              <button onClick={() => setStatus("idle")} className="eyebrow link-underline mt-6 pb-1">Send another message</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate name="contact" className="space-y-8">
              <Field id="name" label="Name" error={errors.name}>
                <input id="name" name="name" autoComplete="name" className={inputCls} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
              </Field>
              <div className="grid gap-8 sm:grid-cols-2">
                <Field id="email" label="Email" error={errors.email}>
                  <input id="email" name="email" type="email" autoComplete="email" className={inputCls} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
                </Field>
                <Field id="phone" label="Phone" optional error={errors.phone}>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputCls} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />
                </Field>
              </div>
              <Field id="message" label="Message" error={errors.message}>
                <textarea id="message" name="message" rows={5} className={`${inputCls} resize-none`} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
              </Field>
              <button
                type="submit"
                disabled={status === "sending"}
                className="eyebrow bg-primary px-8 py-4 text-primary-foreground transition-colors hover:bg-olive disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </Reveal>

        <Reveal delay={120} className="space-y-12 md:col-span-5 md:col-start-8">
          <div>
            <h2 className="eyebrow font-sans text-primary">Visit</h2>
            <address className="mt-4 font-serif text-3xl not-italic leading-snug">
              {site.address.map((l) => <span key={l} className="block">{l}</span>)}
            </address>
          </div>
          <div>
            <h2 className="eyebrow font-sans text-primary">Call or email</h2>
            <p className="mt-4"><a href={site.phoneHref} className="link-underline text-lg">{site.phone}</a></p>
            <p className="mt-1"><a href={`mailto:${site.email}`} className="link-underline text-lg">{site.email}</a></p>
          </div>
          <div>
            <h2 className="eyebrow font-sans text-primary">Opening hours</h2>
            <dl className="mt-4 divide-y divide-border border-y border-border">
              {site.hours.map((h) => (
                <div key={h.day} className="flex justify-between py-2.5 text-sm">
                  <dt>{h.day}</dt>
                  <dd className={h.time === "Closed" ? "text-muted-foreground" : ""}>{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
          <BookButton variant="outline" />
        </Reveal>
      </section>

      <section aria-label="Map" className="h-[380px] w-full md:h-[480px]">
        <iframe
          title="Map showing Olive & Rose on Quarry Street, Guildford"
          src={site.mapEmbed}
          className="h-full w-full grayscale-[60%] sepia-[15%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
