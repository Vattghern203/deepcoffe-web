import { ReactNode } from "react"

import "./random-grid.modle.css"

interface RandomGridProps {
  children: ReactNode
  cols?: number
}

export default function RandomGrid( { children, cols=3 }:RandomGridProps ) {

  return (

    <section
      className="gap-4 bg-zinc-950 p-4 rounded-md"
      style={
        {
          columnCount: cols
        }
      }
      role=""
    >
      {children}
    </section>
  )
}