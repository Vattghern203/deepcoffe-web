import { ReactNode } from "react"

interface ResultDataSectionProps {

  resultHeading?: string
  resultDate: string
  resultSubHeading?: string
  children: ReactNode
}

export default function ResultDataSection( { resultHeading, resultDate, resultSubHeading, children }:ResultDataSectionProps ) {

  return (
    <section className="w-2/3 pl-8">
      <h2 className="text-2xl font-bold mb-2 text-start">
        { resultHeading || "These are the results"}
      </h2>
      <p className="text-sm mb-4 text-start">
        {resultDate || "01/04/2024"}
      </p>
      <h3 className="self-start font-semibold mb-2 text-start">
        { resultSubHeading || "Result percentages"}
      </h3>
      {children}
    </section>
  )
}