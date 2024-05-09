import { ReactNode } from "react"

import styles from "./random-grid.module.css"
import { Button } from "@/components/ui/button"

interface RandomGridProps {
  children: ReactNode
  uploadCount: number
  buttonLabel?: "Analisar Imagem" | "Abrir Galeria"
  cols?: number
}

export default function RandomGrid({ children, uploadCount, cols = 3, buttonLabel="Abrir Galeria" }: RandomGridProps) {

  uploadCount === 1 ? buttonLabel="Analisar Imagem" : buttonLabel="Abrir Galeria"

  return (

    <section className="flex flex-col justify-center items-center mb-10 max-h-[600px]">
      <div className={`
       max-h-[600px] relative overflow-clip after:w-full after:h-[50%] after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-0 after:bg-gradient-to-t after:gradient after:from-card after:to-transparent group ${styles.content_wrapper}`}>
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

        <Button className="absolute left-[50%] translate-x-[-50%] top-[80%] opacity-0 transition-all z-20">
          {buttonLabel}
        </Button>

      </div>
    </section>
  )
}