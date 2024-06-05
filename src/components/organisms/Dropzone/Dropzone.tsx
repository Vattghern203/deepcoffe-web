import { ChangeEvent, Dispatch, DragEvent, LabelHTMLAttributes, SetStateAction, useRef } from 'react'

import FileIcon from '@/components/atoms/Icons/FileIcon'

import { Button } from '@/components/ui/button'


interface DropzoneProps extends LabelHTMLAttributes<HTMLLabelElement> {
  fileStack: File[];
  setFileStack: Dispatch<SetStateAction<File[]>>
  isLoading: boolean
  isBeingDragged: boolean
  setIsBeingDragged: Dispatch<SetStateAction<boolean>>
}

function Dropzone({
  fileStack,
  setFileStack,
  isLoading,
  isBeingDragged,
  setIsBeingDragged,
}: DropzoneProps) {

  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (event: DragEvent) => {
    event?.preventDefault();

    if (event.dataTransfer && event.dataTransfer.items) {
      [...event.dataTransfer.items].forEach((item: DataTransferItem) => {
        if (item.kind === 'file') {
          const file = item.getAsFile();

          if (file && file.type.startsWith('image/')) {
            setFileStack((prevStack: File[]) => [...prevStack, file]);
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
    const selectedFile = event.target.files?.[0];
    selectedFile ? setFileStack((prev) => [...prev, selectedFile]) : undefined;

    event.target.files = null

    console.log(event.target.files)
  }

  return (

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
        accept="image/*"
        required
        disabled={isLoading || fileStack.length > 0}
      />
    </label>
  )
}

export default Dropzone;