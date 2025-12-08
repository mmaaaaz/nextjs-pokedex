import PokemonDetailsCard from "@/components/PokemonDetailsCard"
import { getPokemon } from "@/lib/pokemon-api"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{ slug: string }>
}

// On-demand ISR: Generate on first request, cache forever
export const dynamic = "error" // Ensure static generation

// Metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params // Next.js 16: params is now a Promise
  
  try {
    const pokemon = await getPokemon(slug)
    const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    
    return {
      title: `${pokemonName} #${pokemon.id} - Stats, Types & Abilities | Pokélog`,
      description: `Discover ${pokemonName} (${pokemon.types.join("/")} type). View detailed stats, abilities, and information for Pokémon #${pokemon.id}. ${pokemon.description}`,
      keywords: [
        pokemon.name,
        `pokemon ${pokemon.id}`,
        ...pokemon.types.map(t => `${t} type pokemon`),
        "pokemon stats",
        "pokemon abilities",
      ],
      openGraph: {
        title: `${pokemonName} #${pokemon.id} | Pokélog`,
        description: `${pokemon.types.join("/")} type Pokémon. ${pokemon.description.substring(0, 100)}...`,
        type: "article",
        images: [
          {
            url: pokemon.imageUrl,
            width: 475,
            height: 475,
            alt: `${pokemonName} official artwork`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${pokemonName} #${pokemon.id}`,
        description: `${pokemon.types.join("/")} type. View stats and abilities.`,
        images: [pokemon.imageUrl],  
      },
      alternates: {
        canonical: `/pokemon/${slug}`,
      },
    }
  } catch {
    return {
      title: "Pokémon Not Found | Pokélog",
      description: "The Pokémon you're looking for could not be found.",
    }
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params // Next.js 16: params is now a Promise
  
  try {
    const pokemon = await getPokemon(slug)
    const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    
    return (
      <>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Thing",
              name: pokemonName,
              description: pokemon.description,
              image: pokemon.imageUrl,
              identifier: `#${pokemon.id}`,
              additionalType: pokemon.types.join(", "),
            }),
          }}
        />
        
        <div className="mt-24">
          <PokemonDetailsCard pokemon={pokemon} />
        </div>
      </>
    )
  } catch {
    notFound()
  }
}

// No generateStaticParams = on-demand generation
// Pages build when first requested, then cached forever
// This saves build time and costs
