interface ImageThumb {
  src: string,
  altText: string,
  aspect?: "16/9" | "9/16" | "3/4",
}

export default function ImageThumb( { src, altText, aspect }:ImageThumb ) {

  return (

    <img
      src={src || 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/bf9c8049-abb5-4717-a460-88b1ab06f343/width=450/pattern_16.jpeg' }
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