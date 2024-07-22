const PokemonImage = ({
  pokemon: { id, imageUrl, name, color },
}: {
  pokemon: {
    id: number
    name: string
    imageUrl: string
    color: string
  }
}) => {
  return (
    <div className="relative flex py-8 lg:py-0 h-full w-full items-center justify-center overflow-hidden border-r">
      <div
        className="absolute top-8 flex font-mono uppercase select-none flex-col items-center justify-center text-4xl font-bold tracking-widest opacity-100 lg:top-32 lg:text-7xl"
        style={{
          color,
        }}
      >
        <h1 className="">{name}</h1>
      </div>

      <div className="relative flex h-2/4 w-2/4 items-center justify-center lg:mt-36 lg:h-full lg:w-80">
        {/* The next/image component is not used here because this project is hosted by vercel and they only allow 1000 image optimizations per month on the free tier. */}
        <img
          key={id}
          src={imageUrl}
          alt={name}
          width={475}
          height={475}
          decoding="async"
          loading="eager"
          className="w-full animate-poke-bounce object-contain"
        />
      </div>
    </div>
  )
}

export default PokemonImage
