import { ImgHTMLAttributes } from "react"


interface ResultImageProps extends ImgHTMLAttributes<HTMLImageElement> {

  imgSrc: string
  imgAlt?: string
  aspect?: string
}

export default function ResultImage( { imgSrc, imgAlt, aspect="250/300", ...rest }:ResultImageProps ) {

  return (

    <img
      alt={imgAlt || "Sample Image"}
      className="rounded-lg"
      height="300"
      src={imgSrc || "https://cafeutam.com.br/_temas/t_site/imagens/emughczt-LY_UTAM_Banner_CafeAlemBebida_26ago2021.jpg"}
      style={{
        aspectRatio: aspect,
        objectFit: "cover",
        objectPosition: "center"
      }}
      width="250"
      {...rest}
    />
  )
}