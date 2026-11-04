import hero from "@/assets/hero.jpg";
import interior from "@/assets/interior.jpg";
import cutting from "@/assets/cutting.jpg";
import bob from "@/assets/bob.jpg";
import balayage from "@/assets/balayage.jpg";
import updo from "@/assets/updo.jpg";

export type GalleryImage = { src: string; alt: string; caption: string; tall?: boolean };

export const gallery: GalleryImage[] = [
  { src: balayage, alt: "Long honey-blonde balayage in loose waves, seen from behind", caption: "Hand-painted honey balayage", tall: true },
  { src: interior, alt: "The Olive & Rose salon floor with arched mirrors and olive green chairs", caption: "The salon, Quarry Street" },
  { src: bob, alt: "Side profile of a woman with a sleek copper bob", caption: "Copper gloss & blunt bob", tall: true },
  { src: cutting, alt: "Stylist cutting a client's blonde hair with scissors and comb", caption: "Precision cutting", tall: true },
  { src: updo, alt: "Low bridal chignon decorated with dried flowers", caption: "Bridal chignon with dried florals", tall: true },
  { src: hero, alt: "Client with glossy brunette waves seated in an olive velvet chair", caption: "Glossy brunette waves" },
];
