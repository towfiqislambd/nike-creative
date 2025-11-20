"use client";
import React, { useState } from "react";
import ArrivalItemModal from "../_components/ArrivalItemModal";
import PreDepartureItemModal from "../_components/PreDepartureItemModal";
import { EditSvg } from "../../../../Components/Svg/SvgContainer";
import { FaRegTrashCan } from "react-icons/fa6";

export default function DriverAppPage() {
  const [arrivalItems, setArrivalItems] = useState([
    { id: "a1", text: "Clean the glass surface" },
    { id: "a2", text: "Verify design and color" },
    { id: "a3", text: "Place guides for alignment" },
    { id: "a4", text: 'Check Door Size (DLO: 22x64")' },
  ]);
  const [arrivalOpen, setArrivalOpen] = useState(false);
  const [arrivalMode, setArrivalMode] = useState("add"); 
  const [arrivalEditing, setArrivalEditing] = useState(null);

  const openArrivalAdd = () => {
    setArrivalMode("add");
    setArrivalEditing(null);
    setArrivalOpen(true);
  };
  const openArrivalEdit = (row) => {
    setArrivalMode("edit");
    setArrivalEditing(row);
    setArrivalOpen(true);
  };
  const submitArrival = (text) => {
    if (!text) return;
    if (arrivalMode === "edit" && arrivalEditing) {
      setArrivalItems((prev) =>
        prev.map((i) => (i.id === arrivalEditing.id ? { ...i, text } : i))
      );
    } else {
      setArrivalItems((prev) => [...prev, { id: "a_" + Date.now(), text }]);
    }
    setArrivalOpen(false);
  };
  const deleteArrival = (id) =>
    setArrivalItems((prev) => prev.filter((i) => i.id !== id));

  const [preItems, setPreItems] = useState([
    { id: "p1", text: "Glass & Design Cleaner" },
    { id: "p2", text: "Special Application Silicone" },
    { id: "p3", text: "Silicone Applicator Gun" },
    { id: "p4", text: "Cuttable Alignment Guides" },
  ]);
  const [preOpen, setPreOpen] = useState(false);
  const [preMode, setPreMode] = useState("add");
  const [preEditing, setPreEditing] = useState(null);

  const openPreAdd = () => {
    setPreMode("add");
    setPreEditing(null);
    setPreOpen(true);
  };
  const openPreEdit = (row) => {
    setPreMode("edit");
    setPreEditing(row);
    setPreOpen(true);
  };
  const submitPre = (text) => {
    if (!text) return;
    if (preMode === "edit" && preEditing) {
      setPreItems((prev) =>
        prev.map((i) => (i.id === preEditing.id ? { ...i, text } : i))
      );
    } else {
      setPreItems((prev) => [...prev, { id: "p_" + Date.now(), text }]);
    }
    setPreOpen(false);
  };
  const deletePre = (id) =>
    setPreItems((prev) => prev.filter((i) => i.id !== id));

  return (
    <>
      <div className="mb-3">
         <div className="relative rounded-xl md:rounded-[20px] bg-[#E0DDD7] px-4 py-2.5 border-l-2 border-[#bbb] shadow-[0_2px_0_0_rgba(0,_0,_0,_0.25)]">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <h1 className="dashboard_title">
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
        </div>
      </div>

      <div className="flex flex-col lg:w-[50%] gap-3 ">
        <section className="mt-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg md:text-[22px] font-medium text-[#333]">
              Arrival Checklist
            </h2>
            <button
              onClick={openArrivalAdd}
              className="grid size-8 place-items-center rounded-full bg-[#21BBA2] text-white text-xl shadow-md hover:bg-[#1aa58e]"
              aria-label="Add arrival item"
              title="Add"
            >
              +
            </button>
          </div>

          <div className="mt-1 h-[2px] w-full bg-black/10" />

          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-y-1.5 md:border-spacing-y-3">
              <thead>
                <tr>
                  <th className="th">Text</th>
                  <th className="th">Actions</th>
                </tr>
              </thead>
              <tbody>
                {arrivalItems.map((r) => (
                  <tr key={r.id} className="[&_td]:bg-white">
                    <td className="td">
                      <div className="flex items-center justify-center gap-3">
                        <span className="truncate">{r.text}</span>
                        <button
                          onClick={() => openArrivalEdit(r)}
                          className="ml-3 text-gray-500 hover:text-gray-700"
                          title="Edit"
                        >
                          <EditSvg />
                        </button>
                      </div>
                    </td>
                    <td className="td text-center">
                      <button
                        onClick={() => deleteArrival(r.id)}
                        className="inline-flex items-center justify-center rounded-full bg-red-500/10 p-2 text-red-600 hover:bg-red-500/20"
                        title="Delete"
                      >
                        <FaRegTrashCan />
                      </button>
                    </td>
                  </tr>
                ))}
                {arrivalItems.length === 0 && (
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

          <ArrivalItemModal
            open={arrivalOpen}
            mode={arrivalMode}
            initialText={arrivalEditing?.text}
            onClose={() => setArrivalOpen(false)}
            onSubmit={submitArrival}
          />
        </section>
        <section className="mt-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg md:text-[22px] font-medium text-[#333]">
              Pre-Departure Checklist
            </h2>
            <button
              onClick={openPreAdd}
              className="grid size-8 place-items-center rounded-full bg-[#21BBA2] text-white text-xl shadow-md hover:bg-[#1aa58e]"
              aria-label="Add pre-departure item"
              title="Add"
            >
              +
            </button>
          </div>

          <div className="mt-1 h-[2px] w-full bg-black/10" />

          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-y-1.5 md:border-spacing-y-3">
              <thead>
                <tr>
                  <th className="th">Text</th>
                  <th className="th">Actions</th>
                </tr>
              </thead>
              <tbody>
                {preItems.map((r) => (
                  <tr key={r.id} className="[&_td]:bg-white">
                    <td className="td">
                      <div className="flex items-center justify-center gap-3">
                        <span className="truncate">{r.text}</span>
                        <button
                          onClick={() => openPreEdit(r)}
                          className="ml-3 text-gray-500 hover:text-gray-700"
                          title="Edit"
                        >
                          <EditSvg />
                        </button>
                      </div>
                    </td>
                    <td className="td text-center">
                      <button
                        onClick={() => deletePre(r.id)}
                        className="inline-flex items-center justify-center rounded-full bg-red-500/10 p-2 text-red-600 hover:bg-red-500/20"
                        title="Delete"
                      >
                        <FaRegTrashCan />
                      </button>
                    </td>
                  </tr>
                ))}
                {preItems.length === 0 && (
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

          <PreDepartureItemModal
            open={preOpen}
            mode={preMode}
            initialText={preEditing?.text}
            onClose={() => setPreOpen(false)}
            onSubmit={submitPre}
          />
        </section>
      </div>
    </>
  );
}
