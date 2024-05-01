import { ReactNode } from "react"


interface DropzoneHeadingProps {

  children?: ReactNode
}

export default function DropzoneHeading( { children }:DropzoneHeadingProps ) {

  return (

    <span className="h-20 flex items-center gap-2 text-2xl font-semibold">
      {children}
    </span>
  )
}