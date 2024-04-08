import { ReactNode } from "react"

interface HeaderProps {
  children: ReactNode
}

export default function Header( { children }:HeaderProps ) {

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <section className="px-4 md:px-6">
          {children}
      </section>
    </header>
  )
}
