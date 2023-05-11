import React, { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

import CloseIcon from "../assets/images/icons/x-mark.svg";

type ModalContentProps = { children: React.ReactNode; closeFunc: () => void };

const ModalContent: React.FC<ModalContentProps> = ({ children, closeFunc }) => {
  const handleClickOutside = useCallback(() => {
    closeFunc();
  }, []);
  return (
    <div className="modal-content">
      {children}
      <button className="modal-close" onClick={handleClickOutside}>
        <CloseIcon width={18} />
      </button>
    </div>
  );
};

type ModalProps = {
  isOpen: boolean;
  closeFunc: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ closeFunc, isOpen, children }) => {
  const handleKeyPress = useCallback(({ keyCode }: { keyCode: number }) => {
    if (keyCode === 27) closeFunc();
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress, false);
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyPress, false);
    };
  }, []);

  if (typeof document === "undefined") return null;

  const modalContainer = document.getElementById("modal");

  if (!isOpen || !modalContainer) return null;

  return ReactDOM.createPortal(
    <div className="modal">
      <ModalContent children={children} closeFunc={closeFunc} />
    </div>,
    modalContainer
  );
};

export default Modal;
