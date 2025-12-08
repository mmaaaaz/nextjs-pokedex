"use client"

import PokemonCard from "@/components/PokemonCard"
import type { Pokemon } from "@/types/New"
import { useEffect, useRef, useState } from "react"

type Props = {
  pokemons: Pokemon[]
}

const POKEMONS_PER_LOAD = 6
const TOTAL_POKEMON = 905
const POKEMON_API_BASE = "https://pokeapi.deno.dev/pokemon"

export default function Pokemons({ pokemons: initialPokemons }: Props) {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>(initialPokemons)
  const [isLoading, setIsLoading] = useState(false)
  const [currentId, setCurrentId] = useState(initialPokemons.length + 1)
  const loaderRef = useRef<HTMLDivElement>(null)
  
  const hasMore = currentId <= TOTAL_POKEMON

  // Function to fetch more Pokemon directly from PokeAPI
  const fetchMorePokemon = async () => {
    if (isLoading || !hasMore) return
    
    setIsLoading(true)
    try {
      const endId = Math.min(currentId + POKEMONS_PER_LOAD - 1, TOTAL_POKEMON)
      const promises: Promise<Pokemon>[] = []
      
      // Fetch batch of Pokemon
      for (let i = currentId; i <= endId; i++) {
        promises.push(
          fetch(`${POKEMON_API_BASE}/${i}`).then((res) => res.json())
        )
      }
      
      const newPokemons = await Promise.all(promises)
      
      setAllPokemons((prev) => [...prev, ...newPokemons])
      setCurrentId(endId + 1)
    } catch (error) {
      console.error("Error fetching Pokemon:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (!hasMore || isLoading) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchMorePokemon()
        }
      },
      {
        rootMargin: "200px",
        threshold: 0.1,
      }
    )

    const currentLoader = loaderRef.current
    if (currentLoader) {
      observer.observe(currentLoader)
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader)
      }
    }
  }, [hasMore, isLoading, currentId])

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8">
      <h2 className="sr-only">Pokémon List</h2>
      
      <ul 
        className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:gap-7 xl:w-2/3 xl:mx-auto 2xl:grid-cols-3"
        aria-label="Pokémon cards"
      >
        {allPokemons.map((pokemon) => (
          <li key={pokemon.id} className="h-80 w-full">
            <PokemonCard pokemon={pokemon} />
          </li>
        ))}
      </ul>

      {/* ARIA live region for loading announcements */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {isLoading && `Loading ${POKEMONS_PER_LOAD} more Pokémon...`}
        {!hasMore && allPokemons.length > 0 && `All ${TOTAL_POKEMON} Pokémon loaded`}
      </div>

      {/* Loading indicator and sentinel element */}
      {hasMore && (
        <div
          ref={loaderRef}
          className="mt-8 flex justify-center items-center h-16"
          aria-hidden="true"
        >
          {isLoading ? (
            <div className="flex items-center gap-2 text-primary">
              <div className="h-3 w-3 rounded-full bg-primary animate-bounce" />
              <div className="h-3 w-3 rounded-full bg-primary animate-bounce [animation-delay:150ms]" />
              <div className="h-3 w-3 rounded-full bg-primary animate-bounce [animation-delay:300ms]" />
            </div>
          ) : (
            <div className="h-1" />
          )}
        </div>
      )}

      {!hasMore && allPokemons.length > 0 && (
        <p className="mt-8 text-center text-sm text-primary/60">
          All {TOTAL_POKEMON} Pokémon loaded! 🎉
        </p>
      )}
    </div>
  )
}
