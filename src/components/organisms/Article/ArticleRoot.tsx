import { ReactNode } from "react";


interface ArticleRootProps {

    children: ReactNode
}


export function ArticleRoot({children}: ArticleRootProps) {

    return (
        <article className="grid gap-6 border-t border-b py-6">

            {children}
        </article>
    )
}