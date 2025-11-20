"use client";
import { useForm } from "react-hook-form";
import Modal from "../../../../../Components/Common/Modal";

const CategoryModal = ({ isOpen, category, onClose, onSave }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: category || {},
  });

  const handleSave = (data) => {
    onSave(data);
    reset();
  };

  return (
    <Modal open={isOpen} onClose={onClose} className={"max-w-[497px]"}>
      <div className="bg-white w-full relative">
        <h2 className="card_title">
          {category ? "Edit Category" : "Add Category"}
        </h2>
        <form onSubmit={handleSubmit(handleSave)} className="space-y-2">
          <div className="flex flex-col gap-1">
            <label className="card_label">Category Name</label>
            <input
              {...register("name", { required: true })}
              placeholder="Category Name"
              className="card_input w-fit"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="card_label">Description</label>
            <textarea
              {...register("description", { required: true })}
              placeholder="Category Description"
              rows="4"
              className="card_input"
              required
            ></textarea>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="card_btn_outline"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="card_btn"
            >
              {category ? "Update Category" : "Add Category"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CategoryModal;
