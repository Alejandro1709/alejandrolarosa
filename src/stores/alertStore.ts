import { create } from 'zustand';

type Alert = {
  id: string;
  message: string;
  type: 'success' | 'error';
};

type AlertStore = {
  currentAlert: Alert | null;
  setAlert: (message: string, type: 'success' | 'error') => void;
  removeAlert: () => void;
};

export const useAlertStore = create<AlertStore>((set) => ({
  currentAlert: null,
  setAlert: (message, type) => {
    const id = Math.random().toString(36).substr(2, 9);
    set({
      currentAlert: {
        id,
        message,
        type,
      },
    });
    setTimeout(() => {
      set({ currentAlert: null });
    }, 3000);
  },
  removeAlert: () => {
    set({ currentAlert: null });
  },
}));
