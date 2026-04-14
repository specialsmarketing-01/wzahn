import Image from "next/image";
import {
  klefterDoctor,
  klefterHero,
  klefterImages,
  klefterIntro,
  klefterRegions,
  klefterSeo,
  klefterServices,
} from "@/content/klefter";
import { IMAGES } from "@/lib/images";
import { SABLANIA_ONLINE_TERMINE, SABLANIA_SITE, sablaniaNavLinks } from "@/lib/sablania-nav";
import { SITE } from "@/lib/site";
import {
  IconCalendar,
  IconCheck,
  IconClock,
  IconMapPin,
  IconPhone,
  IconShield,
  IconSparkle,
} from "./icons";

const trustItems = [
  {
    title: "Hochwertige Ausstattung",
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

function PrimaryButton({
  href,
  children,
  className = "",
  external,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
  external,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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

      <main>
        {/* Video fills header + hero; single layer behind both */}
        <div className="relative flex min-h-[min(92vh,900px)] flex-col overflow-hidden bg-slate-900">
          <video
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover motion-reduce:hidden"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={IMAGES.hero}
            aria-label="Impression der Zahnarztpraxis"
          >
            <source src={SITE.heroVideoSrc} type="video/mp4" />
          </video>
          <div
            className="absolute inset-0 z-0 hidden bg-cover bg-center motion-reduce:block"
            style={{ backgroundImage: `url(${IMAGES.hero})` }}
            role="img"
            aria-label="Zahnarztpraxis in Wien"
          />
          <div
            className="absolute inset-0 z-[1] bg-gradient-to-br from-slate-950/88 via-slate-900/65 to-slate-800/45"
            aria-hidden
          />

          <header className="sticky top-0 z-40 shrink-0 border-b border-white/15 bg-slate-950/30 backdrop-blur-md">
            <div className="mx-auto max-w-6xl px-4 py-2 sm:px-6 sm:py-3 lg:px-8">
              <p className="mb-2 text-center text-[0.65rem] leading-tight text-slate-300 sm:mb-3 sm:text-left">
                <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:justify-start">
                  <span>Alle Kassen und Privat</span>
                  <span className="text-slate-500" aria-hidden>
                    ·
                  </span>
                  <span>Mo–Fr: 10–17 Uhr</span>
                </span>
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={SABLANIA_SITE}
                  className="flex min-h-[48px] min-w-0 max-w-[min(100%,18rem)] shrink-0 items-center gap-2 sm:max-w-[20rem] sm:gap-3"
                  aria-label="Manish Sablania – Startseite"
                >
                  <Image
                    src={SITE.logoSrc}
                    alt=""
                    width={56}
                    height={56}
                    className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14"
                    priority
                    aria-hidden
                  />
                  <span className="flex min-w-0 flex-col leading-tight">
                    <span className="text-[0.65rem] font-normal uppercase tracking-wide text-slate-200 sm:text-[10px]">
                      {SITE.brand.title}
                    </span>
                    <span className="truncate text-sm font-bold text-white sm:text-base">{SITE.brand.name}</span>
                    <span className="line-clamp-2 text-[0.65rem] font-normal leading-snug text-slate-300 max-[380px]:hidden sm:text-[10px] sm:line-clamp-none">
                      {SITE.brand.credentials}
                    </span>
                  </span>
                </a>

                <nav
                  className="hidden flex-1 flex-wrap items-center justify-center gap-x-2 xl:gap-x-4 lg:flex"
                  aria-label="Hauptnavigation"
                >
                  {sablaniaNavLinks.map(({ label, href }) => (
                    <a
                      key={href}
                      href={href}
                      className="whitespace-nowrap text-[0.8125rem] font-semibold text-slate-200 transition-colors duration-200 hover:text-white xl:text-sm"
                    >
                      {label}
                    </a>
                  ))}
                </nav>

                <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
                  <a
                    href={`tel:${SITE.phoneTel}`}
                    className="hidden items-center gap-1.5 text-sm font-medium text-slate-200 hover:text-white xl:inline-flex"
                  >
                    <IconPhone className="h-4 w-4" />
                    {SITE.phoneDisplay}
                  </a>
                  <a
                    href={SABLANIA_ONLINE_TERMINE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-3 py-2 text-xs font-semibold text-white shadow-sm shadow-sky-600/25 transition hover:bg-sky-700 sm:px-6 sm:text-sm"
                  >
                    Jetzt Termin
                  </a>
                  <details className="relative z-50 lg:hidden">
                    <summary className="flex cursor-pointer list-none items-center justify-center rounded-lg p-2 text-slate-200 hover:bg-white/10 [&::-webkit-details-marker]:hidden">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                      <span className="sr-only">Menü öffnen</span>
                    </summary>
                    <div className="absolute right-0 top-full mt-2 w-[min(calc(100vw-2rem),18rem)] rounded-xl border border-white/20 bg-slate-950/95 p-2 shadow-xl backdrop-blur-md">
                      <nav className="flex flex-col gap-0.5" aria-label="Mobile Navigation">
                        {sablaniaNavLinks.map(({ label, href }) => (
                          <a
                            key={href}
                            href={href}
                            className="rounded-lg px-3 py-2.5 text-sm font-medium text-white hover:bg-white/10"
                          >
                            {label}
                          </a>
                        ))}
                      </nav>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </header>

          <section
            className="relative z-10 flex flex-1 flex-col justify-center px-4 pb-20 pt-8 sm:px-6 sm:pb-24 sm:pt-10 lg:px-8 lg:pb-28"
            aria-label="Einstieg: Zahnarzt Wien"
          >
            <div className="mx-auto flex w-full max-w-6xl justify-center">
              <div className="flex w-full max-w-2xl flex-col items-center text-center">
                <p className="mb-3 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {klefterHero.badgeSub}
                </p>
                <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-sm sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
                  {klefterHero.h1}
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-slate-200">{klefterHero.lead}</p>
                <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
                  <PrimaryButton href={SABLANIA_ONLINE_TERMINE} external>
                    <IconCalendar className="mr-2 h-5 w-5" aria-hidden />
                    Termin vereinbaren
                  </PrimaryButton>
                  <OutlineButton
                    href={`tel:${SITE.phoneTel}`}
                    className="!border-white/75 !bg-white/10 !text-white shadow-none backdrop-blur-sm hover:!border-white hover:!bg-white/20"
                  >
                    <IconPhone className="mr-2 h-5 w-5" aria-hidden />
                    Jetzt anrufen
                  </OutlineButton>
                </div>
              </div>
            </div>
          </section>
        </div>

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

        {/* Intro (klefter) */}
        <section className="border-y border-slate-100 bg-white py-16 sm:py-20" aria-labelledby="intro-heading">
          <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
            <div>
              <h2 id="intro-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                {klefterIntro.h2}
              </h2>
              <h3 className="mt-4 text-lg font-semibold text-slate-800">{klefterIntro.h3}</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">{klefterIntro.welcome}</p>
              <p className="mt-4 text-slate-600 leading-relaxed">{klefterIntro.spectrum}</p>
              <div className="mt-8">
                <PrimaryButton href={SABLANIA_ONLINE_TERMINE} external>
                  <IconCalendar className="mr-2 h-5 w-5" aria-hidden />
                  Zahnarzttermin vereinbaren
                </PrimaryButton>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-slate-100 shadow-lg ring-1 ring-slate-100 lg:max-w-none">
              <div className="relative aspect-[2/3] w-full">
                <Image
                  src={klefterImages.drPortrait}
                  alt="Dr. med. dent. Manish Sablania – Zahnarzt Wien 1200"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="leistungen" className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Leistungen in unserer Praxis
              </h2>
              <p className="mt-3 text-slate-600">
                Von der allgemeinen Zahnheilkunde bis Kieferorthopädie und Implantologie – übersichtlich und
                verständlich erklärt.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {klefterServices.map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md"
                >
                  <div className="relative aspect-[5/3] w-full bg-slate-100">
                    <Image
                      src={s.image}
                      alt={`${s.title} – Leistung der Zahnarztpraxis Wien 1200`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      loading="lazy"
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-base font-semibold text-slate-900 group-hover:text-sky-800">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-sky-600">
                      Mehr lesen
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

        {/* Regions */}
        <section className="border-t border-slate-100 bg-white py-16 sm:py-20" aria-labelledby="regions-heading">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 id="regions-heading" className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              {klefterRegions.h2}
            </h2>
            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              {klefterRegions.body.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            <p className="mt-6 text-sm font-medium text-slate-800">
              Vorteile: Praxis in 1200 Wien nahe 1210, 1020, 1190, 1220 und Klosterneuburg · gut erreichbar mit U6,
              U4, 11A, 5A · kurze Wege für Schulkinder.
            </p>
          </div>
        </section>

        {/* Why choose */}
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Warum Patienten uns vertrauen
              </h2>
              <p className="mt-4 text-slate-600">
                Fortschrittliche Verfahren, ein breites Leistungsspektrum und der Fokus auf Ihr Wohlbefinden – in 1200 Wien,
                gut erreichbar aus den umliegenden Bezirken.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Patient im Mittelpunkt – angenehme, komfortable Betreuung",
                  "Kieferorthopädie & Allgemeine Zahnheilkunde – von Gratis-Zahnspange bis Implantat",
                  "Erfahrung in Zahnregulierung und ästhetischer Versorgung",
                  "Termine nach Vereinbarung – Mo–Fr 10–17 Uhr",
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
            <div className="relative order-1 aspect-[21/9] overflow-hidden rounded-2xl bg-slate-100 shadow-lg ring-1 ring-slate-100 sm:aspect-[16/9] lg:order-2">
              <Image
                src={klefterImages.patientBanner}
                alt="Angstpatient und Zahnarzt – einfühlsame Betreuung in der Praxis Wien 1200"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Doctor */}
        <section className="border-t border-slate-100 bg-white py-16 sm:py-20" aria-labelledby="doctor-heading">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 id="doctor-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {klefterDoctor.h2}
            </h2>
            <ul className="mt-6 space-y-4">
              {klefterDoctor.bullets.map((line) => (
                <li key={line} className="flex gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  <span className="leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <PrimaryButton href={SABLANIA_ONLINE_TERMINE} external>
                <IconCalendar className="mr-2 h-5 w-5" aria-hidden />
                Termin zur kostenlosen Erstberatung
              </PrimaryButton>
            </div>
          </div>
        </section>

        {/* Location */}
        <section id="standort" className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Ordination in 1200 Wien
              </h2>
              <p className="mt-3 text-slate-600">
                Forsthausgasse im 20. Bezirk – gut erreichbar mit U6, U4, 11A und 5A sowie für Patienten aus 1210,
                1020, 1220, 1190 und Klosterneuburg.
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
              Termin beim Zahnarzt in 1200 Wien
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Vereinbaren Sie einen Termin online oder kontaktieren Sie uns telefonisch oder per E-Mail.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <PrimaryButton href={SABLANIA_ONLINE_TERMINE} external>
                <IconCalendar className="mr-2 h-5 w-5" aria-hidden />
                Online Termin
              </PrimaryButton>
              <OutlineButton href={`mailto:${SITE.email}?subject=Terminanfrage%20Zahnarzt%20Wien%201200`}>
                E-Mail schreiben
              </OutlineButton>
              <OutlineButton href={`tel:${SITE.phoneTel}`}>
                <IconPhone className="mr-2 h-5 w-5" aria-hidden />
                Jetzt anrufen
              </OutlineButton>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              <a href={`mailto:${SITE.email}`} className="font-medium text-sky-700 hover:underline">
                {SITE.email}
              </a>
              {" · "}
              <a href={`mailto:${SITE.emailSecondary}`} className="font-medium text-sky-700 hover:underline">
                {SITE.emailSecondary}
              </a>
            </p>
          </div>
        </section>

        {/* SEO */}
        <section className="border-t border-slate-100 bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-slate-900">{klefterSeo.title}</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              {klefterSeo.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 bg-slate-50 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:items-start sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-start sm:text-left">
            <Image
              src={SITE.logoSrc}
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 shrink-0 object-contain"
              aria-hidden
            />
            <div>
              <p className="text-xs text-slate-500">{SITE.brand.title}</p>
              <p className="font-semibold text-slate-900">{SITE.brand.name}</p>
              <p className="text-sm text-slate-600">{SITE.brand.credentials}</p>
              <p className="mt-2 text-sm text-slate-600">
                {SITE.address.street}, {SITE.address.zip} {SITE.address.city}
              </p>
            </div>
          </div>
          <p className="text-center text-xs text-slate-500 sm:text-right">
            © {new Date().getFullYear()} {SITE.name}. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </>
  );
}
