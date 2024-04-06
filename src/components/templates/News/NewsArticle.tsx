import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"


export default function NewsArticle() {

    return (
        <article className="grid gap-6 border-t border-b py-6">

            <div className="space-y-2 col-1">
              <h3 className="text-2xl font-bold">The Mystery of the Missing Socks</h3>
              <p className="text-zinc-500 dark:text-zinc-400">Posted on August 24, 2023</p>
              <p className="text-zinc-500 dark:text-zinc-400">Posted by: Joe Smith</p>
            </div>
            <p>
              Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne.
              One day, his advisors came to him with a problem: the kingdom was running out of money.
            </p>
            <a className="font-semibold inline-flex items-center space-x-2" href="#">
              <span>Read more</span>
              <ChevronRightIcon className="w-4 h-4" />
            </a>
          </article>
    )
}

function ChevronRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    )
  }