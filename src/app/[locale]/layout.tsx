import type { Metadata } from "next";
import { Cairo, Geist, Geist_Mono, JetBrains_Mono, Montserrat } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { DirectionProvider } from "@/components/ui/direction";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Toaster } from "sonner";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat"
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
})

// export async function GenerateMetaData(params: RootLayoutProps): Promise<Metadata> {
//   const locale = await params;


//   console.log(locale);
//   console.log(locale);

//   return {
//     metadataBase: new URL(""),
//     title: "International EAS",
//     description: "Engineering Automatic Doors For Heavy Industry",
//     keywords: [""],
//     alternates: { canonical: `/`, languages: { en: "/en", ar: "/ar" } },
//     openGraph: {
//       type: "website",
//       locale: locale === "ar"? "ar_EG": "en_Us"
//     }
//   };
// };

export const metadata: Metadata = {
  title: "International EAS",
  description: "Engineering Automatic Doors For Heavy Industry",
};

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({
  children, params,
}: RootLayoutProps) {

  const { locale } = await params;

  const direction = locale === "ar" ? "rtl" : "ltr";
  const fontClass = locale === "ar" ? cairo.variable : montserrat.variable;

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={direction}
      className={cn("h-full", "antialiased", fontClass)}
    >
      <body className={`flex flex-col min-h-full ${fontClass}`} >
        <NextIntlClientProvider messages={messages}>
          <DirectionProvider dir={direction}>
            <Header />
            {children}
            <Footer />
            <Toaster />
          </DirectionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
