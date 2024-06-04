import { Suspense, useState } from "react";
import { Loader } from "lucide-react";

import { useImage } from "@/hooks/useImageContext";

import UploadFilesConfirmation from "./UploadFilesConfirmation"

import { RandomGrid } from "@/components/atoms";
import { Result, SampleGallery } from "@/components/molecules";
import { Dropzone } from "@/components/organisms";
import { ImageSkeleton } from "@/layouts/GenericSkeletons";

export default function UploadFiles() {
  type IResultData = {
    label: string;
    value: number;
  };

  const [fileStack, setFileStack] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [data, setData] = useState<IResultData[]>([]);
  const [isBeingDragged, setIsBeingDragged] = useState(false);

  const context = useImage()

  console.log(context.selectedImage)

  const sampleImage = fileStack[fileStack.length - 1] || null;

  console.log(sampleImage)

  const handleUpload = async () => {
    renewUpload();
    setIsLoading(true);

    setTimeout(() => {
      mockLoading(fileStack[0])
        .then((result) => {
          setData(result);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 4000);
  };

  const createNamedBlob = (file: File) => URL.createObjectURL(file);

  const convertBlobToBase64 = async (blob: Blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);

    return new Promise<string>((resolve) => {
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
    });
  };

  const namedBlobs = fileStack.map((item) => createNamedBlob(item));

  const mockLoading = async (image: File): Promise<IResultData[]> => {
    const base64 = await convertBlobToBase64(image);

    console.log(base64)

    return new Promise<IResultData[]>((resolve) => {
      resolve([
        { label: "doenca 01", value: 10 },
        { label: "doenca 02", value: 90 },
        { label: "doenca 03", value: 35.55 },
      ]);
    });
  };

  const renewUpload = () => {
    setData([]);
  };

  return (
    <>
      <section className="flex items-center justify-center min-h-[600px] w-full">
        {!isLoading ? (
          <Dropzone
            fileStack={fileStack}
            setFileStack={setFileStack}
            isLoading={isLoading}
            isBeingDragged={isBeingDragged}
            setIsBeingDragged={setIsBeingDragged}
          />
        ) : (
          <section className="flex items-center gap-2 w-full max-w-3xl p-4 border-2 rounded-md mx-auto fade-in-10">
            <Loader className="animate-spin transition-transform will-change-transform" />
            <article role="alert">
              <h2 className="text-2xl font-bold">Análise em andamento</h2>
              <p className="text-xl">Isso pode demorar um pouco, sinta-se livre para navegar em outras páginas do site.</p>
            </article>
          </section>
        )}
      </section>

      {namedBlobs.length !== 0 && (
        <RandomGrid
          uploadCount={namedBlobs.length}
          isLoading={isLoading}
          singleImageAction={() => setShowGallery(true)}
          multImageAction={() => handleUpload()}
        >
          {namedBlobs.map((elem, idx) => (
            idx < 9 && (
              <Suspense key={elem} fallback={<ImageSkeleton />}>
                <img
                  loading="lazy"
                  title={elem}
                  className="rounded-md w-full block object-cover"
                  src={elem}
                  alt="Sample Image"
                />
              </Suspense>
            )
          ))}
        </RandomGrid>
      )}

      <SampleGallery.Root isOpen={showGallery} onOpenChangeFn={() => setShowGallery(false)} setIsOpen={setShowGallery}>
        <SampleGallery.Header galleryTitle="Uploads" galleryDescription="Selecione uma das imagens para a análise" />
        <SampleGallery.Grid imgArray={namedBlobs} />
        <SampleGallery.Footer closeBtnText="Fechar" />
      </SampleGallery.Root>

      {fileStack.length !== 0 && (
        <UploadFilesConfirmation
          uploadCount={namedBlobs.length}
          src={namedBlobs}
          onCancelAction={() => setFileStack([])}
          onConfirmAction={() => handleUpload()}
        />
      )}

      {data.length !== 0 && (
        <Result.Root onCloseAction={() => setFileStack([])}>
          <Result.ImageSection>
            <Result.Image imgSrc={namedBlobs[0]} />
          </Result.ImageSection>
          <Result.DataSection>
            <Result.List resultData={data} />
          </Result.DataSection>
        </Result.Root>
      )}
    </>
  );
}
