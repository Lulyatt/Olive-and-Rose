import { Link } from "@tanstack/react-router";
import { nav, site } from "@/content/site";
import { Wordmark } from "./SiteHeader";

export function SiteFooter() {
  return (
    <footer className="bg-olive text-olive-foreground">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Wordmark className="text-4xl md:text-5xl [&_span]:text-rose" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-olive-foreground/75">
            An independent hair salon in the heart of Guildford. Considered cuts, beautiful colour and a calm chair to sit in.
          </p>
        </div>
        <div className="md:col-span-2">
          <h2 className="eyebrow mb-5 font-sans text-olive-foreground/60">Explore</h2>
          <ul className="space-y-2.5 text-sm">
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to} className="link-underline">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <h2 className="eyebrow mb-5 font-sans text-olive-foreground/60">Visit</h2>
          <address className="space-y-1 text-sm not-italic">
            {site.address.map((l) => <p key={l}>{l}</p>)}
          </address>
        </div>
        <div className="md:col-span-3">
          <h2 className="eyebrow mb-5 font-sans text-olive-foreground/60">Get in touch</h2>
          <p className="text-sm"><a className="link-underline" href={site.phoneHref}>{site.phone}</a></p>
          <p className="mt-2 text-sm"><a className="link-underline" href={`mailto:${site.email}`}>{site.email}</a></p>
        </div>
      </div>
      <div className="container-site flex flex-col gap-2 border-t border-olive-foreground/15 py-6 text-xs text-olive-foreground/55 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Olive &amp; Rose Hair Studio Ltd.</p>
        <p>Guildford, Surrey</p>
      </div>
    </footer>
  );
}
