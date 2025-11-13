import { useForm } from "react-hook-form";
import Modal from "../../../../../Components/Common/Modal";
import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { X } from "lucide-react";

export default function ExpenseModal({ expense, onClose, onUpdate }) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      receiptFile: null,
    },
  });

  const [imagePreview, setImagePreview] = useState(expense?.receipt || "");

  const onSubmit = () => {
    const updatedExpense = {
      ...expense,
      receipt: true,
    };
    onUpdate(updatedExpense);
    reset();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
    image
    // console.log(file) receipt image
  };

  return (
    <Modal
      open={expense}
      onClose={onClose}
      className={"max-w-[730px] lg:px-7 lg:py-5 md:rounded-[20px]"}
    >
      <div className="bg-white">
        <h2 className="card_title">Expense Information</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="grid grid-cols-2 gap-5 text-lg">
            <div>
              <p className="font-medium">Expense Description</p>
              <p>{expense.description}</p>
            </div>
            <div>
              <p className="font-medium">Category</p>
              <p>{expense.category}</p>
            </div>
            <div>
              <p className="font-medium">Provider/Company</p>
              <p>{expense.supplier}</p>
            </div>
            <div>
              <p className="font-medium">Date</p>
              <p>{expense.date}</p>
            </div>
            <div>
              <p className="font-medium">Price</p>
              <p>${expense.amount}</p>
            </div>
          </div>

          {/* image upload */}
          <div className="space-y-2.5">
            <label className="card_label">Upload Receipt</label>
            <label
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => setImagePreview(reader.result);
                  reader.readAsDataURL(file);
                }
              }}
              htmlFor="imageUpload"
              className="border-2 border-dashed bg-gradient-to-r from-[#F9FCFF] to-[#E3F2FD]/40 border-gray-300 rounded-[20px] flex flex-col items-center justify-center h-40 cursor-pointer"
            >
              {imagePreview ? (
                <div className="relative w-full h-full flex justify-center items-center">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="h-full object-contain"
                  />
                  <button
                    type="button"
                    onClick={() => setImagePreview("")}
                    className="absolute top-2 right-2 bg-white rounded-full shadow-md p-1 text-red-500 hover:text-red-700"
                    title="Remove image"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <div className="bg-white border border-[#EAECF0] w-10 h-10 rounded-[10px] flex items-center justify-center mb-3">
                    <FiUploadCloud className="text-[#6B7280] text-xl" />
                  </div>
                  <p className="text-lg text-sub-text">
                    Click to upload or drag and drop
                  </p>
                </div>
              )}
              <input
                id="imageUpload"
                type="file"
                {...register("receiptFile")}
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="card_btn_outline"
            >
              Cancel
            </button>
            <button type="submit" className="card_btn">
              Update
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
