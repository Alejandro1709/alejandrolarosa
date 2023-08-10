import { useLockBodyScroll } from '@uidotdev/usehooks';

type ModalProps = {
  children: React.ReactNode;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
};

function Modal({ children }: ModalProps) {
  useLockBodyScroll();
  return (
    <div className='fixed z-30 flex h-full w-full justify-center overflow-hidden bg-black/50'>
      {children}
    </div>
  );
}

export default Modal;
