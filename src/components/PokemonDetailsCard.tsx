import { Pokemon2 } from "@/types/Poke2"
import Link from "next/link"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"
import Balancer from "react-wrap-balancer"
import PokemonImage from "./PokemonImage"
import PokemonStats from "./PokemonStats"

const PokemonDetailsCard = ({ pokemon }: { pokemon: Pokemon2 }) => {
  return (
    <div className="flex h-full items-center justify-center w-full">
      <div className="w-full max-w-7xl border">
        <div className="flex font-semibold h-10">
          <Link
            href={"/"}
            className="border-t-0 border-l-0 flex items-center justify-center border"
          >
            <MdOutlineKeyboardArrowLeft className="w-6 h-6 lg:w-8 lg:h-8 font-light opacity-100 transition-colors duration-150 hover:-translate-x-0.5" />
          </Link>

          <div className="border-b text-primary font-bold text-lg w-full flex items-center justify-center">
            {pokemon.name}
          </div>

          {/* id */}
          <div className="border-b border-l px-2 flex text-nowrap items-center justify-center">
            {`# ${pokemon.id.toString().padStart(3, "0")}`}
          </div>
        </div>

        <div className="w-full text-center text-xs lg:text-sm max-w-4xl mx-auto text-primary/80 py-4 border-b">
          <Balancer>{pokemon.description}</Balancer>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <PokemonImage pokemon={pokemon} />
          <PokemonStats pokemon={pokemon} />
        </div>
      </div>
    </div>
  )
}

export default PokemonDetailsCard
