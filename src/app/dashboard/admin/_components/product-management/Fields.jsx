"use client";
import React, { useState, useEffect } from "react";
import { EditPen, TrashBin } from "../../../../../Components/Svg/SvgContainer";
import AddEditFields from "./AddEditFields";

const fields = [
  {
    id: "1",
    name: "door fields",
  },
  {
    id: "2",
    name: "window fields",
  },
  {
    id: "3",
    name: "door fields",
  },
  {
    id: "4",
    name: "window fields",
  },
];

const Fields = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleAdd = () => {
      // setEditingField(null);
      setIsModalOpen(true);
    };
    document.addEventListener("openAddField", handleAdd);
    return () => document.removeEventListener("openAddField", handleAdd);
  }, []);

  const handleEdit = (id) => {
    setIsModalOpen(true);
    // edit field
  };

  const handleDelete = (id) => {
    // delete field
  };

  return (
    <section className="mt-5">
      <div className="max-w-[289px] w-full bg-white rounded-[20px] p-6">
        <h2 className="card_title">Fields</h2>
        <div className="flex flex-col gap-5">
          {fields.map(({ id, name }) => (
            <div key={id} className="flex items-center justify-between">
              <p>{name}</p>
              <div className="flex items-center justify-center gap-3">
                <button onClick={() => handleEdit(id)}>
                  <EditPen />
                </button>
                <button
                  onClick={() => handleDelete(id)}
                  className="bg-[#F34235] hover:bg-[#F34235]/80 size-6 rounded-full flex items-center justify-center"
                >
                  <TrashBin />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <AddEditFields
          fields={fields}
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
};

export default Fields;
