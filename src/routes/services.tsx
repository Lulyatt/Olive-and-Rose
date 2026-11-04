import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, BookingBand } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { serviceCategories } from "@/content/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Prices — Olive & Rose Hair Salon, Guildford" },
      { name: "description", content: "Cuts, balayage, colour, treatments and bridal hair at Olive & Rose in Guildford. View our full menu and prices." },
      { property: "og:title", content: "Services & Prices — Olive & Rose" },
      { property: "og:description", content: "Our full menu of cutting, colour, treatments and occasion hair, with prices." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageIntro eyebrow="Services & prices" title={<>The <em className="text-primary">menu.</em></>}>
        Prices vary with hair length, thickness and stylist. Your exact quote is always confirmed at consultation — no surprises.
      </PageIntro>

      <nav aria-label="Service categories" className="container-site">
        <ul className="flex flex-wrap gap-x-8 gap-y-3 border-y border-border py-5">
          {serviceCategories.map((c) => (
            <li key={c.slug}><a href={`#${c.slug}`} className="eyebrow link-underline pb-1">{c.title}</a></li>
          ))}
        </ul>
      </nav>

      <div className="container-site py-16 md:py-24">
        {serviceCategories.map((cat) => (
          <section key={cat.slug} id={cat.slug} className="scroll-mt-28 grid gap-8 border-b border-border py-14 last:border-b-0 md:grid-cols-12 md:gap-12 md:py-20">
            <Reveal className="md:col-span-4">
              <h2 className="text-4xl md:text-5xl">{cat.title}</h2>
              <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">{cat.intro}</p>
            </Reveal>
            <ul className="md:col-span-7 md:col-start-6">
              {cat.services.map((s, i) => (
                <Reveal as="li" delay={i * 60} key={s.name} className="border-t border-border py-6 first:border-t-0 first:pt-0">
                  <div className="flex items-baseline gap-4">
                    <h3 className="font-serif text-2xl md:text-[1.7rem]">{s.name}</h3>
                    <span aria-hidden className="flex-1 translate-y-[-4px] border-b border-dotted border-foreground/30" />
                    <p className="whitespace-nowrap text-base">{s.price}</p>
                  </div>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                    {s.duration && <span className="ml-2 text-foreground/50">· {s.duration}</span>}
                  </p>
                </Reveal>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <BookingBand title="Ready when you are." />
    </>
  );
}
