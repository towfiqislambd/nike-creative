"use client";
import React from "react";
import Modal from "../../../../Components/Common/Modal"; 

export default function DeductionsEditDeclarationModal({
  open,
  onClose,
  onSave,
  title = "Deductions Edit Declaration",
  initial,
}) {
  const [form, setForm] = React.useState(
    initial || {
      manufacturer: "Euro",
      single: "",
      double: "",
      singleHigh: "",
      doubleHigh: "",
      singleADA: "",
      doubleADA: "",
    }
  );

  React.useEffect(() => {
    setForm(
      initial || {
        manufacturer: "Euro",
        single: "",
        double: "",
        singleHigh: "",
        doubleHigh: "",
        singleADA: "",
        doubleADA: "",
      }
    );
  }, [initial, open]);

  const update = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));


  const Input = (props) => (
    <input
      {...props}
      className="w-full rounded-[10px] border border-[#E5E5E5] bg-white px-4 py-3 text-[16px] text-[#333] outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
    />
  );
  const Label = ({ children }) => (
    <span className="block text-[#5A5C5F] text-sm mb-2">{children}</span>
  );

  return (
    <Modal open={open} onClose={onClose} title={title}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <label className="block">
          <Label>Manufacturer</Label>
          <select
            value={form.manufacturer}
            onChange={update("manufacturer")}
            className="w-full rounded-[10px] border border-[#E5E5E5] bg-white px-4 py-3 text-[15px] text-[#333] outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
          >
            <option>Euro</option>
            <option>Alpha</option>
            <option>Beta</option>
          </select>
        </label>

        <label className="block">
          <Label>Single Door Dedicated Measurement</Label>
          <Input
            value={form.single}
            onChange={update("single")}
            placeholder="e.g. 2131.34&543.4564"
          />
        </label>

        <label className="block">
          <Label>Double Door Dedicated Measurement</Label>
          <Input
            value={form.double}
            onChange={update("double")}
            placeholder="e.g. 2131.34&543.4564"
          />
        </label>

        <label className="block">
          <Label>Single Door Dedicated Measurement High Bottom</Label>
          <Input
            value={form.singleHigh}
            onChange={update("singleHigh")}
            placeholder="e.g. 2131.34&543.4564"
          />
        </label>

        <label className="block">
          <Label>Double Door Dedicated Measurement High Bottom</Label>
          <Input
            value={form.doubleHigh}
            onChange={update("doubleHigh")}
            placeholder="e.g. 2131.34&543.4564"
          />
        </label>

        <label className="block">
          <Label>Single Door Dedicated Measurement ADA</Label>
          <Input
            value={form.singleADA}
            onChange={update("singleADA")}
            placeholder="e.g. 2131.34&543.4564"
          />
        </label>

        <label className="block">
          <Label>Double Door Dedicated Measurement ADA</Label>
          <Input
            value={form.doubleADA}
            onChange={update("doubleADA")}
            placeholder="e.g. 2131.34&543.4564"
          />
        </label>
      </div>

      <div className="mt-6 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={onClose}
          className="rounded-xl border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => onSave(form)}
          className="rounded-xl bg-[#21BBA2] px-6 py-3 text-white hover:bg-[#1aa58e]"
        >
          Save
        </button>
      </div>
    </Modal>
  );
}
