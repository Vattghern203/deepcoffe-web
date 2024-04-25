import { ReactNode } from "react"

import styles from "./random-grid.module.css"

interface RandomGridProps {
  children: ReactNode
  cols?: number
}

export default function RandomGrid( { children, cols=3 }:RandomGridProps ) {

  return (

    <section className="flex flex-col justify-center items-center mb-10">
      <div className="max-h-[600px] overflow-clip">
          <h2 className="text-2xl font-bold mb-2 text-start self-start">Uploaded Images</h2>

          <section
            className={`${styles.random_grid} w-full max-w-3xl overflow-y-auto mx-auto gap-1 p-1 rounded-md bg-card border after:w-full after:h-[20%] after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-[20%] after:bg-gradient-to-t after:gradient after:from-card after:to-transparent`}
            style={
              {
                columnCount: cols
              }
            }
          >
            {children}
          </section>
      </div>

    </section>
  )
}