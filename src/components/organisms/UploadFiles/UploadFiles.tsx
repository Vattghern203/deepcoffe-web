/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mjOlVnIqPys
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Component() {
    return (
        <section
            className="flex items-center justify-center w-full min-h-[600px]"
        >
            <label className="w-full max-w-3xl p-4 border-2 border-dashed rounded-l flex flex-col items-center justify-center gap-2 border-gray-300 dark:border-gray-800" htmlFor="file-form">
                <span className="h-20 flex items-center gap-2 text-2xl font-semibold">
                    <FileIcon className="w-6 h-6" />
                    <span className="font-bold">Drag and drop your files here</span>
                </span>
                <label className="text-center text-sm text-gray-500 dark:text-gray-400" htmlFor="file-form">
                    or
                    <Button className="ml-2 -z-10" size="sm" onClick={() => document.getElementById('file-form')?.click()}>Choose a file to upload

                    </Button>

                    <input className="hidden" type="file" name="" id="file-form" />
                </label>
            </label>
        </section>
    )
}

function FileIcon({ ...props }) {
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
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
        </svg>
    )
}
