// Content modules are shaped to mirror future Decap CMS collections
// (services, stylists, gallery) so they can be swapped for Markdown/JSON files later.
export const BOOKING_URL = "https://www.fresha.com/en-GB/for-business";

export const site = {
  name: "Olive & Rose",
  tagline: "Boutique hair salon in Guildford, Surrey",
  phone: "01483 555 214",
  phoneHref: "tel:+441483555214",
  email: "hello@oliveandrose.co.uk",
  address: [
    "Olive & Rose Hair Studio",
    "28 Rosewood Lane",
    "Guildford",
    "Surrey",
    "GU1 2NX",
  ],
  mapEmbed:
    "https://www.google.com/maps?q=28+Rosewood+Lane+Guildford+GU1+2NX&output=embed",
  hours: [
    { day: "Monday", time: "Closed" },
    { day: "Tuesday", time: "9:00 – 18:00" },
    { day: "Wednesday", time: "9:00 – 18:00" },
    { day: "Thursday", time: "10:00 – 20:00" },
    { day: "Friday", time: "9:00 – 18:00" },
    { day: "Saturday", time: "8:30 – 16:30" },
    { day: "Sunday", time: "Closed" },
  ],
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;
