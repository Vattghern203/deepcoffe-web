import { useContext } from "react"
import { ImageProviderContext } from "@/context/selected-image-provider"

const useImage = () => {

  const context = useContext(ImageProviderContext)

  if (!context) {

    throw new Error('useImageContext must be used within an ImageProvider')
  }

  return context
}

export { useImage }