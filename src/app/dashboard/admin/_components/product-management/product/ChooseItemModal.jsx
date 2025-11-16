import { useState } from "react";
import Modal from "../../../../../../Components/Common/Modal";

export default function ChooseItemModal({ type, onAdd, open, onClose }) {
  const [value, setValue] = useState("");

  const options = {
    company: ["Bulk Building Inc.", "Pro Builders Ltd.", "SteelWorks Co."],
    field: ["Door fields", "Window frames", "Wall panels"],
    color: ["Bronze", "White", "Black", "Gray", "Blue"],
  };

  const handleSubmit = () => {
    if (!value) return;
    onAdd(type, value);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      className={"max-w-[384px] md:!rounded-[20px]"}
    >
      <div className="bg-white md:px-2.5">
        <h3 className="card_title">
          Choose {type.charAt(0).toUpperCase() + type.slice(1)}
        </h3>
        <div className="space-y-2.5">
          <label className="card_label font-medium">{type.charAt(0).toUpperCase() + type.slice(1)}</label>
          <select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="card_input w-full"
          >
            <option value="">Select {type}</option>
            {options[type].map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-end gap-2 md:gap-5 mt-5">
          <button onClick={onClose} className="card_btn_outline">
            Cancel
          </button>
          <button onClick={handleSubmit} className="card_btn">
            Add
          </button>
        </div>
      </div>
    </Modal>
  );
}
