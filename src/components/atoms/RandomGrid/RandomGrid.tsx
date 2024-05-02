import { ReactNode } from "react"

import styles from "./random-grid.module.css"

interface RandomGridProps {
  children: ReactNode
  uploadCount: number
  cols?: number
}

export default function RandomGrid( { children, uploadCount, cols=3 }:RandomGridProps ) {

  return (

    <section className="flex flex-col justify-center items-center mb-10 max-h-[600px]">
      <div className="max-h-[600px] relative overflow-clip after:w-full after:h-[50%] after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-0 after:bg-gradient-to-t after:gradient after:from-card after:to-transparent">
          <h2 className="text-2xl font-bold mb-2 text-start self-start align-middle flex items-end">Uploaded Images
            <span className="font-medium text-base ml-1">{`(${uploadCount})`}</span>
          </h2>
          
          <div className="">
            <section
              className={`${styles.random_grid} py-6 px-4 w-full max-w-3xl overflow-y-auto mx-auto gap-1 rounded-md bg-card border `}
              style={
                {
                  columnCount: cols
                }
              }
            >
              {children}
            </section>
          </div>
      </div>

    </section>
  )
}