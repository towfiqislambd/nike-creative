"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { BellIcon, Info } from "lucide-react";
import profilePicture from "../../../../Assets/profile.svg";
import {
  EditPen,
  PlusBlack,
  TrashBin,
} from "../../../../Components/Svg/SvgContainer";

const page = () => {
  const [products, setProducts] = useState([
    {
      productName: "Steel Screws",
      unitType: "Pack",
      category: "Office Supplies",
      brand: "MetalCorp",
      currentStock: "11",
      minimumStock: "20",
      specification: "1/16 inch thickness",
    },
    {
      productName: "Steel Screws",
      unitType: "Pack",
      category: "Office Supplies",
      brand: "MetalCorp",
      currentStock: "11",
      minimumStock: "20",
      specification: "1/16 inch thickness",
    },
    {
      productName: "Steel Screws",
      unitType: "Pack",
      category: "Office Supplies",
      brand: "MetalCorp",
      currentStock: "30",
      minimumStock: "20",
      specification: "1/16 inch thickness",
    },
    {
      productName: "Steel Screws",
      unitType: "Pack",
      category: "Office Supplies",
      brand: "MetalCorp",
      currentStock: "60",
      minimumStock: "20",
      specification: "1/16 inch thickness",
    },
    {
      productName: "Steel Screws",
      unitType: "Pack",
      category: "Office Supplies",
      brand: "MetalCorp",
      currentStock: "11",
      minimumStock: "20",
      specification: "1/16 inch thickness",
    },
    {
      productName: "Steel Screws",
      unitType: "Pack",
      category: "Office Supplies",
      brand: "MetalCorp",
      currentStock: "11",
      minimumStock: "10",
      specification: "1/16 inch thickness",
    },
  ]);
  const [categories, setCategories] = useState([
    { name: "Office Supplies", description: "This category description" },
    { name: "Office Supplies", description: "This category description" },
    { name: "Office Supplies", description: "This category description" },
    { name: "Office Supplies", description: "This category description" },
    { name: "Office Supplies", description: "This category description" },
    { name: "Office Supplies", description: "This category description" },
  ]);

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

  // delete product or category
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
    setProductValue("specification", p.specification);
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
      <header className="bg-[#E4E3E0] text-[#333] p-6 rounded-[40px] border-l-2 border-[#bbb] shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
        <nav className="flex items-center justify-between gap-4 mb-5 pb-5 border-[#555]/50 border-b">
          <h2 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-medium text-[#333]">
            Inventory Management
          </h2>
          {/* notification & profile */}
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
          <button
            onClick={() => {
              resetProduct();
              setEditProductIndex(null);
              setIsProductModal(true);
            }}
            className="bg-[#D7D7D7] hover:bg-[#D7D7D7]/80 inline-flex items-center justify-center px-8 py-4 text-base lg:text-xl text-primary-text gap-2.5 rounded-[10px] border border-[#F5F4F4]/60 shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]"
          >
            Add Product
            <PlusBlack />
          </button>
          <button
            onClick={() => {
              resetCategory();
              setEditCategoryIndex(null);
              setIsCategoryModal(true);
            }}
            className="bg-[#D7D7D7] hover:bg-[#D7D7D7]/80 inline-flex items-center justify-center px-8 py-4 text-base lg:text-xl text-primary-text gap-2.5 rounded-[10px] border border-[#F5F4F4]/60 shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]"
          >
            Add Category
            <PlusBlack />
          </button>
        </div>
      </header>
      {/* all tables */}
      <div className="mt-6 min-h-screen">
        <div className="flex max-xl:flex-col gap-4 xl:gap-[30px]">
          {/* product tables */}
          <div className="w-full overflow-x-auto px-2">
            <table className="w-full text-[#333] border-spacing-y-3 border-separate text-sm">
              <thead className="rounded-lg font-medium border shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
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
                    <td className="px-3 py-3 md:py-5 text-center">
                      {p.productName}
                    </td>
                    <td className="px-3 py-3 md:py-5 text-center">
                      {p.unitType}
                    </td>
                    <td
                      className={`px-3 py-3 md:py-5 text-center ${
                        p.currentStock < p.minimumStock
                          ? "bg-[#FF484240] text-red-600 font-semibold"
                          : ""
                      }`}
                    >
                      {p.currentStock}
                    </td>
                    <td className="px-3 py-3 md:py-5 text-center">
                      {p.minimumStock}
                    </td>
                    <td className="px-3 py-3 md:py-5 text-center">
                      {p.category}
                    </td>
                    <td className="px-3 py-3 md:py-5 text-center">{p.brand}</td>
                    <td className="px-3 py-3 md:py-5 text-center">
                      {p.specification}
                    </td>
                    <td className="px-3 py-3 md:py-5 text-center flex items-center gap-2">
                      <button onClick={() => handleEditProduct(i)}>
                        <EditPen />
                      </button>
                      <button
                        onClick={() =>
                          setDeleteModal({
                            open: true,
                            type: "product",
                            index: i,
                          })
                        }
                        className="bg-[#F34235] hover:bg-[#F34235]/80 size-7 rounded-full flex items-center justify-center"
                      >
                        <TrashBin />
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
              <thead className="rounded-lg text-base xl:text-[20px] font-medium border shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
                <tr className="rounded-lg border">
                  <th className="px-3 py-3 md:py-5">Category</th>
                  <th className="px-3 py-3 md:py-5">Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, idx) => (
                  <tr
                    key={idx}
                    className="border rounded-lg shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]"
                  >
                    <td className="px-3 py-3 md:py-5 text-center">
                      <div className="flex items-center gap-2.5">
                        {category.name}
                        <div className="relative flex items-center group">
                          <button>
                            <Info size={20} />
                          </button>
                          <div className="absolute bg-white text-base xl:text-lg border border-[#F5F4F4] px-3.5 xl:px-5 py-2.5 xl:py-3.5 rounded-t-[20px] rounded-bl-[20px] -top-16 right-2 whitespace-nowrap hidden group-hover:block transition shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
                            {category.description || "No description"}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-3 md:py-5 flex items-center justify-end">
                      <div className="flex items-center gap-2.5">
                        <button onClick={() => handleEditCategory(idx)}>
                          <EditPen />
                        </button>
                        <button
                          onClick={() =>
                            setDeleteModal({
                              open: true,
                              type: "category",
                              index: idx,
                            })
                          }
                          className="bg-[#F34235] hover:bg-[#F34235]/80 size-7 rounded-full flex items-center justify-center"
                        >
                          <TrashBin />
                        </button>
                      </div>
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
                  <label className="text-base lg:text-xl">
                    Brand (Optional)
                  </label>
                  <input
                    {...registerProduct("brand")}
                    className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-lg 2xl:text-xl"
                  />
                </div>
                <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
                  <label className="text-base lg:text-xl">
                    Color/Specifications (Optional)
                  </label>
                  <input
                    {...registerProduct("specification")}
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
