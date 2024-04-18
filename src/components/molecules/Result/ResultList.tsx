import ResultItem from "./ResultItem"

interface IResultData {

  label: string
  value: number
}

interface ResultListProps {

  resultData: IResultData[]
}

export default function ResultList( { resultData }:ResultListProps ) {

  return (

    <ol className="space-y-2 text-start">
      { resultData.map(item => (
        <ResultItem
          resultLabel={item.label}
          resultValue={item.value}
        />
      )) }
    </ol>
  )
}