interface ArticleHeaderProps {

    headingText: string;
    author: string;
    postDate: string
}

export function ArticleHeader( { headingText, postDate, author }:ArticleHeaderProps ) {

    return (

        <section className="space-y-2 col-1">
            <h3 className="text-2xl font-bold">{headingText}</h3>
            <p className="text-zinc-500 dark:text-zinc-400">{`Posted by: ${author}`}</p>
            <small className="text-zinc-500 dark:text-zinc-400">{`Posted on: ${postDate}`}</small>
        </section>
    )
}