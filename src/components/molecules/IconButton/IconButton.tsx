import { ElementType, HtmlHTMLAttributes } from "react"

interface IconButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {

  icon: ElementType
  iconLabel: string
  onClickAction?: () => void
}

export default function IconButton( { icon: Icon, iconLabel, onClickAction }:IconButtonProps) {

  return (

    <button className="w-fit inline-flex rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" type="button" onClick={onClickAction}>
      <Icon />
      <span className="sr-only capitalize">{iconLabel}</span>
    </button>
  )
}