import { ElementType } from "react"


interface IconPrimitiveProps {

  icon: ElementType
}

export default function IconPrimitive( { icon: Icon }:IconPrimitiveProps) {

  return (

    <Icon />
  )
}