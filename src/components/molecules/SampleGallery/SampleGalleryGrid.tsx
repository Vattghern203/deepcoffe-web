import { useState, useCallback, useMemo } from "react";
import classNames from "classnames";

import { ImageThumb } from "@/components/molecules/";

import styles from "./sample-gallery.module.css";
import { useImage } from "@/hooks/useImageContext";

import { URLobjToBlob } from "@/utils/URLobjToBlob";
import { convertBlobToBase64 } from "@/utils/convertBlobToBase64";

interface SampleGalleryGridProps {
  imgArray: string[];
}

function SampleGalleryGrid({ imgArray }: SampleGalleryGridProps) {
  const imageContext = useImage();
  const [selectedImage, setSelectedImage] = useState<number | null>(0);

  const handleImageClick = useCallback((idx: number) => {
    setSelectedImage(idx);

    URLobjToBlob(imgArray[idx])
      .then(blob => convertBlobToBase64(blob))
      .then(base64 => {
        imageContext.setSelectedImage({
          path: imgArray[idx],
          base64: base64
        });
      })
      .catch(error => {
        console.error("Error converting image:", error);
      });
  }, [imgArray, imageContext]);

  const renderedImages = useMemo(() => {

    return imgArray.map((itemSrc, idx) => (
      <ImageThumb
        key={idx}
        className={classNames('self-stretch hover:cursor-pointer', { outline: selectedImage === idx })}
        altText={`Sample ${idx}`}
        tabIndex={0}

        role="checkbox"
        aria-checked={selectedImage === idx}
        src={itemSrc}
        loading="lazy"
        onClick={() => handleImageClick(idx)}
        data-selected={selectedImage === idx}
      />
    ))
  }, [handleImageClick, imgArray, selectedImage])

  return (
    <div className={`h-[60dvh] w-full items-start overflow-y-scroll gap-2 p-2 isolate ${styles.grid_dynamic}`}>
      {renderedImages}
    </div>
  );
}

export default SampleGalleryGrid;
