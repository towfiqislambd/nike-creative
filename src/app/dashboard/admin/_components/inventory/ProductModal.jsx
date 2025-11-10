"use client";
const ProductModal = ({
  isOpen,
  onClose,
  onSubmit,
  register,
  editIndex,
  categories,
}) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-3"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white px-8 py-5 rounded-[16px] w-full max-w-[730px] relative shadow-lg"
      >
        <h2 className="card_title">
          {editIndex !== null ? "Edit Product" : "Add New Product"}
        </h2>
        <form onSubmit={onSubmit} className="grid grid-cols-2 gap-4">
          <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
            <label className="block text-base xl:text-xl">Product Name</label>
            <input
              {...register("productName")}
              className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-xl"
              required
            />
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
            <label className="block text-base xl:text-xl">Unit Type</label>
            <input
              {...register("unitType")}
              className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-xl"
              required
            />
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
            <label className="block text-base xl:text-xl">Current Stock</label>
            <input
              type="number"
              {...register("currentStock")}
              className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-xl"
              required
            />
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
            <label className="block text-base xl:text-xl">Minimum Stock</label>
            <input
              type="number"
              {...register("minimumStock")}
              className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-xl"
              required
            />
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
            <label className="block text-base xl:text-xl">Category</label>
            <select
              {...register("category")}
              className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-xl"
              required
            >
              <option value="">Select Category</option>
              {categories.map((c, i) => (
                <option key={i} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
            <label className="block text-base xl:text-xl">
              Brand (Optional)
            </label>
            <input
              {...register("brand")}
              className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-xl"
            />
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
            <label className="block text-base xl:text-xl">
              Color/Specifications (Optional)
            </label>
            <input
              {...register("specification")}
              className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-xl"
            />
          </div>

          <div className="col-span-2 flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-8 py-4 bg-gray-400 text-white rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-4 bg-[#21BBA2] text-white rounded-lg"
            >
              {editIndex !== null ? "Update Product" : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
