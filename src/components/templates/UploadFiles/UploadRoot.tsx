/* import { ReactNode } from "react"

interface UploadRootProps {

  children: ReactNode

}

export default function UploadRoot( { children }:UploadRootProps ) {

  return (

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
          {children}
        </label>
    </section>
  )
} */