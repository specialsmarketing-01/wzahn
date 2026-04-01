import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import { SITE } from "@/lib/site";
import {
  IconAlert,
  IconCalendar,
  IconCheck,
  IconClock,
  IconMapPin,
  IconPhone,
  IconShield,
  IconSparkle,
  IconTooth,
} from "./icons";

const trustItems = [
  {
    title: "Moderne Ausstattung",
    desc: "Digitale Diagnostik und schonende Behandlungsmethoden.",
    icon: IconSparkle,
  },
  {
    title: "Erfahrene Zahnärzte",
    desc: "Spezialisiert auf Prävention, Therapie und Ästhetik.",
    icon: IconShield,
  },
  {
    title: "Schnelle Termine",
    desc: "Kurze Wartezeiten und flexible Zeiten für Berufstätige.",
    icon: IconClock,
  },
  {
    title: "Zentrale Lage in Wien",
    desc: "Gut erreichbar mit öffentlichen Verkehrsmitteln und Parkmöglichkeiten.",
    icon: IconMapPin,
  },
] as const;

const services = [
  {
    title: "Zahnkontrolle & Prophylaxe",
    desc: "Regelmäßige Kontrollen zum Früherkennen von Karies und Parodontitis.",
    image: IMAGES.hero,
    icon: IconTooth,
  },
  {
    title: "Zahnreinigung (Mundhygiene)",
    desc: "Professionelle Reinigung für gesundes Zahnfleisch und strahlende Zähne.",
    image: IMAGES.dentalInstruments,
    icon: IconSparkle,
  },
  {
    title: "Zahnschmerzen Behandlung",
    desc: "Schnelle Diagnose und Linderung bei akuten Beschwerden.",
    image: IMAGES.medicalUrgent,
    icon: IconAlert,
  },
  {
    title: "Wurzelbehandlung",
    desc: "Schonende Endodontie zum Erhalt Ihrer natürlichen Zähne.",
    image: IMAGES.dentalInstruments,
    icon: IconShield,
  },
  {
    title: "Zahnersatz (Kronen & Brücken)",
    desc: "Hochwertige Versorgung für stabile Funktion und natürliche Optik.",
    image: IMAGES.clinicWellness,
    icon: IconTooth,
  },
  {
    title: "Zahnästhetik (Bleaching, Veneers)",
    desc: "Strahlendes Lächeln mit modernen ästhetischen Verfahren.",
    image: IMAGES.healthcare,
    icon: IconSparkle,
  },
] as const;

function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-xl bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-sky-600/25 transition hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 ${className}`}
    >
      {children}
    </a>
  );
}

function OutlineButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-sky-200 hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 ${className}`}
    >
      {children}
    </a>
  );
}

