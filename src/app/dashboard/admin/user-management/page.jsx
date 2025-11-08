"use client";

import React, { useState } from "react";
import {
  BellIconSvg,
  Correct,
  EditPen,
  Eye,
  RightArrow,
  SearchIcon,
  TrashBin,
  Users,
  WrongIconRed,
} from "../../../../Components/Svg/SvgContainer";
import Image from "next/image";
import profilePicture from "../../../../Assets/profile.svg";
import EditClientModal from "../_components/EditClientModal";

const page = () => {
  const [businessPartner, setBusinessPartner] = useState("clients");

  const [isEditClientModalOpen, setIsEditClientModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [editClientIndex, setEditClientIndex] = useState(null);

  const [clients, setClients] = useState([
    {
      company: "Tech Solutions Inc.",
      phoneNumber: "+1 123 1213 4566",
      address: "19th floor, UTC Building, Panthapath",
      status: "Pending",
      users: "3",
    },
    {
      company: "Tech Solutions Inc.",
      phoneNumber: "+1 123 1213 4566",
      address: "19th floor, UTC Building, Panthapath",
      status: "Not Approved",
      users: "3",
    },
    {
      company: "Tech Solutions Inc.",
      phoneNumber: "+1 123 1213 4566",
      address: "19th floor, UTC Building, Panthapath",
      status: "Pending",
      users: "3",
    },
    {
      company: "Tech Solutions Inc.",
      phoneNumber: "+1 123 1213 4566",
      address: "19th floor, UTC Building, Panthapath",
      status: "Approved",
      users: "3",
    },
    {
      company: "Tech Solutions Inc.",
      phoneNumber: "+1 123 1213 4566",
      address: "19th floor, UTC Building, Panthapath",
      status: "Approved",
      users: "3",
    },
  ]);

  const [vendors, setVendors] = useState([
    {
      company: "Tech Solutions Inc.",
      phoneNumber: "+1 123 1213 4566",
      fullName: "Harry Porter",
      emergencyContact: "+1 123 1213 4566",
      address: "19th floor, UTC Building, Panthapath",
    },
    {
      company: "Tech Solutions Inc.",
      phoneNumber: "+1 123 1213 4566",
      fullName: "Harry Porter",
      emergencyContact: "+1 123 1213 4566",
      address: "19th floor, UTC Building, Panthapath",
    },
    {
      company: "Tech Solutions Inc.",
      phoneNumber: "+1 123 1213 4566",
      fullName: "Harry Porter",
      emergencyContact: "+1 123 1213 4566",
      address: "19th floor, UTC Building, Panthapath",
    },
    {
      company: "Tech Solutions Inc.",
      phoneNumber: "+1 123 1213 4566",
      fullName: "Harry Porter",
      emergencyContact: "+1 123 1213 4566",
      address: "19th floor, UTC Building, Panthapath",
    },
    {
      company: "Tech Solutions Inc.",
      phoneNumber: "+1 123 1213 4566",
      fullName: "Harry Porter",
      emergencyContact: "+1 123 1213 4566",
      address: "19th floor, UTC Building, Panthapath",
    },
    {
      company: "Tech Solutions Inc.",
      phoneNumber: "+1 123 1213 4566",
      fullName: "Harry Porter",
      emergencyContact: "+1 123 1213 4566",
      address: "19th floor, UTC Building, Panthapath",
    },
    {
      company: "Tech Solutions Inc.",
      phoneNumber: "+1 123 1213 4566",
      fullName: "Harry Porter",
      emergencyContact: "+1 123 1213 4566",
      address: "19th floor, UTC Building, Panthapath",
    },
    {
      company: "Tech Solutions Inc.",
      phoneNumber: "+1 123 1213 4566",
      fullName: "Harry Porter",
      emergencyContact: "+1 123 1213 4566",
      address: "19th floor, UTC Building, Panthapath",
    },
  ]);

  const handleApprove = (index) => {
    const updated = [...clients];
    updated[index].status = "Approved";
    setClients(updated);
  };

  const handleReject = (index) => {
    const updated = [...clients];
    updated[index].status = "Not Approved";
    setClients(updated);
  };

  const handleEditClient = (client, index) => {
    setSelectedClient(client);
    setEditClientIndex(index);
    setIsEditClientModalOpen(true);
  };

  const handleUpdatedClient = (updatedClient) => {
    setClients((prev) => {
      const updatedList = [...prev];
      updatedList[editClientIndex] = updatedClient;
      return updatedList;
    });
    setIsEditClientModalOpen(false);
  };

  return (
    <section className="text-primary-text w-full relative">
      {/* header */}
      <header className="bg-[#E4E3E0] text-[#333] p-6 rounded-[40px] border-l-2 border-[#bbb] shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
        <nav className="flex items-center justify-between gap-4 pb-5 border-[#555]/50 border-b">
          <div className="flex items-center w-full gap-5">
            <div className="max-w-[412px] 2xl:max-w-[425px] w-full flex gap-5 items-center justify-between bg-[#E4E3E0] border border-[#565656] rounded-lg px-5 py-4 shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent outline-none leading-[20px]"
              />
            </div>
            <div className="flex max-w-[474px] w-full gap-5 bg-[#D7D6D7] rounded-[40px] my-4  shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
              <button
                onClick={() => setBusinessPartner("clients")}
                className={`flex-1 py-3 md:py-4 lg:py-6 rounded-[40px] text-[13px] md:text-sm xl:text-xl transition ${
                  businessPartner === "clients"
                    ? "bg-[#21BBA2] text-white border border-[#EAEAEA] shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]"
                    : "hover:bg-gray-200"
                }`}
              >
                Clients
              </button>
              <button
                onClick={() => setBusinessPartner("vendors")}
                className={`flex-1 py-3 md:py-4 lg:py-6 rounded-[40px] text-[13px] md:text-sm xl:text-xl transition ${
                  businessPartner === "vendors"
                    ? "bg-[#21BBA2] text-white border border-[#EAEAEA] shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]"
                    : "hover:bg-gray-200"
                }`}
              >
                Vendors
              </button>
            </div>
          </div>
          {/* notification & profile */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-5">
              <button className="relative">
                <BellIconSvg className="text-[#F34235]" />
                <div className="size-5 text-white bg-[#F34235] rounded-full flex items-center justify-center text-xs absolute -top-1.5 -right-1.5 border-2 border-[#e4e3e0]">
                  2
                </div>
              </button>
              <div className="relative shrink-0 cursor-pointer">
                <Image
                  src={profilePicture}
                  width={48}
                  height={48}
                  alt=""
                  className="rounded-full"
                />
                <div className="size-4 rounded-full border-[3px] border-white bg-green-500 absolute -bottom-0.5 -right-0.5" />
              </div>
            </div>
          </div>
        </nav>
      </header>
      {businessPartner === "clients" && (
        <div>
          <div className="max-w-[1058px] w-full overflow-x-auto px-2 mt-5">
            <table className="w-full text-[#333] border-spacing-y-3 border-separate">
              <thead className="rounded-lg text-sm border shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
                <tr className="rounded-lg border">
                  <th className="px-3 py-3 md:py-5">Company</th>
                  <th className="px-3 py-3 md:py-5">Phone Number</th>
                  <th className="px-3 py-3 md:py-5">Address</th>
                  <th className="px-3 py-3 md:py-5">Status</th>
                  <th className="px-3 py-3 md:py-5">Actions</th>
                  <th className="px-3 py-3 md:py-5 flex items-center justify-center">
                    <Users />
                  </th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client, i) => (
                  <tr
                    key={i}
                    className="border rounded-lg shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]"
                  >
                    <td className="px-3 py-3 md:py-5 text-center">
                      {client.company}
                    </td>
                    <td className="px-3 py-3 md:py-5 text-center">
                      {client.phoneNumber}
                    </td>
                    <td className="px-3 py-3 md:py-5 text-center">
                      {client.address}
                    </td>
                    <td
                      className={`px-3 py-3 md:py-5 text-center ${
                        client.status === "Not Approved" && "bg-[#FFBEBE]"
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2.5">
                        {client.status}
                        {client.status === "Pending" && (
                          <div className="flex items-center gap-2.5">
                            <button onClick={() => handleApprove(i)}>
                              <Correct />
                            </button>
                            <button onClick={() => handleReject(i)}>
                              <WrongIconRed />
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-3 py-3 md:py-5 text-center flex items-center justify-center gap-2.5">
                      <button>
                        <Eye />
                      </button>
                      <button onClick={() => handleEditClient(client, i)}>
                        <EditPen />
                      </button>
                      <button className="bg-[#F34235] hover:bg-[#F34235]/80 size-7 rounded-full flex items-center justify-center">
                        <TrashBin />
                      </button>
                    </td>
                    <td className="px-3 py-3 md:py-5 md:px-[30px] text-center">
                      <div className="flex items-center justify-center gap-2.5">
                        {client.users}
                        <button className="size-[30px] flex items-center justify-center p-[6.5px] rounded-full bg-[#D7D7D7] border border-[#b8b6b6] shadow-[0_4.167px_4.167px_0_rgba(0,0,0,0.25)]">
                          <RightArrow />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {clients.length === 0 && (
                  <tr>
                    <td colSpan="8" className="text-center text-gray-400 py-6">
                      No clients yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {businessPartner === "vendors" && (
        <div>
          <div className="w-full overflow-x-auto px-2 mt-5">
            <table className="w-full text-[#333] border-spacing-y-3 border-separate">
              <thead className="rounded-lg text-sm border shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
                <tr className="rounded-lg border">
                  <th className="px-3 py-3 md:py-5">Company</th>
                  <th className="px-3 py-3 md:py-5">Phone Number</th>
                  <th className="px-3 py-3 md:py-5">Full Name</th>
                  <th className="px-3 py-3 md:py-5">Phone Number</th>
                  <th className="px-3 py-3 md:py-5">Address</th>
                  <th className="px-3 py-3 md:py-5">Actions</th>
                </tr>
              </thead>
              <tbody>
                {vendors.map((vendor, i) => (
                  <tr
                    key={i}
                    className="border rounded-lg shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]"
                  >
                    <td className="px-3 py-3 md:py-5 text-center">
                      {vendor.company}
                    </td>
                    <td className="px-3 py-3 md:py-5 text-center">
                      {vendor.phoneNumber}
                    </td>
                    <td className="px-3 py-3 md:py-5 text-center">
                      {vendor.fullName}
                    </td>
                    <td className="px-3 py-3 md:py-5 text-center">
                      {vendor.emergencyContact}
                    </td>
                    <td className="px-3 py-3 md:py-5 text-center">
                      {vendor.address}
                    </td>
                    <td className="px-3 py-3 md:py-5 text-center flex items-center justify-center gap-2.5">
                      <button>
                        <EditPen />
                      </button>
                      <button className="bg-[#F34235] hover:bg-[#F34235]/80 size-7 rounded-full flex items-center justify-center">
                        <TrashBin />
                      </button>
                    </td>
                  </tr>
                ))}
                {vendors.length === 0 && (
                  <tr>
                    <td colSpan="8" className="text-center text-gray-400 py-6">
                      No vendors yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* edit client modal */}
      <EditClientModal
        isOpen={isEditClientModalOpen}
        onClose={() => setIsEditClientModalOpen(false)}
        onSave={handleUpdatedClient}
        client={selectedClient}
      />
    </section>
  );
};

export default page;
