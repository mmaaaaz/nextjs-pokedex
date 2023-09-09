import { Pokemons } from "@/types/New"
import fetcher from "@/utils/fetcher"
import { useEffect, useState } from "react"
import useSWR from "swr"

const limit = 12

export function usePokemons(offset: number | string) {
  const url = new URL("https://pokeapi.deno.dev/pokemon")
  offset = Number(offset)
  url.searchParams.set(
    "offset",
    String(limit * (offset === 0 ? offset : offset + 1))
  )
  url.searchParams.set("limit", String(limit))

  const { data, error, isLoading } = useSWR<Pokemons>(url.toString(), fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })
  const [pokemons, setPokemons] = useState<Pokemons>([])

  useEffect(() => {
    if (data) {
      setPokemons((prevData: Pokemons) => [...prevData, ...data])
    }
  }, [data])

  return {
    pokemons,
    isLoading: isLoading && pokemons.length === 0,
    isLoadingMore: isLoading && pokemons,
    isError: error,
  }
}
