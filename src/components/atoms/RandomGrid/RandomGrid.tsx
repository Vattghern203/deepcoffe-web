import { Suspense, useMemo } from "react";

import { Button } from "@/components/ui/button";

import styles from "./random-grid.module.css";
import { ImageSkeleton } from "@/layouts/GenericSkeletons";

type GalleryBtnVariantType = {
  buttonLabel: "Analisar Imagem" | "Abrir Galeria";
  onClickFn: () => void;
};

interface RandomGridProps {
  uploadCount: number;
  isLoading: boolean;
  imgArray: string[]
  maxImageShow: number
  cols?: number;
  singleImageAction: () => void | Promise<void>;
  multImageAction: () => void | Promise<void>;
}

export default function RandomGrid({
  uploadCount,
  isLoading,
  imgArray,
  maxImageShow = 9,
  cols = 3,
  singleImageAction,
  multImageAction
}: RandomGridProps) {

  const btnVariantCheck = uploadCount === 1 ? 1 : 0;

  const btnVariants: GalleryBtnVariantType[] = [
    {
      buttonLabel: "Abrir Galeria",
      onClickFn: multImageAction,
    },
    {
      buttonLabel: "Analisar Imagem",
      onClickFn: singleImageAction
    },
  ];

  const memoizedImages = useMemo(() => {
    return imgArray.map((elem, idx) => idx < maxImageShow && (
      <Suspense key={`randomgrid/${idx}`} fallback={<ImageSkeleton />}>
        <img
          key={`randomgrid/${idx}`}
          loading="lazy"
          title={elem}
          className="rounded-md w-full block object-cover"
          src={elem}
          alt={`image for analyses number: ${idx}`}
          aria-description={`image for analyses number: ${idx}`}
        />
      </Suspense>
    ));
  }, [imgArray, maxImageShow]);

  console.log('Random Grid Rendered', new Date())

  return (
    <>
      <section className="flex flex-col justify-center items-center mb-10 max-h-[600px] overflow-hidden">
        <div className={`
          max-h-[600px] relative overflow-clip after:w-full after:h-[50%] after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-0 after:bg-gradient-to-t after:gradient after:from-card after:to-transparent ${styles.content_wrapper}`}>
          <h2 className="text-2xl font-bold mb-2 text-start self-start align-middle flex items-end">
            Uploaded Images <span className="font-medium text-base ml-1 leading-relaxed">({uploadCount})</span>
          </h2>

          <div className="">
            <section
              className={`${styles.random_grid} w-full max-w-3xl overflow-y-auto mx-auto gap-1 rounded-lg bg-card`}
              style={{ columnCount: cols }}
            >
              {memoizedImages}
            </section>
          </div>

          {!isLoading && (
            <Button
              className="absolute left-[50%] translate-x-[-50%] top-[80%] opacity-0 ease-in-out transition-all duration-300 z-20"
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