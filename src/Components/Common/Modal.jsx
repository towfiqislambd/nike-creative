"use client";
import { RxCross2 } from "react-icons/rx";
import React, { useEffect } from "react";

const Modal = ({ open, onClose, children, className }) => {
  // useEffect(() => {
  //   if (open) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //   }
  // }, [open]);
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-[1px]">
      <div className="absolute inset-0" onClick={onClose} />
      <div
        className={`relative z-10 w-full max-w-2xl max-h-[calc(100vh-50px)] overflow-y-auto px-4 py-3 bg-white rounded-lg shadow-lg mx-3 ${className}`}
      >
        {/* Modal Content */}
        {children}

        {/* Close btn */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 md:top-3.5 md:right-3.5 cursor-pointer grid place-items-center"
        >
          <RxCross2 className="text-xl text-black" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
