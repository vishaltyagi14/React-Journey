import React from "react";
import ReactDOM from 'react-dom'

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/55 z-40"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 z-50">
        <button onClick={onClose}>Close Modal </button>
        <br />
        {children}
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
