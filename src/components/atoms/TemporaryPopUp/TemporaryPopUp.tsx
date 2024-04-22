import React, { ReactNode, useEffect, useRef } from 'react';

import { Alert } from '@/components/ui/alert';

import styles from "./temporary-popup.module.css"

interface PopupProps {
  variant?: "default" | "destructive"
  children: ReactNode
  duration?: number
}

const TemporaryPopup: React.FC<PopupProps> = ({ variant="default", children, duration=4 }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      popupRef.current?.remove();
    }, duration * 1000);

    return () => clearTimeout(timeoutId);
  }, [duration]);

  return (
    <Alert variant={variant}  ref={popupRef} className={`fixed top-16 left-[50%] translate-x-[-50%] z-[100] w-fit bg-background/90 backdrop-blur-sm ${styles.temp}`}>
      {children}
    </Alert>
  );
};

export default TemporaryPopup;
