import { createFileRoute } from "@tanstack/react-router";
import interior from "@/assets/interior.jpg";
import { PageIntro, BookingBand } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { stylists } from "@/content/stylists";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us & Our Stylists — Olive & Rose, Guildford" },
      { name: "description", content: "Meet the team behind Olive & Rose, an independent Guildford hair salon founded in 2017 by Clara Whitfield." },
      { property: "og:title", content: "About Olive & Rose" },
      { property: "og:description", content: "Our story, our values and the stylists behind Guildford's boutique hair salon." },
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
          <img src={interior} alt="Inside the Olive & Rose salon on Quarry Street" width={1408} height={1008} loading="lazy" className="aspect-[16/10] w-full object-cover md:aspect-[21/9]" />
        </Reveal>
      </section>

      <section className="container-site grid gap-10 py-24 md:grid-cols-12 md:py-32">
        <Reveal className="md:col-span-4">
          <p className="eyebrow text-primary">Our story</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">From Mayfair to Quarry Street.</h2>
        </Reveal>
        <Reveal delay={120} className="space-y-5 leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7 md:text-lg">
          <p>After twelve years in London's busiest salons, Clara Whitfield came home to Surrey wanting something different — a place where the craft came first and nobody was watching the clock.</p>
          <p>In 2017 she took on the ground floor of a Georgian townhouse on Quarry Street, filled it with plants, olive velvet and good light, and named it after her grandmother's garden. Today we're a team of three stylists with a loyal, wonderfully chatty clientele.</p>
          <p>We're proudly independent: no franchise rulebook, just people who love doing hair, doing it well.</p>
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

      <section className="container-site py-24 md:py-36">
        <Reveal>
          <p className="eyebrow text-primary">The team</p>
          <h2 className="mt-4 text-5xl md:text-6xl">Meet your stylists</h2>
        </Reveal>
        <div className="mt-16 space-y-20 md:space-y-32">
          {stylists.map((s, i) => (
            <article key={s.name} className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
              <Reveal className={`img-zoom md:col-span-5 ${i % 2 ? "md:order-2 md:col-start-8" : ""}`}>
                <img src={s.image} alt={`Portrait of ${s.name}, ${s.role}`} width={800} height={1008} loading="lazy" className="aspect-[4/5] w-full object-cover" />
              </Reveal>
              <Reveal delay={120} className={`md:col-span-5 ${i % 2 ? "md:order-1 md:col-start-2" : "md:col-start-7"}`}>
                <p className="eyebrow text-primary">{s.role}</p>
                <h3 className="mt-3 text-4xl md:text-5xl">{s.name}</h3>
                <p className="mt-5 leading-relaxed text-muted-foreground">{s.bio}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.specialisms.map((sp) => (
                    <li key={sp} className="border border-foreground/20 px-3 py-1.5 text-xs tracking-wide">{sp}</li>
                  ))}
                </ul>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <BookingBand title="Find your stylist." />
    </>
  );
}
