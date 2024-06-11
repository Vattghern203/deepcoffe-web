import { ChangeEvent, Dispatch, DragEvent, LabelHTMLAttributes, SetStateAction, startTransition, useRef, useState } from 'react'

import FileIcon from '@/components/atoms/Icons/FileIcon'

import { Button } from '@/components/ui/button'

import { TemporaryPopUp } from '@/components/atoms'

interface DropzoneProps extends LabelHTMLAttributes<HTMLLabelElement> {
  fileStack: File[];
  setFileStack: Dispatch<SetStateAction<File[]>>
  isLoading: boolean
  isBeingDragged: boolean
  setIsBeingDragged: Dispatch<SetStateAction<boolean>>
}

type UploadError = {

  fileName: string,
  fileType: string
  error: string,
}

function Dropzone({
  fileStack,
  setFileStack,
  isLoading,
  isBeingDragged,
  setIsBeingDragged,
}: DropzoneProps) {

  const [uploadError, setUploadError] = useState<UploadError>()

  const imageInputRef = useRef<HTMLInputElement>(null)

  const acceptedTypesHandler = (file: File) => {

    const acceptedTypes = {
      image: [
        'image/jpeg',
        'image/jpg',
        'image/png',
      ]
    }

    return acceptedTypes.image.includes(file.type) ? true : false
  }

  const handleDrop = (event: DragEvent) => {
    event?.preventDefault();

    if (event.dataTransfer && event.dataTransfer.items) {
      [...event.dataTransfer.items].forEach((item: DataTransferItem) => {
        if (item.kind === 'file') {
          const file = item.getAsFile();

          if (file && acceptedTypesHandler(file)) {
            setFileStack((prevStack: File[]) => [...prevStack, file]);
          }

          else if (file && !acceptedTypesHandler(file)) {
            startTransition(() => {
              setUploadError(
                {
                  fileName: file.name,
                  fileType: file.type,
                  error: `Arquivos ${file.type} não são válidos`,
                }
              )
            })
          }
        }
      });
    } else {

      [...event.dataTransfer.files].forEach((file, i) => {
        console.log(`... file[${i}].name = ${file.name.split("/")[1]}`);
      });
    }

    setIsBeingDragged(false);
  }

  const dragOverHandler = (event: DragEvent) => {
    event.preventDefault();
    setIsBeingDragged(true);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    selectedFile ? setFileStack((prev) => [...prev, selectedFile]) : undefined;

    event.target.files = null

    console.log(event.target.files)
  }

  return (

    <>
      {uploadError && (
        <TemporaryPopUp
          //onDisappear={ startTransition(() => setUploadError(undefined))}
        >
          <p role='alert'>{uploadError?.error}</p>
        </TemporaryPopUp>
      )}

      <label
        id="dropzone"
        role="button"
        onDrop={handleDrop}
        onDragOver={dragOverHandler}
        onDragLeave={() => setIsBeingDragged(false)}
        data-dragged={isBeingDragged}
        className={`w-full max-w-3xl p-4 border-2 border-dashed flex flex-col items-center justify-center gap-2 border-secondary-foreground/50 focus-visible:outline cursor-pointer transition-all ease-in-out hover:bg-secondary
      data-[dragged=true]:bg-secondary
      rounded-l has-[#file-form:focus-visible]:outline fade-in-25 relative`}
        htmlFor="file-form"
      >
        <span className="h-20 flex items-center gap-2 text-2xl font-semibold">
          <FileIcon className="w-6 h-6" />
          <span className="font-bold">
            Arraste e solte seus arquivos aqui
          </span>
        </span>
        <label className="text-center text-sm text-secondary-foreground" htmlFor="file-form">
          ou
          <Button className="ml-2 -z-10" size="sm" onClick={() => document.getElementById("file-form")?.click()}>
            Escolha um arquivo
          </Button>
        </label>
        <input
          id="file-form"
          className="sr-only"
          type="file"
          ref={imageInputRef}
          onChange={handleChange}
          accept="image/jpeg, image/png"
          required
          disabled={isLoading || fileStack.length > 0}
        />
      </label>
    </>

  )
}

export default Dropzone;