"use client";
import React, { useState } from "react";
import {
  DeleteSvg,
  EditedSvg,
  HomeSvg,
} from "../../../../Components/Svg/SvgContainer";
import {
  WorkSvg,
  DocSvg,
  CalenderSvg,
  PrintSvg,
  ColorSvg,
  UpdateSvg,
  EyeSvg,
  ESvg,
  CheckSvg,
  DownloadSvg,
  EEditSvg,
  HardSvg,
  MenuSvg,
} from "../../../../Components/Svg/SvgContainer2";
import m1 from "../../../../Assets/m1.png";
import m2 from "../../../../Assets/m2.jpg";
import CustomerNotes from "../_components/orders-management/CustomerNotes";
import WorkInstallerNotes from "../_components/orders-management/WorkInstallerNotes";
import TechnicalFileModal from "../_components/orders-management/TechnicalFileModal";
import ServiceRequest from "../_components/orders-management/service-request/ServiceRequest";
import Image from "next/image";
const menus = [
  "Received",
  "Ready-to-cut",
  "Ready-to-paint",
  "Quality-Control",
  "Ready-to-Deliver/Install",
  "Re-Scheduled",
  "Scheduled",
  "Out-For-Delivery/install",
  "Installed/Delivered",
  "Completed",
];

const page = () => {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Received");
  const [customerNotesOpen, setCustomerNotesOpen] = useState(false);
  const [workInstallerNotesOpen, setWarkInstallerNotesOpen] = useState(false);
  const [technicalFilesOpen, setTechnicalFilesOpen] = useState(false);
  const [serviceRequestModal, setServiceRequestModal] = useState(false);


  const [notes, setNotes] = useState([
    {
      text: "Please install the window stickers on the sliding glass doors only, avoid the porch door.",
      date: "11/15/2025, 2:56 PM",
    },
    {
      text: "Please install the window stickers on the sliding glass doors only, avoid the porch door.",
      date: "11/15/2025, 2:56 PM",
    },
    {
      text: "Please install the window stickers on the sliding glass doors only, avoid the porch door.",
      date: "11/15/2025, 2:56 PM",
    },
  ]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {Array.from({ length: 10 }).map((_, idx) => (
          <div
            key={idx}
            className="p-3 rounded-xl shadow-lg bg-white space-y-2"
          >
            <div className="flex gap-3 items-center justify-between">
              <h3 className="text-sm font-medium">Order #15257</h3>
              <span className="bg-[#EFF3F6] text-xs px-3 py-1 rounded-full shadow-lg text-gray-500">
                Received
              </span>
              <div className="flex gap-2 items-center">
                <button className="bg-gray-100 size-6 shadow rounded-full cursor-pointer grid place-items-center">
                  <HomeSvg />
                </button>

                <button
                  onClick={() => setServiceRequestModal(true)}
                  className="bg-gray-100 size-6 shadow rounded-full cursor-pointer grid place-items-center"
                >
                  <HardSvg />
                </button>

                <button className="bg-gray-100 size-6 shadow rounded-full cursor-pointer grid place-items-center">
                  <EditedSvg />
                </button>

                <button className="bg-red-500 size-6 shadow rounded-full cursor-pointer grid place-items-center">
                  <DeleteSvg />
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-500">Order Date: 06/13/2025</p>
              <p className="text-xs text-gray-500">PO 10-20-2025 </p>
            </div>

            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium">Availability:</h3>
              <button className="bg-[#EFF3F6] text-xs px-3 py-1 rounded-full shadow-lg text-gray-500 flex gap-1.5 items-center">
                In 1 week
                <EEditSvg />
              </button>
              <button
                onClick={() => setTechnicalFilesOpen(true)}
                className="text-gray-500 flex gap-1 items-center text-sm"
              >
                Technical Files <DocSvg />
              </button>
            </div>

            <div className="flex gap-3 items-center justify-between">
              <p className="text-gray-500 text-sm">4-5 week</p>
              <div className="flex gap-2 items-center">
                <p className="flex gap-1 items-center">
                  <span className="text-sm">DXF:</span>
                  <CheckSvg />
                  <DownloadSvg />
                </p>
                <p className="flex gap-1 items-center">
                  <span className="text-sm">EPS:</span>
                  <CheckSvg />
                  <DownloadSvg />
                </p>
              </div>
            </div>

            <h3 className="text-sm text-gray-500 mb-2">
              Company Florida hurricane
            </h3>

            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-medium">Manufacturer</p>
              <p className="text-sm">
                Series: <span>546 Series</span>
              </p>
              <p className="text-sm">
                Color: <span>White</span>
              </p>
            </div>

            <div className="flex items-center justify-between gap-3">
              <p className="text-gray-500 text-sm">European industries</p>
              <p className="text-sm text-gray-500">
                Quantity: <span>1</span>
              </p>
              <p>
                <WorkSvg />
              </p>
            </div>

            <div className="flex gap-5 items-center">
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1.5">Client Reference</p>
                <Image
                  src={m1}
                  alt="m1"
                  className="w-full h-22 rounded-lg border"
                />
              </div>

              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1.5">Selected Product</p>
                <Image
                  src={m2}
                  alt="m1"
                  className="w-full  h-22 rounded-lg border"
                />
              </div>
            </div>

            <div className="flex gap-3 justify-between">
              <div>
                <h4 className="text-sm text-gray-500">Product Code</h4>
                <p className="text-xs font-semibold">KSWH001</p>
              </div>
              <div>
                <h4 className="mb-1 text-sm text-gray-500">Width</h4>
                <p className="text-xs font-medium flex gap-1 items-center mb-1">
                  <EyeSvg />
                  23.130232
                </p>
                <p className="text-xs font-medium flex gap-1 items-center">
                  <ESvg />
                  23.130232
                </p>
              </div>
              <div>
                <h4 className="mb-1 text-sm text-gray-500">Height</h4>
                <p className="text-xs font-medium flex gap-1 items-center mb-1">
                  <EyeSvg />
                  23.130232
                </p>
                <p className="text-xs font-medium flex gap-1 items-center">
                  <ESvg />
                  23.130232
                </p>
              </div>

              <div className="space-y-2 flex flex-col items-end">
                <button
                  onClick={() => setCustomerNotesOpen(true)}
                  className="w-fit flex gap-1 items-center cursor-pointer px-2.5 py-1.5 text-xs rounded-xl text-white bg-[#7FADBC]"
                >
                  Customer
                  <DocSvg />
                </button>

                <button
                  onClick={() => setWarkInstallerNotesOpen(true)}
                  className="w-fit flex gap-1 items-center cursor-pointer px-2.5 py-1.5 text-xs rounded-xl text-white bg-[#7FADBC]"
                >
                  Worker
                  <DocSvg />
                </button>
              </div>
            </div>

            <div className="bg-[#EDFCFF] p-2 rounded-lg">
              <h3 className="text-primary-text text-sm mb-2 text-center">
                Technical Specifications
              </h3>

              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 cursor-pointer w-fit text-xs bg-[#DAF6FF] rounded-xl shadow">
                  High Bottom
                </button>
                <button className="px-4 py-2 cursor-pointer w-fit text-xs bg-[#DAF6FF] rounded-xl shadow">
                  Right Active
                </button>
                <button className="px-4 py-2 cursor-pointer w-fit text-xs bg-[#DAF6FF] rounded-xl shadow">
                  Clear Glass
                </button>
                <button className="px-4 py-2 cursor-pointer w-fit text-xs bg-[#DAF6FF] rounded-xl shadow">
                  Insulated glass
                </button>
                <button className="px-4 py-2 cursor-pointer w-fit text-xs bg-[#DAF6FF] rounded-xl shadow">
                  Left Active
                </button>
                <button className="px-4 py-2 cursor-pointer w-fit text-xs bg-[#DAF6FF] rounded-xl shadow">
                  ADA
                </button>
              </div>
            </div>

            <div className="flex gap-5 items-center justify-center py-2">
              <button className="size-8 rounded-full bg-white cursor-pointer grid place-items-center shadow-[0_3.601px_5.761px_0.72px_rgba(0,0,0,0.20),0_0_0.162px_0.162px_rgba(0,0,0,0.07),0_0_0.162px_0_rgba(0,0,0,0.05),0_1.943px_2.105px_-0.972px_rgba(0,0,0,0.25),0_0.648px_2.591px_0.648px_rgba(0,0,0,0.12)]">
                <CalenderSvg />
              </button>

              <button className="size-8 rounded-full bg-white cursor-pointer grid place-items-center shadow-[0_3.601px_5.761px_0.72px_rgba(0,0,0,0.20),0_0_0.162px_0.162px_rgba(0,0,0,0.07),0_0_0.162px_0_rgba(0,0,0,0.05),0_1.943px_2.105px_-0.972px_rgba(0,0,0,0.25),0_0.648px_2.591px_0.648px_rgba(0,0,0,0.12)]">
                <PrintSvg />
              </button>

              <button className="size-8 rounded-full bg-white cursor-pointer grid place-items-center shadow-[0_3.601px_5.761px_0.72px_rgba(0,0,0,0.20),0_0_0.162px_0.162px_rgba(0,0,0,0.07),0_0_0.162px_0_rgba(0,0,0,0.05),0_1.943px_2.105px_-0.972px_rgba(0,0,0,0.25),0_0.648px_2.591px_0.648px_rgba(0,0,0,0.12)]">
                <ColorSvg />
              </button>

              <button className="px-3 py-1.5 rounded-full bg-white cursor-pointer shadow-[0_3.601px_5.761px_0.72px_rgba(0,0,0,0.20),0_0_0.162px_0.162px_rgba(0,0,0,0.07),0_0_0.162px_0_rgba(0,0,0,0.05),0_1.943px_2.105px_-0.972px_rgba(0,0,0,0.25),0_0.648px_2.591px_0.648px_rgba(0,0,0,0.12)] flex gap-1 items-center text-sm text-gray-500">
                <UpdateSvg />
                Update
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Menu */}
      <div className="w-full">
        <div className="fixed max-lg:bottom-2 lg:bottom-5 right-2 flex gap-3 items-center justify-end">
          <button
            onClick={() => setOpen(!open)}
            className="shrink-0 size-16 grid place-items-center rounded-full bg-white shadow-xl border border-gray-100"
          >
            <MenuSvg />
          </button>
        </div>
        {open && (
          <div
            className={`grow fixed z-[999] max-lg:top-0 lg:!bottom-2.5 max-lg:left-0 lg:!right-20 flex h-[70px] max-lg:h-screen w-[80vw] max-lg:w-[200px] max-lg:p-4 max-lg:gap-2 max-lg:flex-col lg:items-center bg-accent-off-white lg:rounded-full duration-300 transition-transform ${
              open ? "opacity-100" : "opacity-100"
            }`}
          >
            {menus?.map((menu) => (
              <button
                key={menu}
                onClick={() => setActiveMenu(menu)}
                className={`px-5 py-3 max-lg:border rounded-full cursor-pointer text-sm border-r-2 border-gray-400 ${
                  activeMenu === menu && "bg-light-green text-white"
                }`}
              >
                {menu}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* pop up modals */}
      {customerNotesOpen && (
        <CustomerNotes
          notes={notes}
          open={customerNotesOpen}
          onClose={() => setCustomerNotesOpen(false)}
        />
      )}

      {workInstallerNotesOpen && (
        <WorkInstallerNotes
          open={workInstallerNotesOpen}
          onClose={() => setWarkInstallerNotesOpen(false)}
        />
      )}

      {technicalFilesOpen && (
        <TechnicalFileModal
          open={technicalFilesOpen}
          onClose={() => setTechnicalFilesOpen(false)}
        />
      )}

      {serviceRequestModal && (
        <ServiceRequest
          open={serviceRequestModal}
          onClose={() => setServiceRequestModal(false)}
        />
      )}
    </>
  );
};

export default page;
