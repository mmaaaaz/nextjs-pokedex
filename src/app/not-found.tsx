import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "404 - Page Not Found | Pokélog",
  description: "The page you're looking for doesn't exist",
}

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="mb-8 text-9xl">🔍</div>
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <h2 className="mb-6 text-2xl font-semibold text-text">
          Pokémon Not Found
        </h2>
        <p className="mb-8 text-text/70">
          This Pokémon seems to have fled! Let's get you back to the Pokélog.
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-background transition-all hover:bg-accent hover:scale-105 active:scale-95"
        >
          Return to Pokélog
        </Link>
      </div>
    </div>
  )
}
