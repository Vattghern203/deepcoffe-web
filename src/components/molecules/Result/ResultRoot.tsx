import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ReactNode } from "react"

interface ResultRootProps {

  children: ReactNode
}

export default function ResultRoot( { children }:ResultRootProps ) {

  return (

    <Dialog defaultOpen>
      <DialogContent className="max-w-4xl mx-auto p-8 bg-card border rounded-lg">
          <div className="flex justify-between items-start">
            {children}
          </div>
      </DialogContent>
    </Dialog>
  )
}