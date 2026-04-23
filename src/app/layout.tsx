import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { BookingProvider } from "@/components/ui/BookingProvider";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Jajo Psychiatry | ADHD, Anxiety & Depression Treatment in Michigan",
    template: "%s | Jajo Psychiatry",
  },
  description:
    "Personalized psychiatric care in Farmington Hills, MI. Expert treatment for ADHD, anxiety, depression, and bipolar disorder. In-person and telehealth available. New patients often seen within 1 week.",
  keywords: [
    "psychiatrist near me",
    "ADHD psychiatrist",
    "anxiety psychiatrist",
    "depression treatment",
    "bipolar psychiatrist",
    "telepsychiatry Michigan",
    "medication management",
    "psychiatric evaluation",
    "ADHD testing",
    "GeneSight testing",
    "Farmington Hills psychiatrist",
    "Michigan psychiatrist",
  ],
  authors: [{ name: "Jajo Psychiatry" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jajopsychiatry.com",
    siteName: "Jajo Psychiatry",
    title: "Jajo Psychiatry | ADHD, Anxiety & Depression Treatment in Michigan",
    description:
      "Personalized psychiatric care in Farmington Hills, MI. Expert treatment for ADHD, anxiety, depression, and bipolar disorder. New patients often seen within 1 week.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${playfair.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <BookingProvider>
          <ScrollToTop />
          <SchemaMarkup />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileStickyCTA />
        </BookingProvider>
      </body>
    </html>
  );
}
