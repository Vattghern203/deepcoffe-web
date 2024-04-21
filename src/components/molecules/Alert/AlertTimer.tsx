import { SetStateAction, useEffect, useState } from "react"


interface AlertTimerProps {

  isShowing: boolean
  durationInMS: number
}

export default function AlertTimer( { isShowing, durationInMS }:AlertTimerProps ) {

  const [duration, setDuration] = useState(durationInMS)

  useEffect(() => {

    const timer = setInterval(() => {

      setDuration((prevDuration: number) => prevDuration - 1000)
    }, 1000)

    if (duration === 0) {
      console.log('Já era brother')

      clearInterval(timer)

      onExpire()
    }
  }, [duration, onExpire])

  function onExpire() {isShowing=false}

  return (


    duration !== 0 && (
    <span className="w-full rounded-full h-4 bg-primary">

    </span>
    )
  )
}