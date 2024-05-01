import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {

  children: ReactNode
}

function Section( { children }:SectionProps ) {

  return (

    <section className="flex items-center justify-center min-h-[600px] w-full">
      {children}
    </section>
  )
}

export { Section }