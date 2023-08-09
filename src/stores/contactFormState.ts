import { create } from 'zustand';

type ContactFormState = {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: string;
  setIsError: (isError: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  setIsSuccess: (isSuccess: boolean) => void;
  setError: (error: string) => void;
};

export const useContactFormState = create<ContactFormState>((set) => ({
  isLoading: false,
  isError: false,
  isSuccess: false,
  error: '',
  setIsError: (isError: boolean) => set(() => ({ isError })),
  setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
  setIsSuccess: (isSuccess: boolean) => set(() => ({ isSuccess })),
  setError: (error: string) => set(() => ({ error })),
}));
