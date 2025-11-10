"use client";

import React, { useState, useEffect } from "react";
import { EditPen, TrashBin } from "../../../../../Components/Svg/SvgContainer";
import DeleteModal from "../DeleteModal";

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCWEWuvX2ZSZKhDu_SnC0pWgV_KEEONa07nr_pl-BpXOksK8m0",
      sku: "KSBROO1",
      category: "Modern Iron Single Door - Dark Bronze",
      description: "A sleek and modern single iron door design.",
      price: 9800,
      status: true,
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCWEWuvX2ZSZKhDu_SnC0pWgV_KEEONa07nr_pl-BpXOksK8m0",
      sku: "KSBROO1",
      category: "Modern Iron Single Door - Dark Bronze",
      description: "A sleek and modern single iron door design.",
      price: 9800,
      status: true,
    },
  ]);

  const [showProductModal, setShowProductModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [deleteProductData, setDeleteProductData] = useState(null);

  useEffect(() => {
    const handleOpen = () => {
      setEditingProduct(null);
      setShowProductModal(true);
    };
    document.addEventListener("openAddProduct", handleOpen);
    return () => document.removeEventListener("openAddProduct", handleOpen);
  }, []);

  const handleSaveProduct = (productData) => {
    if (editingProduct) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editingProduct.id ? { ...p, ...productData } : p
        )
      );
    } else {
      setProducts((prev) => [
        ...prev,
        { ...productData, id: Date.now(), image: "/door1.jpg", status: true },
      ]);
    }
    setShowProductModal(false);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowProductModal(true);
  };

  const handleDelete = (product) => {
    setDeleteProductData(product);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (deleteProductData) {
      setProducts((prev) => prev.filter((p) => p.id !== deleteProductData.id));
    }
    setShowDeleteModal(false);
  };

  const toggleStatus = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: !p.status } : p))
    );
  };

  return (
    <div className="w-full overflow-x-auto mt-6 min-h-screen px-2">
      <table className="w-full text-[#333] border-spacing-y-3 border-separate font-normal">
        <thead className="rounded-lg border custom-shadow-xl">
          <tr className="rounded-lg border bg-white">
            <th className="px-3 py-3 md:py-5 rounded-l-lg">Image</th>
            <th className="px-3 py-3 md:py-5">SKU</th>
            <th className="px-3 py-3 md:py-5">Category</th>
            <th className="px-3 py-3 md:py-5">Description</th>
            <th className="px-3 py-3 md:py-5">Price</th>
            <th className="px-3 py-3 md:py-5">Status</th>
            <th className="px-3 py-3 md:py-5 rounded-r-lg">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr
              key={p.id}
              className="border rounded-lg lg:text-lg custom-shadow-xl bg-white"
            >
              <td className="p-3 md:py-5 text-center rounded-l-lg">
                <img
                  src={p.image}
                  alt={p.category}
                  className="w-12 h-12 rounded object-cover mx-auto"
                />
              </td>
              <td className="px-3 py-3 md:py-5 text-center">{p.sku}</td>
              <td className="px-3 py-3 md:py-5 text-center">{p.category}</td>
              <td className="px-3 py-3 md:py-5 text-center">{p.description}</td>
              <td className="px-3 py-3 md:py-5 text-center">
                ${p.price.toFixed(2)}
              </td>
              <td className="p-3 md:py-5 text-center">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={p.status}
                    onChange={() => toggleStatus(p.id)}
                    className="hidden"
                  />
                  <div
                    className={`w-11 h-6 rounded-full relative transition-colors ${
                      p.status ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-transform ${
                        p.status ? "translate-x-5" : ""
                      }`}
                    ></div>
                  </div>
                </label>
              </td>
              <td className="px-3 py-3 md:py-5 text-center rounded-r-lg">
                <div className="flex items-center justify-center gap-2">
                  <button onClick={() => handleEdit(p)}>
                    <EditPen />
                  </button>
                  <button
                    onClick={() => handleDelete(p)}
                    className="bg-[#F34235] hover:bg-[#F34235]/80 size-7 rounded-full flex items-center justify-center"
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

      {/* modals */}

      {/* {showProductModal && (
        <ProductModal
          product={editingProduct}
          onClose={() => setShowProductModal(false)}
          onSave={handleSaveProduct}
        />
      )} */}

      {showDeleteModal && (
        <DeleteModal
          isOpen={showDeleteModal}
          type={"Product"}
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  );
};
export default Products;
