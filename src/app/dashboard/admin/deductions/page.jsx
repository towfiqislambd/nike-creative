"use client";
import React, { useState } from "react";
import DeductionsEditDeclarationModal from "../_components/DeductionsEditDeclarationModal";
import InteriorDeductions from "../_components/InteriorDeductions";
import ExteriorDeductions from "../_components/ExteriorDeductions";
import SideLitesDeductionsInterior from "../_components/SideLitesDeductionsInterior";

export default function DeductionsPage() {
  const sideLiteRows = [
    {
      id: "s1",
      manufacturer: "Euro",
      single: "10.5&5",
      double: "20&9",
      singleHigh: "10.5&12",
      doubleHigh: "20&14",
    },
    {
      id: "s2",
      manufacturer: "Euro",
      single: "10.5&5",
      double: "20&9",
      singleHigh: "10.5&12",
      doubleHigh: "20&14",
    },
    {
      id: "s3",
      manufacturer: "Euro",
      single: "10.5&5",
      double: "20&9",
      singleHigh: "10.5&12",
      doubleHigh: "20&14",
    },
    {
      id: "s4",
      manufacturer: "Euro",
      single: "10.5&5",
      double: "20&9",
      singleHigh: "10.5&12",
      doubleHigh: "20&14",
    },
    {
      id: "s5",
      manufacturer: "Euro",
      single: "10.5&5",
      double: "20&9",
      singleHigh: "10.5&12",
      doubleHigh: "20&14",
    },
    {
      id: "s6",
      manufacturer: "Euro",
      single: "10.5&5",
      double: "20&9",
      singleHigh: "10.5&12",
      doubleHigh: "20&14",
    },
  ];

  // Interior data
  const [interiorRows, setInteriorRows] = useState([
    {
      id: "i1",
      manufacturer: "Euro",
      single: "2131.34&543.4564",
      double: "2131.34&543.4564",
      singleHigh: "2131.34&543.4564",
      doubleHigh: "2131.34&543.4564",
      singleADA: "2131.34&543.4564",
      doubleADA: "2131.34&543.4564",
    },
    {
      id: "i2",
      manufacturer: "Euro",
      single: "2131.34&543.4564",
      double: "2131.34&543.4564",
      singleHigh: "2131.34&543.4564",
      doubleHigh: "2131.34&543.4564",
      singleADA: "2131.34&543.4564",
      doubleADA: "2131.34&543.4564",
    },
    {
      id: "i3",
      manufacturer: "Euro",
      single: "2131.34&543.4564",
      double: "2131.34&543.4564",
      singleHigh: "2131.34&543.4564",
      doubleHigh: "2131.34&543.4564",
      singleADA: "2131.34&543.4564",
      doubleADA: "2131.34&543.4564",
    },
  ]);

  // Exterior data
  const [exteriorRows, setExteriorRows] = useState([
    {
      id: "e1",
      manufacturer: "Euro",
      single: "2131.34&543.4564",
      double: "2131.34&543.4564",
      singleHigh: "2131.34&543.4564",
      doubleHigh: "2131.34&543.4564",
      singleADA: "2131.34&543.4564",
      doubleADA: "2131.34&543.4564",
    },
    {
      id: "e2",
      manufacturer: "Euro",
      single: "2131.34&543.4564",
      double: "2131.34&543.4564",
      singleHigh: "2131.34&543.4564",
      doubleHigh: "2131.34&543.4564",
      singleADA: "2131.34&543.4564",
      doubleADA: "2131.34&543.4564",
    },
  ]);

  // modal control
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [activeSection, setActiveSection] = useState("interior"); // 'interior' | 'exterior'

  // helpers
  const startAddInterior = () => {
    setActiveSection("interior");
    setEditing(null);
    setOpen(true);
  };
  const startEditInterior = (row) => {
    setActiveSection("interior");
    setEditing(row);
    setOpen(true);
  };

  const startAddExterior = () => {
    setActiveSection("exterior");
    setEditing(null);
    setOpen(true);
  };
  const startEditExterior = (row) => {
    setActiveSection("exterior");
    setEditing(row);
    setOpen(true);
  };

  const [rows, setRows] = useState(sideLiteRows);

  const handleEdit = (row) => console.log("Edit:", row);
  const handleDelete = (id) =>
    setRows((prev) => prev.filter((r) => r.id !== id));
  const handleAdd = () => console.log("Add new side lite deduction");


  const removeInterior = (id) =>
    confirm("Delete this row?") &&
    setInteriorRows((p) => p.filter((r) => r.id !== id));
  const removeExterior = (id) =>
    confirm("Delete this row?") &&
    setExteriorRows((p) => p.filter((r) => r.id !== id));

  const handleSave = (data) => {
    if (activeSection === "interior") {
      setInteriorRows((prev) =>
        editing
          ? prev.map((r) => (r.id === editing.id ? { ...r, ...data } : r))
          : [...prev, { id: "i_" + Date.now(), ...data }]
      );
    } else {
      setExteriorRows((prev) =>
        editing
          ? prev.map((r) => (r.id === editing.id ? { ...r, ...data } : r))
          : [...prev, { id: "e_" + Date.now(), ...data }]
      );
    }
    setOpen(false);
  };

  return (
    <section className="">
      <div className="mb-6">
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
      <h1 className="text-[22px] font-medium text-[#333]">
        Final Width, Height Dedication Settings
      </h1>

      {/* Interior */}
      <div className="mt-2 h-[2px] w-full bg-black/10" />
      <InteriorDeductions
        rows={interiorRows}
        onEdit={startEditInterior}
        onDelete={removeInterior}
      />
      <div className="flex justify-end">
        <button
          onClick={startAddInterior}
          className="mt-2 grid size-9 place-items-center rounded-full bg-[#21BBA2] text-white text-3xl shadow-lg hover:bg-[#1aa58e]"
          aria-label="Add interior row"
        >
          +
        </button>
      </div>

      {/* Exterior */}
      <ExteriorDeductions
        rows={exteriorRows}
        onEdit={startEditExterior}
        onDelete={removeExterior}
      />
      <div className="flex justify-end">
        <button
          onClick={startAddExterior}
          className="mt-2 grid size-9 place-items-center rounded-full bg-[#21BBA2] text-white text-3xl shadow-lg hover:bg-[#1aa58e]"
          aria-label="Add exterior row"
        >
          +
        </button>
      </div>

      <SideLitesDeductionsInterior
        rows={rows}
        onEdit={startEditExterior}
        onDelete={handleDelete}
        onAdd={handleAdd}
      />

      {/* shared modal */}
      <DeductionsEditDeclarationModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={handleSave}
        title={editing ? "Edit Deduction Row" : "Add Deduction Row"}
        initial={editing || undefined}
      />
    </section>
  );
}
