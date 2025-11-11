import React, { useState, useEffect } from "react";
import EditClientVisibility from "./EditClientVisibility";
import { EditPen } from "../../../../../Components/Svg/SvgContainer";

export default function ClientsVisibility() {
  const [clients, setClients] = useState([
    { id: 1, company: "Home Renovations LLC", categories: ["All Categories"] },
    {
      id: 2,
      company: "Bulk Building Inc.",
      categories: ["Windows", "Single Door Designs"],
    },
    {
      id: 3,
      company: "Prestige Construction",
      categories: ["Single Door Designs", "Double Door Designs", "Windows"],
    },
    { id: 4, company: "Prestige Construction", categories: ["Garage Doors"] },
    { id: 5, company: "Home Renovations LLC", categories: ["All Categories"] },
  ]);

  const [selectedClient, setSelectedClient] = useState(null);

  useEffect(() => {
    if (clients.length > 0) {
      setSelectedClient(clients[0]);
    }
  }, [clients]);

  const handleEditClick = (client) => {
    setSelectedClient(client);
  };

  const handleSaveEdit = (updatedClient) => {
    setClients((prev) =>
      prev.map((c) => (c.id === updatedClient.id ? updatedClient : c))
    );
    setSelectedClient(updatedClient);
  };

  return (
    <div className="w-full flex max-2xl:flex-col-reverse items-start gap-5 mt-2">
      <div className="w-full 2xl:max-w-[1075px] overflow-x-auto px-1">
        <table className="max-md:w-[750px] w-full 2xl:max-w-[1075px] text-[#333] border-spacing-y-3 max-md:shrink-0 border-separate font-normal">
          <thead className="rounded-lg border custom-shadow-xl">
            <tr className="rounded-lg border bg-white">
              <th className="px-3 py-3 md:py-5 rounded-l-lg">Company Name</th>
              <th className="px-3 py-3 md:py-5">Visible Categories</th>
              <th className="px-3 py-3 md:py-5 rounded-r-lg">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr
                key={client.id}
                className="border rounded-lg lg:text-lg custom-shadow-xl bg-white"
              >
                <td className="p-3 md:py-5 text-center rounded-l-lg">
                  {client.company}
                </td>
                <td className="px-3 py-3 md:py-5 text-center">
                  {client.categories.join(", ")}
                </td>

                <td className="px-3 py-3 md:py-5 text-center rounded-r-lg">
                  <button onClick={() => handleEditClick(client)} className={`p-1 rounded-md ${
                  selectedClient?.id === client.id ? "custom-shadow-xl" : ""
                  }`}>
                    <EditPen />
                  </button>
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
      
      {selectedClient && (
        <EditClientVisibility
          key={selectedClient.id}
          client={selectedClient}
          onSave={handleSaveEdit}
        />
      )}
    </div>
  );
}
