import { createContext, useState, useEffect } from "react";
import { ImageProviderProps, SelectedImage, ImageProviderState } from "@/types/ImageTypes";

const initalState: ImageProviderState = {
  selectedImage: undefined,
  setSelectedImage: () => null
}

const ImageProviderContext = createContext<ImageProviderState>(initalState);

function ImageProvider({ children, storageKey = "selected-image", imagePlaceholderPath = "", ...props }: ImageProviderProps) {
  const [selectedImage, setSelectedImage] = useState<SelectedImage>(() => {
    const savedImage = localStorage.getItem(storageKey);

    if (savedImage) {
      const parsedImage = JSON.parse(savedImage) as SelectedImage;
      return {
        path: parsedImage.path,
        file: parsedImage.file
      };
    }

    return {
      path: imagePlaceholderPath,
    };
  });

  useEffect(() => {
    if (selectedImage) {
      localStorage.setItem(storageKey, JSON.stringify(selectedImage));
    }
  }, [selectedImage, storageKey]);

  return (
    <ImageProviderContext.Provider {...props} value={{ selectedImage, setSelectedImage }}>
      {children}
    </ImageProviderContext.Provider>
  );
}

export { ImageProviderContext, ImageProvider };
