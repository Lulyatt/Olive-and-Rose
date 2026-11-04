import { createFileRoute } from "@tanstack/react-router";
import interior from "@/assets/interior.jpg";
import { PageIntro, BookingBand } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Olive & Rose, Guildford" },
      { name: "description", content: "Our story and values at Olive & Rose, an independent boutique hair salon in Guildford, Surrey." },
      { property: "og:title", content: "About Olive & Rose" },
      { property: "og:description", content: "Our story and values at Guildford's boutique hair salon." },
    ],
  }),
  component: About,
});

const values = [
  { title: "Time to listen", text: "Every new client begins with a proper consultation. We'd rather spend ten minutes talking than guess." },
  { title: "Kinder products", text: "We work with vegan, low-ammonia colour and refill our backbar to cut down on plastic." },
  { title: "Hair for real life", text: "Beautiful on the day, easy every day after. We'll always show you how to recreate it at home." },
];

function About() {
  return (
    <>
      <PageIntro eyebrow="About us" title={<>A small salon with <em className="text-primary">big</em> care.</>}>
        Olive &amp; Rose was founded on a simple idea: that a salon visit should feel restorative, not rushed.
      </PageIntro>

      <section className="container-site">
        <Reveal>
          <img src={interior} alt="Inside the Olive & Rose salon on Rosewood Lane" width={1408} height={1008} loading="lazy" className="aspect-[16/10] w-full object-cover md:aspect-[21/9]" />
        </Reveal>
      </section>

      <section className="container-site grid gap-10 py-24 md:grid-cols-12 md:py-32">
        <Reveal className="md:col-span-4">
          <p className="eyebrow text-primary">Our story</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">A little more care. A little more you.</h2>
        </Reveal>
        <Reveal delay={120} className="space-y-5 leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7 md:text-lg">
          <p>
            At Olive &amp; Rose, we believe a great hair experience is about more than just the finished look. It&apos;s about
            feeling comfortable, taking time for yourself and leaving with a little more confidence than when you arrived.
          </p>
          <p>
            We&apos;ve created a welcoming space where thoughtful styling, genuine care and attention to detail come together.
            From a fresh cut to a complete colour transformation, every appointment is tailored to the individual.
          </p>
          <p>
            We believe in doing things properly, never rushing the process and building relationships that last. Independent
            by nature, personal by design — that&apos;s the way we like it.
          </p>
        </Reveal>
      </section>

      <section className="bg-secondary py-24 md:py-28">
        <div className="container-site grid gap-12 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 100} className="border-t border-foreground/20 pt-6">
              <span className="font-serif text-lg italic text-primary">0{i + 1}</span>
              <h3 className="mt-3 text-3xl">{v.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <BookingBand title="Find your stylist." />
    </>
  );
}
