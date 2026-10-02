import type { Metadata, Viewport } from "next";
import { Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://rahul-mishra-iitp.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dr. Rahul Mishra — Assistant Professor, CSE, IIT Patna",
    template: "%s | Dr. Rahul Mishra",
  },
  description:
    "Academic research platform of Dr. Rahul Mishra, Assistant Professor in Computer Science and Engineering at IIT Patna. Research in Deep Learning, Fog Computing, IoT, Wireless Sensor Networks, and Smart Sensing.",
  keywords: [
    "Rahul Mishra",
    "IIT Patna",
    "Computer Science Engineering",
    "Federated Learning",
    "Deep Learning",
    "Internet of Things",
    "Wireless Sensor Networks",
    "Fog Computing",
  ],
  authors: [{ name: "Dr. Rahul Mishra" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Dr. Rahul Mishra — Assistant Professor, CSE, IIT Patna",
    description:
      "Research in Deep Learning, Fog Computing, IoT, WSN, and Smart Sensing.",
    url: SITE_URL,
    siteName: "Dr. Rahul Mishra — Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Rahul Mishra — Assistant Professor, CSE, IIT Patna",
    description:
      "Research in Deep Learning, Fog Computing, IoT, WSN, and Smart Sensing.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9faff" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1217" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${nunito.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        {/* Enable scroll-reveal only when motion is allowed; runs before paint
            so content is never hidden without JS / under reduced-motion. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(window.matchMedia('(prefers-reduced-motion: no-preference)').matches){document.documentElement.classList.add('reveal-anim')}}catch(e){}",
          }}
        />
        <ThemeProvider>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <SiteHeader />
          <main id="main" className="flex flex-1 flex-col">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
