
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ckR9peimHcc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Link } from "react-router-dom"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <img
            alt="Hero Image"
            className="mx-auto rounded-lg object-cover"
            height={600}
            src="/placeholder.svg"
            style={{
              aspectRatio: "1200/600",
              objectFit: "cover",
            }}
            width={1200}
          />
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              The best way to deploy
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Effortless and secure. The platform for automated deployments.
            </p>
          </div>
          <Link
            className="inline-flex items-center justify-center w-48 h-12 rounded-lg bg-gray-900 text-gray-50 font-medium shadow transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
            to="#"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  )
}

// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
