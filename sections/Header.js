import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import Link from "next/link"
import Button from "../components/Button"

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigations = [
    { index: 1, label: "Home", href: "/" },
    { index: 2, label: "Projects", href: "/projects" },
    { index: 3, label: "Posts", href: "/posts" },
    { index: 4, label: "Tweets", href: "/tweets" },
    { index: 5, label: "Photos", href: "/photos" },
  ]

  const themeChanger = () => {
    if (!mounted) return null
    const currTheme = theme === "system" ? systemTheme : theme

    if (currTheme === "dark") {
      return (
        <Button className="rounded-full" onClick={() => setTheme("light")}>
          {/* sun icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </Button>
      )
    } else {
      return (
        <Button className="rounded-full" onClick={() => setTheme("dark")}>
          {/* moon icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </Button>
      )
    }
  }

  return (
    <header className="h-16 flex items-center justify-around md:justify-between">
      <ul className="flex gap-6">
        {navigations.map((nav) => {
          return (
            <Link key={nav.index} href={nav.href}>
              <a className="text-light_text dark:text-dark_text hover:text-light_main dark:hover:text-dark_main md:text-xl md:font-semibold">
                {nav.label}
              </a>
            </Link>
          )
        })}
      </ul>
      {themeChanger()}
    </header>
  )
}

export default Header
