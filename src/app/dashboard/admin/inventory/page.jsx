"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { BellIcon } from "lucide-react";
import profilePicture from "../../../../Assets/profile.svg";

//svg
const PlusBlack = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6 12H18"
        stroke="#333333"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 6V18"
        stroke="#333333"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const page = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([{ name: "", description: "" }]);

  const [isProductModal, setIsProductModal] = useState(false);
  const [isCategoryModal, setIsCategoryModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState({
    open: false,
    type: "",
    index: null,
  });
  const [editProductIndex, setEditProductIndex] = useState(null);
  const [editCategoryIndex, setEditCategoryIndex] = useState(null);

  const {
    register: registerProduct,
    handleSubmit: handleProductSubmit,
    reset: resetProduct,
    setValue: setProductValue,
  } = useForm();
  const {
    register: registerCategory,
    handleSubmit: handleCategorySubmit,
    reset: resetCategory,
    setValue: setCategoryValue,
  } = useForm();

  // add or edit product
  const onSubmitProduct = (data) => {
    if (editProductIndex !== null) {
      const updated = [...products];
      updated[editProductIndex] = data;
      setProducts(updated);
      setEditProductIndex(null);
    } else {
      setProducts([...products, data]);
    }
    resetProduct();
    setIsProductModal(false);
  };

  // add or edit category
  const onSubmitCategory = (data) => {
    if (editCategoryIndex !== null) {
      const updated = [...categories];
      updated[editCategoryIndex] = {
        name: data.categoryName,
        description: data.categoryDescription,
      };
      setCategories(updated);
      setEditCategoryIndex(null);
    } else {
      setCategories([
        ...categories,
        { name: data.categoryName, description: data.categoryDescription },
      ]);
    }
    resetCategory();
    setIsCategoryModal(false);
  };

  // delete functionality
  const confirmDelete = () => {
    if (deleteModal.type === "product") {
      setProducts(products.filter((_, i) => i !== deleteModal.index));
    } else if (deleteModal.type === "category") {
      setCategories(categories.filter((_, i) => i !== deleteModal.index));
    }
    setDeleteModal({ open: false, type: "", index: null });
  };

  // edit product
  const handleEditProduct = (index) => {
    const p = products[index];
    setProductValue("productName", p.productName);
    setProductValue("unitType", p.unitType);
    setProductValue("currentStock", p.currentStock);
    setProductValue("minimumStock", p.minimumStock);
    setProductValue("category", p.category);
    setProductValue("brand", p.brand);
    setProductValue("color", p.color);
    setEditProductIndex(index);
    setIsProductModal(true);
  };

  // edit category
  const handleEditCategory = (index) => {
    const c = categories[index];
    setCategoryValue("categoryName", c.name);
    setCategoryValue("categoryDescription", c.description);
    setEditCategoryIndex(index);
    setIsCategoryModal(true);
  };

  return (
    <section className="text-primary-text w-full relative">
      {/* header */}
      <header className="bg-[#E4E3E0] text-[#333] p-6 rounded-[40px] border-l-2 border-[#bbb] shadow-[0_2px_0_0_rgba(0,_0,_0,_0.25)]">
        <nav className="flex items-center justify-between gap-4 mb-5 pb-5 border-[#555]/50 border-b">
          <h2 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-medium text-[#333]">
            Inventory Management
          </h2>
          {/* nav, cart, & profile */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-5">
              <button className="relative">
                <BellIcon className="text-[#F34235]" />
                <div className="size-5 text-white bg-[#F34235] rounded-full flex items-center justify-center text-xs absolute -top-1.5 -right-1.5 border-2 border-[#e4e3e0]">
                  2
                </div>
              </button>
              <div className="relative shrink-0 cursor-pointer">
                <Image
                  src={profilePicture}
                  width={48}
                  height={48}
                  alt=""
                  className="rounded-full"
                />
                <div className="size-4 rounded-full border-[3px] border-white bg-green-500 absolute -bottom-0.5 -right-0.5" />
              </div>
            </div>
          </div>
        </nav>
        <div className="flex items-center gap-5 mt-10 px-6 py-4">
          <button className="bg-[#D7D7D7] hover:bg-[#D7D7D7]/80 inline-flex items-center justify-center px-8 py-4 text-base lg:text-xl text-primary-text gap-2.5 rounded-[10px] border border-[#F5F4F4]/60 shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
            Add Product
            <PlusBlack />
          </button>
          <button className="bg-[#D7D7D7] hover:bg-[#D7D7D7]/80 inline-flex items-center justify-center px-8 py-4 text-base lg:text-xl text-primary-text gap-2.5 rounded-[10px] border border-[#F5F4F4]/60 shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
            Add Category
            <PlusBlack />
          </button>
        </div>
      </header>

      <div className="mt-6 min-h-screen">
        <div className="flex max-xl:flex-col gap-4 xl:gap-[30px]">
          {/* product tables */}
          <div className="w-full overflow-x-auto rounded-lg shadow-md bg-white">
            <table className="w-full text-[#333] border-spacing-y-3 border-separate">
              <thead className="rounded-lg text-sm md:text-base font-medium border shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
                <tr className="rounded-lg border">
                  <th className="px-3 py-3 md:py-5">Product Name</th>
                  <th className="px-3 py-3 md:py-5">Unit Type</th>
                  <th className="px-3 py-3 md:py-5">Current Stock</th>
                  <th className="px-3 py-3 md:py-5">Minimum Stock</th>
                  <th className="px-3 py-3 md:py-5">Category</th>
                  <th className="px-3 py-3 md:py-5">Brand</th>
                  <th className="px-3 py-3 md:py-5">Specification</th>
                  <th className="px-3 py-3 md:py-5">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p, i) => (
                  <tr
                    key={i}
                    className="border rounded-lg shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]"
                  >
                    <td className="p-3">{p.productName}</td>
                    <td className="p-3">{p.unitType}</td>
                    <td
                      className={`p-3 ${
                        p.currentStock < p.minimumStock
                          ? "bg-red-100 text-red-600 font-semibold"
                          : ""
                      }`}
                    >
                      {p.currentStock}
                    </td>
                    <td className="p-3">{p.minimumStock}</td>
                    <td className="p-3">{p.category}</td>
                    <td className="p-3">{p.brand}</td>
                    <td className="p-3">{p.color}</td>
                    <td className="p-3 flex items-center gap-2">
                      <button
                        onClick={() => handleEditProduct(i)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() =>
                          setDeleteModal({
                            open: true,
                            type: "product",
                            index: i,
                          })
                        }
                        className="text-red-600 hover:text-red-800"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
                {products.length === 0 && (
                  <tr>
                    <td colSpan="8" className="text-center text-gray-400 py-6">
                      No products yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* category tables */}
          <div className="max-w-[450px] w-full">
            <table className="w-full text-[#333] border-spacing-y-3 border-separate">
              <thead className="rounded-lg text-sm md:text-base font-medium border shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
                <tr className="rounded-lg border">
                  <th className="px-3 py-3 md:py-5">Category</th>
                  <th className="px-3 py-3 md:py-5">Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((c, i) => (
                  <tr
                    key={i}
                    className="border rounded-lg shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]"
                  >
                    <td className="p-3 flex items-center gap-2 relative group">
                      {c.name}
                      <div className="relative flex items-center">
                        <span className="cursor-pointer text-gray-500"></span>
                        <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <div className="absolute z-50 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-md -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                            {c.description || "No description"}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 flex items-center gap-2">
                      <button
                        onClick={() => handleEditCategory(i)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        
                      </button>
                      <button
                        onClick={() =>
                          setDeleteModal({
                            open: true,
                            type: "category",
                            index: i,
                          })
                        }
                        className="text-red-600 hover:text-red-800"
                      >
                        
                      </button>
                    </td>
                  </tr>
                ))}
                {categories.length === 0 && (
                  <tr>
                    <td colSpan="2" className="text-center text-gray-400 py-6">
                      No categories yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* all Modals */}

        {/* product modal */}
        {isProductModal && (
          <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-3">
            <div className="bg-white px-8 py-5 rounded-[16px] w-full max-w-[730px] relative shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
              <h2 className="card_title">
                {editProductIndex !== null ? "Edit Product" : "Add New Product"}
              </h2>
              <form
                onSubmit={handleProductSubmit(onSubmitProduct)}
                className="grid grid-cols-2 gap-4"
              >
                <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
                  <label className="text-base lg:text-xl">Product Name</label>
                  <input
                    {...registerProduct("productName")}
                    className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-lg 2xl:text-xl"
                    required
                  />
                </div>
                <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
                  <label className="text-base lg:text-xl">Unit Type</label>
                  <input
                    {...registerProduct("unitType")}
                    className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-lg 2xl:text-xl"
                    required
                  />
                </div>
                <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
                  <label className="text-base lg:text-xl">Current Stock</label>
                  <input
                    type="number"
                    {...registerProduct("currentStock")}
                    className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-lg 2xl:text-xl"
                    required
                  />
                </div>
                <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
                  <label className="text-base lg:text-xl">Minimum Stock</label>
                  <input
                    type="number"
                    {...registerProduct("minimumStock")}
                    className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-lg 2xl:text-xl"
                    required
                  />
                </div>
                <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
                  <label className="text-base lg:text-xl">Category</label>
                  <select
                    {...registerProduct("category")}
                    className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-lg 2xl:text-xl"
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
                  <label className="text-base lg:text-xl">Brand</label>
                  <input
                    {...registerProduct("brand")}
                    className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-lg 2xl:text-xl"
                  />
                </div>
                <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
                  <label className="text-base lg:text-xl">Specification</label>
                  <input
                    {...registerProduct("color")}
                    className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-lg 2xl:text-xl"
                  />
                </div>
                <div className="col-span-2 flex justify-end gap-3 mt-4">
                  <button
                    type="button"
                    onClick={() => setIsProductModal(false)}
                    className="px-8 py-4 bg-gray-400 text-white rounded-lg text-base xl:text-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-4 bg-[#21BBA2] text-white rounded-lg text-base xl:text-xl"
                  >
                    {editProductIndex !== null
                      ? "Update Product"
                      : "Add Product"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* category modal */}
        {isCategoryModal && (
          <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-3">
            <div className="bg-white px-8 py-5 rounded-[16px] w-full max-w-[384px] relative shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
              <h2 className="card_title">
                {editCategoryIndex !== null
                  ? "Edit Category"
                  : "Add New Category"}
              </h2>
              <form
                onSubmit={handleCategorySubmit(onSubmitCategory)}
                className="flex flex-col gap-4"
              >
                <div className="flex flex-col gap-2.5">
                  <label className="text-base lg:text-xl">Category Name</label>
                  <input
                    {...registerCategory("categoryName")}
                    className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-lg 2xl:text-xl"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <label className="text-base lg:text-xl">
                    Category Description
                  </label>
                  <textarea
                    {...registerCategory("categoryDescription")}
                    className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-lg 2xl:text-xl"
                    rows={4}
                  />
                </div>
                <div className="flex justify-end gap-3 mt-2">
                  <button
                    type="button"
                    onClick={() => setIsCategoryModal(false)}
                    className="px-4 py-3 bg-gray-400 text-white rounded-lg text-sm md:text-base"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-3 bg-[#21BBA2] text-white rounded-lg text-sm md:text-base"
                  >
                    {editCategoryIndex !== null
                      ? "Update Category"
                      : "Add Category"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* delete modal */}
        {deleteModal.open && (
          <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-3">
            <div className="bg-white px-8 py-5 rounded-[16px] w-full max-w-[585px] relative shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
              <h2 className="md:text-xl">
                Are you sure you would like to delete this{" "}
                {deleteModal.type === "product" ? "Product" : "Category"}?
              </h2>
              <div className="flex justify-center gap-4 xl:gap-10 mt-4 xl:mt-7">
                <button
                  onClick={() =>
                    setDeleteModal({ open: false, type: "", index: null })
                  }
                  className="bg-white border border-[#21BBA2] text-[#21BBA2] lg:text-lg px-8 py-4 rounded-lg"
                >
                  No
                </button>
                <button
                  onClick={confirmDelete}
                  className="bg-white border border-[#21BBA2] text-[#21BBA2] lg:text-lg px-8 py-4 rounded-lg"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default page;
