import { ReactNode } from "react";

interface NewsProps {
  children: ReactNode,
  heading?: string
}

export default function News({ children, heading }: NewsProps) {

  return (

    <section className="px-4 md:px-6 py-6 md:py-12 xl:py-16">

      <div className="space-y-12">
        <div className="space-y-4">

          <h2 className="text-3xl font-bold tracking-tight">{heading}</h2>

          <div className="grid gap-6 border-t border-b py-6">
            {children}
          </div>

        </div>

      </div>

    </section>
  )
}
