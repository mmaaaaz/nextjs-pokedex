import PokemonTypeColor from "./colors"

const getBackgroundColors = (
  type: any,
): { light: string; medium: string }[] => {
  return type.map(({ type }: { type: any }) => {
    const [[, backgroundColor]] = Object.entries(PokemonTypeColor).filter(
      ([key]) => key === type.name,
    ) as any

    return backgroundColor
  })
}

export default getBackgroundColors
