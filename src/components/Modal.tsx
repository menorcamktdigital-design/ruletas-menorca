import { useEffect, type ReactNode } from 'react';

interface ModalProps {
  open: boolean;
  onClose?: () => void;
  labelledBy?: string;
  children: ReactNode;
  className?: string;
}

export function Modal({ open, onClose, labelledBy, children, className = '' }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy}
      onClick={onClose}
    >
      <div
        className={className}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
