import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import CloseIcon from "../assets/images/icons/x-mark.svg";

type ModalContentProps = { children: React.ReactNode; closeFn: () => void };

const ModalContent: React.FC<ModalContentProps> = ({ children, closeFn }) => {
  return (
    <div className="modal-content">
      {children}
      <button className="modal-close" onClick={closeFn}>
        <CloseIcon width={22} />
      </button>
    </div>
  );
};

type ModalProps = {
  isOpen: boolean;
  closeFn: () => void;
  children: React.ReactNode;
  loaded: boolean;
};

const Modal: React.FC<ModalProps> = ({ loaded, closeFn, isOpen, children }) => {
  const handleClickOutside = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.currentTarget !== e.target) return;
      closeFn();
    },
    []
  );

  const handleKeyPress = useCallback(({ keyCode }: { keyCode: number }) => {
    if (keyCode === 27) closeFn();
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
    <div
      className={loaded ? "modal modalVisible" : "modal"}
      onClick={handleClickOutside}
    >
      <ModalContent children={children} closeFn={closeFn} />
    </div>,
    modalContainer
  );
};

export default Modal;
