import { useContext } from "react"

import { ThemeProviderContext } from "@/context/theme-provider"

const useTheme = () => {
  // Returns the actual name
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}

export { useTheme }