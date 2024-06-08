import { Skeleton } from "@/components/ui/skeleton";
import process from "process";
import { ImgHTMLAttributes, Suspense, memo } from "react";
import { cn } from "@/lib/utils";

interface ImageThumbProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  altText: string;
  aspectRatio?: string;
  placeholder?: string;
  className?: string;
}

const ImageThumb = memo(({
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
        className={cn(baseClasses, className)}
        style={{ aspectRatio }}
        {...rest}
      />
    </Suspense>
  );
});

export default ImageThumb;
