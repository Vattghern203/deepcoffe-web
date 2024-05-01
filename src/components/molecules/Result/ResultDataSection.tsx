import { ReactNode } from "react"

interface ResultDataSectionProps {

  resultHeading?: string
  resultDate?: string
  resultSubHeading?: string
  children: ReactNode
}

export default function ResultDataSection( { resultHeading, resultDate, resultSubHeading, children }:ResultDataSectionProps ) {

  resultDate = Object.freeze(resultDate || new Date(Date.now()).toLocaleString('pt-br'))

  return (
    <section className="w-2/3 pl-8">
      <h2 className="text-2xl font-bold mb-2 text-start">
        { resultHeading || "Resultados da Análise"}
      </h2>
      <p className="text-sm mb-4 text-start">
        {resultDate}
      </p>
      <h3 className="self-start font-semibold mb-2 text-start">
        { resultSubHeading || "Níveis de Certeza"}
      </h3>
      {children}
    </section>
  )
}