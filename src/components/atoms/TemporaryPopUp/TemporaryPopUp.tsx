import { ReactNode, useEffect, useRef } from 'react';

import { Alert } from '@/components/ui/alert';

import styles from "./temporary-popup.module.css"


interface PopupProps {
  variant?: "default" | "destructive"
  children: ReactNode
  duration?: number
  onDisappear?: (() => void) | void
}

function TemporaryPopup({ variant="default", children, duration=4, onDisappear }: PopupProps) {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      popupRef.current?.remove();
      onDisappear?.(); // Call the onDisappear callback
    }, duration * 1000);

    return () => clearTimeout(timeoutId);
  }, [duration, onDisappear]);

  return (

    <Alert
      variant={variant}
      ref={popupRef}
      className={`fixed top-16 left-[50%] translate-x-[-50%] z-[100] w-fit bg-background/90 backdrop-blur-sm ${styles.temp}`}
    >
      {children}
    </Alert>

  );
}

export default TemporaryPopup;