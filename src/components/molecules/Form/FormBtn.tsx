import { ButtonHTMLAttributes } from "react"
import { Button } from "@/components/ui/button"

interface FormBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {

  onClickFunction: () => void
  buttonLabel: string
}

export default function FormBtn({ onClickFunction, buttonLabel }:FormBtnProps) {

  return (

    <Button onClick={onClickFunction}>
      {buttonLabel}
    </Button>
  )
}