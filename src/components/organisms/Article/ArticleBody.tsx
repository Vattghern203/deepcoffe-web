import { ReadMore } from "@/components/atoms/ReadMore/ReadMore"

interface ArticleBodyProps {

    articleText: string
    maxChar?: number
}

export function ArticleBody({articleText, maxChar = 300}: ArticleBodyProps ) {

    const getTrimmedText = (source: string) => {
        if (source.length > maxChar) {
            return source.substring(0, maxChar).trimEnd() + '...';
        } else {
            return source;
        }
    };

    return (
        <>
            <p className="text-left">
                {getTrimmedText(articleText)}
            </p>

            <ReadMore />
        </>
    )
}