import { ReactNode } from "react"

interface NavBarRoot {

  children: ReactNode
}

export function NavRoot({ children }: NavBarRoot) {

  return (
    <nav className="flex-1">
      <ul className="flex justify-center gap-6">
        {children}
      </ul>
    </nav>
  )
}
