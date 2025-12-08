import Link from "next/link"
import { BsGithub } from "react-icons/bs"
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
  return (
    <header 
      className="fixed inset-x-0 border-b border-text/5 top-0 z-50 h-14 w-full px-3 backdrop-blur-lg"
      role="banner"
    >
      <nav 
        className="mx-auto flex h-full w-full max-w-7xl flex-row items-center justify-between"
        aria-label="Main navigation"
      >
        <Link 
          href="/" 
          className="text-xl uppercase font-bold text-primary hover:opacity-80 transition-opacity"
          aria-label="PokéLog home"
        >
          PokéLog
        </Link>
        <ThemeToggle />
        <Link
          href="https://github.com/mmaaaazu/nextjs-pokedex"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View source code on GitHub (opens in new tab)"
          className="hover:opacity-80 transition-opacity"
        >
          <BsGithub className="text-text text-3xl" aria-hidden="true" />
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
