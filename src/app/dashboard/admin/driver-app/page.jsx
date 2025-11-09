"use client";
import React, { useState } from "react";
import ArrivalItemModal from "../_components/ArrivalItemModal";
import { EditSvg } from "../../../../Components/Svg/SvgContainer";
import { FaRegTrashCan } from "react-icons/fa6";

export default function ArrivalChecklist() {
  const [items, setItems] = useState([
    { id: "a1", text: "Clean the glass surface" },
    { id: "a2", text: "Verify design and color" },
    { id: "a3", text: "Place guides for alignment" },
    { id: "a4", text: 'Check Door Size (DLO: 22x64")' },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [mode, setMode] = useState("add");
  const [editing, setEditing] = useState(null);

  const openAdd = () => {
    setMode("add");
    setEditing(null);
    setModalOpen(true);
  };

  const openEdit = row => {
    setMode("edit");
    setEditing(row);
    setModalOpen(true);
  };

  const onSubmit = text => {
    if (mode === "edit" && editing) {
      setItems(prev =>
        prev.map(i => (i.id === editing.id ? { ...i, text } : i))
      );
    } else {
      setItems(prev => [...prev, { id: "a_" + Date.now(), text }]);
    }
    setModalOpen(false);
  };

  const onDelete = id => setItems(prev => prev.filter(i => i.id !== id));

  return (
    <>
      <div className="mb-6">
        <div className="relative rounded-[28px] bg-[#E0DDD7] px-6 py-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <h1 className="text-[32px] font-semibold text-[#333]">
              Deductions
            </h1>

            <div className="flex items-center gap-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-black/10">
                <img
                  alt="avatar"
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=120&auto=format&fit=crop"
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#21BBA2] ring-2 ring-white" />
              </div>
            </div>
          </div>

          <div className="my-4 h-px w-full bg-black/15" />
        </div>
      </div>
      <section className="mt-2 w-[50%]">
        <div className="flex items-center justify-between">
          <h2 className="text-[28px] md:text-[32px] font-semibold text-[#333]">
            Arrival Checklist
          </h2>

          <button
            onClick={openAdd}
            className="grid h-9 w-9 place-items-center rounded-full bg-[#21BBA2] text-white text-xl shadow-md hover:bg-[#1aa58e]"
            aria-label="Add arrival item"
            title="Add"
          >
            +
          </button>
        </div>

        <div className="mt-3 h-[2px] w-full bg-black/10" />

        <div className="mt-4">
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-y-[12px]">
              <thead>
                <tr>
                  <th className="th">Text</th>
                  <th className="th">Actions</th>
                </tr>
              </thead>

              <tbody>
                {items.map(r => (
                  <tr key={r.id} className="[&_td]:bg-white">
                    <td className="td">
                      <div className="flex items-center justify-center  gap-3">
                        <span className="truncate">{r.text}</span>
                        <button
                          onClick={() => openEdit(r)}
                          className="ml-3 text-gray-500 hover:text-gray-700"
                          title="Edit"
                        >
                          <EditSvg />
                        </button>
                      </div>
                    </td>

                    <td className={`td  text-center `}>
                      <button
                        onClick={() => onDelete(r.id)}
                        className="inline-flex items-center justify-center rounded-full bg-red-500/10 px-3 py-3 text-red-600 hover:bg-red-500/20"
                        title="Delete"
                      >
                        <FaRegTrashCan />
                      </button>
                    </td>
                  </tr>
                ))}

                {items.length === 0 && (
                  <tr>
                    <td
                      colSpan={2}
                      className="bg-white px-5 py-10 text-center text-gray-500 rounded-xl shadow-[0_6px_18px_rgba(0,0,0,0.08)]"
                    >
                      No checklist items yet. Click “+” to add one.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <ArrivalItemModal
          open={modalOpen}
          mode={mode}
          initialText={editing?.text}
          onClose={() => setModalOpen(false)}
          onSubmit={onSubmit}
        />
      </section>
    </>
  );
}
