import { DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface SampleGalleryHeaderProps {

  galleryTitle: string
  galleryDescription: string
}

function SampleGalleryHeader({ galleryTitle, galleryDescription }: SampleGalleryHeaderProps) {

  return (

    <DialogHeader>
      <DialogTitle>
        {galleryTitle}
      </DialogTitle>

      <DialogDescription>
        {galleryDescription}
      </DialogDescription>

    </DialogHeader>
  )
}

export default SampleGalleryHeader