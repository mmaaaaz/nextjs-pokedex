import { Pokemon2 } from "@/types/Poke2"
import { normalizePokemon } from "@/utils/normalizePokemonNew"

const PokemonStats = ({ pokemon }: { pokemon: Pokemon2 }) => {
  const normalizedPokemon = normalizePokemon({ pokemon })

  return (
    <div className="flex w-full flex-col items-center justify-center overflow-y-auto">
      <div className="w-full border-t lg:border-t-0">
        {normalizedPokemon.stats.map((stat) => (
          <div
            key={stat.key}
            className="grid grid-cols-5 lg:flex py-4 last:border-b-0 border-b px-4 items-center justify-between w-full"
          >
            <div className="lg:w-1/4 col-span-2 text-nowrap">{stat.key}</div>
            <div className="lg:w-3/4 col-span-3 flex items-center justify-center">
              <div className="w-full h-2 bg-primary/5 border border-primary/10">
                <div
                  className="h-2 bg-primary"
                  style={{ width: `${stat.value}%` }}
                />
              </div>
              <div className="text-xs ml-3 text-primary">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PokemonStats
