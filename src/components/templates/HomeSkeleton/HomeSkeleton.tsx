
import { Skeleton } from "@/components/ui/skeleton"

export function HomeSkeleton() {

  return (
    <>
      <header className="sticky inset-x-0 top-0 z-50">
        <section className="px-4 md:px-6">
          <div className="flex h-14 items-center  justify-between">
            <Skeleton className="h-6 w-6 rounded-full" />

            <nav className="flex-1">
              <ul className="flex justify-center gap-6 items-center">
                <li>
                  <Skeleton className="w-[8ch] h-[.8em]" />
                </li>
                <li>
                  <Skeleton className="w-[8ch] h-[.8em]" />
                </li>
                <li>
                  <Skeleton className="w-[8ch] h-[.8em]" />
                </li>
                <li>
                  <Skeleton className="w-[8ch] h-[.8em]" />
                </li>
              </ul>
            </nav>

            <div className="ml-auto flex items-center justify-between gap-1">

              <Skeleton
                className="inline-flex h-9 w-[4ch] items-center justify-center rounded-md px-4"
              />

              <Skeleton
                className="inline-flex h-9 w-[8ch] items-center justify-center rounded-md px-4"
              />
          </div>
          </div>
        </section>
      </header>

    </>
  )
}