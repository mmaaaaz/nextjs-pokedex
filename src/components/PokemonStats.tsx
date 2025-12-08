import type { Pokemon } from "@/types/New"
import { normalizePokemon } from "@/utils/normalizePokemon"

// Maximum possible stat value for Pokemon
const MAX_STAT_VALUE = 255

const PokemonStats = ({ pokemon }: { pokemon: Pokemon }) => {
  const normalizedPokemon = normalizePokemon({ pokemon })

  return (
    <div className="flex w-full flex-col items-center justify-center overflow-y-auto">
      <div className="w-full border-t lg:border-t-0">
        {normalizedPokemon.stats.map((stat) => {
          // Calculate percentage based on max possible stat value
          const percentage = Math.min((stat.value / MAX_STAT_VALUE) * 100, 100)
          
          return (
            <div
              key={stat.key}
              className="grid grid-cols-5 lg:flex py-4 last:border-b-0 border-b border-primary/30 px-4 items-center justify-between w-full"
            >
              <div className="lg:w-1/4 col-span-2 text-nowrap">{stat.key}</div>
              <div className="lg:w-3/4 col-span-3 flex items-center justify-center">
                <div className="w-full h-2 bg-primary/5 border border-primary/10">
                  <div
                    className="h-2 bg-primary transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="text-xs ml-3 text-primary min-w-[2rem] text-right">
                  {stat.value}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PokemonStats
