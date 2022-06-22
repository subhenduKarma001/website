import Link from "next/link"

const Header = () => {
  const navigations = [
    { index: 1, label: "Home", href: "/" },
    { index: 2, label: "Projects", href: "/projects" },
    { index: 3, label: "Posts", href: "/posts" },
    { index: 4, label: "Tweets", href: "/tweets" },
    { index: 5, label: "Photos", href: "/photos" },
  ]

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
    </header>
  )
}

export default Header
