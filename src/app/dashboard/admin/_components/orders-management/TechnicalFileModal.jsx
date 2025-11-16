import React from "react";
import Modal from "../../../../../Components/Common/Modal";
import Image from "next/image";
import { Download, Upload } from "lucide-react";
import { DownloadGreenIcon } from "../../../../../Components/Svg/SvgContainer2";

const TechnicalFileModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} className={"max-w-[614px]"}>
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div>
          <p>Order #: 123456</p>
          <p>Po: niikek</p>
        </div>
        <div className="flex flex-col gap-2.5 items-center">
          <p>Product Image:</p>
          <Image
            src={
              "https://i.ibb.co.com/k60zt8Lj/product-image-Custom-Double-Door.png"
            }
            width={70}
            height={70}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2.5 items-center">
          <p>Vector Image:</p>
          <Image
            src={
              "https://i.ibb.co.com/k60zt8Lj/product-image-Custom-Double-Door.png"
            }
            width={70}
            height={70}
            alt=""
          />
        </div>
        <div className="flex items-center justify-center">
          <button className="flex items-center gap-1 p-2.5 rounded-[22px] bg-white custom-shadow-xl text-sm">
            <Upload size={18} /> <span>Upload</span>
          </button>
        </div>
      </div>
      <table className="mt-5 w-[550px] text-sm border-spacing-y-2.5 border-separate">
        <thead>
          <tr className="text-left">
            <th className="font-normal">DXF</th>
            <th className="font-normal">EPS</th>
            <th className="font-normal">Date</th>
            <th className="font-normal">Time</th>
            <th className="font-normal">User</th>
            <th className="font-normal text-center">Default</th>
            <th className="font-normal text-center">File</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1-123456.dxf</td>
            <td>1-123456.eps</td>
            <td>11/23/2025</td>
            <td>9:05 AM</td>
            <td>AI Agent</td>
            <td className="text-center">
              <input type="checkbox" className="size-5 cursor-pointer" />
            </td>
            <td className="text-center">
              <button className="flex items-center justify-center">
                <DownloadGreenIcon />
              </button>
            </td>
          </tr>
          <tr>
            <td>1-123456.dxf</td>
            <td>1-123456.eps</td>
            <td>11/23/2025</td>
            <td>9:05 AM</td>
            <td>AI Agent</td>
            <td className="text-center">
              <input type="checkbox" className="size-5 cursor-pointer" />
            </td>
            <td className="text-center">
              <button className="flex items-center justify-center">
                <DownloadGreenIcon />
              </button>
            </td>
          </tr>
          <tr>
            <td>1-123456.dxf</td>
            <td>1-123456.eps</td>
            <td>11/23/2025</td>
            <td>9:05 AM</td>
            <td>AI Agent</td>
            <td className="text-center">
              <input type="checkbox" className="size-5 cursor-pointer" />
            </td>
            <td className="text-center">
              <button className="flex items-center justify-center">
                <DownloadGreenIcon />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Modal>
  );
};

export default TechnicalFileModal;
