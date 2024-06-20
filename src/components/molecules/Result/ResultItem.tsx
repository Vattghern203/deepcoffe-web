import { useEffect, useState, Suspense } from "react";

import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";

interface ResultItemProps {
  resultLabel: string;
  resultValue: number;
}

export default function ResultItem({ resultLabel, resultValue }: ResultItemProps) {
  const [chartValue, setChartValue] = useState<number>(0);
  const [displayValue, setDisplayValue] = useState<number>(0);

  useEffect(() => {
    let animationFrameId: number;
    const duration = 3000;
    const startValue = 0;
    const step = (resultValue - startValue) / (duration / 2);

    const animate = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const currentValue = Math.min(startValue + elapsed * step, resultValue);

      setChartValue(currentValue);
      setDisplayValue(Math.floor(currentValue));

      if (currentValue < resultValue) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const startTime = performance.now();
    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [resultValue]);

  return (
    <Suspense fallback={
      <li className="flex items-center">
        <Skeleton className="w-24 h-[.8em]" />
        <Skeleton className="w-[60%] h-[.8em]" />
        <Skeleton className="ml-2 h-[.8em]" />
      </li>
    }
    >
      <li className="flex items-center">
        <span className="w-24 capitalize">{resultLabel}</span>
        <Progress className="w-[60%]" value={chartValue} />
        <span className="ml-2 font-medium">{displayValue}%</span>
      </li>
    </Suspense>
  );
}
