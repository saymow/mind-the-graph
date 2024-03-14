"use client";
import { createPortal } from "react-dom";
import { useCallback, useEffect } from "react";
import "./styles.scss";

interface Props {
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = (props) => {
  const { children, isOpen, onClose } = props;

  const handleKeypress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeypress);
    return () => {
      document.removeEventListener("keydown", handleKeypress);
    };
  }, [handleKeypress]);

  useEffect(() => {
    if (isOpen) document.querySelector("body")!.style.overflow = "hidden";
    else document.querySelector("body")!.style.overflow = "auto";
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="modal_container">
      <div className="modal_backdrop" onClick={onClose}></div>
      <main className="modal_main">
        <span
          onClick={onClose}
          className="modal_close_btn"
          width="2rem"
          height="2rem"
        >
          close
        </span>
        {children}
      </main>
    </div>,
    document.body
  );
};

export default Modal;
