/**
 * Homepage content and assets sourced from https://klefter.com/
 * Service detail links match the destinations used on the live klefter.com page.
 */
export const KLEFTER_SITE = "https://klefter.com";

export const klefterImages = {
  drPortrait:
    "https://klefter.com/wp-content/uploads/2025/02/Manish-Sablania-6966-scaled-1-768x1152.jpg",
  decorative:
    "https://klefter.com/wp-content/uploads/2025/02/t-300x300.png",
  patientBanner:
    "https://klefter.com/wp-content/uploads/2025/02/Angspatient-Zahnarzt-1024x461-1.jpg",
} as const;

export const klefterHero = {
  badge: "Alle Kassen und Privat · Mo–Fr: 10–17 Uhr",
  h1: "Dr. Sablania – Fachzahnarzt für Kieferorthopädie und Zahnarzt Wien 1200",
  badgeSub: "Alle Kassen und Privat",
  lead:
    "Wir bieten Zahnkorrekturen für Kinder, Jugendliche und Erwachsene – von klassischen Zahnspangen bis zu unsichtbaren Alignern.",
} as const;

export const klefterIntro = {
  h2: "Zahnarzt Wien 1200 – Ihre erste Wahl für gesunde Zähne",
  h3: "Das breite Spektrum unserer zahnärztlichen Leistungen",
  welcome:
    "Herzlich willkommen in unserer Zahnarztpraxis im 20. Wiener Gemeindebezirk, wo wir uns leidenschaftlich um Ihre Zahngesundheit kümmern. Als erfahrener Zahnarzt Wien 1200 und Fachzahnarzt für Kieferorthopädie steht Ihnen Dr. Manish Sablania zur Verfügung und bietet Ihnen die bestmögliche zahnärztliche Versorgung. Bei uns stehen Sie als Patient im Mittelpunkt, und wir legen großen Wert darauf, Ihnen eine angenehme und komfortable Erfahrung zu bieten.",
  spectrum:
    "Unsere Praxis als Zahnarzt Wien 1200 bietet ein breites Spektrum an zahnärztlichen Leistungen an, um alle Ihre Bedürfnisse abzudecken. Von der allgemeinen Zahnheilkunde – etwa professioneller Mundhygiene und Untersuchung – bis hin zu spezialisierten Bereichen wie ästhetischen Zahnfüllungen, Zahnbleaching, Kieferorthopädie, Implantat, unsichtbarer Zahnspange und Invisalign: Dr. med. dent. Manish Sablania ist für Sie da. Unsere Zahnarztpraxis in 1200 Wien setzt auf fortschrittliche Technologien und bewährte Behandlungsmethoden für eine hochwertige und effektive Versorgung.",
} as const;

