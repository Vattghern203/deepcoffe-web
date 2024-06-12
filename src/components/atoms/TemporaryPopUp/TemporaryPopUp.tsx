import { ReactNode, useEffect, useRef } from 'react';
import { Alert } from '@/components/ui/alert';
import styles from './temporary-popup.module.css';

interface PopupProps {
  variant?: 'default' | 'destructive';
  children: ReactNode;
  duration?: number;
  onDisappear?: () => void;
}

function TemporaryPopup({ variant = 'default', children, duration = 4, onDisappear }: PopupProps) {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (onDisappear) {
        onDisappear();
      }
    }, duration * 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [duration, onDisappear]);

  return (
    <Alert
      variant={variant}
      ref={popupRef}
      className={`fixed top-16 left-1/2 transform -translate-x-1/2 z-100 w-fit bg-background/90 backdrop-blur-sm ${styles.temp}`}
      role="alert"
      aria-live="assertive"
    >
      {children}
    </Alert>
  );
}

export default TemporaryPopup;
