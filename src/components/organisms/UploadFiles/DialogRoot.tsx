import { Dialog } from "@/components/ui/dialog"

import { ReactNode } from "react"

interface DialogRootProps {
  children: ReactNode
  openOption?: "defaultOpen" | "modal" | "open"
}

export default function DialogRoot( { children }:DialogRootProps ) {

  return (

    <Dialog>
      {children}
    </Dialog>
  )
}