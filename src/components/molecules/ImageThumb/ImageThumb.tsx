import process from "process"

interface ImageThumb {
  src: string,
  altText: string,
  aspect?: "16/9" | "9/16" | "3/4",
}


function ImageThumb( { src, altText, aspect }:ImageThumb ) {

  return (

    <img
      src={src || process.env.IMAGE_PLACEHOLDER }
      alt={altText}
      className="image-thumb mx-auto rounded-md object-cover object-center w-64"
      style={
        {
          aspectRatio: aspect || '10/14'
        }
      }
    />
  )
}

export default ImageThumb