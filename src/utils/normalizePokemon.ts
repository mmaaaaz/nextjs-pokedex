import { Pokemon } from "@/types/New"

export const normalizePokemon = ({ pokemon }: { pokemon: Pokemon }) => {
  const data = {
    id: pokemon.id,
    name: pokemon.name,
    genus: pokemon.genus,
    description: pokemon.description,
    image: pokemon.imageUrl,
    types: pokemon.types,
    stats: Object.entries(pokemon.stats).map(([key, value]) => ({
      key,
      value,
    })),
    abilities: pokemon.abilities.map((ability) => ({
      key: ability.name,
      value: ability.description,
    })),
  }

  return data
}
