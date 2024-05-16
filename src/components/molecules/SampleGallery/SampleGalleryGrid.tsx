import { ImageThumb } from "@/components/molecules/"

interface SampleGalleryGridProps {
  imgArray: string[]
}

function SampleGalleryGrid({ imgArray }: SampleGalleryGridProps) {

  return (

    <div className={`h-80 w-full items-start overflow-y-scroll grid gap-2 grid-cols-4 py-2`}>
      {
        imgArray.map((itemSrc, idx) => (
          <ImageThumb
            role="checkbox"
            loading="lazy"
            onClick={() => console.log('OPA')}
            className="self-stretch hover:scale-100 isolate"
            key={idx}
            altText={`Sample ${idx}`}
            src={itemSrc}

          //altText={`Sample Image ${idx}`}
          />
        ))
      }
    </div>
  )
}

export default SampleGalleryGrid