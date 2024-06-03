import { createContext, useState, useEffect } from "react";

import { ImageProviderProps, ImageContextType, ImageState } from "@/types/ImageTypes"

const ImageProviderContext = createContext<ImageContextType | undefined>(undefined)

function ImageProvider( { children }:ImageProviderProps ) {

  const [selectedImage, setSelectedImage] = useState<ImageState>(() => {

    const savedImage = localStorage.getItem('selectedImage');

    return savedImage ? JSON.parse(savedImage) : { path: 'public/sample.jpg' }
  })


  useEffect(() => {

    localStorage.setItem('imageState', JSON.stringify(selectedImage))
  }, [selectedImage])

  return (

    <ImageProviderContext.Provider value={{ selectedImage, setSelectedImage}}>
      {children}
    </ImageProviderContext.Provider>
  )
}

export { ImageProviderContext, ImageProvider }