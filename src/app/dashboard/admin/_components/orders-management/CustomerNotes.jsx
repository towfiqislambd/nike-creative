import React from "react";
import { Man } from "../../../../../Components/Svg/SvgContainer";
import Modal from "../../../../../Components/Common/Modal";

const CustomerNotes = ({open, onClose, notes}) => {
  
  return (
    <Modal open={open} onClose={onClose} className={'max-w-[503px]'}>
      <div>
        <h3 className="text-base md:text-xl font-medium mb-2.5">Customer Instructions</h3>
        {notes.length !== 0 ? (
          <div className="my-4 flex flex-col gap-2">
            {notes.map((note, index) => (
              <div
                key={index}
                className="bg-white w-full text-wrap px-2.5 py-1.5 rounded-lg text-primary-text shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]"
              >
                <div className="flex gap-3">
                  <div className="flex items-center justify-center size-9 p-2 shrink-0 rounded-full bg-white shadow-[0_3.75px_6px_0.75px_rgba(0,0,0,0.20),_0_0_0.169px_0.169px_rgba(0,0,0,0.07),_0_0_0.169px_0_rgba(0,0,0,0.05),_0_2.024px_2.192px_-1.012px_rgba(0,0,0,0.25),_0_0.675px_2.698px_0.675px_rgba(0,0,0,0.12)]">
                    <Man />
                  </div>
                  <p className="max-sm:text-sm">{note.text}</p>
                </div>
                <p className="text-xs text-sub-text text-end mt-1">
                  Date: {note.date}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">no notes added</p>
        )}
      </div>
    </Modal>
  );
};

export default CustomerNotes;
