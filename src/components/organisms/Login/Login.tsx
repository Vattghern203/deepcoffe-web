/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qrjkLLuoziO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Popover } from "@/components/ui/popover"
import { HtmlHTMLAttributes } from "react"

export default function Component() {
  return (
    <Popover>
      <div className="p-1 rounded-full">
        <XIcon className="w-4 h-4" />
        <span className="sr-only">Close</span>
      </div>
      <div className="w-[350px]">
        <Card>
          <CardHeader className="p-4">
            <CardTitle className="text-lg">Login</CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <div className="space-y-2">
              <Label className="text-sm" htmlFor="email">
                Email
              </Label>
              <Input className="text-sm" id="email" placeholder="m@example.com" required type="email" />
            </div>
            <div className="space-y-2">
              <Label className="text-sm" htmlFor="password">
                Password
              </Label>
              <Input className="text-sm" id="password" required type="password" />
            </div>
            <Button className="w-full text-sm">Log in</Button>
            <Separator className="my-4" />
            <Button className="w-full" variant="outline">
              Sign in with Google
            </Button>
          </CardContent>
        </Card>
      </div>
    </Popover>
  )
}

function XIcon(props: HtmlHTMLAttributes<HTMLOrSVGElement>) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
