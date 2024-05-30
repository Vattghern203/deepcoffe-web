import { ImageThumb } from "@/components/molecules/"

import { Button } from "@/components/ui/button"

/* import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel" */

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"


interface DialogProps {
  src: string[],
  uploadCount: number
  onCancelAction: () => void,
  onConfirmAction: (() => void) | (() => Promise<void>)
}

export default function UploadFilesConfirmation({ src, onCancelAction, onConfirmAction }: DialogProps) {

  return (

    <Dialog defaultOpen>
      <DialogContent className="w-[90dvw]">
        <DialogHeader>
          <DialogTitle>Você tem certeza que quer analisar esta imagem?</DialogTitle>

          <DialogDescription>
            A imagem não pode ser alterada até o fim da análise.
          </DialogDescription>
        </DialogHeader>

          <ImageThumb src={src[0]} altText="Image to be analysed." title="sample image" />

        <DialogFooter className="sm:gap-1">
          <DialogClose asChild>
            <Button variant={"outline"} onClick={onCancelAction} className="w-full min-w-fit flex-wrap">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onClick={onConfirmAction} className="w-full min-w-fit flex-wrap">
              Ok
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}