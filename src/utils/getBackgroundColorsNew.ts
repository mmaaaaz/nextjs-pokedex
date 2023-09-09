import { ColorProps } from "@/types"
import PokemonTypeColor from "./colors"

const getBackgroundColors = (types: string[]) => {
  return types.map(
    (type) => PokemonTypeColor[type.toLowerCase() as keyof ColorProps]
  )
}

export default getBackgroundColors
