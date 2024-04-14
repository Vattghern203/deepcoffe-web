import { Progress } from "@/components/ui/progress"

interface ResultItemProps {

  resultLabel: string
  resultValue: number
}

export default function ResultItem( { resultLabel, resultValue }:ResultItemProps ) {

  return (

    <li className="flex items-center">
      <span className="w-24 capitalize">{resultLabel}</span>
      <Progress className="w-[60%]" value={resultValue} />
      <span className="ml-2 font-medium">{resultValue}%</span>
    </li>
  )
}