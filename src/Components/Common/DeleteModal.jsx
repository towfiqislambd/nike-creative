"use client";
const DeleteModal = ({ isOpen, type, onCancel, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div onClick={onCancel} className="fixed inset-0 bg-black/40 flex justify-center items-center z-[999999] px-2">
      <div onClick={(e)=> e.stopPropagation()} className="bg-white p-3 rounded-lg w-full max-w-[585px] relative shadow-lg">
        <h2 className="md:text-lg text-center">
          Are you sure you would like to delete this {type}?
        </h2>
        <div className="flex justify-center gap-4 mt-5">
          <button onClick={onCancel} className="bg-white border border-[#21BBA2] text-[#21BBA2] px-6 sm:px-8 py-2 rounded-lg">
            No
          </button>
          <button onClick={onConfirm} className="bg-white border border-[#21BBA2] text-[#21BBA2] px-6 sm:px-8 py-2 rounded-lg">
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};
export default DeleteModal;
