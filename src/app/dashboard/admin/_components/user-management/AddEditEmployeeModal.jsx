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
    <Modal open={isOpen} onClose={onClose} className={'max-w-[730px] 2xl:px-7'}>
      <h2 className="card_title">
        {editIndex !== null ? "Edit Employee" : "Add New Employee"}
      </h2>
      <form onSubmit={onSubmit} className="grid grid-cols-2 gap-4">
        <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
          <label className="block text-base xl:text-xl">Full Name</label>
          <input
            {...register("company")}
            className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-xl"
            required
          />
        </div>
        <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
          <label className="block text-base xl:text-xl">Email Address</label>
          <input
            {...register("email")}
            className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-xl"
            required
          />
        </div>
        <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
          <label className="text-md xl:text-base 2xl:text-xl">User Role</label>
          <select
            {...register("role")}
            className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4"
          >
            <option>User Role</option>
            <option value={'Employee'}>Employee</option>
            <option value={'Administrator'}>Administrator</option>
            <option value={'Manager'}>Manager</option>
            
          </select>
        </div>
        <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
          <label className="text-md xl:text-base 2xl:text-xl">Employee Category</label>
          <select
            {...register("employeeCategory")}
            className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4"
          >
            <option>Employee Category</option>
            <option>Accounting</option>
            <option>Sales</option>
          </select>
        </div>

        <div className="col-span-2 flex justify-end gap-3 mt-4 xl:text-xl">
          <button
            type="button"
            onClick={onClose}
            className="bg-white border border-[#21BBA2] text-[#21BBA2] px-8 py-4 rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-8 py-4 bg-[#21BBA2] text-white rounded-lg"
          >
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddEditEmployeeModal;
