import PokemonOTD from "@/components/PokemonOTD"
import Pokemons from "@/components/Pokemons"
import { getAllPokemon, getPokemonOfTheDay } from "@/lib/pokemon-api"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pokélog - Your Complete Pokémon Database & Guide",
  description:
    "Explore the complete Pokélog with 905+ Pokémon. Discover detailed stats, types, abilities, and evolution data. Built with Next.js 16 for lightning-fast performance.",
  keywords: [
    "pokemon",
    "pokelog",
    "pokedex",
    "pokemon database",
    "pokemon stats",
    "pokemon types",
    "pokemon abilities",
    "pokemon guide",
    "all pokemon",
    "pokemon information",
  ],
  openGraph: {
    title: "Pokélog - Your Complete Pokémon Database & Guide",
    description: "Explore 905+ Pokémon with detailed stats, types, and abilities. Fast, modern, and comprehensive.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokélog - Your Complete Pokémon Database",
    description: "Explore 905+ Pokémon with detailed stats, types, and abilities.",
  },
  alternates: {
    canonical: "/",
  },
}

// On-Demand ISR: Build on first request, cache forever
// No revalidate = infinite cache (never rebuilds)
// No generateStaticParams = build on demand (not at build time)
// This means: Zero build time, zero rebuild cost, instant after first request
export const dynamic = "error" // Ensure static generation

export default async function Home() {
  // Fetch data on first request only, then cached forever
  // Load only 9 Pokemon initially for better performance
  const [pokemonOfDay, initialPokemon] = await Promise.all([
    getPokemonOfTheDay(),
    getAllPokemon({ limit: 9 }), // Start with just 9 for fast initial load
  ])

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Pokélog",
            description: "Complete Pokémon database with stats, types, and abilities",
            url: baseUrl,
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: `${baseUrl}/pokemon/{search_term_string}`,
              },
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      <PokemonOTD pokemon={pokemonOfDay} />
      <Pokemons pokemons={initialPokemon} />
    </>
  )
}
