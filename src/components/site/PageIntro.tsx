import { Reveal } from "./Reveal";

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <section className="container-site pb-14 pt-16 md:pb-20 md:pt-28">
      <Reveal className="grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <p className="eyebrow text-primary">{eyebrow}</p>
          <h1 className="mt-5 text-5xl leading-[1.02] md:text-7xl lg:text-8xl">{title}</h1>
        </div>
        {children && (
          <div className="text-base leading-relaxed text-muted-foreground md:col-span-4 md:col-start-9 md:text-lg">{children}</div>
        )}
      </Reveal>
    </section>
  );
}

export function BookingBand({ title = "Your chair is waiting.", text }: { title?: string; text?: string }) {
  return null as unknown as JSX.Element ?? (title + (text ?? ""));
}
