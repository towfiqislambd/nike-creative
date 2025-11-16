import React, { useState } from "react";
import Modal from "../../../../../../Components/Common/Modal";
import { Plus } from "lucide-react";
import { RightArrow } from "../../../../../../Components/Svg/SvgContainer";
import ServiceRequestDetailsModal from "./ServiceRequestDetails";

const ServiceRequest = ({ open, onClose }) => {
  const [serviceRequestData, setServiceRequestData] = useState([
    {
      id: "1",
      ticket: "445413",
      date: "10/26/25 - 3:06 PM",
      status: "Received",
      note: "This is a demo notes",
      address: "This is a demo address.",
      image: [
        {
          url: "https://i.ibb.co.com/k60zt8Lj/product-image-Custom-Double-Door.png",
        },
        {
          url: "https://i.ibb.co.com/k60zt8Lj/product-image-Custom-Double-Door.png",
        },
        {
          url: "https://i.ibb.co.com/k60zt8Lj/product-image-Custom-Double-Door.png",
        },
        {
          url: "https://i.ibb.co.com/k60zt8Lj/product-image-Custom-Double-Door.png",
        },
      ],
    },
    {
      id: "2",
      ticket: "445413",
      date: "10/26/25 - 3:06 PM",
      status: "Received",
      note: "This is a demo notes",
      address: "This is a demo address.",
      image: [
        {
          url: "https://i.ibb.co.com/k60zt8Lj/product-image-Custom-Double-Door.png",
        },
        {
          url: "https://i.ibb.co.com/k60zt8Lj/product-image-Custom-Double-Door.png",
        },
        {
          url: "https://i.ibb.co.com/k60zt8Lj/product-image-Custom-Double-Door.png",
        },
        {
          url: "https://i.ibb.co.com/k60zt8Lj/product-image-Custom-Double-Door.png",
        },
      ],
    },
    {
      id: "3",
      ticket: "445413",
      date: "10/26/25 - 3:06 PM",
      status: "Received",
      note: "This is a demo notes",
      address: "This is a demo address.",
      image: [
        {
          url: "https://i.ibb.co.com/k60zt8Lj/product-image-Custom-Double-Door.png",
        },
        {
          url: "https://i.ibb.co.com/k60zt8Lj/product-image-Custom-Double-Door.png",
        },
        {
          url: "https://i.ibb.co.com/k60zt8Lj/product-image-Custom-Double-Door.png",
        },
        {
          url: "https://i.ibb.co.com/k60zt8Lj/product-image-Custom-Double-Door.png",
        },
      ],
    },
  ]);

  const [selectedService, setSelectedService] = useState(null);
  const [serviceRequestModalOpen, setServiceRequestModalOpen] = useState(false);

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        className={"max-w-[543px] rounded-[20px]"}
      >
        <div className="flex items-center justify-between pr-4">
          <h3 className="text-xl">Service Request</h3>
          <button
            onClick={() => (
              setSelectedService(null), setServiceRequestModalOpen(true)
            )}
            className="size-8 text-white shrink-0 bg-[#21BBA2] rounded-full flex items-center justify-center"
          >
            <Plus />
          </button>
        </div>
        <div className="w-full overflow-x-auto mt-2">
          <table className="w-full border-separate border-spacing-y-3 px-2">
            <thead>
              <tr className="text-sm">
                <th className="px-4 font-normal text-nowrap text-left">
                  Ticket #
                </th>
                <th className="px-4 font-normal text-nowrap">Request Date</th>
                <th className="px-4 font-normal">Status</th>
                <th className="px-4 font-normal">Details</th>
              </tr>
            </thead>
            <tbody>
              {serviceRequestData.map((data) => (
                <tr
                  key={data.id}
                  className="rounded-lg text-sm custom-shadow-xl"
                >
                  <td className="px-4 py-3 md:py-5 align-middle">
                    {data.ticket}
                  </td>
                  <td className="px-4 py-3 md:py-5 align-middle">
                    {data.ticket}
                  </td>
                  <td className="px-4 py-3 md:py-5 align-middle bg-[#EDFCFF]">
                    {data.status}
                  </td>
                  <td className="px-4 py-3 md:py-5 align-middle">
                    <button
                      onClick={() => (
                        setSelectedService(data),
                        setServiceRequestModalOpen(true)
                      )}
                      className={`size-7 flex items-center mx-auto justify-center rounded-full custom-shadow-xl ${
                        data.id === selectedService?.id
                          ? "bg-white"
                          : "bg-[#d7d7d7]"
                      }`}
                    >
                      <RightArrow />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal>
      {serviceRequestModalOpen && (
        <ServiceRequestDetailsModal
          data={selectedService}
          open={serviceRequestModalOpen}
          onClose={() => setServiceRequestModalOpen(false)}
        />
      )}
    </>
  );
};

export default ServiceRequest;
