import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UrVeeda — Experience-First Growth. S4E Framework.",
  description: "UrVeeda is an experience-first growth company. We fix your foundation, scale your influence, earn your credibility, and own your screen — powered by the S4E Framework: Service → Social → Search → Screen.",
  keywords: ["S4E framework", "growth strategy", "UGC distribution", "press release distribution", "geofencing", "reputation management", "experience-first growth"],
  openGraph: {
    title: "UrVeeda — Experience-First Growth",
    description: "Fix the bucket before you pour the budget. The S4E Growth Framework: Service → Social → Search → Screen.",
    url: "https://www.urveeda.com",
    siteName: "UrVeeda",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
