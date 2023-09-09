export type Pokemons = Pokemon[]

export interface Pokemon {
  id: number
  name: string
  genus: string
  description: string
  imageUrl: string
  types: string[]
  abilities: Ability[]
  stats: Stats
  locations: string[]
  color: string
}

export interface Ability {
  name: string
  effect: string
  description: string
}

export interface Stats {
  HP: number
  Attack: number
  Defense: number
  "Special Attack": number
  "Special Defense": number
  Speed: number
}
