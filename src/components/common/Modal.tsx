import { FC, useState, useEffect, useCallback, Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";

export type ModalProps = {
  title?: string;
  description?: string;
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;

  children?: React.ReactNode;
};

export const Modal: FC<ModalProps> = (props) => {
  const { onOpen, onClose, title, description, children, open } = props;

  const [isOpen, setIsOpen] = useState(open);

  const openModal = useCallback(() => {
    setIsOpen(true);
    onOpen?.();
  }, [onOpen]);

  function closeModal() {
    setIsOpen(false);
    onClose?.();
  }

  useEffect(() => {
    openModal();
    setIsOpen(open);
  }, [openModal, open]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        className="relative z-10"
        as="div"
        open={isOpen}
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl m-4 transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                <div className="bg-lightGray p-6 relative">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold leading-6 text-darkBlue"
                  >
                    {title}
                  </Dialog.Title>
                  <Dialog.Description className="font-extralight text-darkBlue">
                    {description}
                  </Dialog.Description>
                  <span
                    className="absolute right-10 text-darkBlue top-1/2 transform translate-y-[-50%] text-lg cursor-pointer font-semibold"
                    onClick={closeModal}
                  >
                    &times;
                  </span>
                </div>

                <div className="p-6">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
