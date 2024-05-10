import { HtmlHTMLAttributes } from "react"
import { Loader } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import styles from "./alert.module.css"


interface PopUpAlertProps extends HtmlHTMLAttributes<HTMLDivElement> {
  alertTitle: string;
  alertDescription: string;
  variant?: "destructive" | "default";
  isLoading: boolean
  hasActions?: boolean
}

function PopUpAlert({
  alertTitle,
  alertDescription,
  variant = "default",
  isLoading
}: PopUpAlertProps) {

  return (
    isLoading && (
      <Alert variant={variant} className={`fixed top-16 left-[50%] translate-x-[-50%] z-[100] w-fit bg-background/90 backdrop-blur-sm ${styles.alert} gap-1`}>
        <Loader className="animate-spin self-center align-middle" />
        <AlertTitle>
          {alertTitle}
        </AlertTitle>
        <AlertDescription>
          {alertDescription}
        </AlertDescription>
      </Alert>
    )
  )
}

export default PopUpAlert