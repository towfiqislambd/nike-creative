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

// all modals
import ProductModal from "../_components/inventory/ProductModal";
import CategoryModal from "../_components/inventory/CategoryModal";
import DeleteModal from "../../../../Components/Common/DeleteModal";

const InventoryPage = () => {
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
  ]);

  const [categories, setCategories] = useState([
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

  const confirmDelete = () => {
    if (deleteModal.type === "product") {
      setProducts(products.filter((_, i) => i !== deleteModal.index));
    } else if (deleteModal.type === "category") {
      setCategories(categories.filter((_, i) => i !== deleteModal.index));
    }
    setDeleteModal({ open: false, type: "", index: null });
  };

  const handleEditProduct = (index) => {
    const p = products[index];
    Object.entries(p).forEach(([key, value]) => setProductValue(key, value));
    setEditProductIndex(index);
    setIsProductModal(true);
  };

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
      <header className="bg-[#E4E3E0] p-2 sm:px-2.5 sm:pt-2 sm:pb-1.5 rounded-xl md:rounded-[20px] border-l-2 border-[#bbb] shadow-[0_2px_0_0_rgba(0,_0,_0,_0.25)]">
        <nav className="flex items-center justify-between gap-4 pb-1.5 border-[#555]/50 border-b">
          <h2 className="dashboard_title">
            Inventory Management
          </h2>
          <div className="flex items-center gap-3">
            <button className="relative">
              <BellIcon className="text-[#F34235]" />
              <div className="size-5 text-white bg-[#F34235] rounded-full flex items-center justify-center text-xs absolute -top-1.5 -right-1.5 border-2 border-[#e4e3e0]">
                2
              </div>
            </button>
            <div className="relative shrink-0 cursor-pointer">
              <Image
                src={profilePicture}
                width={36}
                height={36}
                alt="profile"
                className="rounded-full"
              />
              <div className="size-3 rounded-full border-[2px] border-white bg-green-500 absolute -bottom-0.5 -right-0.5" />
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-2 sm:px-2 pt-2 pb-1">
          <button
            onClick={() => {
              resetProduct();
              setEditProductIndex(null);
              setIsProductModal(true);
            }}
            className="dashboard_header_btn"
          >
            Add Product <PlusBlack />
          </button>

          <button
            onClick={() => {
              resetCategory();
              setEditCategoryIndex(null);
              setIsCategoryModal(true);
            }}
            className="dashboard_header_btn"
          >
            Add Category <PlusBlack />
          </button>
        </div>
      </header>

      {/* tables */}
      <div className="mt-2">
        <div className="flex max-xl:flex-col gap-2 xl:gap-3">
          {/* product tables */}
          <div className="w-full overflow-x-auto px-1">
            <table className="w-full text-[#333] border-spacing-y-1.5 sm:border-spacing-y-3 border-separate text-sm text-nowrap">
              <thead className="rounded-lg border custom-shadow-xl">
                <tr className="rounded-lg border bg-white">
                  <th className="px-3 py-3 font-medium rounded-l-lg">
                    Product Name
                  </th>
                  <th className="px-3 py-3 font-medium">Unit Type</th>
                  <th className="px-3 py-3 font-medium">Current Stock</th>
                  <th className="px-3 py-3 font-medium">Minimum Stock</th>
                  <th className="px-3 py-3 font-medium">Category</th>
                  <th className="px-3 py-3 font-medium">Brand</th>
                  <th className="px-3 py-3 font-medium">Specification</th>
                  <th className="px-3 py-3 font-medium text-end rounded-r-lg">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p, i) => (
                  <tr
                    key={i}
                    className="border rounded-lg custom-shadow-xl text-[13.5px] bg-white"
                  >
                    <td className="px-3 py-2.5 text-center rounded-l-lg">
                      {p.productName}
                    </td>
                    <td className="px-3 py-2.5 text-center">
                      {p.unitType}
                    </td>
                    <td
                      className={`px-3 py-2.5 text-center ${
                        p.currentStock < p.minimumStock
                          ? "bg-[#FF484240] text-red-600 font-semibold"
                          : ""
                      }`}
                    >
                      {p.currentStock}
                    </td>
                    <td className="px-3 py-2.5 text-center">
                      {p.minimumStock}
                    </td>
                    <td className="px-3 py-2.5 text-center">
                      {p.category}
                    </td>
                    <td className="px-3 py-2.5 text-center">{p.brand}</td>
                    <td className="px-3 py-2.5 text-center">
                      {p.specification}
                    </td>
                    <td className="px-3 py-2.5 text-center rounded-r-lg">
                      <div className="flex items-center justify-end gap-1.5">

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
                        className="bg-[#F34235] hover:bg-[#F34235]/80 size-5.5 rounded-full flex items-center justify-center"
                        >
                        <TrashBin />
                      </button>
                        </div>
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
            <table className="w-full text-[#333] border-spacing-y-1.5 md:border-spacing-y-3 border-separate">
              <thead className="rounded-lg text-sm md:text-[15px] border custom-shadow-xl">
                <tr className="rounded-lg border bg-white">
                  <th className="px-3 py-3 max-sm:text-left rounded-l-lg font-medium">Category</th>
                  <th className="px-3 py-3 rounded-r-lg font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, idx) => (
                  <tr key={idx} className="border rounded-lg custom-shadow-xl bg-white text-sm">
                    <td className="px-3 py-3 text-center rounded-l-lg">
                      <div className="flex items-center gap-1.5">
                        {category.name}
                        <div className="relative flex items-center group">
                          <button>
                            <Info size={16} />
                          </button>
                          <div className="absolute bg-white text-[15px] border border-[#F5F4F4] px-3 py-2 rounded-t-lg rounded-bl-lg -top-11 right-2 whitespace-nowrap hidden group-hover:block transition custom-shadow-xl">
                            {category.description || "No description"}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-3 rounded-r-lg">
                      <div className="flex items-center justify-end gap-2.5">
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
                          className="bg-[#F34235] hover:bg-[#F34235]/80 size-5.5 rounded-full flex items-center justify-center"
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
      </div>

      {/* all modals */}
      <ProductModal
        isOpen={isProductModal}
        onClose={() => setIsProductModal(false)}
        onSubmit={handleProductSubmit(onSubmitProduct)}
        register={registerProduct}
        editIndex={editProductIndex}
        categories={categories}
      />

      <CategoryModal
        isOpen={isCategoryModal}
        onClose={() => setIsCategoryModal(false)}
        onSubmit={handleCategorySubmit(onSubmitCategory)}
        register={registerCategory}
        editIndex={editCategoryIndex}
      />

      <DeleteModal
        isOpen={deleteModal.open}
        type={deleteModal.type}
        onCancel={() => setDeleteModal({ open: false, type: "", index: null })}
        onConfirm={confirmDelete}
      />
    </section>
  );
};

export default InventoryPage;
