/** Contact & branding — adjust address/phone when going live */
export const SITE = {
  /** Legal / schema name */
  name: "Dr. med. dent Manish Sablania",
  logoSrc: "/logo.png",
  brand: {
    title: "Dr. med. dent",
    name: "Manish Sablania",
    credentials: "BDS M.Sc. Specialized Orthodontics",
  },
  domain: "wienzahnaerzte.at",
  phoneDisplay: "+43 1 3306090",
  phoneTel: "+4313306090",
  address: {
    street: "Forsthausgasse 16-20/ Stiege 3/ EG",
    zip: "1200",
    city: "Wien",
    country: "Österreich",
  },
  email: "info@zahnspange-sablania.at",
  emailSecondary: "info@wienzahnaerzte.at",
  /** `public/video.mp4` — hero column media */
  heroVideoSrc: "/video.mp4",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Forsthausgasse+16-20%2C+1200+Wien%2C+%C3%96sterreich&output=embed",
} as const;
