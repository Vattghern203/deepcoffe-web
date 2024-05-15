import { ImageThumb } from "@/components/molecules"
import { Button } from "@/components/ui/button"
import { DialogHeader, DialogFooter } from "@/components/ui/dialog"
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"
import { SetStateAction } from "react"


interface ModalGalleryProps {

  imgArray: string[]
  isOpen: boolean
  setIsOpen: SetStateAction<boolean>
  onOpenChangeFn: () => void
  galleryTitle: string
  galleryDescription: string
}

function ModalGallery({ imgArray, isOpen, onOpenChangeFn, galleryTitle, galleryDescription }: ModalGalleryProps) {

  return (

    <Dialog open={isOpen} onOpenChange={onOpenChangeFn}>
      <DialogContent className="max-w-[60%] overflow-clip">
        <DialogHeader>
          <DialogTitle>
            {galleryTitle}
          </DialogTitle>

          <DialogDescription>
            {galleryDescription}
          </DialogDescription>

        </DialogHeader>

        <div className={`h-80 w-full items-start justify-start gap-2 overflow-y-scroll flex flex-wrap`}>
          {
            imgArray.map((itemSrc, idx) => (
              <ImageThumb
                src={itemSrc}
                altText={`Sample Image ${idx}`}
              />
            ))
          }
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button className="w-full">
              Fechar
            </Button>
          </DialogClose>
        </DialogFooter>

      </DialogContent>
    </Dialog>
  )
}

export default ModalGallery