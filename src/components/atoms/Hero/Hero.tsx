import { Skeleton } from "@/components/ui/skeleton"
import { ImgHTMLAttributes, Suspense } from "react"

interface HeroProps extends ImgHTMLAttributes<HTMLImageElement> {}

function Hero({...rest}:HeroProps) {

  return (
    <Suspense fallback={<Skeleton className="block round-md h-[600px] w-[40dvw]" />}>
      <img
        src="/hero.webp"
        width="800"
        height="600"
        loading="eager"
        fetchPriority='high'
        alt="Hero Image"
        className="w-full h-full"
        {...rest}
      />
    </Suspense>
  )
}

export default Hero