export function LandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: SITE.name,
    url: `https://${SITE.domain}`,
    telephone: SITE.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      postalCode: SITE.address.zip,
      addressCountry: "AT",
    },
    areaServed: { "@type": "City", name: "Wien" },
    priceRange: "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <a
        href="#kontakt"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900 focus:shadow-lg"
      >
        Zum Kontakt springen
      </a>

      <header className="sticky top-0 z-50 border-b border-slate-100/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
              <IconTooth className="h-5 w-5" />
            </span>
            {SITE.name}
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="hidden items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-sky-700 sm:inline-flex"
            >
              <IconPhone className="h-4 w-4" />
              {SITE.phoneDisplay}
            </a>
            <PrimaryButton href="#kontakt" className="!px-4 !py-2.5 text-xs sm:!px-6 sm:text-sm">
              Termin
            </PrimaryButton>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/80 to-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-20 lg:px-8">
            <div className="max-w-xl">
              <p className="mb-3 inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800">
                Ihr Zahnarzt in Wien
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
                Zahnarzt Wien – Moderne Zahnmedizin in Ihrer Nähe
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Professionelle Zahnbehandlungen in Wien. Schnelle Termine, moderne Technik und persönliche
                Betreuung.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <PrimaryButton href="#kontakt">
                  <IconCalendar className="mr-2 h-5 w-5" aria-hidden />
                  Termin vereinbaren
                </PrimaryButton>
                <OutlineButton href={`tel:${SITE.phoneTel}`}>
                  <IconPhone className="mr-2 h-5 w-5" aria-hidden />
                  Jetzt anrufen
                </OutlineButton>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-xl shadow-slate-200/50 ring-1 ring-slate-100">
              <Image
                src={IMAGES.hero}
                alt="Moderne Zahnarztpraxis in Wien mit heller, freundlicher Atmosphäre"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="border-y border-slate-100 bg-white py-14 sm:py-16" aria-labelledby="trust-heading">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 id="trust-heading" className="sr-only">
              Vertrauen und Qualität in unserer Wiener Zahnarztpraxis
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {trustItems.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-slate-100 bg-slate-50/50 p-6 transition hover:border-sky-100 hover:bg-sky-50/40"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="mb-1 flex items-start gap-2">
                    <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="leistungen" className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Unsere Leistungen beim Zahnarzt in Wien
              </h2>
              <p className="mt-3 text-slate-600">
                Von der Vorsorge bis zur ästhetischen Versorgung – alles aus einer Hand, transparent erklärt.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {services.map((s) => (
                <a
                  key={s.title}
                  href="#kontakt"
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md"
                >
                  <div className="relative aspect-[5/3] w-full bg-slate-100">
                    <Image
                      src={s.image}
                      alt={`${s.title} – Leistung in unserer Zahnarztpraxis Wien`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      loading="lazy"
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-2 flex items-center gap-2 text-sky-700">
                      <s.icon className="h-5 w-5 shrink-0" />
                      <h3 className="text-base font-semibold text-slate-900 group-hover:text-sky-800">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">{s.desc}</p>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-sky-600">
                      Termin anfragen
                      <span className="ml-1 transition group-hover:translate-x-0.5" aria-hidden>
                        →
                      </span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Warum unser Zahnarzt in Wien?
              </h2>
              <p className="mt-4 text-slate-600">
                Wir verbinden medizinische Präzision mit einem ruhigen Praxiserlebnis – damit Sie sich auf das
                Wesentliche konzentrieren können: Ihre Gesundheit.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Moderne Technik – digitale Bildgebung und schonende Behandlung",
                  "Individuelle Beratung – Zeit für Ihre Fragen und Behandlungsziele",
                  "Angenehme Atmosphäre – hell, ruhig und auf Ihre Bedürfnisse abgestimmt",
                  "Schnelle Terminvergabe – auch kurzfristig, wenn es eilt",
                ].map((line) => (
                  <li key={line} className="flex gap-3 text-slate-700">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    <span className="leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 shadow-lg ring-1 ring-slate-100 lg:order-2">
              <Image
                src={IMAGES.healthcare}
                alt="Beratungsgespräch in der Zahnarztpraxis Wien"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Location */}
        <section id="standort" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Zahnarzt in Wien – Zentral erreichbar
              </h2>
              <p className="mt-3 text-slate-600">
                Unsere Praxis liegt zentral in Wien – ideal erreichbar für Patientinnen und Patienten aus dem
                gesamten Stadtgebiet.
              </p>
            </div>
            <div className="mt-10 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-sm">
              <div className="aspect-[21/9] min-h-[280px] w-full sm:min-h-[320px] lg:aspect-[2.4/1]">
                <iframe
                  title="Karte: Praxisstandort Wien"
                  src={SITE.mapsEmbedUrl}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-col gap-2 border-t border-slate-100 bg-white px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3 text-left">
                  <IconMapPin className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />
                  <div>
                    <p className="font-medium text-slate-900">
                      {SITE.address.street}, {SITE.address.zip} {SITE.address.city}
                    </p>
                    <p className="text-sm text-slate-500">{SITE.address.country}</p>
                  </div>
                </div>
                <OutlineButton href="#kontakt" className="shrink-0">
                  Route planen
                </OutlineButton>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="kontakt" className="border-t border-slate-100 bg-gradient-to-br from-sky-50 to-white py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Jetzt Termin beim Zahnarzt in Wien vereinbaren
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Kontaktieren Sie uns noch heute und sichern Sie sich Ihren Termin.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <PrimaryButton href={`mailto:${SITE.email}?subject=Terminanfrage%20Zahnarzt%20Wien`}>
                <IconCalendar className="mr-2 h-5 w-5" aria-hidden />
                Termin buchen
              </PrimaryButton>
              <OutlineButton href={`tel:${SITE.phoneTel}`}>
                <IconPhone className="mr-2 h-5 w-5" aria-hidden />
                Jetzt anrufen
              </OutlineButton>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              E-Mail:{" "}
              <a href={`mailto:${SITE.email}`} className="font-medium text-sky-700 hover:underline">
                {SITE.email}
              </a>
            </p>
          </div>
        </section>

        {/* SEO */}
        <section className="border-t border-slate-100 bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-slate-900">Zahnarzt Wien – Ihre Anlaufstelle für gesunde Zähne</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Die Suche nach einem verlässlichen <strong>Zahnarzt Wien</strong> endet oft bei der Frage nach
                Qualität, Erreichbarkeit und Vertrauen. In unserer Praxis verbinden wir moderne Zahnmedizin mit
                einer persönlichen Betreuung, die auf Ihre Situation zugeschnitten ist – ob Vorsorge,
                ästhetische Zahnheilkunde oder akute Beschwerden. Für viele Menschen ist ein{" "}
                <strong>Zahnarzt Wien Termin</strong> der erste Schritt zu langfristig gesunden Zähnen: Wir nehmen
                uns Zeit für Beratung, erklären Behandlungsoptionen verständlich und planen gemeinsam mit Ihnen
                den weiteren Ablauf.
              </p>
              <p>
                Wenn Sie nach <strong>Zahnärzte Wien</strong> vergleichen, achten Sie nicht nur auf die Nähe,
                sondern auch auf ein durchdachtes Leistungsspektrum und transparente Abläufe. Unser Team setzt auf
                schonende Techniken, hygienische Standards und eine ruhige Atmosphäre – besonders wichtig, wenn
                Sie einen <strong>Zahnarzt in meiner Nähe Wien</strong> suchen und Wert auf kurze Wege und
                flexible Zeiten legen. So bleibt Zahngesundheit planbar, auch im stressigen Alltag.
              </p>
              <p>
                Bei akuten Beschwerden oder dringenden Fragen erreichen Sie uns telefonisch oder per E-Mail – wir
                bemühen uns um zeitnahe Rückmeldung und klare nächste Schritte. Ob Routinekontrolle oder
                individuelle Beratung – wir freuen uns darauf, Sie in Wien willkommen zu heißen.
              </p>
              <p>
                Regelmäßige Kontrollen sind die Basis für ein gesundes Gebiss: Als <strong>Zahnarzt Wien</strong>{" "}
                legen wir Wert auf Früherkennung, professionelle Prophylaxe und klare Empfehlungen, die zu Ihrem
                Alltag passen. So reduzieren Sie langfristig das Risiko für aufwendigere Eingriffe und behalten
                Kosten besser im Blick. Wenn Sie einen <strong>Zahnarzt Wien Termin</strong> wünschen, erreichen Sie
                uns telefonisch oder per E-Mail – wir melden uns zeitnah mit passenden Vorschlägen. Für Familien,
                Berufstätige und Senioren gilt dasselbe Prinzip: verlässliche Betreuung, verständliche Information
                und ein Team, das Ihre Anliegen ernst nimmt.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 bg-slate-50 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-slate-900">{SITE.name}</p>
            <p className="mt-1 text-sm text-slate-600">
              {SITE.address.street}, {SITE.address.zip} {SITE.address.city}
            </p>
          </div>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} {SITE.name}. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </>
  );
}
