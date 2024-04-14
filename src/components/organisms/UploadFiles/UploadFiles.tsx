/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mjOlVnIqPys
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { ChangeEvent, DragEvent, useState, useRef } from "react";

import UploadFilesConfirmation from "./Dialog";
import Result from "@/components/molecules/Result/Result";

import { FileIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

import './upload-files.module.css'

import serverRepository from "@/common/repository/ServerRepository";

import RandomGrid from "@/components/atoms/RandomGrid/RandomGrid";

export default function Component() {

  // Create a state to handle a drag and drop event

  const [fileStack, setFileStack] = useState<File[]>([]);

  const imageInputRef = useRef<HTMLInputElement>(null)

  const dropHandler = (event: DragEvent) => {
    console.log("File(s) dropped");

    event?.preventDefault();

    if (event.dataTransfer && event.dataTransfer.items) {
      [...event.dataTransfer.items].forEach((item: DataTransferItem, i) => {
        if (item.kind === "file") {
          const file = item.getAsFile();

          if (file && file.type.startsWith('image/')) {

            console.log(file.type)

            setFileStack((prevStack) => [...prevStack, file]);

            console.log('fileStack', fileStack);

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

  // Handles the dragover, blocking the usual behavior

  const dragOverHandler = (event: DragEvent) => event.preventDefault();

  const files: string[] = []

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

    const selectedFile = event.target.files?.[0]

    selectedFile ? setFileStack((prev) => [...prev, selectedFile]) : null
  }

  /* const createBlob = (file: File ) => {
    const reader = new FileReader();

    reader.readAsDataURL(file); // Read the file as data URL

    reader.onloadend = () => {
      const base64Data = reader.result?.slice(reader.result?.indexOf(',') + 1) || '';

      const contentType = reader.result?.split(',')[0]?.replace('data:', '') || '';

      const blob = new Blob([base64Data], { type: contentType });

      // Use the created blob for further processing (e.g., upload, preview)
      console.log('Created Blob:', blob);
    };
  }; */

  // Create a blob url for this image and append to DOM

  /* const createBlob = (file: File) => {
     const blobHref = URL.createObjectURL(file);

     const blobImg = document.createElement("img");

     blobImg.src = blobHref;

     document.body.appendChild(blobImg);
   };
 */
   const createNamedBlob = (file: File) => {
    const namedBlob = URL.createObjectURL(file);

    console.log(namedBlob);

    return namedBlob;
  }

  const convertBlobToBase64 = async (blob: Blob) => {
    const reader = new FileReader();

    reader.readAsDataURL(blob);

    return await new Promise<string>((resolve) => {
      reader.onloadend = () => {

        console.log(reader.result)

        resolve(reader.result as unknown as string);
      };
    });
  };

  const fetchAPI = async (image: string) => {
    return await serverRepository.post('classify', { image });
  }

  const handleImage = async (img: File) => {
    const base64 = await convertBlobToBase64(img);

    fileStack.pop()

    const res = await fetchAPI(base64.replace('data:', '').replace(/^.+,/, ''))
    console.log(res)
  }

  const namedBlobs = fileStack.map((item) => createNamedBlob(item));
  //fileStack.forEach((item) => convertBlobToBase64(item))

  console.log(namedBlobs);
  console.log(fileStack);

  return (
    <>
      <section className="flex items-center justify-center w-full min-h-[600px]">
        <label
          id="drop-zone"
          onDrop={(event) => dropHandler(event)}
          onDragOver={(event) => dragOverHandler(event)}
          className="w-full max-w-3xl p-4 border-2 border-dashed rounded-l flex flex-col items-center justify-center gap-2 border-gray-300 dark:border-gray-800 cursor-pointer"
          htmlFor="file-form"
        >
          <span className="h-20 flex items-center gap-2 text-2xl font-semibold">
            <FileIcon className="w-6 h-6" />
            <span className="font-bold">Drag and drop your files here</span>
          </span>
          <label
            className="text-center text-sm text-gray-500 dark:text-gray-400"
            htmlFor="file-form"
          >
            or
            <Button
              className="ml-2 -z-10"
              size="sm"
              onClick={() => document.getElementById("file-form")?.click()}
            >
              Choose a file to upload
            </Button>

              <input
                id="file-form"
                className="hidden"
                type="file"
                ref={imageInputRef}
                onChange={handleChange}
                accept="image/*"
              />

          </label>
        </label>
      </section>

      <img src={files[0] || 'vite.svg'} alt="" />

      {<RandomGrid>
        {namedBlobs.map((elem) => (
          <img loading="lazy" className="rounded-md" src={elem} alt="Sample Image" key={elem} />
        ))}
      </RandomGrid>}

      {namedBlobs.length !== 0 && (
        <UploadFilesConfirmation
          src={namedBlobs[0]}
          onCancelAction={() => setFileStack([])}
          onConfirmAction={() => handleImage(fileStack[0])}
        />
      )}

      <Result
      />
    </>
  )
}