import { Button } from "@/components/ui/button"
import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogContent, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { ImageThumb } from "@/components/molecules/"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

//import { useToggle } from "@/hooks/useToggle"

interface DialogProps {
  src: string[],
  uploadCount: number
  onCancelAction: () => void,
  onConfirmAction: (() => void ) | (() => Promise<void>)
}

export default function UploadFilesConfirmation({ src, uploadCount, onCancelAction, onConfirmAction }: DialogProps) {

  //const [isOpen, setIsOpen] = useToggle(false)

  return (

    <Dialog defaultOpen>
      <DialogContent className="w-full">
        <DialogHeader>
          <DialogTitle>Confirm this image to be analysed?</DialogTitle>

          <DialogDescription>
            The image cannot be changed until the process is finished.
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
                <ImageThumb src={element} key={index} altText="Image to be analysed." />
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