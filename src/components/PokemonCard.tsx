import type { Pokemon } from "@/types/New"
import PokemonTypeColor from "@/utils/colors"
import Link from "next/link"
import type { FC } from "react"
import { PokemonIcon } from "./Icons"

const PokemonCard: FC<{
  pokemon: Pokemon
}> = ({ pokemon: { name, imageUrl, types, id, color } }) => {
  const pokemonName = name.charAt(0).toUpperCase() + name.slice(1)
  
  return (
    <Link
      href={`/pokemon/${name.toLowerCase()}`}
      className="group flex h-full w-full flex-col items-center justify-between overflow-hidden border-2 shadow-lg transition-all duration-300 will-change-transform hover:-translate-y-2 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      style={{
        borderColor: color === "#f9fafd" ? "lightgray" : color,
        background: `linear-gradient(180deg, ${color} 0%, rgb(var(--background-rgb)) 60%)`,
      }}
      aria-label={`View details for ${pokemonName}, number ${id}, types: ${types.join(" and ")}`}
    >
      <div className="relative flex h-2/3 w-full flex-col items-center justify-center">
        <PokemonIcon
          className="absolute w-52 stroke-0 opacity-40 drop-shadow-lg transition-opacity duration-300 group-hover:opacity-60"
          style={{
            fill: color === "#f9fafd" ? "lightgray" : color,
          }}
          aria-hidden="true"
        />

        <p
          className="absolute left-4 top-3 font-mono text-4xl font-bold tracking-wider opacity-80"
          style={{
            color,
            textShadow: `-2px 1.5px 0.2rem rgba(0, 0, 0, 0.35)`,
          }}
          aria-label={`Pokemon number ${id}`}
        >
          {`#${id.toString().padStart(3, "0")}`}
        </p>

        <img
          src={imageUrl}
          alt={`${pokemonName} sprite`}
          height={200}
          width={200}
          decoding="async"
          className="drop-shadow-2xl transition-transform duration-300 group-hover:scale-110 xl:h-36 xl:w-36 2xl:h-44 2xl:w-44"
          style={{ contentVisibility: "auto" }}
        />
      </div>

      <div className="flex w-full flex-1 flex-col items-center justify-evenly bg-gradient-to-b from-transparent to-background/30 pb-4">
        <h3 className="text-2xl font-bold uppercase tracking-wide text-text drop-shadow-sm">
          {name}
        </h3>

        <div className="flex w-full flex-row items-center justify-center gap-3" role="list" aria-label="Pokemon types">
          {types.map((type) => {
            return (
              <div
                key={type}
                role="listitem"
                style={{
                  backgroundColor:
                    PokemonTypeColor[type.toLocaleLowerCase()].medium,
                }}
                className="px-3 py-1.5 shadow-md transition-transform duration-200 hover:scale-105"
                aria-label={`Type: ${type}`}
              >
                <p className="text-xs font-bold uppercase tracking-wider text-white drop-shadow">
                  {type}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </Link>
  )
}

export default PokemonCard
