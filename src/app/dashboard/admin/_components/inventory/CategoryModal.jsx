"use client";
const CategoryModal = ({ isOpen, onClose, onSubmit, register, editIndex }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 flex justify-center items-center z-[9999] px-3"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-4 sm:px-8 sm:py-5 rounded-[16px] w-full max-w-[500px] relative shadow-lg"
      >
        <h2 className="card_title">
          {editIndex !== null ? "Edit Category" : "Add New Category"}
        </h2>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2.5">
            <label className="block text-base xl:text-xl">Category Name</label>
            <input
              {...register("categoryName")}
              className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-lg"
              required
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <label className="block text-base xl:text-xl">
              Category Description
            </label>
            <textarea
              {...register("categoryDescription")}
              className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base"
              rows={4}
            />
          </div>
          <div className="flex justify-end gap-3 mt-2">
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
              {editIndex !== null ? "Update Category" : "Add Category"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CategoryModal;
