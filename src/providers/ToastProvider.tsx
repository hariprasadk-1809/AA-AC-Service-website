'use client'
import { createContext, useContext } from 'react'
import { useToast, type ToastType } from '@/hooks/useToast'

interface ToastContextValue {
  addToast: (message: string, type?: ToastType) => void
}

const ToastContext = createContext<ToastContextValue>({
  addToast: () => {},
})

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const { toasts, addToast, removeToast } = useToast()

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed top-4 right-4 z-[200] flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            onClick={() => removeToast(toast.id)}
            className={`px-4 py-3 rounded-lg text-white text-sm shadow-lg cursor-pointer animate-fade-in
              ${toast.type === 'success' ? 'bg-status-success' : ''}
              ${toast.type === 'error'   ? 'bg-status-error'   : ''}
              ${toast.type === 'info'    ? 'bg-brand-accent'   : ''}
            `}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export const useToastContext = () => useContext(ToastContext)
