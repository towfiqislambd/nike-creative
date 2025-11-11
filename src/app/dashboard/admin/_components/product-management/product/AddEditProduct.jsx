import { useForm } from "react-hook-form";
import { useState } from "react";
import ChooseItemModal from "./ChooseItemModal";
import Modal from "../../../../../../Components/Common/Modal";
import { Plus, X } from "lucide-react";
import { FiUploadCloud } from "react-icons/fi";

export default function AddEditProduct({ open, onClose, onSubmit, product }) {
  const { register, handleSubmit } = useForm({
    defaultValues: product || {
      sku: "",
      category: "",
      visibility: "Restricted Visibility",
      companies: [],
      fields: [],
      colors: [],
      description: "",
      image: "",
    },
  });

  const [companies, setCompanies] = useState(product?.companies || []);
  const [fields, setFields] = useState(product?.fields || []);
  const [colors, setColors] = useState(product?.colors || []);
  const [showChooseModal, setShowChooseModal] = useState(null); // "company", "field", "color"
  const [imagePreview, setImagePreview] = useState(product?.image || "");

  const handleAddItem = (type, item) => {
    if (type === "company") setCompanies((prev) => [...prev, item]);
    if (type === "field") setFields((prev) => [...prev, item]);
    if (type === "color") setColors((prev) => [...prev, item]);
    setShowChooseModal(null);
  };

  const handleDeleteItem = (type, itemToRemove) => {
    if (type === "company")
      setCompanies((prev) => prev.filter((item) => item !== itemToRemove));
    if (type === "field")
      setFields((prev) => prev.filter((item) => item !== itemToRemove));
    if (type === "color")
      setColors((prev) => prev.filter((item) => item !== itemToRemove));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const onFormSubmit = (data) => {
    data.companies = companies;
    data.fields = fields;
    data.colors = colors;
    data.image = imagePreview;
    onSubmit(data);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        className={"max-w-[730px] md:rounded-[20px]"}
      >
        <div className="px-2.5 relative">
          <h2 className="card_title">
            {product ? "Edit Product" : "Add Product Display"}
          </h2>

          <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
            {/* SKU and Category */}
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
                <label className="card_label">
                  <p>SKU</p>
                </label>
                <input
                  {...register("sku")}
                  placeholder="SKU"
                  type="text"
                  className="card_input"
                />
              </div>
              <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
                <label className="card_label">Category</label>
                <select {...register("category")} className="card_input">
                  <option value={product?.category}>
                    {product ? product?.category : "Choose an option"}
                  </option>
                  <option value="category">category 1</option>
                  <option value="ca">category 2</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
                <label className="text-base xl:text-xl flex items-center justify-between">
                  <p>Visibility</p>
                </label>
                <select {...register("visibility")} className="card_input">
                  <option>Restricted Visibility</option>
                  <option>Public</option>
                </select>
              </div>
              {/* for company field */}
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-base xl:text-xl flex items-center justify-between">
                    Choose companies
                  </label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {companies.map((com, i) => (
                      <div
                        key={i}
                        className="bg-[#F5F5F5] text-xs px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 custom-shadow-xl"
                      >
                        {com}
                        <button
                          type="button"
                          onClick={() => handleDeleteItem("company", com)}
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                    {companies.length === 0 && (
                      <div className="text-center text-gray-400">
                        No company added.
                      </div>
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowChooseModal("company")}
                  className="bg-[#21BBA2] hover:bg-[#21BBA2]/80 text-white size-8 flex items-center justify-center rounded-full shrink-0"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {/* for field */}
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-base xl:text-xl flex items-center justify-between">
                    Field
                  </label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {fields.map((field, i) => (
                      <div
                        key={i}
                        className="bg-[#F5F5F5] text-xs px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 custom-shadow-xl"
                      >
                        {field}
                        <button
                          type="button"
                          onClick={() => handleDeleteItem("field", field)}
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                    {companies.length === 0 && (
                      <div className="text-center text-gray-400">
                        No field added.
                      </div>
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowChooseModal("field")}
                  className="bg-[#21BBA2] hover:bg-[#21BBA2]/80 text-white size-8 flex items-center justify-center rounded-full shrink-0"
                >
                  <Plus size={16} />
                </button>
              </div>
              {/* for color field */}
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-base xl:text-xl flex items-center justify-between">
                    Color
                  </label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {colors.map((color, i) => (
                      <div
                        key={i}
                        className="bg-[#F5F5F5] text-xs px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 custom-shadow-xl"
                      >
                        {color}
                        <button
                          type="button"
                          onClick={() => handleDeleteItem("color", color)}
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                    {colors.length === 0 && (
                      <div className="text-center text-gray-400">
                        No color added.
                      </div>
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowChooseModal("color")}
                  className="bg-[#21BBA2] hover:bg-[#21BBA2]/80 text-white size-8 flex items-center justify-center rounded-full shrink-0"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* description */}
            <div className="flex flex-col gap-2.5">
              <label className="card_label">Description</label>
              <textarea
                {...register("description")}
                placeholder="Category Description"
                rows="5"
                className="border w-full border-[#CFCFCF] rounded-lg p-2 text-base"
                required
              ></textarea>
            </div>

            {/* image upload */}
            <div className="space-y-2.5">
              <label className="card_label">Upload Photo</label>
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
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>

            {/* buttons */}
            <div className="flex justify-end gap-2 mt-4">
              <button
                type="button"
                onClick={onClose}
                className="card_btn_outline"
              >
                Cancel
              </button>
              <button type="submit" className="card_btn">
                {product ? "Update" : "Add Product"}
              </button>
            </div>
          </form>
        </div>
      </Modal>

      {showChooseModal && (
        <ChooseItemModal
          open={open}
          type={showChooseModal}
          onAdd={handleAddItem}
          onClose={() => setShowChooseModal(null)}
        />
      )}
    </div>
  );
}
