import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Loader } from "lucide-react";

interface PopUpAlertProps {
  alertTitle: string;
  alertDescription: string;
  variant?: "destructive" | "default";
  isLoading: boolean
}

export default function PopUpAlert({
  alertTitle,
  alertDescription,
  variant = "default",
  isLoading
}: PopUpAlertProps) {


  return (
    isLoading && ( // Wrap the entire JSX in a conditional expression
      <Alert variant={variant} className="fixed top-16 left-[50%] translate-x-[-50%] z-[100] w-fit bg-background/90 backdrop-blur-sm">
        <Loader className="animate-spin self-center" />
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
