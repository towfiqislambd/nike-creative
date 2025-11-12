"use client";
import { useEffect, useState } from "react";
import CategoryModal from "./CategoryModal";
import DeleteModal from "../../../../../Components/Common/DeleteModal";
import { EditPen, TrashBin } from "../../../../../Components/Svg/SvgContainer";

const Categories = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Single Door Designs",
      description:
        "Single Door Designs dfjsg'psjg'psjg psjgp psjgp' sjgpjsjgp pjsgpjos'gj'sjgp sjgjsg gjsgj sjg",
    },
    {
      id: 2,
      name: "Double Door Designs",
      description:
        "Single Door Designs dfjsg'psjg'psjg psjgp psjgp' sjgpjsjgp pjsgpjos'gj'sjgp sjgjsg gjsgj sjg",
    },
    {
      id: 3,
      name: "Single Door Designs",
      description:
        "Single Door Designs dfjsg'psjg'psjg psjgp psjgp' sjgpjsjgp pjsgpjos'gj'sjgp sjgjsg gjsgj sjg",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [deleteCategoryData, setDeleteCategoryData] = useState(null);

  useEffect(() => {
    const handleAdd = () => {
      setEditingCategory(null);
      setShowModal(true);
    };
    document.addEventListener("openAddCategory", handleAdd);
    return () => document.removeEventListener("openAddCategory", handleAdd);
  }, []);

  const handleSaveCategory = (data) => {
    if (editingCategory) {
      setCategories((prev) =>
        prev.map((c) => (c.id === editingCategory.id ? { ...c, ...data } : c))
      );
    } else {
      setCategories((prev) => [...prev, { id: Date.now(), ...data }]);
    }
    setShowModal(false);
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setShowModal(true);
  };

  const handleDelete = (category) => {
    setDeleteCategoryData(category);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (deleteCategoryData) {
      setCategories((prev) =>
        prev.filter((c) => c.id !== deleteCategoryData.id)
      );
    }
    setShowDeleteModal(false);
  };

  return (
    <div className="bg-white w-full max-w-[497px] mx-auto mt-8 rounded-lg p-[30px] shadow-md">
      <h2 className="card_title md:!mb-5">Existing Categories</h2>

      <div className="flex flex-col gap-5">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="rounded-lg p-2.5 custom-shadow-xl bg-white"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-lg xl:text-xl font-semibold mb-2">
                {cat.name}
              </h3>
              <div className="flex items-center justify-center gap-2">
                <button onClick={() => handleEdit(cat)}>
                  <EditPen />
                </button>
                <button
                  onClick={() => handleDelete(cat)}
                  className="bg-[#F34235] hover:bg-[#F34235]/80 size-7 rounded-full flex items-center justify-center"
                >
                  <TrashBin />
                </button>
              </div>
            </div>
            <p className="text-gray-600 text-sm xl:text-base mt-1">
              {cat.description}
            </p>
          </div>
        ))}

        {categories.length === 0 && (
          <p className="text-gray-500 text-center py-4">No category.</p>
        )}
      </div>

      {/* modals */}
      {showModal && (
        <CategoryModal
          isOpen={showModal}
          category={editingCategory}
          onClose={() => setShowModal(false)}
          onSave={handleSaveCategory}
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          isOpen={showDeleteModal}
          type={"Category"}
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  );
};

export default Categories;
