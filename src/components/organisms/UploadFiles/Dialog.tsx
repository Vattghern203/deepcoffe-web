import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogContent, DialogTrigger } from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"

import { ImageThumb } from "@/components/molecules/"

interface props {
  src: string
}

export default function UploadFilesConfirmation({ src }:props) {

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
          <Button variant={"outline"}>Cancel</Button>
          <Button>Ok</Button>
        </section>
      </DialogContent>
    </Dialog>
  )
}