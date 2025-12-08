"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="mb-4 text-6xl font-bold text-primary">Oops!</h1>
        <h2 className="mb-6 text-2xl font-semibold text-text">
          Something went wrong
        </h2>
        <p className="mb-8 text-text/70">
          {error.message || "An unexpected error occurred"}
        </p>
        <button
          onClick={reset}
          className="rounded-lg bg-primary px-6 py-3 font-semibold text-background transition-all hover:bg-accent hover:scale-105 active:scale-95"
          type="button"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
