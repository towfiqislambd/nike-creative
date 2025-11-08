"use client";
import React, { useEffect, useState } from "react";
import Modal from "../../../../Components/Common/Modal";


export default function ArrivalItemModal({
  open,
  mode = "add",
  initialText = "",
  onClose,
  onSubmit,
}) {
  const [text, setText] = useState(initialText);

  useEffect(() => {
    setText(initialText || "");
  }, [initialText, open]);

  const primaryLabel = mode === "edit" ? "Save" : "Add";
  const title = mode === "edit" ? "Edit Arrival" : "Add Arrival";

  return (
    <Modal open={open} title={title} onClose={onClose}>
      <div className="space-y-6 p-5">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Clean the glass surface"
          className={
            "inputCls px-4 py-3 rounded-xl border border-[#E5E5E5] text-[#333]"
          }
        />

        <div className="flex items-center justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-teal-500 px-6 py-5 text-teal-600 hover:bg-teal-50"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={!text.trim()}
            onClick={() => onSubmit?.(text.trim())}
            className="rounded-xl bg-[#21BBA2] px-6 py-5 text-white hover:bg-[#1aa58e] disabled:opacity-60"
          >
            {primaryLabel}
          </button>
        </div>
      </div>
    </Modal>
  );
}