/** Card images match klefter.com flip-box front backgrounds (Elementor post-11.css). */
export const klefterServices = [
  {
    title: "Zahnspange",
    image: `${KLEFTER_SITE}/wp-content/uploads/2025/02/Braces.png`,
    desc: "Eine Zahnspange korrigiert Zahnfehlstellungen und sorgt für ein gerades Lächeln. Sie übt sanften Druck auf die Zähne aus, um sie in die richtige Position zu bringen – für Kinder und Erwachsene geeignet.",
    href: "https://zahnspange-sablania.at/kieferorthopadie/",
  },
  {
    title: "Zahnbleaching",
    image: `${KLEFTER_SITE}/wp-content/uploads/2025/02/Teeth-Whitening-1.png`,
    desc: "Zahnbleaching hellt verfärbte Zähne auf und sorgt für ein strahlenderes Lächeln. Die Behandlung ist schnell, sicher und bringt beeindruckende Ergebnisse.",
    href: "https://zahnspange-sablania.at/zahnbleaching/",
  },
  {
    title: "Professionelle Mundhygiene",
    image: `${KLEFTER_SITE}/wp-content/uploads/2025/02/oral-hygiene.png`,
    desc: "Professionelle Mundhygiene entfernt hartnäckige Beläge und Zahnstein, schützt vor Karies und Parodontitis und sorgt für ein frisches, sauberes Mundgefühl.",
    href: "https://zahnspange-sablania.at/mundhygiene-wien/",
  },
  {
    title: "Myofunktionelle Therapie",
    image: `${KLEFTER_SITE}/wp-content/uploads/2025/02/mayo.png`,
    desc: "Die myofunktionelle Therapie trainiert die Gesichtsmuskulatur und unterstützt eine korrekte Zungen- und Lippenfunktion. Sie kann dabei helfen, Kiefer- und Zahnfehlstellungen günstig zu beeinflussen.",
    href: "https://zahnspange-sablania.at/myofunktionelle-therapie/",
  },
  {
    title: "Ästhetische Zahnfüllungen",
    image: `${KLEFTER_SITE}/wp-content/uploads/2025/02/teeth-filling.png`,
    desc: "Ästhetische Zahnfüllungen reparieren kariöse Zähne und passen sich farblich perfekt an das natürliche Zahnmaterial an. Sie bieten eine unauffällige und langlebige Lösung für ein schönes Lächeln.",
    href: "https://zahnspange-sablania.at/komposit-zahnfullung/",
  },
  {
    title: "Invisalign",
    image: `${KLEFTER_SITE}/wp-content/uploads/2025/02/invisalign.png`,
    desc: "Invisalign ist eine nahezu unsichtbare Zahnschiene, die Zahnfehlstellungen sanft und diskret korrigiert. Die Schiene ist herausnehmbar und ermöglicht eine komfortable Behandlung für ein schönes, gerades Lächeln.",
    href: "https://zahnspange-sablania.at/unsichtbare-zahnspange-wien/",
  },
  {
    title: "Zahnimplant",
    image: `${KLEFTER_SITE}/wp-content/uploads/2025/02/implant.png`,
    desc: "Ein Zahnimplantat ersetzt fehlende Zähne dauerhaft und fühlt sich an wie ein natürlicher Zahn. Es wird fest im Kiefer verankert und bietet Stabilität, Komfort und eine ästhetische Lösung für ein vollwertiges Lächeln.",
    href: "https://zahnspange-sablania.at/implantat-wien/",
  },
  {
    title: "Sportschutz",
    image: `${KLEFTER_SITE}/wp-content/uploads/2025/02/Zaehne-Sportschutz.png`,
    desc: "Ein Sportmundschutz schützt Zähne und Kiefer vor Verletzungen bei sportlichen Aktivitäten. Individuell angepasst, bietet er hohen Tragekomfort und maximale Sicherheit für Sportler jeden Alters.",
    href: "https://zahnspange-sablania.at/sportschutz-mouthguards/",
  },
  {
    title: "Krone-Brücke",
    image: `${KLEFTER_SITE}/wp-content/uploads/2025/02/Krone.png`,
    desc: "Kronen und Brücken ersetzen beschädigte oder fehlende Zähne und stellen Funktion und Ästhetik des Gebisses wieder her. Sie sind langlebig, stabil und werden farblich an die natürlichen Zähne angepasst.",
    href: "https://zahnspange-sablania.at/krone-brucke/",
  },
  {
    title: "Vollprothesen",
    image: `${KLEFTER_SITE}/wp-content/uploads/2025/06/ChatGPT-Image-Apr-29-2025-12_07_55-PM.png`,
    desc: "Vollprothesen werden verwendet, wenn alle Zähne im Ober- oder Unterkiefer fehlen.",
    href: "https://zahnspange-sablania.at/zahnersatz/",
  },
  {
    title: "Teilprothesen",
    image: `${KLEFTER_SITE}/wp-content/uploads/2025/06/ChatGPT-Image-Apr-29-2025-12_23_42-PM.png`,
    desc: "Teilprothesen eignen sich für Patienten, die noch über natürliche Zähne verfügen.",
    href: "https://zahnspange-sablania.at/zahnersatz/",
  },
  {
    title: "Implantat getragener Zahnersatz",
    image: `${KLEFTER_SITE}/wp-content/uploads/2025/06/ChatGPT-Image-Apr-29-2025-01_07_19-PM.png`,
    desc: "Implantatgetragener Zahnersatz wird mit Zahnimplantaten befestigt und bietet im Vergleich zu herkömmlichem Zahnersatz eine höhere Stabilität.",
    href: "https://zahnspange-sablania.at/zahnersatz/",
  },
] as const;

export const klefterRegions = {
  h2: "Kieferorthopädie Wien und Zahnarzt in der Nähe zu 1210, 1020, 1220, 1190 Wien und Klosterneuburg",
  body: [
    "Ganz gleich, ob Sie in 1200 Wien, den angrenzenden Bezirken 1210, 1020, 1220, 1190 Wien und Klosterneuburg leben oder arbeiten – unsere Zahnarztordination ist in Kürze erreichbar. Unsere Praxis befindet sich im Grenzgebiet dieser Bezirke und ist somit für Patienten aus verschiedenen Teilen Wiens bequem erreichbar.",
    "Patienten aus 1020 Wien (Leopoldstadt) oder 1210 Wien (Floridsdorf) profitieren von der kurzen Distanz – ohne weite Anfahrtswege zu hochwertiger zahnärztlicher Versorgung.",
  ],
} as const;

export const klefterDoctor = {
  h2: "Dr. med. dent. Manish Sablania – BDS M.Sc. Specialized Orthodontics",
  bullets: [
    "Qualifizierter Wahlkieferorthopäde für „Krankenkasse-Gratis Zahnspange“, spezialisiert in Kieferorthopädie und Orthodontie.",
    "Über 25 Jahre Erfahrung und eine große Zahl erfolgreicher Zahnregulierungen und Kieferorthopädie-Behandlungen.",
  ],
} as const;

export const klefterSeo = {
  title: "Zahnarzt Wien 1200 – Dr. Sablania | Implantat | Krone & Brücke",
  paragraphs: [
    "Als Zahnarzt Wien 1200 und Fachzahnarzt für Kieferorthopädie bietet Dr. med. dent. Manish Sablania ein breites Leistungsspektrum – von unsichtbaren Zahnspangen und Invisalign über Implantate, Kronen und Brücken bis zu professioneller Mundhygiene und ästhetischen Zahnfüllungen.",
    "Die Praxis in 1200 Wien ist mit öffentlichen Verkehrsmitteln (u. a. U6, U4, Linien 11A, 5A) gut erreichbar und liegt nah zu den Bezirken 1210, 1020, 1220, 1190 sowie Klosterneuburg. Termine nach Vereinbarung – kontaktieren Sie uns telefonisch oder per E-Mail.",
  ],
} as const;
