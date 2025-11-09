import React, { useState } from "react";
import { EditIconSvg } from "../../../../../Components/Svg/SvgContainer";
import Modal from "../../../../../Components/Common/Modal";
const data = [
  {
    id: 1,
    category: "windows",
    time: "60",
  },
  {
    id: 2,
    category: "windows",
    time: "50",
  },
  {
    id: 3,
    category: "Doors",
    time: "50",
  },
];

const AiAgentSettings = ({ isAutomatic }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {isAutomatic ? (
        <table className="w-[694px] border-spacing-y-3 border-separate text-center">
          <thead>
            <tr className="rounded shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)] bg-white">
              <td className="py-6 rounded-l-lg">Product Category</td>
              <td className="py-6">Robust Manual Time (minutes)</td>
              <td className="py-6 rounded-r-lg px-3">Edit</td>
            </tr>
          </thead>

          <tbody>
            {data?.map(item => (
              <tr
                key={item?.id}
                className="rounded-lg shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.359px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)] bg-white"
              >
                <td className="py-5 rounded-l-lg">{item?.category}</td>
                <td className="py-5">{item?.time}</td>
                <td
                  onClick={() => setOpen(true)}
                  className="py-5 rounded-r-lg cursor-pointer px-3"
                >
                  <button className="flex justify-center w-full">
                    <EditIconSvg />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

          <Modal
            open={open}
            onClose={() => setOpen(false)}
            className="max-w-lg"
          >
            <h3 className="text-primary-text font-semibold text-xl mb-5 text-left">
              Edit Manual median Time
            </h3>

            <div className="flex gap-12">
              <div className="shrink-0">
                <label className="text-lg font-medium text-primary-text inline-block mb-1">
                  Product Category
                </label>
                <p className="text-primary-text text-left">Windows</p>
              </div>

              <div className="text-left">
                <label className="text-lg font-medium text-primary-text inline-block mb-2">
                  Manual median Time
                </label>
                <input
                  type="text"
                  className="px-4 py-2.5 rounded outline-none border border-gray-300 text-primary-text"
                  defaultValue={`59`}
                />
              </div>
            </div>

            <div className="flex justify-end gap-5 mt-10">
              <button
                onClick={() => setOpen(false)}
                className="px-5 py-3 rounded-lg border border-light-green cursor-pointer bg-transparent text-light-green"
              >
                Cancel
              </button>

              <button className="px-5 py-3 rounded-lg border border-light-green cursor-pointer bg-light-green text-white">
                Save Change
              </button>
            </div>
          </Modal>
        </table>
      ) : (
        <table className="w-[694px] border-spacing-y-3 border-separate text-center">
          <thead>
            <tr className="rounded shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)] bg-white">
              <td className="py-6 rounded-l-lg">Product Category</td>
              <td className="py-6 rounded-r-lg">
                Robust Manual Time (minutes)
              </td>
            </tr>
          </thead>

          <tbody>
            {data?.map(item => (
              <tr
                key={item?.id}
                className="rounded-lg shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.359px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)] bg-white"
              >
                <td className="py-5 rounded-l-lg">{item?.category}</td>
                <td className="py-5 rounded-r-lg">{item?.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default AiAgentSettings;
