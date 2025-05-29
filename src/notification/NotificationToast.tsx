import { useState, createContext, useContext } from "react";
import { ToastContextType } from "../interfaces/NotificationToast";

const ToastContext = createContext<ToastContextType | null>(null);
export const useToast = () => useContext(ToastContext) as ToastContextType;

const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toast, setToast] = useState<string | null>(null);
  const showToast = (message: string, duration: number) => {
    setToast(message);
    setTimeout(() => setToast(null), duration);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && <Toast message={toast} />}
    </ToastContext.Provider>
  );
};

interface Toast {
  message: string;
}

const Toast: React.FC<Toast> = ({ message }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded shadow-lg animate-fade-in-out">
      {message}
    </div>
  );
};

const ToastDemo = () => {
  const { showToast } = useToast();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Toast Notification Example</h1>
      <button
        onClick={() => showToast("This is a toast message!", 3000)}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Show Toast
      </button>
    </div>
  );
};

const NotificationToast = () => {
  return (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  );
};

export default NotificationToast;
