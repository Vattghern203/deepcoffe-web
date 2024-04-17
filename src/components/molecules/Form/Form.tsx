import { FormEvent, FormHTMLAttributes, ReactNode } from "react"

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {

  method: "POST" | "GET" | "POST GET"
  children: ReactNode
}

export default function Form( { method, children }:FormProps ) {

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => event?.preventDefault()

  return (

    <fieldset>
      <form
        method={method}
        onSubmit={(e) => handleFormSubmit(e)}
      >
        {children}
      </form>
    </fieldset>
  )
}