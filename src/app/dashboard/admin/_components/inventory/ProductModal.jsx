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
      className="fixed inset-0 bg-black/40 flex justify-center items-center z-[9999] px-3"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-4 ms:px-8 md:py-5 rounded-[16px] w-full max-w-[730px] relative shadow-lg"
      >
        <h2 className="card_title">
          {editIndex !== null ? "Edit Product" : "Add New Product"}
        </h2>
        <form onSubmit={onSubmit} className="grid grid-cols-2 gap-2.5 md:gap-4">
          <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
            <label className="card_label">Product Name</label>
            <input
              {...register("productName")}
              className="card_input"
              required
            />
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
            <label className="card_label">Unit Type</label>
            <input
              {...register("unitType")}
              className="card_input"
              required
            />
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
            <label className="card_label">Current Stock</label>
            <input
              type="number"
              {...register("currentStock")}
              className="card_input"
              required
            />
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
            <label className="card_label">Minimum Stock</label>
            <input
              type="number"
              {...register("minimumStock")}
              className="card_input"
              required
            />
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
            <label className="card_label">Category</label>
            <select
              {...register("category")}
              className="card_input"
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
            <label className="card_label">
              Brand (Optional)
            </label>
            <input
              {...register("brand")}
              className="card_input"
            />
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
            <label className="card_label">
              Color/Specifications (Optional)
            </label>
            <input
              {...register("specification")}
              className="card_input"
            />
          </div>

          <div className="col-span-2 flex justify-end gap-3 mt-4">
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
              {editIndex !== null ? "Update Product" : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
