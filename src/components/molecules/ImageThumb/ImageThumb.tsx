import process from "process"
import { ImgHTMLAttributes } from "react"

interface ImageThumb extends ImgHTMLAttributes<HTMLImageElement> {
  src: string,
  altText: string,
  aspect?: "16/9" | "9/16" | "3/4",
}


function ImageThumb( { src, altText, aspect }:ImageThumb ) {

  return (

    <img
      src={src || process.env.IMAGE_PLACEHOLDER }
      alt={altText}
      className="image-thumb block mx-auto rounded-md object-cover object-center w-full h-auto"
      style={
        {
          aspectRatio: aspect || '10/14'
        }
      }
    />
  )
}

export default ImageThumb