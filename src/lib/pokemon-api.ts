import type { Pokemon } from "@/types/New"

const POKEMON_API_BASE = "https://pokeapi.deno.dev/pokemon"
const TOTAL_POKEMON = 905

/**
 * Fetch Pokemon data with on-demand caching
 * First request fetches from API and caches forever
 * Subsequent requests serve from cache (never refetch)
 */
async function fetchPokemonAPI<T>(endpoint: string): Promise<T> {
  const url = `${POKEMON_API_BASE}/${endpoint}`
  
  const response = await fetch(url, {
    // Cache forever (no revalidation)
    // Only fetches once per Pokemon, then cached permanently
    cache: "force-cache",
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`)
  }

  return response.json()
}

/**
 * Get Pokemon of the Day (Featured Pokemon)
 * Returns a fixed Pokemon to avoid hydration mismatches
 * Using Pikachu (ID 25) as the featured Pokemon
 */
export async function getPokemonOfTheDay(): Promise<Pokemon> {
  // Fixed Pokemon ID to avoid hydration issues
  // Date.now() causes server/client mismatch
  const featuredPokemonId = 25 // Pikachu - iconic Pokemon
  
  return fetchPokemonAPI<Pokemon>(String(featuredPokemonId))
}

/**
 * Get a single Pokemon by ID or name
 */
export async function getPokemon(idOrName: string | number): Promise<Pokemon> {
  return fetchPokemonAPI<Pokemon>(String(idOrName))
}

/**
 * Get multiple Pokemon with pagination
 * Used for building static pages at build time
 */
export async function getAllPokemon({
  offset = 0,
  limit = 150,
}: {
  offset?: number
  limit?: number
} = {}): Promise<Pokemon[]> {
  const promises: Promise<Pokemon>[] = []
  
  const end = Math.min(offset + limit, TOTAL_POKEMON)
  
  for (let i = offset + 1; i <= end; i++) {
    promises.push(fetchPokemonAPI<Pokemon>(String(i)))
  }

  // Fetch in batches to avoid overwhelming the API
  const batchSize = 50
  const results: Pokemon[] = []
  
  for (let i = 0; i < promises.length; i += batchSize) {
    const batch = promises.slice(i, i + batchSize)
    const batchResults = await Promise.all(batch)
    results.push(...batchResults)
  }

  return results
}

/**
 * Get total count of Pokemon
 */
export function getTotalPokemonCount(): number {
  return TOTAL_POKEMON
}

/**
 * Generate static params for all Pokemon detail pages
 * Used by Next.js generateStaticParams
 */
export async function getAllPokemonIds(): Promise<Array<{ id: string }>> {
  return Array.from({ length: TOTAL_POKEMON }, (_, i) => ({
    id: String(i + 1),
  }))
}
