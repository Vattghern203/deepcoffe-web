import { ReactNode } from "react"

interface ResultImageSectionProps {

  children: ReactNode
}

export default function ResultImageSection( { children }:ResultImageSectionProps ) {

  return (

    <section className="w-1/3">
      {children}
    </section>
  )
}