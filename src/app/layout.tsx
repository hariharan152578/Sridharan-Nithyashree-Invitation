import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#260408",
};

export const metadata: Metadata = {
  title: "Wedding Invitation | Selvi J. Nithyasri & Sri N. Sridharan",
  description:
    "Vivaha Subhamuhurtha Ahvana Patrika — Join us in celebrating the auspicious wedding ceremony of Selvi J. Nithyasri & Sri N. Sridharan on 01 November 2026 at Anugraha Thirumana Mandapam.",
  keywords: [
    "Wedding Invitation",
    "Nithyasri Sridharan Wedding",
    "Anugraha Thirumana Mandapam",
    "Vivaha Subhamuhurtha",
  ],
  openGraph: {
    title: "Wedding Invitation | Nithyasri & Sridharan",
    description:
      "Auspicious Vivaha Subha Mahotsavam on Sunday, 01 November 2026, Anugraha Thirumana Mandapam.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full bg-[#120306]">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cinzel+Decorative:wght@400;700;900&family=Cinzel:wght@400;500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Great+Vibes&family=Mea+Culpa&family=MonteCarlo&family=Outfit:wght@300;400;500;600;700&family=Pinyon+Script&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full bg-[#120306] text-stone-100 font-body antialiased selection:bg-amber-500/30 selection:text-amber-200"
      >
        {children}
      </body>
    </html>
  );
}
