import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

export default function News() {
  return (
    <div className="px-4 md:px-6 py-6 md:py-12 xl:py-16">
        
      <div className="space-y-12">
        <div className="space-y-4">

          <h2 className="text-3xl font-bold tracking-tight">News from the Frontline</h2>
          <div className="grid gap-6 border-t border-b py-6">

            <div className="space-y-2">
              <h3 className="text-2xl font-bold">The Mystery of the Missing Socks</h3>
              <p className="text-gray-500 dark:text-gray-400">Posted on August 24, 2023</p>
              <p className="text-gray-500 dark:text-gray-400">Posted by: Joe Smith</p>
            </div>
            <p>
              Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne.
              One day, his advisors came to him with a problem: the kingdom was running out of money.
            </p>
            <a className="font-semibold inline-flex items-center space-x-2" href="#">
              <span>Read more</span>
              <ChevronRightIcon className="w-4 h-4" />
            </a>
          </div>
          <div className="grid gap-6 border-t border-b py-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">The Case of the Stolen Cupcakes</h3>
              <p className="text-gray-500 dark:text-gray-400">Posted on August 24, 2023</p>
              <p className="text-gray-500 dark:text-gray-400">Posted by: Jane Doe</p>
            </div>
            <p>
              Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place:
              under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't seem
              to stop Jokester.
            </p>
            <a className="font-semibold inline-flex items-center space-x-2" href="#">
              <span>Read more</span>
              <ChevronRightIcon className="w-4 h-4" />
            </a>
          </div>
          <div className="grid gap-6 border-t border-b py-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">The Invasion of the Alien Cows</h3>
              <p className="text-gray-500 dark:text-gray-400">Posted on August 24, 2023</p>
              <p className="text-gray-500 dark:text-gray-400">Posted by: John Smith</p>
            </div>
            <p>
              And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that
              they couldn't help but laugh. And once they started laughing, they couldn't stop.
            </p>
            <a className="font-semibold inline-flex items-center space-x-2" href="#">
              <span>Read more</span>
              <ChevronRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
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
