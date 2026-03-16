import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "50/50 Journeys | Mystery & Wellness Travel",
  description:
    "Disconnect from the noise and embrace hidden cultural journeys designed for soul seekers. Half wellness, half mystery — fully unforgettable.",
  keywords: "mystery travel, wellness journeys, cultural travel, spiritual travel",
  openGraph: {
    title: "50/50 Journeys | Mystery & Wellness Travel",
    description: "Half Wellness. Half Mystery. Fully Unforgettable.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-hidden antialiased bg-[#F5F3EE] dark:bg-[#0c1410] text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
