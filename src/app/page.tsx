"use client"

import { SpinnerIcon } from "@/components/Icons"
import PokemonCard from "@/components/PokemonCard2"
import { usePokemons } from "@/hooks/useData"
import getBackgroundColors from "@/utils/getBackgroundColorsNew"
import { useInView } from "react-cool-inview"

var offset = 0

export default function Home() {
  const { pokemons, isLoading, isLoadingMore } = usePokemons(offset)

  const { observe } = useInView({
    rootMargin: "300px",
    onEnter: async ({ unobserve }) => {
      unobserve()
      if (pokemons.length < 905) {
        offset += 1
      }
    },
  })

  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center min-h-screen">
          <SpinnerIcon />
        </div>
      )}

      {pokemons && (
        <ul className="mx-auto mt-14 grid min-h-screen w-full max-w-7xl grid-cols-1 gap-4 p-10 pt-8 md:grid-cols-2 md:gap-5 lg:gap-7 lg:p-16 lg:pt-4 xl:w-2/3 2xl:grid-cols-3">
          {pokemons.map((pokemon, index) => {
            return (
              <li
                key={pokemon.id}
                className="h-80 w-full"
                ref={index === pokemons.length - 1 ? observe : null}
              >
                <PokemonCard
                  pokemon={pokemon}
                  bgColors={getBackgroundColors(pokemon.types)}
                />
              </li>
            )
          })}
        </ul>
      )}

      {!isLoading && isLoadingMore && (
        <div className="flex items-center justify-center">
          <SpinnerIcon />
        </div>
      )}
    </>
  )
}
