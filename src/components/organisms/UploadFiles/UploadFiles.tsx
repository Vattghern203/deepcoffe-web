/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mjOlVnIqPys
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { DragEvent, useState } from "react";

import { FileIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

import './upload-files.module.css'

export default function Component() {

    const [fileStack, setFileStack] = useState<File[]>([])
    //const [blobs, setBlobs] = useState<Blob[]>([])

    const dropHandler = (event: DragEvent) => {

      console.log("File(s) dropped");

      event?.preventDefault()

      if (event.dataTransfer && event.dataTransfer.items) {

        [...event.dataTransfer.items].forEach((item: DataTransferItem, i) => {

          if (item.kind === 'file') {

            const file = item.getAsFile()

            if (file) {

              setFileStack([...fileStack, file])

              console.log(fileStack)

              console.log(`... file[${i}].name = ${file?.name}`)
            }
          }
        })
      }

      else {

        [...event.dataTransfer.files].forEach((file, i) => {

          console.log(`... file[${i}].name = ${file.name}`)
        })
      }
    }

    const dragOverHandler = (event: DragEvent) => event.preventDefault()

    const createBlob = (file: File) => {

      const blobHref = URL.createObjectURL(file)


      const blobImg = document.createElement('img')

      blobImg.src = blobHref

      document.body.appendChild(blobImg)
    }

    fileStack.forEach((item) => createBlob(item))


    return (

        <section
            className="flex items-center justify-center w-full min-h-[600px]"
        >
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
                <label className="text-center text-sm text-gray-500 dark:text-gray-400" htmlFor="file-form">
                    or
                    <Button className="ml-2 -z-10" size="sm" onClick={() => document.getElementById('file-form')?.click()}>Choose a file to upload

                    </Button>

                    <input className="hidden" type="file" name="" id="file-form" />
                </label>
            </label>
        </section>
    )
}
