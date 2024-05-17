/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mjOlVnIqPys
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Suspense, useState } from "react";
import { Loader } from "lucide-react";

import UploadFilesConfirmation from "./UploadFilesConfirmation"
import { Result } from "@/components/molecules/";

import RandomGrid from "@/components/atoms/RandomGrid/RandomGrid"
import { Dropzone } from "@/components/organisms/";
import { SampleGallery } from "@/components/molecules/SampleGallery";
import { ImageSkeleton } from "@/layouts/GenericSkeletons";

export default function UploadFiles() {
  // Create a state to handle a drag and drop event

  type IResultData = {

    label: string
    value: number
  }

  //const [selectedImage, setSelectedImage] = useState([])

  const [fileStack, setFileStack] = useState<File[]>([]);

  const [isLoading, setIsLoading] = useState(false)

  const [showGallery, setShowGallery] = useState(false)

  const [data, setData] = useState<IResultData[]>([])

  const [isBeingDragged, setIsBeingDragged] = useState(false)

  const sampleImage = fileStack[fileStack.length - 1] ? fileStack[fileStack.length - 1] : null

  console.log(sampleImage)

  const handleUpload = async () => {

    renewUpload()

    setIsLoading(true);

    console.log('starting ....')

    setTimeout(() => {

      console.log('Mocking loading...')
      mockLoading(fileStack[0])
        .then((result) => {
          setData(result); // Access data object here: { d1: 10, d2: 20, d3: 70 }
        })
        .catch((error) => {
          console.error(error); // Handle potential errors
        })
        .finally(() => {
          setIsLoading(false);
        });

    }, 4000)

  };

  const createNamedBlob = (file: File) => {
    const namedBlob = URL.createObjectURL(file);

    console.log(namedBlob);

    return namedBlob;
  };

  const convertBlobToBase64 = async (blob: Blob) => {
    const reader = new FileReader();

    reader.readAsDataURL(blob);

    return await new Promise<string>((resolve) => {
      reader.onloadend = () => {
        console.log(reader.result);

        resolve(reader.result as unknown as string);
      };
    });
  };

  /* const fetchAPI = async (image: string) => {
    return await serverRepository.post("classify", { image });
  };

  const handleImage = async (img: File) => {
    const base64 = await convertBlobToBase64(img);

    const res = await fetchAPI(base64.replace("data:", "").replace(/^.+,/, ""));
    console.log(res);
  }; */

  const namedBlobs = fileStack.map((item) => createNamedBlob(item));
  //fileStack.forEach((item) => convertBlobToBase64(item))

  console.log(namedBlobs);
  console.log(fileStack);

  const mockLoading = async (image: File) => {

    const base64 = await convertBlobToBase64(image)

    console.log('Converted', base64)

    return new Promise<IResultData[]>((resolve, reject) => {

      resolve([
        {
          label: "doenca 01",
          value: 10,
        },

        {
          label: "doenca 02",
          value: 90,
        },

        {
          label: "doenca 03",
          value: 35.55,
        }
      ])

      console.log('Finished')

      reject('Failed as fuck')

    })
  }

  const renewUpload = () => {

    setData([])

    console.log('Novo Upload')
  }

  console.log('Renderizou')

  return (
    <>
      <section className="flex items-center justify-center min-h-[600px] w-full">

        {!isLoading ?
          (
            <Dropzone
              fileStack={fileStack}
              setFileStack={setFileStack}
              isLoading={isLoading}
              isBeingDragged={isBeingDragged}
              setIsBeingDragged={setIsBeingDragged}
            />

          )

          :

          (
            <section className="flex items-center gap-2 w-full max-w-3xl p-4 border-2 rounded-md mx-auto fade-in-10">
              <Loader className="animate-spin transition-transform will-change-transform" />

              <article role="alert">
                <h2 className="text-2xl font-bold">Análise em andamento</h2>

                <p className="text-xl">Isso pode demorar um pouco, sinta-se livre para navegar em outras páginas do site.</p>
              </article>

            </section>
          )
        }
      </section>

      {
        namedBlobs.length !== 0 && (
          <RandomGrid
            uploadCount={namedBlobs.length}
            isLoading={isLoading}
            singleImageAction={() => setShowGallery(true)}
            multImageAction={() => handleUpload()}
          >
            {namedBlobs.map((elem, idx) => (

              idx < 9 && (

                <Suspense fallback={<ImageSkeleton />}>
                  <img
                    loading="lazy"
                    title={elem}
                    className="rounded-md w-full block object-cover"
                    src={elem}
                    alt="Sample Image"
                    key={elem}
                  />
                </Suspense>
              )

            ))}
          </RandomGrid>
        )
      }

      <SampleGallery.Root isOpen={showGallery} onOpenChangeFn={() => setShowGallery(false)} setIsOpen={setShowGallery}>
        <SampleGallery.Header
          galleryTitle="Uploads"
          galleryDescription="Selecione uma das imagens para a análise"
        />
        <SampleGallery.Grid
          imgArray={namedBlobs}
        />
        <SampleGallery.Footer
          closeBtnText="Fechar"
        />
      </SampleGallery.Root>


      {fileStack.length !== 0 && (
        <UploadFilesConfirmation
          uploadCount={namedBlobs.length}
          src={namedBlobs}
          onCancelAction={() => setFileStack([])}
          onConfirmAction={() => handleUpload()}
        />
      )}

      {data.length != 0 &&
        <Result.Root onCloseAction={() => setFileStack([])}>
          <Result.ImageSection>
            <Result.Image imgSrc={namedBlobs[0]} />
          </Result.ImageSection>

          <Result.DataSection>
            <Result.List
              resultData={data}
            />
          </Result.DataSection>
        </Result.Root>
      }
    </>
  );
}
