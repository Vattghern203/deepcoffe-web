import { useState, useEffect } from "react";
import { Loader } from "lucide-react";

import serverRepository from "@/common/repository/ServerRepository";

import { useImage } from "@/hooks/useImageContext";

import { RandomGrid } from "@/components/atoms";
import { Result, SampleGallery } from "@/components/molecules";
import { Dropzone, UploadFilesConfirmation } from "@/components/organisms";

import { SelectedImage } from "@/types/ImageTypes";

type IResultData = {
  label: string;
  value: number;
};

export default function UploadFiles() {
  const imageContext = useImage();

  const [fileStack, setFileStack] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [data, setData] = useState<IResultData[]>([]);
  const [isBeingDragged, setIsBeingDragged] = useState(false);

  let imageData: SelectedImage[] = [];

  const handleUpload = async () => {
    console.log("UPLOAD CLICKED");

    setIsLoading(true);

    try {
      const raw64 = await imageContext.selectedImage?.base64;

      if (raw64) {
        const image = raw64.replace(/^data:image\/\w+;base64,/, "");

        const res = await serverRepository.post<
          { cerscospora: number; healthy: number; leafRust: number; miner: number; phoma: number },
          { image: string }
        >("/classify", { image }, false, 120000);

        const typedRes = Object.entries(res.data).map(([key, value]) => ({
          label: key,
          value,
        }));

        setData(typedRes);
        renewUpload()

        console.log(typedRes);
      }
    } catch (error) {

      console.error(error);
    } finally {

      setIsLoading(false);
    }
  };

  const createNamedBlob = (file: File) => URL.createObjectURL(file);

  const convertBlobToBase64 = async (blob: Blob): Promise<string> => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);

    return new Promise<string>((resolve) => {
      reader.onloadend = () => resolve(reader.result as string);
    });
  };

  const renewUpload = () => {
    setData([]);
  };

  const createImageDataByUpload = async () => {

    if (fileStack.length !== 0) {
      imageData = await Promise.all(
        fileStack.map(async (file) => ({
          path: createNamedBlob(file),
          base64: await convertBlobToBase64(file),
          file,
        }))
      );
      console.log(imageData);
    } else {
      imageData = [];
    }
  };

  useEffect(() => {
    createImageDataByUpload();
  }, [fileStack]);

  const namedBlobs = fileStack.map((file) => createNamedBlob(file));

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
          imgArray={namedBlobs}
          maxImageShow={9}
          singleImageAction={() => handleUpload()}
          multImageAction={() => setShowGallery(true)}
        />
      )}

      <SampleGallery.Root isOpen={showGallery} onOpenChangeFn={() => setShowGallery(false)} setIsOpen={setShowGallery}>
        <SampleGallery.Header galleryTitle="Uploads" galleryDescription="Selecione uma das imagens para a análise" />
        <SampleGallery.Grid imgArray={namedBlobs} />
        <SampleGallery.Footer closeBtnText="Fechar" onConfirmAction={() => handleUpload()} />
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
