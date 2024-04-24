/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mjOlVnIqPys
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { ChangeEvent, DragEvent, lazy, Suspense, useRef, useState } from "react";

import UploadFilesConfirmation from "./Dialog"
import { Result } from "@/components/molecules/";

import { FileIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

import serverRepository from "@/common/repository/ServerRepository";

import PopUpAlert from "@/components/molecules/Alert/Alert"
import RandomGrid from "@/components/atoms/RandomGrid/RandomGrid"

export default function UploadFiles() {
  // Create a state to handle a drag and drop event

  type IResultData = {

    label: string
    value: number
  }

  const [fileStack, setFileStack] = useState<File[]>([]);

  const [isLoading, setIsLoading] = useState(false)

  const [data, setData] = useState<IResultData[]>([])

  const [isBeingDragged, setIsBeingDragged] = useState(false)

  //const fileToBeAnalised = {}

  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = () => {
    setIsLoading(true);

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
  };

  const dropHandler = (event: DragEvent) => {
    console.log("File(s) dropped");

    event?.preventDefault();

    if (event.dataTransfer && event.dataTransfer.items) {
      [...event.dataTransfer.items].forEach((item: DataTransferItem, i) => {
        if (item.kind === "file") {
          const file = item.getAsFile();

          if (file && file.type.startsWith("image/")) {
            console.log(file.type);

            setFileStack((prevStack) => [...prevStack, file]);

            console.log("fileStack", fileStack);

            console.log(`... file[${i}].name = ${file?.name}`);
          }
        }
      });
    } else {
      [...event.dataTransfer.files].forEach((file, i) => {
        console.log(`... file[${i}].name = ${file.name}`);
      });
    }
  };

  const dragOverHandler = (event: DragEvent) => {
    event.preventDefault();

    setIsBeingDragged(true)
  }


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    selectedFile ? setFileStack((prev) => [...prev, selectedFile]) : null;
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

  const fetchAPI = async (image: string) => {
    return await serverRepository.post("classify", { image });
  };

  const handleImage = async (img: File) => {
    const base64 = await convertBlobToBase64(img);

    fileStack.pop();

    const res = await fetchAPI(base64.replace("data:", "").replace(/^.+,/, ""));
    console.log(res);
  };

  const namedBlobs = fileStack.map((item) => createNamedBlob(item));
  //fileStack.forEach((item) => convertBlobToBase64(item))

  console.log(namedBlobs);
  console.log(fileStack);

  const mockLoading = async (image: File) => {

    const base64 = await convertBlobToBase64(image)

    console.log('Converted')

    return new Promise<IResultData[]>((resolve, reject) => {

      setTimeout(() => {

        setIsLoading(() => false)
      }, 4000)

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

  console.log('Renderizou')

  return (
    <>
      <section className="flex items-center justify-center min-h-[600px] w-full">
        <label
          id="drop-zone"
          role="button"
          onDrop={(event) => dropHandler(event)}
          onDragOver={(event) => dragOverHandler(event)}
          onDragLeave={() => setIsBeingDragged(false)}
          onDragEnd={() => setIsBeingDragged(false)}
          data-dragged={isBeingDragged}
          className="w-full max-w-3xl p-4 border-2 border-dashed flex flex-col items-center justify-center gap-2 border-secondary-foreground focus-visible:outline dark:border-secondary cursor-pointer transition-all ease-in-out
          data-[dragged=true]:bg-secondary
          rounded-l has-[#file-form:focus-visible]:outline"
          htmlFor="file-form"
        >
          <span className="h-20 flex items-center gap-2 text-2xl font-semibold">
            <FileIcon className="w-6 h-6" />
            <span className="font-bold">Arraste e solte seus arquivos aqui</span>
          </span>
          <label
            className="text-center text-sm text-secondary-foreground"
            htmlFor="file-form"
          >
            ou
            <Button
              className="ml-2 -z-10"
              size="sm"
              onClick={() => document.getElementById("file-form")?.click()}
            >
              Escolha um arquivo
            </Button>
            <input
              id="file-form"
              className="sr-only"
              type="file"
              ref={imageInputRef}
              onChange={handleChange}
              accept="image/*"
              required
            />
          </label>
        </label>
      </section>

      {
        namedBlobs.length !== 0 && (
          <RandomGrid>
            {namedBlobs.map((elem) => (
              <img
                loading="lazy"
                className="rounded-md"
                src={elem}
                alt="Sample Image"
                key={elem}
              />
            ))}
          </RandomGrid>
        )
      }

      {namedBlobs.length !== 0 && (
        <UploadFilesConfirmation
          src={namedBlobs[0]}
          onCancelAction={() => setFileStack([])}
          onConfirmAction={() => handleUpload(mockLoading(fileStack[0]))}
        />
      )}

      {data.length != 0 &&
        <Result.Root>
          <Result.ImageSection>
            <Result.Image />
          </Result.ImageSection>

          <Result.DataSection>
            <Result.List
              resultData={data}
            ></Result.List>
          </Result.DataSection>
        </Result.Root>
      }

      <PopUpAlert
        isLoading={isLoading}
        alertTitle="Analisando Amostra"
        alertDescription="Isso pode levar um tempo. Sinta-se livre para navegar em outra páginas do site. Você será avisado assim que o processo terminar."
      />
    </>
  );
}
