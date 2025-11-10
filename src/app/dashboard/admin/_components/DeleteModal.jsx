"use client";
const DeleteModal = ({ isOpen, type, onCancel, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-3">
      <div className="bg-white px-8 py-5 rounded-[16px] w-full max-w-[585px] relative shadow-lg">
        <h2 className="md:text-xl">
          Are you sure you would like to delete this {type}?
        </h2>
        <div className="flex justify-center gap-4 mt-6">
          <button onClick={onCancel} className="bg-white border border-[#21BBA2] text-[#21BBA2] px-8 py-4 rounded-lg">
            No
          </button>
          <button onClick={onConfirm} className="bg-white border border-[#21BBA2] text-[#21BBA2] px-8 py-4 rounded-lg">
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};
export default DeleteModal;
