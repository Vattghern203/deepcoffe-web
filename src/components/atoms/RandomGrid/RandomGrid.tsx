import { ReactNode } from "react"

import styles from "./random-grid.module.css"

interface RandomGridProps {
  children: ReactNode
  cols?: number
}

export default function RandomGrid( { children, cols=3 }:RandomGridProps ) {

  return (

    <section
      className={`${styles.random_grid} gap-1 p-1 bg-zinc-950 dark:bg-white rounded-sm`}
      style={
        {
          columnCount: cols
        }
      }
    >
      {children}
    </section>
  )
}