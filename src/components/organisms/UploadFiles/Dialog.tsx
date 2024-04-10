import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogContent, DialogTrigger } from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"

import { ImageThumb } from "@/components/molecules/"

interface props {
  src: string,
  onCancelAction: () => void,
  onConfirmAction: () => void
}

export default function UploadFilesConfirmation({ src, onCancelAction, onConfirmAction }:props) {

  return (

    <Dialog defaultOpen>
      <DialogTrigger asChild />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Analyze this Image</DialogTitle>

          <DialogDescription>The image cannot be changed untile the process is finished</DialogDescription>
        </DialogHeader>

        <ImageThumb src={src} altText="" />


        <section className="inline-flex justify-center w-full gap-4">
          <Button variant={"outline"} onClick={onCancelAction}>Cancel</Button>
          <Button onClick={onConfirmAction}>Ok</Button>
        </section>
      </DialogContent>
    </Dialog>
  )
}