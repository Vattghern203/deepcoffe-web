import { Button } from "@/components/ui/button"
import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogContent, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { ImageThumb } from "@/components/molecules/"

//import { useToggle } from "@/hooks/useToggle"

interface DialogProps {
  src: string,
  onCancelAction: () => void,
  onConfirmAction: () => void
}

export default function UploadFilesConfirmation({ src, onCancelAction, onConfirmAction }: DialogProps) {

  //const [isOpen, setIsOpen] = useToggle(false)

  return (

    <Dialog defaultOpen>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm this image to be analysed?</DialogTitle>

          <DialogDescription>The image cannot be changed until the process is finished.</DialogDescription>
        </DialogHeader>

        <ImageThumb src={src} altText="Image to be analysed." />

        <DialogFooter className="sm:gap-2">
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