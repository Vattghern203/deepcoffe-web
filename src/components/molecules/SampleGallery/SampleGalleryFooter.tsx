import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { DialogClose } from "@/components/ui/dialog";

interface SampleGalleryFooterProps {

  closeBtnText: string
  hasSelectedImage?: boolean
}

function SampleGalleryFooter( { closeBtnText }:SampleGalleryFooterProps ) {

  return (

    <DialogFooter className="flex flex-wrap px-2">
      <DialogClose asChild className="flex-1 min-w-fit flex-nowrap">
        <Button variant={"outline"}>{closeBtnText}</Button>

      </DialogClose>

      <DialogClose asChild className="flex-1 min-w-fit flex-nowrap">
        <Button disabled variant={"default"}>Analisar</Button>
      </DialogClose>
    </DialogFooter>
  )
}

export default SampleGalleryFooter