import { singleTypeColor } from "@/types"
import { Pokemon } from "@/types/New"
import Link from "next/link"
import { FC } from "react"
import { PokemonIcon } from "./Icons"

const PokemonCard: FC<{
  pokemon: Pokemon
  bgColors: singleTypeColor[]
}> = ({ pokemon: { name, imageUrl, types, id }, bgColors }) => {
  return (
    <Link
      href={`pokemon/${name.toLowerCase()}`}
      className="hover:shadow-gray-300 flex h-full w-full flex-col items-center justify-between rounded-2xl shadow-lg shadow-secondary/10 transition-all duration-500 ease-in-out will-change-transform hover:-translate-y-3 hover:scale-105"
    >
      <div
        className="relative flex h-2/3 w-full flex-col items-center justify-center overflow-hidden rounded-t-2xl"
        style={{
          background: `linear-gradient(0deg, #fafafa, ${bgColors[0].light})`,
        }}
      >
        <PokemonIcon className="absolute w-52 fill-primary stroke-0 opacity-25" />

        <p
          className="absolute top-2 left-8 text-4xl font-bold tracking-widest drop-shadow-2xl"
          style={{
            color: bgColors[0].medium,
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
        <h3 className="text-2xl font-bold capitalize tracking-wide text-secondary">
          {name}
        </h3>

        <div className="flex w-full flex-row items-center justify-center gap-4">
          {types.map((type, index) => {
            return (
              <div
                key={type}
                style={{
                  backgroundColor: bgColors[index].medium,
                }}
                className="rounded-md px-2 py-1"
              >
                <p className="text-xs uppercase font-semibold tracking-wide text-primary">
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
