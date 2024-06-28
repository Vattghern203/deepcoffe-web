import { Skeleton } from "@/components/ui/skeleton";

export function ImageSkeleton() {

  return (
    <Skeleton aria-busy="true" className="rounded-md w-full h-72 block"  />
  )
}