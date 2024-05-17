import { Skeleton } from "@/components/ui/skeleton"
import process from "process"
import { ImgHTMLAttributes, Suspense } from "react"

import { cn } from "@/lib/utils"; // Assuming `cn` is a utility function for Tailwind classes

interface ImageThumbProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string; // Optional image source
  altText: string; // Required alternative text
  aspectRatio?: string; // Optional aspect ratio (e.g., "16/9", "4/3")
  placeholder?: string; // Optional path to a placeholder image
  className?: string; // Optional additional classes
}

function ImageThumb ({
  src,
  altText,
  aspectRatio,
  placeholder,
  className,
}: ImageThumbProps) {
  const baseClasses = cn(
    "image-thumb block mx-auto rounded-md object-cover object-center w-full h-auto hover:scale-125",
    { "aspect-ratio": aspectRatio }
  );

  return (
    <Suspense fallback={<Skeleton className={cn("block mx-auto rounded-md w-full", { aspectRatio: '10/14' })} />}>
      <img
        src={src || placeholder || process.env.IMAGE_PLACEHOLDER}
        alt={altText}
        className={cn(baseClasses, className)}
      />
    </Suspense>
  )
}

export default ImageThumb;
