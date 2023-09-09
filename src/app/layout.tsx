import Navbar from "@/components/Navbar"
import "@/styles/globals.css"

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
      <body>
        <Navbar />
        <main className="">{children}</main>
      </body>
    </html>
  )
}
