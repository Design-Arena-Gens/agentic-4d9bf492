import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Nebula Commerce",
  description:
    "Nebula Commerce is a modern dark-mode e-commerce experience crafted for premium tech and lifestyle products.",
  icons: {
    icon: "/icon.svg"
  },
  openGraph: {
    title: "Nebula Commerce",
    description:
      "Discover a curated collection of premium tech and lifestyle essentials in a sleek dark-mode storefront.",
    url: "https://agentic-4d9bf492.vercel.app",
    siteName: "Nebula Commerce",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Nebula Commerce hero image"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nebula Commerce",
    description:
      "Discover a curated collection of premium tech and lifestyle essentials in a sleek dark-mode storefront.",
    creator: "@nebula"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} bg-background text-slate-100 antialiased`}
      >
        <CartProvider>
          <div className="flex min-h-screen flex-col bg-gradient-to-br from-[#09090B] via-[#08080B] to-[#0B1120]">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
