import { Dispatch, ReactNode, SetStateAction } from "react"

interface ImageProviderProps {
  children: ReactNode
}

type ImageState = {
  path: string
  newPath: string
}

type ImageContextType = {
  selectedImage: ImageState
  setSelectedImage: Dispatch<SetStateAction<ImageState>>
}

export type { ImageProviderProps, ImageState, ImageContextType }