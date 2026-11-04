import s1 from "@/assets/stylist-1.jpg";
import s2 from "@/assets/stylist-2.jpg";
import s3 from "@/assets/stylist-3.jpg";

export type Stylist = { name: string; role: string; bio: string; specialisms: string[]; image: string };

export const stylists: Stylist[] = [
  {
    name: "Clara Whitfield",
    role: "Founder & Creative Director",
    bio: "Clara trained in London's Mayfair salons for over a decade before opening Olive & Rose in 2017. She's known for precise, soft-edged cuts that look as good on day thirty as they do on day one.",
    specialisms: ["Precision cutting", "Restyles", "Bridal"],
    image: s1,
  },
  {
    name: "Theo Marsh",
    role: "Senior Colourist",
    bio: "Theo is our resident colour obsessive. Educated with Wella and a former colour educator, he specialises in lived-in balayage and correcting colour that hasn't quite gone to plan.",
    specialisms: ["Balayage", "Colour correction", "Blonding"],
    image: s2,
  },
  {
    name: "Isla Bennett",
    role: "Stylist & Curl Specialist",
    bio: "Isla joined us as an apprentice and has grown into one of Surrey's most sought-after curl specialists. She believes every texture deserves to be understood, not tamed.",
    specialisms: ["Curly cuts", "Texture", "Occasion styling"],
    image: s3,
  },
];
