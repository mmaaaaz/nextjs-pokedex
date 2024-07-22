"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { FC, useEffect, useState } from "react"
import Icon from "./Icon"

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <div className="flex w-max select-none items-center justify-center rounded-full border-[0.5px] border-secondary p-1">
      <ThemeButton
        label="Dark Mode"
        active={mounted && theme === "dark"}
        onClick={() => setTheme("dark")}
      >
        <Icon name="moon" />
      </ThemeButton>
      <ThemeButton
        label="Light Mode"
        active={mounted && theme === "light"}
        onClick={() => setTheme("light")}
      >
        <Icon name="sun" />
      </ThemeButton>
      <ThemeButton
        label="System Theme"
        active={mounted && theme === "system"}
        onClick={() => setTheme("system")}
      >
        <Icon name="system" />
      </ThemeButton>
    </div>
  )
}

export default ThemeToggle

const ThemeButton: FC<{
  children: React.ReactNode
  onClick: () => void
  active: boolean
  label: string
}> = ({ children, onClick, active, label }) => {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={active}
      aria-label={label}
      onClick={onClick}
      className={cn(
        "relative flex h-7 w-7 items-center justify-center rounded-full",
        {
          ["hover:opacity-80 dark:hover:text-primary dark:hover:opacity-100"]:
            !active,
        },
      )}
    >
      {children}

      {active && (
        <motion.span
          layoutId="bubble"
          className="absolute inset-0 z-10 rounded-full bg-white mix-blend-difference transition-colors dark:bg-primary"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </button>
  )
}
