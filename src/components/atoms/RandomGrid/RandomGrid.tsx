import { ReactNode } from "react";

import { Button } from "@/components/ui/button";

import styles from "./random-grid.module.css";

type GalleryBtnVariantType = {
  buttonLabel: "Analisar Imagem" | "Abrir Galeria";
  onClickFn: () => void;
};

interface RandomGridProps {
  children: ReactNode;
  uploadCount: number;
  isLoading: boolean;
  cols?: number;
  singleImageAction: () => void | Promise<void>;
  multImageAction: () => void | Promise<void>;
}

export default function RandomGrid({ children, uploadCount, cols = 3, isLoading, singleImageAction, multImageAction }: RandomGridProps) {


  const btnVariantCheck = uploadCount === 1 ? 1 : 0;

  const btnVariants: GalleryBtnVariantType[] = [
    {
      buttonLabel: "Abrir Galeria",
      onClickFn: singleImageAction,
    },
    {
      buttonLabel: "Analisar Imagem",
      onClickFn: multImageAction,
    },
  ];

  console.log('Random Grid Rendered', new Date())

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
