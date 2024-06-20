import { ImgHTMLAttributes, Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

interface ResultImageProps extends ImgHTMLAttributes<HTMLImageElement> {

  imgSrc?: string
  imgAlt?: string
  aspect?: string
}

export default function ResultImage( { imgSrc, imgAlt, aspect="250/300"}:ResultImageProps ) {

  console.log('this image src', imgSrc?.toString())

  return (

    <Suspense
      fallback={
        <Skeleton className="h-300 w-250" style={{
          aspectRatio: aspect
        }}>

        </Skeleton>
      }
    >
      <img
        alt={imgAlt || "Sample Image"}
        className="rounded-lg"
        height="300"
        src={imgSrc?.toString()}
        style={{
          aspectRatio: aspect,
          objectFit: "cover",
          objectPosition: "center"
        }}
        width="250"

      />
    </Suspense>
  )
}