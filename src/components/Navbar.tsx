import Link from "next/link"
import { BsGithub } from "react-icons/bs"
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 border-b border-text/5 top-0 z-50 h-14 w-full px-3 backdrop-blur-lg">
      <div className="mx-auto flex h-full w-full max-w-7xl flex-row items-center justify-between">
        <Link href="/" className="text-xl uppercase font-bold text-primary">
          PokéLog
        </Link>
        <ThemeToggle />
        <Link
          href="https://github.com/mmaaaazu/nextjs-pokedex"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className="hover:text-primary-700 text-text text-3xl" />
        </Link>
      </div>
    </header>
  )
}

export default Navbar
