import PokemonDetailsCard from "@/components/PokemonDetailsCard"
import { Pokemons } from "@/types/New"
import { notFound } from "next/navigation"

const getPokemon = async (slug: string) => {
  const pokemon = await fetch(`https://pokeapi.deno.dev/pokemon/${slug}`)

  if (!pokemon.ok) return undefined

  return pokemon.json()
}

export default async function Page({ params }: { params: { slug: string } }) {
  const pokemon = await getPokemon(params.slug)

  if (!pokemon) {
    notFound()
  }

  return (
    <div className="mt-24">
      <PokemonDetailsCard pokemon={pokemon} />
    </div>
  )
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const data = await fetch("https://pokeapi.deno.dev/pokemon", {
    cache: "force-cache",
  })

  if (!data.ok) {
    throw new Error("Failed to fetch data")
  }

  const pokemons = (await data.json()) as Pokemons

  return pokemons.map((pokemon) => ({
    params: {
      slug: pokemon.name.toLowerCase(),
    },
  }))
}
