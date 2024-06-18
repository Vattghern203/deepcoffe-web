import { ChangeEvent, Dispatch, DragEvent, LabelHTMLAttributes, memo, SetStateAction, startTransition, useRef, useState } from 'react'

import FileIcon from '@/components/atoms/Icons/FileIcon'

import { Button } from '@/components/ui/button'

import { TemporaryPopUp } from '@/components/atoms'
import { splitFileExtension } from '@/utils/splitFileExtension';

interface DropzoneProps extends LabelHTMLAttributes<HTMLLabelElement> {
  fileStack: File[];
  setFileStack: Dispatch<SetStateAction<File[]>>
  isLoading: boolean
  isBeingDragged: boolean
  setIsBeingDragged: Dispatch<SetStateAction<boolean>>
}

type UploadError = {

  hasError: boolean,
  fileName?: string,
  fileType?: string
  error?: string,
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
                  hasError: true,
                  fileName: file.name,
                  fileType: file.type,
                  error: `Arquivos ${splitFileExtension(file.type)} não são válidos`,
                }
              )
            })
          }
        }
      });
    } else {

      [...event.dataTransfer.files].forEach((file, i) => {
        console.log(`... file[${i}].name = ${file.name}`);
      });
    }

    setIsBeingDragged(false);
  }

  const dragOverHandler = (event: DragEvent) => {
    event.preventDefault();
    setIsBeingDragged(true);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;

    if (selectedFiles) {
      const newFiles = Array.from(selectedFiles);
      setFileStack((prev) => [...prev, ...newFiles]);
    }

    // Reset the selectedFiles variable
    event.target.files = null;
    event.target.value = ""
  };

  return (

    <>
      {uploadError?.hasError && (
        <TemporaryPopUp
          onDisappear={() => setUploadError({hasError: false})}
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
          multiple
        />
      </label>
    </>

  )
}

const MemoizedDropzone = memo(Dropzone)
export default MemoizedDropzone;