import { createContext, useState, useEffect } from "react";
import { ImageProviderProps, SelectedImage, ImageContextType } from "@/types/ImageTypes";
import { convertBlobToBase64 } from "@/utils/convertToBase64";
import { createBlob } from "@/utils/createBlob";

const ImageProviderContext = createContext<ImageContextType | undefined>(undefined);

function ImageProvider({ children, storageKey = "selected-image", imagePlaceholderPath = "" }: ImageProviderProps) {
  const [selectedImage, setSelectedImage] = useState<SelectedImage>(() => {
    const savedImage = localStorage.getItem(storageKey);

    if (savedImage) {
      const parsedImage = JSON.parse(savedImage);
      const blob = createBlob(parsedImage.blob) as unknown as Blob;
      const base64 = convertBlobToBase64(blob) as unknown as string; // Ensure base64 is a string
      return {
        path: parsedImage.path,
        blob,
        base64,
      };
    }

    return {
      path: imagePlaceholderPath,
      blob: undefined,
      base64: undefined,
    };
  });

  useEffect(() => {
    if (selectedImage) {
      localStorage.setItem(storageKey, JSON.stringify(selectedImage));
    }
  }, [selectedImage, storageKey]);

  return (
    <ImageProviderContext.Provider value={{ selectedImage, setSelectedImage }}>
      {children}
    </ImageProviderContext.Provider>
  );
}

export { ImageProviderContext, ImageProvider };
