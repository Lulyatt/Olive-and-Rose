import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";
import { BookButton } from "./BookButton";
import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-serif text-2xl leading-none tracking-tight md:text-[1.7rem]", className)}>
      Olive <span className="italic text-primary">&amp;</span> Rose
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background">
      <div className="container-site flex h-18 items-center justify-between py-4 md:h-22">
        <Link to="/" aria-label="Olive & Rose — home" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              activeProps={{ "aria-current": "page" }}
              className="eyebrow link-underline pb-1 text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <BookButton className="hidden px-5 py-3 sm:inline-flex">Book Now</BookButton>
          <button
            type="button"
            className="relative -mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span className={cn("absolute h-px w-6 bg-foreground transition-transform duration-300", open ? "rotate-45" : "-translate-y-1.5")} />
            <span className={cn("absolute h-px w-6 bg-foreground transition-transform duration-300", open ? "-rotate-45" : "translate-y-1.5")} />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 bottom-0 top-[73px] bg-background transition-all duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="container-site flex h-full flex-col justify-between pb-10 pt-10">
          <ul className="space-y-2">
            {nav.map((item, i) => (
              <li
                key={item.to}
                className={cn("transition-all duration-500", open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0")}
                style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
              >
                <Link
                  to={item.to}
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "italic text-primary" }}
                  className="block py-2 font-serif text-5xl"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <BookButton className="w-full" />
        </nav>
      </div>
    </header>
  );
}
