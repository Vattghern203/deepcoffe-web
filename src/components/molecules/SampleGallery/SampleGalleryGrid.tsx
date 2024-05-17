import { ImageThumb } from "@/components/molecules/"

interface SampleGalleryGridProps {
  imgArray: string[]
}

function SampleGalleryGrid({ imgArray }: SampleGalleryGridProps) {

  return (

    <div className={`h-80 w-full items-start overflow-y-scroll grid gap-2 grid-cols-4 py-2 isolate`}>
      {
        imgArray.map((itemSrc, idx) => (
          <ImageThumb
            className="self-stretch hover:scale-200 "
            role="checkbox"
            src={itemSrc}
            loading="lazy"
            onClick={() => console.log('OPA')}
            key={idx}
            altText={`Sample ${idx}`}

          //altText={`Sample Image ${idx}`}
          />
        ))
      }
    </div>
  )
}

export default SampleGalleryGrid