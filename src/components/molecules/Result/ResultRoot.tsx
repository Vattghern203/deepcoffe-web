import { ReactNode } from "react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"

interface ResultRootProps {

  children: ReactNode
  onCloseAction?: () => void
}

export default function ResultRoot( { children, onCloseAction }:ResultRootProps ) {

  return (

    <Dialog defaultOpen onOpenChange={onCloseAction}>
      <DialogContent className="max-w-4xl mx-auto p-8 bg-card border rounded-lg">
          <div className="flex justify-between items-start">
            {children}
          </div>

      <DialogClose asChild>
        <Button
          className="w-fit ml-auto"
          onClick={onCloseAction}
        >
          Ok
        </Button>
      </DialogClose>

      </DialogContent>
    </Dialog>
  )
}