"use client";

import Modal from "../../../../../Components/Common/Modal";

const AddEditEmployeeModal = ({
  isOpen,
  onClose,
  onSubmit,
  register,
  editIndex,
}) => {
  return (
    <Modal open={isOpen} onClose={onClose} className={'max-w-[600px]'}>
      <h2 className="card_title">
        {editIndex !== null ? "Edit Employee" : "Add New Employee"}
      </h2>
      <form onSubmit={onSubmit} className="grid grid-cols-2 gap-4">
        <div className="flex flex-col col-span-2 md:col-span-1 gap-1">
          <label className="card_label">Full Name</label>
          <input
            {...register("company")}
            className="card_input"
            required
          />
        </div>
        <div className="flex flex-col col-span-2 md:col-span-1 gap-1">
          <label className="card_label">Email Address</label>
          <input
            {...register("email")}
            className="card_input"
            required
          />
        </div>
        <div className="flex flex-col col-span-2 md:col-span-1 gap-1">
          <label className="card_label">User Role</label>
          <select
            {...register("role")}
            className="card_input"
          >
            <option>User Role</option>
            <option value={'Employee'}>Employee</option>
            <option value={'Administrator'}>Administrator</option>
            <option value={'Manager'}>Manager</option>
            
          </select>
        </div>
        <div className="flex flex-col col-span-2 md:col-span-1 gap-1">
          <label className="card_label">Employee Category</label>
          <select
            {...register("employeeCategory")}
            className="card_input"
          >
            <option>Employee Category</option>
            <option>Accounting</option>
            <option>Sales</option>
          </select>
        </div>

        <div className="col-span-2 flex justify-end gap-3 mt-4">
          <button
            type="button"
            onClick={onClose}
            className="card_btn_outline"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="card_btn"
          >
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddEditEmployeeModal;
