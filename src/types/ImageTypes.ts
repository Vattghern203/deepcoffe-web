import { Dispatch, ReactNode, SetStateAction } from "react"

type SelectedImage = {
  path: string
  blob?: Blob | MediaSource
  base64?: string
}

interface ImageProviderProps {
  children: ReactNode
  imagePlaceholderPath?: string
  storageKey?: string
}

type ImageProviderState = {
  selectedImage: string | undefined
  setSelectedImage: Dispatch<SetStateAction<SelectedImage>>
}

type ImageContextType = {
  selectedImage: SelectedImage
  setSelectedImage: Dispatch<SetStateAction<SelectedImage>>
}

export type { SelectedImage, ImageProviderProps, ImageProviderState, ImageContextType }