import { Pokemon } from "@/types/New"
import PokemonTypeColor from "@/utils/colors"
import Link from "next/link"
import { FC } from "react"
import { PokemonIcon } from "./Icons"

const PokemonCard: FC<{
  pokemon: Pokemon
}> = ({ pokemon: { name, imageUrl, types, id, color } }) => {
  return (
    <Link
      href={`pokemon/${name.toLowerCase()}`}
      className="flex h-full w-full flex-col items-center justify-between border will-change-transform hover:-translate-y-1 hover:scale-101"
      style={{
        borderColor: color == "#f9fafd" ? "lightgray" : color,
        background: `linear-gradient(0deg, rgb(var(--background)), ${color})`,
      }}
    >
      <div className="relative flex h-2/3 w-full flex-col items-center justify-center ">
        <PokemonIcon
          className="absolute w-52 stroke-0 opacity-60 drop-shadow-sm"
          style={{
            fill: color == "#f9fafd" ? "lightgray" : color,
          }}
        />

        <p
          className={`absolute top-2 left-8 text-4xl font-bold tracking-widest`}
          style={{
            color,
            textShadow: `-2px 1.5px 0.1rem rgba(0, 0, 0, 0.4)`,
          }}
        >
          {`#${id.toString().padStart(3, "0")}`}
        </p>

        <img
          src={imageUrl}
          alt={name}
          height={200}
          width={200}
          decoding="async"
          className="drop-shadow xl:h-36 xl:w-36 2xl:h-44 2xl:w-44"
          style={{ contentVisibility: "auto" }}
        />
      </div>

      <div className="flex w-full flex-1 flex-col items-center justify-evenly ">
        <h3 className="text-2xl font-bold uppercase tracking-wide text-text">
          {name}
        </h3>

        <div className="flex w-full flex-row items-center justify-center gap-4">
          {types.map((type) => {
            return (
              <div
                key={type}
                style={{
                  backgroundColor:
                    PokemonTypeColor[type.toLocaleLowerCase()].medium,
                }}
                className="px-2 py-1"
              >
                <p className="text-xs uppercase font-semibold tracking-wide text-white">
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
