import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xaris Joy Tabayag — Portfolio",
  description:
    "3rd Year Computer Science student at Bicol University. UI/UX Designer, Frontend Developer, and Creative Technology Leader. Designing thoughtful digital experiences that blend creativity, usability, and technology.",
  keywords: [
    "Xaris Joy Tabayag",
    "Bicol University",
    "Computer Science",
    "UI/UX Designer",
    "Frontend Developer",
    "Portfolio",
    "Philippines",
  ],
  authors: [{ name: "Xaris Joy Tabayag" }],
  creator: "Xaris Joy Tabayag",
  openGraph: {
    type: "website",
    locale: "en_PH",
    title: "Xaris Joy Tabayag — Portfolio",
    description:
      "Computer Science student & UI/UX designer creating thoughtful digital experiences.",
    siteName: "Xaris Joy Tabayag Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xaris Joy Tabayag — Portfolio",
    description:
      "Computer Science student & UI/UX designer creating thoughtful digital experiences.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {/* Subtle noise texture overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
