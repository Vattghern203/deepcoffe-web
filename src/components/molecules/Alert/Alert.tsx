import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Loader } from "lucide-react";

import styles from "./alert.module.css"

interface PopUpAlertProps {
  alertTitle: string;
  alertDescription: string;
  variant?: "destructive" | "default";
  isLoading: boolean
  hasActions?: boolean
}

export default function PopUpAlert({
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
