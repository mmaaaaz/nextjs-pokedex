import PokemonDetailsCard from "@/components/PokemonDetailsCard"
import type { Pokemon } from "@/types/New"

type Props = {
  pokemon: Pokemon
}

export default function PokemonOTD({ pokemon }: Props) {
  return (
    <>
      <h1 className="text-center mt-20 text-xl md:text-2xl lg:text-3xl mb-12 font-bold text-primary">
        Pokemon of the Day
      </h1>

      <PokemonDetailsCard pokemon={pokemon} />
    </>
  )
}
