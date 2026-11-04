export type Service = { name: string; description: string; price: string; duration?: string };
export type ServiceCategory = { slug: string; title: string; intro: string; services: Service[] };

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "cutting",
    title: "Cutting & Styling",
    intro: "Every cut begins with a proper consultation — how you wear your hair, how much time you give it, and how you want it to feel.",
    services: [
      { name: "Restyle Cut & Finish", description: "A considered change of shape, with consultation, wash, precision cut and blow-dry.", price: "from £78", duration: "90 min" },
      { name: "Cut & Finish", description: "Maintaining your shape with a wash, cut and tailored finish.", price: "from £62", duration: "60 min" },
      { name: "Fringe Refresh", description: "A quick tidy between appointments.", price: "£15", duration: "15 min" },
      { name: "Blow-Dry", description: "Smooth, bouncy or lived-in — finished to last.", price: "from £38", duration: "45 min" },
      { name: "Gentlemen's Cut", description: "Cut, wash and style, scissor or clipper finish.", price: "from £36", duration: "45 min" },
    ],
  },
  {
    slug: "colour",
    title: "Colour",
    intro: "We colour with low-ammonia, vegan formulas and always begin with a skin test at least 48 hours before your first visit.",
    services: [
      { name: "Hand-Painted Balayage", description: "Soft, sun-kissed brightness with a natural grow-out. Includes toner and finish.", price: "from £165", duration: "3 hrs" },
      { name: "Full Head Highlights", description: "Foil highlights for all-over dimension.", price: "from £135", duration: "2.5 hrs" },
      { name: "Half Head Highlights", description: "Brightness through the top and sides.", price: "from £105", duration: "2 hrs" },
      { name: "Root Tint", description: "Regrowth coverage up to 2cm, with finish.", price: "from £68", duration: "90 min" },
      { name: "Gloss & Tone", description: "Refreshes tone and restores shine between colour visits.", price: "from £45", duration: "45 min" },
    ],
  },
  {
    slug: "treatments",
    title: "Treatments",
    intro: "Restorative rituals for hair that's been through a lot — or simply deserves a little more.",
    services: [
      { name: "Olaplex Bond Repair", description: "Rebuilds broken bonds for stronger, healthier hair. Added to any service.", price: "£30", duration: "20 min" },
      { name: "Scalp Ritual", description: "Exfoliation, massage and a deep-conditioning mask.", price: "£42", duration: "40 min" },
      { name: "Keratin Smoothing", description: "Reduces frizz for up to three months.", price: "from £190", duration: "2.5 hrs" },
    ],
  },
  {
    slug: "occasions",
    title: "Occasions & Bridal",
    intro: "From black-tie dinners to wedding mornings, we'll create something that feels unmistakably you.",
    services: [
      { name: "Occasion Up-do", description: "Elegant pinned styles for events and celebrations.", price: "from £65", duration: "60 min" },
      { name: "Bridal Trial", description: "An unhurried session to perfect your wedding-day look.", price: "£85", duration: "90 min" },
      { name: "Bridal Morning", description: "On-the-day styling in salon or on location within Surrey.", price: "from £180" },
    ],
  },
];

export const featuredServices = [
  { title: "Cutting & Styling", text: "Precise, wearable cuts shaped around your texture and routine.", price: "from £62" },
  { title: "Colour", text: "Hand-painted balayage, glosses and lived-in colour that grows out softly.", price: "from £45" },
  { title: "Treatments", text: "Bond repair, scalp rituals and smoothing for hair that feels its best.", price: "from £30" },
];
