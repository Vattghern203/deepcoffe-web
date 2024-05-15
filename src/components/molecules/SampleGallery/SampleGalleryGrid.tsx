import { ImageThumb } from "@/components/molecules/"

interface SampleGalleryGridProps {
  imgArray: string[]
}

function SampleGalleryGrid( {imgArray}:SampleGalleryGridProps ) {

  return (

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
  )
}

export default SampleGalleryGrid