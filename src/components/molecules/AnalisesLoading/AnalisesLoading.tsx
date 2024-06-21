import { Loader } from "lucide-react";

//import classNames from "classnames";

export default function AnalisesLoading() {

  return (
    <section
      className="flex items-center gap-2 w-full max-w-3xl p-4 border-2 rounded-md mx-auto fade-in-10 bg-background"
      aria-busy="true"
      aria-live="polite"
      aria-label="Análise em andamento"
    >
      <Loader className="animate-spin transition-transform will-change-transform" />
      <article role="alert">
        <h2 className="text-2xl font-bold">Análise em andamento</h2>
        <p className="text-xl">Isso pode demorar um pouco, sinta-se livre para navegar em outras páginas do site.</p>
      </article>
    </section>
  )
}