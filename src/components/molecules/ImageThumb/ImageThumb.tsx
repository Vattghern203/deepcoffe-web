import { Skeleton } from "@/components/ui/skeleton";
import process from "process";
import { Suspense } from "react";
import { cn } from "@/lib/utils";
import { ImageThumbProps } from "@/types/ImageThumbTypes";

const ImageThumb = ({
  src,
  altText,
  aspectRatio = '10/14',
  placeholder,
  className,
  ...rest
}: ImageThumbProps) => {
  const baseClasses = cn(
    "image-thumb block mx-auto rounded-md object-cover object-center w-full h-full",
    { "aspect-ratio": aspectRatio }
  );

  return (
    <Suspense fallback={<Skeleton className="block mx-auto rounded-md w-full h-[230px]" />}>
      <img
        src={src || placeholder || process.env.IMAGE_PLACEHOLDER}
        alt={altText}
        loading="lazy"
        fetchPriority="low"
        className={cn(baseClasses, className)}
        style={{ aspectRatio }}
        {...rest}
      />
    </Suspense>
  );
};

export default ImageThumb;
