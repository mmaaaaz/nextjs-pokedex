/* eslint-disable react/jsx-key */
import { Type } from "@/types/Pokemon"
import PokemonTypeColor from "@/utils/colors"
import clsx from "clsx"
import EvolutionChain from "./EvolutionChain"
import Stats from "./Stats"

interface PokemonStatsProps {
  pokemon: any
}

const PokemonStats = ({ pokemon }: PokemonStatsProps) => {
  const len = pokemon.types.length

  const gridColLength = `grid-cols-${len}`

  return (
    <div className="overscroll-visible flex h-full w-full flex-col items-start justify-start bg-primary lg:max-h-[70vh] lg:overflow-y-auto">
      <div
        className={clsx(
          "mb-5 w-full items-center grid justify-center",
          gridColLength
        )}
      >
        {pokemon.types.map((t: Type, idx: number) => {
          const name = t.type.name
          return (
            <div
              key={idx}
              style={{
                backgroundColor: Object.entries(PokemonTypeColor).filter(
                  ([key]) => key === name
                )[0][1].medium,
              }}
              className="select-none px-2 w-full text-center py-2 text-xs font-bold uppercase tracking-wide text-primary"
            >
              {name}
            </div>
          )
        })}
      </div>

      <div className="p-5 w-full">
        <p className="text-lg font-semibold text-secondary" key={pokemon.id}>
          {pokemon.flavorText}
        </p>

        <Stats stats={pokemon.stats} />

        <EvolutionChain pokemon={pokemon} />
      </div>
    </div>
  )
}

export default PokemonStats
