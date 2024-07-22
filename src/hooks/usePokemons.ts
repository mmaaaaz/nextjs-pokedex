import { Pokemons } from "@/types/New"
import fetcher from "@/utils/fetcher"
import { useEffect, useMemo, useState } from "react"
import useSWR from "swr"

const limit = 12

export function usePokemons(offset: number) {
  const url = useMemo(() => {
    const url = new URL("https://pokeapi.deno.dev/pokemon")
    url.searchParams.set("offset", String(limit * offset))
    url.searchParams.set("limit", String(limit))
    return url.toString()
  }, [offset])

  const { data, error } = useSWR<Pokemons>(url, fetcher, {
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
    isLoading: !data && !error,
    isLoadingMore: !data && !!pokemons.length,
    isError: error,
  }
}
