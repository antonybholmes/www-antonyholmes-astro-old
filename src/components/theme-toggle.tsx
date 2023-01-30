import { useEffect, useState } from "preact/hooks"
import MoonIcon from "../icons/moon"
import SunIcon from "../icons/sun"

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  function onClick() {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("light")
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
      document.documentElement.classList.add("light")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  if (!isMounted) {
    return <></>
  }

  return (
    <button onClick={onClick} className="fill-slate-500 dark:fill-slate-100">
      {theme === "dark" ? (
        <MoonIcon className="w-3" />
      ) : (
        <SunIcon className="w-4" />
      )}
    </button>
  )
}
