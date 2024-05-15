import { ReactNode, SetStateAction, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

import styles from "./random-grid.module.css";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import { DialogHeader, DialogClose } from "@/components/ui/dialog";
import { ImageThumb } from "@/components/molecules";

type GalleryBtnVariantType = {
  buttonLabel: "Analisar Imagem" | "Abrir Galeria";
  onClickFn: () => void;
};

interface RandomGridProps {
  children: ReactNode;
  uploadCount: number;
  isLoading: boolean;
  cols?: number;
  onClickAction: () => void | Promise<void>;
}

export default function RandomGrid({ children, uploadCount, cols = 3, isLoading, onClickAction }: RandomGridProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);

  const btnVariantCheck = uploadCount === 1 ? 1 : 0;

  const handleOpenGallery = () => {
    setGalleryOpen(true); // Open the gallery dialog
  };

  const handleCloseGallery = () => {
    setGalleryOpen(false); // Close the gallery dialog
  };

  console.log('GALLERY STATE', galleryOpen)

  const btnVariants: GalleryBtnVariantType[] = [
    {
      buttonLabel: "Abrir Galeria",
      onClickFn: handleOpenGallery,
    },
    {
      buttonLabel: "Analisar Imagem",
      onClickFn: onClickAction,
    },
  ];

  return (
    <>
      <section className="flex flex-col justify-center items-center mb-10 max-h-[600px]">
        <div className={`
          max-h-[600px] relative overflow-clip after:w-full after:h-[50%] after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-0 after:bg-gradient-to-t after:gradient after:from-card after:to-transparent group ${styles.content_wrapper}`}>
          <h2 className="text-2xl font-bold mb-2 text-start self-start align-middle flex items-end">
            Uploaded Images <span className="font-medium text-base ml-1">({uploadCount})</span>
          </h2>

          <div className="">
            <section
              className={`${styles.random_grid} py-6 px-4 w-full max-w-3xl overflow-y-auto mx-auto gap-1 rounded-md bg-card border`}
              style={{ columnCount: cols }}
            >
              {children}
            </section>
          </div>

          {!isLoading && (
            <Button
              className="absolute left-[50%] translate-x-[-50%] top-[80%] opacity-0 transition-all z-20"
              size={"lg"}
              onClick={btnVariants[btnVariantCheck].onClickFn}
            >
              {btnVariants[btnVariantCheck].buttonLabel}
            </Button>
          )}
        </div>
      </section>

    </>
  );
}

interface ModalGalleryProps {

  imgArray: string[]
  isOpen: boolean
  setIsOpen: SetStateAction<boolean>
  onOpenChangeFn: () => void
  galleryTitle: string
  galleryDescription: string
}

function ModalGallery({ imgArray, isOpen, onOpenChangeFn, galleryTitle, galleryDescription }: ModalGalleryProps) {

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChangeFn}>
      <DialogContent className="max-w-[60%] overflow-clip">
        <DialogHeader>
          <DialogTitle>
            {galleryTitle}
          </DialogTitle>

          <DialogDescription>
            {galleryDescription}
          </DialogDescription>

        </DialogHeader>

        <div className={`h-80 w-full items-start justify-start gap-2 overflow-y-scroll flex flex-wrap`}>
          {
            imgArray.map((itemSrc, idx) => (
              <ImageThumb
                src={itemSrc}
                altText={`Sample Image ${idx}`}
              />
            ))
          }
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button className="w-full">Fechar</Button>
          </DialogClose>
        </DialogFooter>

      </DialogContent>
    </Dialog>
  )
}
