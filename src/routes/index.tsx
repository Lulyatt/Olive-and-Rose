import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import interior from "@/assets/interior.jpg";
import cutting from "@/assets/cutting.jpg";
import bob from "@/assets/bob.jpg";
import balayage from "@/assets/balayage.jpg";
import { BookButton } from "@/components/site/BookButton";
import { Reveal } from "@/components/site/Reveal";
import { BookingBand } from "@/components/site/PageIntro";
import { featuredServices } from "@/content/services";
import { testimonials } from "@/content/testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Olive & Rose — Boutique Hair Salon in Guildford, Surrey" },
      { name: "description", content: "Considered cuts, lived-in colour and restorative treatments at Olive & Rose, an independent hair salon on Quarry Street, Guildford." },
      { property: "og:title", content: "Olive & Rose — Boutique Hair Salon in Guildford" },
      { property: "og:description", content: "Considered cuts, lived-in colour and a calm chair to sit in. Book your appointment online." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container-site pt-6 md:pt-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="order-2 flex flex-col justify-end pb-4 lg:order-1 lg:col-span-5 lg:pb-12">
            <p className="eyebrow animate-in fade-in slide-in-from-bottom-2 text-primary duration-1000">Hair salon · Guildford, Surrey</p>
            <h1 className="mt-5 animate-in fade-in slide-in-from-bottom-4 text-[3.4rem] leading-[0.95] duration-1000 sm:text-7xl xl:text-[6.5rem]">
              Hair that <em className="text-primary">feels</em> like you.
            </h1>
            <p className="mt-6 max-w-md animate-in fade-in text-base leading-relaxed text-muted-foreground delay-300 duration-1000 fill-mode-both md:text-lg">
              An independent salon for considered cuts, soft lived-in colour and the kind of appointment you look forward to.
            </p>
            <div className="mt-9 flex animate-in fade-in flex-wrap items-center gap-6 delay-500 duration-1000 fill-mode-both">
              <BookButton />
              <Link to="/services" className="eyebrow link-underline pb-1">View services</Link>
            </div>
          </div>
          <div className="relative order-1 lg:order-2 lg:col-span-7">
            <div className="overflow-hidden">
              <img
                src={hero}
                alt="Client with glossy brunette waves smiling over her shoulder in an olive velvet salon chair"
                width={1600}
                height={1104}
                fetchPriority="high"
                className="aspect-[4/5] w-full animate-in fade-in zoom-in-105 object-cover object-[60%_center] duration-[1800ms] sm:aspect-[4/3] lg:aspect-[5/6] xl:aspect-[4/4.4]"
              />
            </div>
            <p className="eyebrow absolute -bottom-6 right-0 hidden bg-background py-2 pl-4 text-muted-foreground md:block">Est. 2017 — Quarry Street</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="container-site py-24 md:py-36">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow text-primary">Welcome to Olive &amp; Rose</p>
          <p className="mt-8 font-serif text-3xl leading-snug md:text-5xl md:leading-[1.15]">
            Tucked into a Georgian townhouse just off Guildford High Street, we're a small team who believe great hair starts with
            <em className="text-primary"> listening</em> — and ends with you walking out a little taller.
          </p>
          <Link to="/about" className="eyebrow link-underline mt-10 inline-block pb-1">Our story</Link>
        </Reveal>
      </section>

      {/* Split image + text */}
      <section className="container-site grid items-center gap-10 pb-24 md:grid-cols-12 md:gap-12 md:pb-36">
        <Reveal className="img-zoom md:col-span-7">
          <img src={interior} alt="The light-filled Olive & Rose salon with arched mirrors and olive chairs" width={1408} height={1008} loading="lazy" className="aspect-[4/3] w-full object-cover" />
        </Reveal>
        <Reveal delay={150} className="md:col-span-4 md:col-start-9">
          <p className="eyebrow text-primary">The space</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">A calm room in a busy week.</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Tall sash windows, five chairs and never a rush. We keep our column deliberately unhurried so there's always time for a proper consultation,
            a good coffee and a finish you'll love.
          </p>
        </Reveal>
      </section>

      {/* Services */}
      <section className="bg-secondary py-24 md:py-32">
        <div className="container-site">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-primary">What we do</p>
              <h2 className="mt-4 text-5xl md:text-6xl">Selected services</h2>
            </div>
            <Link to="/services" className="eyebrow link-underline self-start pb-1 md:self-auto">Full menu &amp; prices</Link>
          </Reveal>
          <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-8">
            <ol className="md:col-span-7">
              {featuredServices.map((s, i) => (
                <Reveal as="li" delay={i * 100} key={s.title} className="group grid grid-cols-[3rem_1fr] gap-4 border-t border-foreground/15 py-8 last:border-b md:grid-cols-[4rem_1fr_auto] md:gap-6">
                  <span className="font-serif text-xl italic text-primary">0{i + 1}</span>
                  <div>
                    <h3 className="text-3xl transition-colors group-hover:text-primary md:text-4xl">{s.title}</h3>
                    <p className="mt-2 max-w-md text-muted-foreground">{s.text}</p>
                  </div>
                  <p className="col-start-2 text-sm md:col-start-3 md:pt-3">{s.price}</p>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={200} className="relative hidden md:col-span-4 md:col-start-9 md:block">
              <img src={cutting} alt="Stylist cutting a client's blonde hair" width={1008} height={1312} loading="lazy" className="aspect-[3/4] w-full object-cover" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Imagery mosaic */}
      <section className="container-site py-24 md:py-36">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-6">
          <Reveal className="img-zoom col-span-2 md:col-span-5 md:row-span-2">
            <img src={balayage} alt="Long honey blonde balayage waves" width={1008} height={1312} loading="lazy" className="h-full w-full object-cover" />
          </Reveal>
          <Reveal delay={100} className="col-span-2 flex flex-col justify-center py-6 md:col-span-6 md:col-start-7 md:py-0">
            <p className="eyebrow text-primary">Colour</p>
            <h2 className="mt-4 text-4xl leading-tight md:text-6xl">Colour that grows out <em>gracefully.</em></h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">Hand-painted, low-maintenance and always tailored to your skin tone — so the weeks after your appointment look just as good as the day itself.</p>
          </Reveal>
          <Reveal delay={150} className="img-zoom col-span-1 md:col-span-3 md:col-start-7">
            <img src={bob} alt="Sleek copper bob in profile" width={1008} height={1312} loading="lazy" className="aspect-[3/4] w-full object-cover" />
          </Reveal>
          <Reveal delay={250} className="col-span-1 flex items-end md:col-span-3">
            <Link to="/gallery" className="eyebrow link-underline pb-1">See the gallery →</Link>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-olive py-24 text-olive-foreground md:py-32">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow text-rose">Kind words</p>
          </Reveal>
          <div className="mt-12 grid gap-14 md:grid-cols-3 md:gap-10">
            {testimonials.map((t, i) => (
              <Reveal as="figure" delay={i * 120} key={t.name} className={i === 0 ? "md:col-span-3 md:max-w-4xl" : ""}>
                <blockquote className={i === 0 ? "font-serif text-3xl leading-snug md:text-5xl md:leading-[1.15]" : "font-serif text-2xl leading-snug"}>
                  “{t.quote}”
                </blockquote>
                <figcaption className="eyebrow mt-6 text-olive-foreground/60">{t.name} — {t.detail}</figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BookingBand />
    </>
  );
}
