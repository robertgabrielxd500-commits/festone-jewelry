import type { Metadata } from "next";
import { Bodoni_Moda, Cinzel, Raleway, DM_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CartProvider } from "@/lib/cart-context";
import { PageLoader } from "@/components/page-loader";
import { CookieConsent } from "@/components/cookie-consent";
import { WhatsAppButton } from "@/components/whatsapp-button";

const bodoni = Bodoni_Moda({
  variable: "--font-display-raw",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const cinzel = Cinzel({
  variable: "--font-heading-raw",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const raleway = Raleway({
  variable: "--font-body-raw",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  variable: "--font-mono-raw",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: {
    default: "Festone — Bijuterii din argint 925, Iași, din 1993",
    template: "%s | Festone",
  },
  description:
    "Festone (Fest One), din 1993 — bijuterii din argint 925 în Iași, Bulevardul Socola 9. Brățări, lanțuri, pandantive, cercei și piercing. 4.5★ din 119 recenzii Google.",
  keywords: [
    "bijuterii Iași",
    "bijuterii argint",
    "argint 925",
    "Festone",
    "Fest One",
    "brățări argint",
    "lanțuri argint",
    "cercei argint",
    "piercing buric",
  ],
  metadataBase: new URL("https://festone.ro"),
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: "Festone",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ro"
      className={`${bodoni.variable} ${cinzel.variable} ${raleway.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-void text-cream font-body">
        <PageLoader>
          <CartProvider>
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
            <CookieConsent />
          </CartProvider>
        </PageLoader>
      </body>
    </html>
  );
}
