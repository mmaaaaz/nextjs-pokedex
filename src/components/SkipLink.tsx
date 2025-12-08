"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function SkipLink() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleFocus = () => setIsVisible(true)
    const handleBlur = () => setIsVisible(false)

    const skipLink = document.getElementById("skip-link")
    if (skipLink) {
      skipLink.addEventListener("focus", handleFocus)
      skipLink.addEventListener("blur", handleBlur)
    }

    return () => {
      if (skipLink) {
        skipLink.removeEventListener("focus", handleFocus)
        skipLink.removeEventListener("blur", handleBlur)
      }
    }
  }, [])

  return (
    <Link
      id="skip-link"
      href="#main-content"
      className={`fixed left-4 top-4 z-50 rounded bg-primary px-4 py-2 text-background transition-transform ${
        isVisible ? "translate-y-0" : "-translate-y-20"
      }`}
      aria-label="Skip to main content"
    >
      Skip to main content
    </Link>
  )
}
