import { BOOKING_URL } from "@/content/site";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "light";

const styles: Record<Variant, string> = {
  solid: "bg-primary text-primary-foreground hover:bg-olive",
  outline: "border border-foreground/70 text-foreground hover:bg-foreground hover:text-background",
  light: "border border-olive-foreground/70 text-olive-foreground hover:bg-olive-foreground hover:text-olive",
};

export function BookButton({
  variant = "solid",
  className,
  children = "Book an Appointment",
}: {
  variant?: Variant;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "eyebrow inline-flex items-center justify-center px-6 py-3.5 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        styles[variant],
        className,
      )}
    >
      {children}
      <span className="sr-only"> (opens booking site in a new tab)</span>
    </a>
  );
}
