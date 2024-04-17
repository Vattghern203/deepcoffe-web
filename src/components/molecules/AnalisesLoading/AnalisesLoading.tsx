import { Progress } from "@radix-ui/react-progress"

export default function AnalisesLoading() {

  return (
    <article className="flex flex-col items-center space-y-4">
      <section className="flex items-center space-x-4">

        <h1 className="text-lg font-semibold">Loading database</h1>
      </section>
      <section className="w-full max-w-sm space-y-4">
        <Progress value={50} />
        <p className="text-sm font-medium tracking-wide">50% Complete</p>
      </section>
    </article>
  )
}

function DatabaseIcon(props) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}

