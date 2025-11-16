"use client";
import { useForm } from "react-hook-form";
import Modal from "../../../../../Components/Common/Modal";

const AddNoteModal = ({ open, onClose, onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <Modal open={open} onClose={onClose} className={"max-w-[370px]"}>
      <h2 className="card_title">Add Note</h2>

      <div className="flex flex-col gap-2.5 mb-3.5">
        <label className="card_label">Category</label>
        <select
          {...register("category", { required: true })}
          className="border border-[#CFCFCF] rounded-lg p-2.5 text-xs sm:text-sm"
        >
          <option>Internal Notes</option>
          <option>Installer Notes</option>
        </select>
      </div>

      <div className="flex flex-col gap-2.5">
        <label className="card_label">Note</label>
        <textarea
          {...register("note", { required: true })}
          rows="3"
          className="border border-[#cfcfcf] rounded-lg text-xs sm:text-sm p-2.5"
          placeholder="Please install the window stickers..."
        ></textarea>
      </div>

      <div className="flex justify-end mt-4">
        <button onClick={handleSubmit(submit)} className="card_btn">
          Add Note
        </button>
      </div>
    </Modal>
  );
};

export default AddNoteModal;
