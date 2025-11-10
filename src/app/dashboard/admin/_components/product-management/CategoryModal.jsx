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
      <div className="bg-white p-2.5 rounded-[16px] w-full max-w-[500px] relative">
        <h2 className="card_title">
          {category ? "Edit Category" : "Add Category"}
        </h2>
        <form onSubmit={handleSubmit(handleSave)} className="space-y-5">
          <div className="flex flex-col gap-2.5">
            <label className="block text-base xl:text-lg">Category Name</label>
            <input
              {...register("name", { required: true })}
              placeholder="Category Name"
              className="border max-w-[325px] border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-lg"
              required
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <label className="block text-base xl:text-lg">Description</label>
            <textarea
              {...register("description", { required: true })}
              placeholder="Category Description"
              rows="4"
              className="border w-full border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base"
              required
            ></textarea>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded border"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-3 bg-[#21BBA2] text-white rounded-lg"
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
