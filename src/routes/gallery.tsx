import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { PageIntro, BookingBand } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { gallery } from "@/content/gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Hair & Salon Photography | Olive & Rose" },
      { name: "description", content: "A look at recent cuts, colour and bridal work from Olive & Rose, and inside our Guildford salon." },
      { property: "og:title", content: "Gallery — Olive & Rose" },
      { property: "og:description", content: "Recent cuts, colour and bridal work from our Guildford salon." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setIndex(null);
    lastTrigger.current?.focus();
  }, []);
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + gallery.length) % gallery.length)), []);

  useEffect(() => {
    if (index === null) return;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  const current = index !== null ? gallery[index] : null;

  return (
    <>
      <PageIntro eyebrow="Gallery" title={<>Recent <em className="text-primary">work.</em></>}>
        A few favourites from the chair — and a look inside the salon.
      </PageIntro>

      <section className="container-site pb-24 md:pb-36">
        <ul className="columns-1 gap-4 sm:columns-2 md:gap-6 lg:columns-3">
          {gallery.map((img, i) => (
            <Reveal as="li" key={img.caption} delay={(i % 3) * 100} className="mb-4 break-inside-avoid md:mb-6">
              <button
                type="button"
                onClick={(e) => { lastTrigger.current = e.currentTarget; setIndex(i); }}
                className="img-zoom group block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                aria-label={`View larger: ${img.caption}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" className={`w-full object-cover ${img.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`} />
                <span className="mt-3 block text-sm text-muted-foreground transition-colors group-hover:text-foreground">{img.caption}</span>
              </button>
            </Reveal>
          ))}
        </ul>
      </section>

      {current && (
        <div role="dialog" aria-modal="true" aria-label={current.caption} className="fixed inset-0 z-[70] flex animate-in fade-in flex-col bg-foreground/95 text-background duration-300">
          <div className="flex items-center justify-between px-5 py-4 md:px-10">
            <p className="eyebrow text-background/70">{(index ?? 0) + 1} / {gallery.length}</p>
            <button ref={closeRef} onClick={close} className="eyebrow p-2 hover:text-rose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose">Close ✕</button>
          </div>
          <div className="relative flex flex-1 items-center justify-center px-4 pb-4 md:px-24" onClick={(e) => e.target === e.currentTarget && close()}>
            <img key={current.src} src={current.src} alt={current.alt} className="max-h-[78vh] max-w-full animate-in fade-in zoom-in-95 object-contain duration-500" />
            <button onClick={() => step(-1)} aria-label="Previous image" className="absolute left-2 top-1/2 -translate-y-1/2 p-3 font-serif text-4xl hover:text-rose md:left-6">‹</button>
            <button onClick={() => step(1)} aria-label="Next image" className="absolute right-2 top-1/2 -translate-y-1/2 p-3 font-serif text-4xl hover:text-rose md:right-6">›</button>
          </div>
          <p className="pb-8 text-center font-serif text-xl italic">{current.caption}</p>
        </div>
      )}

      <BookingBand title="Love what you see?" />
    </>
  );
}
