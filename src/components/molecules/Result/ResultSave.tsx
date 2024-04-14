import { Button } from "@/components/ui/button"

interface ResultSaveProps {

  btnLabel?: string
  onClickFunction: () => void
}

export default function ResultSave( { btnLabel, onClickFunction }:ResultSaveProps ) {

  return (

    <Button onClick={onClickFunction}>
      { btnLabel ? btnLabel : "Save" }
    </Button>
  )
}