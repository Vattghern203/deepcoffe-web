import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";

interface SampleGalleryFooterProps {

  closeBtnText: string
}

function SampleGalleryFooter( { closeBtnText }:SampleGalleryFooterProps ) {

  return (

    <DialogFooter>
      <DialogClose asChild>
        <Button className="w-full">{closeBtnText}</Button>
      </DialogClose>
    </DialogFooter>
  )
}

export default SampleGalleryFooter