
"use client";

import React, { useState } from "react";
import {
  BellIconSvg,
  Correct,
  EditPen,
  Eye,
  Plus,
  RightArrow,
  SearchIcon,
  TrashBin,
  Users,
  WrongIconRed,
} from "../../../../Components/Svg/SvgContainer";
import Image from "next/image";
import profilePicture from "../../../../Assets/profile.svg";
import EditClientModal from "../_components/business-partners/EditClientModal";
import AddEditUserModal from "../_components/business-partners/AddEditUserModal";
import Link from "next/link";

const page = () => {
  const [businessPartner, setBusinessPartner] = useState("clients");

  const [isEditClientModalOpen, setIsEditClientModalOpen] = useState(false);
  const [clientsDetails, setClientsDetails] = useState(null);
  const [activeButtonId, setActiveButtonId] = useState(1);
  const [selectedClient, setSelectedClient] = useState(null);
  const [editClientIndex, setEditClientIndex] = useState(null);

  const [clients, setClients] = useState([
    {
      id: 1,
      company: "Tech Solutions Inc.",
      phoneNumber: "+1 123 1213 4566",
      address: "19th floor, UTC Building, Panthapath",
      status: "Pending",
      users: "3",
    },
    {
      id: 2,
      company: "Tech Solutions Inc.",
      phoneNumber: "+1 123 1213 4566",
      address: "19th floor, UTC Building, Panthapath",
      status: "Not Approved",
      users: "3",
    },
    {
      id: 3,
      company: "Tech Solutions Inc.",
      phoneNumber: "+1 123 1213 4566",
      address: "19th floor, UTC Building, Panthapath",
      status: "Pending",
      users: "3",
    },
    {
      id: 4,
      company: "Tech Solutions Inc.",
      phoneNumber: "+1 123 1213 4566",
      address: "19th floor, UTC Building, Panthapath",
      status: "Approved",
      users: "3",
    },
    {
      id: 5,
      company: "Tech Solutions Inc.",
      phoneNumber: "+1 123 1213 4566",
      address: "19th floor, UTC Building, Panthapath",
      status: "Approved",
      users: "3",
    },
  ]);
  const [users, setUsers] = useState([
    {
      fullName: "Tech Solutions Inc.",
      phone: "+1 123 147 2589",
      email: "fhsahfs@gmail.com",
      userRole: "Main Account",
    },
    {
      fullName: "Johnathan",
      phone: "+1 123 147 2589",
      email: "fhsahfs@gmail.com",
      userRole: "Accounting",
    },
    {
      fullName: "Johnathan",
      phone: "+1 123 147 2589",
      email: "fhsahfs@gmail.com",
      userRole: "Sales",
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const handleAdd = () => {
    setEditingUser(null);
    setModalOpen(true);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setModalOpen(true);
  };

  const handleClose = () => setModalOpen(false);

  const handleSubmit = (data) => {
    if (editingUser) {
      setUsers((prev) =>
        prev.map((user) => (user === editingUser ? { ...user, ...data } : user))
      );
    } else {
      setUsers((prev) => [...prev, data]);
    }
    setModalOpen(false);
  };

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

  const handleDeleteClient = (index) => {
    setClients((prevClients) => prevClients.filter((_, i) => i !== index));
  };

  const handleUpdatedClient = (updatedClient) => {
    setClients((prev) => {
      const updatedList = [...prev];
      updatedList[editClientIndex] = updatedClient;
      return updatedList;
    });
    setIsEditClientModalOpen(false);
  };

  const grouped = users.reduce((acc, user) => {
    acc[user.userRole] = acc[user.userRole] || [];
    acc[user.userRole].push(user);
    return acc;
  }, {});

  return (
    <section className="text-primary-text w-full relative">
      {/* header */}
      <header className="bg-[#E4E3E0] p-2 sm:px-2.5 sm:pt-3 sm:pb-2.5 rounded-xl md:rounded-[20px] border-l-2 border-[#bbb] shadow-[0_2px_0_0_rgba(0,_0,_0,_0.25)]">
        <nav className="flex max-sm:flex-col-reverse items-start md:items-center justify-between gap-3">
          <div className="flex max-md:flex-col md:items-center w-full sm:gap-5">
            <div className="max-w-[412px] min-w-0 2xl:max-w-[425px] w-full flex gap-5 items-center justify-between bg-[#E4E3E0] border border-[#565656] rounded-lg px-2 py-2.5 custom-shadow-xl">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent outline-none leading-[20px]"
              />
            </div>
            <div className="flex max-w-[350px] w-full bg-[#D7D6D7] rounded-[40px]  custom-shadow-xl">
              <button
                onClick={() => setBusinessPartner("clients")}
                className={`flex-1 py-2.5 rounded-[35px] text-[13px] md:text-[15px] transition ${
                  businessPartner === "clients"
                    ? "bg-[#21BBA2] text-white border border-[#EAEAEA] custom-shadow-xl"
                    : "hover:bg-gray-200"
                }`}
              >
                Clients
              </button>
              <button
                onClick={() => setBusinessPartner("vendors")}
                className={`flex-1 py-2.5 rounded-[35px] text-[13px] md:text-[15px] transition ${
                  businessPartner === "vendors"
                    ? "bg-[#21BBA2] text-white border border-[#EAEAEA] custom-shadow-xl"
                    : "hover:bg-gray-200"
                }`}
              >
                Vendors
              </button>
            </div>
          </div>
          {/* notification & profile */}
          <div className="flex items-center gap-5">
            <div className="flex max-sm:flex-row-reverse items-center gap-5">
              <button className="relative">
                <BellIconSvg className="text-[#F34235]" />
                <div className="size-5 text-white bg-[#F34235] rounded-full flex items-center justify-center text-xs absolute -top-1.5 -right-1.5 border-2 border-[#e4e3e0]">
                  2
                </div>
              </button>
              <div className="relative shrink-0 cursor-pointer">
                <Image
                  src={profilePicture}
                  width={36}
                  height={36}
                  alt=""
                  className="rounded-full"
                />
                <div className="size-3 rounded-full border-[2px] border-white bg-green-500 absolute -bottom-0.5 -right-0.5" />
              </div>
            </div>
          </div>
        </nav>
      </header>
      {businessPartner === "clients" && (
        <div className="flex max-md:flex-col-reverse gap-5">
          <div className="max-w-[1258px] w-full overflow-x-auto px-1">
            <table className="w-full text-[#333] border-spacing-y-1.5 sm:border-spacing-y-3 border-separate text-nowrap">
              <thead className="rounded-lg text-sm border custom-shadow-xl">
                <tr className="rounded-lg border">
                  <th className="px-3 py-3 font-medium">Company</th>
                  <th className="px-3 py-3 font-medium">Phone Number</th>
                  <th className="px-3 py-3 font-medium">Address</th>
                  <th className="px-3 py-3 font-medium">Status</th>
                  <th className="px-3 py-3 font-medium">Actions</th>
                  <th className="px-3 py-3 flex items-center justify-center">
                    <Users />
                  </th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client, i) => (
                  <tr key={i} className="border text-sm rounded-lg custom-shadow-xl">
                    <td className="px-3 py-3 text-center">
                      {client.company}
                    </td>
                    <td className="px-3 py-3 text-center">
                      {client.phoneNumber}
                    </td>
                    <td className="px-3 py-3 text-center">
                      {client.address}
                    </td>
                    <td
                      className={`px-3 py-3 text-center ${
                        client.status === "Not Approved" && "bg-[#FFBEBE]"
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2.5">
                        {client.status}
                        {client.status === "Pending" && (
                          <div className="flex items-center gap-1">
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
                    <td className="px-3 py-3 text-center flex items-center justify-center gap-2.5">
                      <button>
                        <Eye />
                      </button>
                      <button onClick={() => handleEditClient(client, i)}>
                        <EditPen />
                      </button>
                      <button
                        onClick={() => handleDeleteClient(i)}
                        className="bg-[#F34235] hover:bg-[#F34235]/80 size-5.5 rounded-full flex items-center justify-center"
                      >
                        <TrashBin />
                      </button>
                    </td>
                    <td className="px-3 py-3 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        {client.users}
                        <button
                          onClick={() => (
                            setClientsDetails(client), setActiveButtonId(client.id)
                          )}
                          className={`size-[24px] flex items-center justify-center p-[6.5px] rounded-full bg-[#D7D7D7] border border-[#b8b6b6] shadow-[0_4.167px_4.167px_0_rgba(0,0,0,0.25)] ${
                            activeButtonId == client.id && "bg-white"
                          }`}
                        >
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

          <div
            className={`bg-white custom-shadow-xl rounded-lg p-3 transition ease-in-out duration-500 delay-300 space-y-2.5 w-full max-w-[400px] mt-3`}
          >
            {Object.entries(grouped).map(([role, group], idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="xl:text-lg font-medium">{role}</h3>
                  {role === "Main Account" && (
                    <button
                      onClick={handleAdd}
                      className="bg-[#21BBA2] hover:bg-[#21BBA2]/80 rounded-full size-7 flex items-center justify-center"
                    >
                      <Plus />
                    </button>
                  )}
                </div>

                <div className="space-y-3">
                  {group.map((user, i) => (
                    <div key={i} className="bg-[#E4E3E0] rounded-md p-1.5 sm:p-2 text-sm">
                      <div className="flex items-center justify-between mb-2.5">
                        <p className="font-medium">{user.fullName}</p>
                        <Link href={`tell:${user.phone}`} className="underline ">
                          {user.phone}
                        </Link>
                      </div>
                      <div className="flex items-center justify-between">
                        <Link
                          href={`mailto:${user.mail}`}
                          className="underline "
                        >
                          {user.email}
                        </Link>
                        <button
                          onClick={() => handleEdit(user)}
                          className="text-gray-600 hover:text-teal-600"
                        >
                          <EditPen />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {businessPartner === "vendors" && (
        <div>
          <div className="w-full overflow-x-auto px-2 mt-5">
            <table className="w-full text-[#333] border-spacing-y-1.5 sm:border-spacing-y-3 border-separate text-nowrap">
              <thead className="rounded-lg text-sm border custom-shadow-xl">
                <tr className="rounded-lg border">
                  <th className="px-3 py-3 font-medium">Company</th>
                  <th className="px-3 py-3 font-medium">Phone Number</th>
                  <th className="px-3 py-3 font-medium">Full Name</th>
                  <th className="px-3 py-3 font-medium">Phone Number</th>
                  <th className="px-3 py-3 font-medium">Address</th>
                  <th className="px-3 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {vendors.map((vendor, i) => (
                  <tr key={i} className="border rounded-lg text-sm custom-shadow-xl">
                    <td className="px-3 py-3 text-center">
                      {vendor.company}
                    </td>
                    <td className="px-3 py-3 text-center">
                      {vendor.phoneNumber}
                    </td>
                    <td className="px-3 py-3 text-center">
                      {vendor.fullName}
                    </td>
                    <td className="px-3 py-3 text-center">
                      {vendor.emergencyContact}
                    </td>
                    <td className="px-3 py-3 text-center">
                      {vendor.address}
                    </td>
                    <td className="px-3 py-3 text-center flex items-center justify-center gap-2">
                      <button>
                        <EditPen />
                      </button>
                      <button className="bg-[#F34235] hover:bg-[#F34235]/80 size-5.5 rounded-full flex items-center justify-center">
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
      {/* edit and add user modal */}
      <AddEditUserModal
        isOpen={modalOpen}
        onClose={handleClose}
        onSubmit={handleSubmit}
        initialData={editingUser}
      />
    </section>
  );
};

export default page;
