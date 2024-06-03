import { useState, useCallback } from "react";
import classNames from "classnames";

import { ImageThumb } from "@/components/molecules/";

import styles from "./sample-gallery.module.css";

interface SampleGalleryGridProps {
  imgArray: string[];
}

function SampleGalleryGrid({ imgArray }: SampleGalleryGridProps) {

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleImageClick = useCallback((idx: number) => {
    setSelectedImage(idx);
  }, []);

  return (
    <div className={`h-[60dvh] w-full items-start overflow-y-scroll gap-2 p-2 isolate ${styles.grid_dynamic}`}>
      {imgArray.map((itemSrc, idx) => (
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
      ))}
    </div>
  );
}

export default SampleGalleryGrid;
