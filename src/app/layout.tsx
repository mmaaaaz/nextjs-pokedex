import Navbar from "@/components/Navbar"
import SkipLink from "@/components/SkipLink"
import { cn } from "@/lib/utils"
import { GeistMono } from "geist/font/mono"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import Providers from "./providers"

export const metadata: Metadata = {
  title: {
    default: "Pokélog | Complete Pokémon Database & Stats Guide",
    template: "%s | Pokélog",
  },
  description:
    "Your ultimate Pokémon companion! Explore 905+ Pokémon with detailed stats, types, abilities, and evolution data. Built with Next.js 16, React 19, and Tailwind CSS v4 for blazing-fast performance.",
  keywords: [
    "pokemon",
    "pokelog",
    "pokedex",
    "pokemon database",
    "pokemon stats",
    "pokemon information",
    "pokemon types",
    "pokemon abilities",
    "pokemon guide",
    "pokemon evolution",
  ],
  authors: [{ name: "Pokélog Team", url: "https://github.com/mmaaaazu/nextjs-pokelog" }],
  creator: "Pokélog Team",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Pokélog | Complete Pokémon Database",
    description: "Explore 905+ Pokémon with detailed stats, types, and abilities. Fast, modern, and comprehensive.",
    siteName: "Pokélog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokélog | Complete Pokémon Database",
    description: "Explore 905+ Pokémon with detailed stats, types, and abilities.",
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
  verification: {
    // Add your verification codes here when deploying
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F5F3" },
    { media: "(prefers-color-scheme: dark)", color: "#0C0B09" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Pokélog",
              description: "Complete Pokémon database with stats, types, and abilities",
              applicationCategory: "Reference",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className={cn("bg-background text-text", GeistMono.className)}>
        <Providers>
          <SkipLink />
          <Navbar />
          <main id="main-content" className="uppercase" role="main">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
