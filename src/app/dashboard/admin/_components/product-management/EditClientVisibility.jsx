import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Plus, X } from "lucide-react";
import Modal from "../../../../../Components/Common/Modal";

const EditClientVisibility = ({ client, onSave }) => {
  const { handleSubmit } = useForm({ defaultValues: client });
  const [localClient, setLocalClient] = useState(client);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const handleRemoveCategory = (cat) => {
    setLocalClient({
      ...localClient,
      categories: localClient.categories.filter((c) => c !== cat),
    });
  };

  const handleAddCategory = () => {
    if (newCategory && !localClient.categories.includes(newCategory)) {
      setLocalClient({
        ...localClient,
        categories: [...localClient.categories, newCategory],
      });
    }
    setShowAddModal(false);
    setNewCategory("");
  };

  const onSubmit = () => {
    onSave(localClient);
  };

  return (
    <div className="bg-white flex-1 w-full min-w-[300px] mt-3 max-w-[500px] custom-shadow-xl p-5 rounded-md relative">
      <h2 className="card_title">Edit Clients Visibility</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-lg xl:text-xl font-medium mb-2.5">
            Company Name
          </label>
          <p>{localClient.company}</p>
        </div>

        <div className="mb-4">
          <label className="block text-lg xl:text-xl font-medium mb-2.5">
            Category
          </label>
          <div className="flex flex-wrap gap-2.5">
            {localClient.categories.map((cat) => (
              <div
                key={cat}
                className="bg-[#F5F5F5] text-xs px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 custom-shadow-xl"
              >
                {cat}
                <button type="button" onClick={() => handleRemoveCategory(cat)}>
                  <X size={14} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => setShowAddModal(true)}
              className="bg-[#21BBA2] hover:bg-[#21BBA2]/80 text-white size-8 flex items-center justify-center rounded-full"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>

        <div className="flex justify-end mt-6 xl:mt-10">
          <button
            type="submit"
            className="bg-white border border-[#21BBA2] text-[#21BBA2] px-8 py-4 rounded-lg"
          >
            Save
          </button>
        </div>
      </form>

      {/* add category modal */}
      {showAddModal && (
        <Modal
          open={showAddModal}
          onClose={() => setShowAddModal(false)}
          className={"!max-w-[385px] rounded-[20px]"}
        >
          <div className="bg-white w-full">
            <h2 className="card_title">Add Category</h2>

            <label className="block text-lg xl:text-xl font-medium mb-2.5">
              Category
            </label>
            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="w-full mb-5 border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-xl"
            >
              <option value="">Select category</option>
              <option value="Single Door Designs">Single Door Designs</option>
              <option value="Double Door Designs">Double Door Designs</option>
              <option value="Windows">Windows</option>
              <option value="Garage Doors">Garage Doors</option>
              <option value="All Categories">All Categories</option>
            </select>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowAddModal(false)}
                className="bg-white border border-[#21BBA2] text-[#21BBA2] px-8 py-4 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCategory}
                className="bg-[#21bba2] border border-[#21BBA2] text-white px-8 py-4 rounded-lg"
              >
                Add
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default EditClientVisibility;
