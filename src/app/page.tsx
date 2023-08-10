'use client';

import { useModalStore } from '@/stores/modalStore';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Main from './components/Main';
import Modal from './components/ui/Modal';
import ProjectDialog from './components/ui/ProjectDialog';

const queryClient = new QueryClient();

export default function Home() {
  const isModalOpen = useModalStore((state) => state.isOpen);
  const setIsModalOpen = useModalStore((state) => state.setModal);

  return (
    <QueryClientProvider client={queryClient}>
      {isModalOpen ? (
        <Modal onClose={() => setIsModalOpen(false)}>
          <ProjectDialog />
        </Modal>
      ) : null}
      <Main />
    </QueryClientProvider>
  );
}
