import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Loading... | Pokélog",
}

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Pokéball Loading Animation */}
        <div className="relative h-24 w-24">
          <div className="absolute inset-0 animate-spin rounded-full border-8 border-primary border-t-accent" />
          <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
        </div>
        <p className="text-lg text-primary">Loading Pokémon...</p>
      </div>
    </div>
  )
}
