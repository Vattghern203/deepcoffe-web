import { Dialog, DialogContent } from "@/components/ui/dialog";

import { ImageThumb } from "@/components/molecules"

import { ReactNode } from "react";

interface SampleGalleryProps {

  imgArray: string[]
}

function SampleGalleryRoot( { imgArray }:SampleGalleryProps ) {

  return (

    <Dialog>
      <div className="grid grid-flow-row">
        {imgArray.map((imgSrc, idx) => (

          <img key={idx} src={imgSrc}/>
        ))}
      </div>
    </Dialog>
  )
}

interface UploadGalleryProps {

  children: ReactNode
  imgArray: string[]
}

function UploadGallery( { children, imgArray }:UploadGalleryProps ) {

  return (



    <Dialog>

      {children}

      <DialogContent>
        {
          imgArray.map((item, idx) => (

            <ImageThumb
              key={idx}
              src={``}
              altText={`Sample Image ${idx}`}
            />
          ))
        }
      </DialogContent>

    </Dialog>
  )
}

export default SampleGalleryRoot