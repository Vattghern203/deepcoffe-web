import { ImageThumb } from "@/components/molecules/"
import { useState } from "react"

import styles from "./sample-gallery.module.css"

interface SampleGalleryGridProps {
  imgArray: string[]
}

function SampleGalleryGrid({ imgArray }: SampleGalleryGridProps) {

  const [selectedImage, setSelectedImage] = useState<number>()

  return (

    <div className={` h-[60dvh] w-full items-start overflow-y-scroll gap-2 p-2 isolate ${styles.grid_dynamic}`}>
      {
        imgArray.map((itemSrc, idx) => (
          <ImageThumb
            key={idx}
            className={`self-stretch ${selectedImage === idx ? 'outline' : ''}`}
            altText={`Sample ${idx}`}
            tabIndex={0}
            role="checkbox"
            src={itemSrc}
            loading="lazy"
            onClick={() => setSelectedImage(idx)}

          //altText={`Sample Image ${idx}`}
          />
        ))
      }
    </div>
  )
}

export default SampleGalleryGrid