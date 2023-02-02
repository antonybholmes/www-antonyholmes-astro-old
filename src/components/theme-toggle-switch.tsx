import { useEffect, useState } from "preact/hooks"
import ToggleSwitch from "./link/toggle-switch"

export default function ThemeToggleSwitch() {
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

  return (
    <ToggleSwitch
      onClick={onClick}
      className="fill-slate-500 dark:fill-slate-100"
      ariaLabel={`Toggle ${theme === "dark" ? "light" : "dark"} mode`}
      isSelected={theme === "dark"}
    >
      {theme === "dark" ? "Use light theme" : "Use dark theme"}
    </ToggleSwitch>
  )
}
