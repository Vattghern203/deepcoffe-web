import { LabelHTMLAttributes, ReactNode, useState } from "react"


interface DropzoneProps extends LabelHTMLAttributes<HTMLLabelElement> {

  children: ReactNode

}

export default function DropzoneRoot({ children }:DropzoneProps) {

  const [isBeingDragged, setIsBeingDragged] = useState(false)

  return (

    <label
      role="button"
      onDragLeave={() => setIsBeingDragged(false)}
      onDragEnd={() => setIsBeingDragged(false)}
      data-dragged={isBeingDragged}
      className="w-full max-w-3xl p-4 border-2 border-dashed flex flex-col items-center justify-center gap-2 border-secondary-foreground/50 focus-visible:outline cursor-pointer transition-all ease-in-out hover:bg-secondary
          data-[dragged=true]:bg-secondary
          rounded-l has-[#file-form:focus-visible]:outline fade-in-25"
    >
      {children}
    </label>
  )
}