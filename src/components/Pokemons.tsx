"use client"

import { SpinnerIcon } from "@/components/Icons"
import PokemonCard from "@/components/PokemonCard"
import { usePokemons } from "@/hooks/usePokemons"
import { useState } from "react"
import { useInView } from "react-cool-inview"

const Pokemons = () => {
  const [offset, setOffset] = useState(0)
  const { pokemons, isLoadingMore } = usePokemons(offset)

  const { observe } = useInView({
    rootMargin: "300px",
    onEnter: ({ unobserve }) => {
      if (pokemons.length < 905) {
        setOffset((prevOffset) => prevOffset + 1)
        unobserve()
      }
    },
  })

  return (
    <>
      <ul className="mx-auto mt-14 grid min-h-screen w-full max-w-7xl grid-cols-1 gap-4 p-10 pt-8 md:grid-cols-2 md:gap-5 lg:gap-7 lg:p-16 lg:pt-4 xl:w-2/3 2xl:grid-cols-3">
        {pokemons.map((pokemon, index) => (
          <li
            key={pokemon.id}
            className="h-80 w-full"
            ref={index === pokemons.length - 1 ? observe : null}
          >
            <PokemonCard pokemon={pokemon} />
          </li>
        ))}
      </ul>

      {isLoadingMore && (
        <div className="flex items-center justify-center">
          <SpinnerIcon />
        </div>
      )}
    </>
  )
}

export default Pokemons
