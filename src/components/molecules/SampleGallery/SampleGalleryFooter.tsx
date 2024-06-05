import { Button } from "@/components/ui/button";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { useImage } from "@/hooks/useImageContext";

interface SampleGalleryFooterProps {

  closeBtnText: string
  onConfirmAction: () => void
}

function SampleGalleryFooter( { closeBtnText, onConfirmAction }:SampleGalleryFooterProps ) {

  const imageContext = useImage()

  const hasSelectedImage = imageContext.selectedImage ? true : false

  return (

    <DialogFooter className="flex flex-wrap px-2">
      <DialogClose asChild className="flex-1 min-w-fit flex-nowrap">
        <Button variant={"outline"}>{closeBtnText}</Button>
      </DialogClose>

      <DialogClose asChild className="flex-1 min-w-fit flex-nowrap">
        <Button
          disabled={!hasSelectedImage}
          onClick={onConfirmAction}
          variant={"default"}>
            Analisar
        </Button>
      </DialogClose>
    </DialogFooter>
  )
}

export default SampleGalleryFooter