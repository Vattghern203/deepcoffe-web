/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tKHlH3omHIz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Link } from "react-router-dom"

export default function Component() {
  return (
    <section className="flex min-h-[100dvh] flex-col items-center justify-center gap-6 px-4 md:px-6">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl capitalize">404 - Página Não Encontrada</h1>
        <p className="md:text-xl">
          A página que você está procurando parece não existir ou foi movida.
        </p>
      </div>
      <Link
        
        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 text-primary-foreground"
        to="/"
        aria-label="Voltar ao início"
      >
        Voltar ao início
      </Link>
    </section>
  )
}