import { Pokemon2 } from "@/types/Poke2"

export const normalizePokemon = ({ pokemon }: { pokemon: Pokemon2 }) => {
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
