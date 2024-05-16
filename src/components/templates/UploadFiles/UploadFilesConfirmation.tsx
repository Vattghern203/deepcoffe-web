import { ImageThumb } from "@/components/molecules/"

import { Button } from "@/components/ui/button"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"

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

export default function UploadFilesConfirmation({ src, uploadCount, onCancelAction, onConfirmAction }: DialogProps) {

  return (

    <Dialog defaultOpen >
      <DialogContent className="w-[90vw]">
        <DialogHeader>
          <DialogTitle>Você tem certeza que quer analisar esta image?</DialogTitle>

          <DialogDescription>
            A imagem não pode ser alterada até o fim da análise.
          </DialogDescription>
        </DialogHeader>

        {uploadCount == 1

          ?

          <ImageThumb src={src[0]} altText="Image to be analysed." />

          :

          <Carousel>
            <CarouselContent>
              {src.map((element, index) => (
                <CarouselItem>

                  <ImageThumb
                    src={element}
                    key={index}
                    altText={`Image to be analysed ${index}.`}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

        }


        <DialogFooter className="sm:gap-1">
          <DialogClose asChild>
            <Button variant={"outline"} onClick={onCancelAction}>Cancel</Button>
          </DialogClose>
          <DialogClose asChild >
            <Button onClick={onConfirmAction}>
              Ok
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}