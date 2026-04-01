/**
 * Remote images (Unsplash) — avoids broken /public/images paths when assets are not checked in.
 * Next.js optimizes these via `next/image` + `remotePatterns` in next.config.ts.
 */
const u = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  /** Modern bright dental clinic interior */
  hero: u("photo-1629909613654-28e377c37b09", 1400),
  /** Dental instruments / professional care */
  dentalInstruments: u("photo-1579684385127-1ef15d508118", 800),
  /** Healthcare / doctor–patient context */
  healthcare: u("photo-1576091160399-112ba8d25d1d", 800),
  /** Medical / urgent care mood */
  medicalUrgent: u("photo-1559757175-0eb30cd8c063", 800),
  /** Clinic / wellness */
  clinicWellness: u("photo-1582719478250-c89cae4dc85b", 800),
} as const;
