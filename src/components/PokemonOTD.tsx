"use client"

import PokemonDetailsCard from "@/components/PokemonDetailsCard"
import { Pokemon } from "@/types/New"
import fetcher from "@/utils/fetcher"
import useSWR from "swr"
import { SpinnerIcon } from "./Icons"

const PokemonOTD = () => {
  const { data: pokemonOTD, isLoading } = useSWR<Pokemon>(
    "https://pokeapi.deno.dev/pokemon/potd",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <SpinnerIcon />
      </div>
    )
  }

  return pokemonOTD ? (
    <>
      <h1 className="text-center mt-20 text-xl md:text-2xl lg:text-3xl mb-12 font-bold text-primary">
        Pokemon of the Day
      </h1>

      <PokemonDetailsCard pokemon={pokemonOTD} />
    </>
  ) : null
}

export default PokemonOTD
