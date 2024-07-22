import Navbar from "@/components/Navbar"
import { cn } from "@/lib/utils"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import Providers from "./providers"

export const metadata = {
  title: "Pokedéx",
  description: "Get information about all Pokemons",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background">
        <Providers>
          <Navbar />
          <main className={(cn(GeistMono.className), "uppercase")}>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
