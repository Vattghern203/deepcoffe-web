import { ReactNode } from "react"

interface ResultRootProps {

  children: ReactNode
}

export default function ResultRoot( { children }:ResultRootProps ) {

  return (

    <article className="max-w-4xl mx-auto p-8 bg-white border rounded-lg">
      <div className="flex justify-between items-start">
        {children}
      </div>
    </article>
  )
}