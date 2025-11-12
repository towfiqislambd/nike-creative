"use client";
import { useState, useEffect } from "react";
import DeleteModal from "../../../../Components/Common/DeleteModal";
import AddEditModal from "../_components/manufacturer-series/AddEditModal";
import SeriesCard from "../_components/manufacturer-series/SeriesCard";
import { BellIcon, Pencil, Plus, Trash } from "lucide-react";
import profilePicture from "../../../../Assets/profile.svg";
import Image from "next/image";
import { EditPen, TrashBin } from "../../../../Components/Svg/SvgContainer";

export default function Home() {
  const [manufacturers, setManufacturers] = useState([
    {
      name: "Euro",
      series: ["Elite", "Multimax"],
    },
    {
      name: "PGT",
      series: ["6001", "Multimax"],
    },
    {
      name: "ES",
      series: ["Novo", "6001"],
    },
  ]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editManufacturer, setEditManufacturer] = useState(null);
  const [selectedManufacturer, setSelectedManufacturer] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [showSeriesModal, setShowSeriesModal] = useState(false);
  const [seriesFor, setSeriesFor] = useState(null);

  useEffect(() => {
    if (manufacturers.length > 0 && !selectedManufacturer) {
      setSelectedManufacturer(manufacturers[0]);
    }
  }, [manufacturers, selectedManufacturer]);

  const handleAddManufacturer = (name) => {
    if (editManufacturer) {
      setManufacturers((prev) =>
        prev.map((m) => (m.name === editManufacturer ? { ...m, name } : m))
      );
      if (selectedManufacturer?.name === editManufacturer) {
        setSelectedManufacturer((prev) => ({ ...prev, name }));
      }
      setEditManufacturer(null);
    } else {
      setManufacturers((prev) => {
        const newList = [...prev, { name, series: [] }];
        if (newList.length === 1) {
          setSelectedManufacturer(newList[0]);
        }
        return newList;
      });
    }
  };

  const handleDeleteManufacturer = () => {
    setManufacturers((prev) => {
      const updated = prev.filter((m) => m.name !== deleteTarget);
      if (selectedManufacturer?.name === deleteTarget) {
        setSelectedManufacturer(updated[0] || null);
      }
      return updated;
    });
    setShowDeleteModal(false);
  };

  const handleAddSeries = (manufacturerName, seriesName) => {
    setManufacturers((prev) =>
      prev.map((m) =>
        m.name === manufacturerName
          ? { ...m, series: [...m.series, seriesName] }
          : m
      )
    );
    if (selectedManufacturer?.name === manufacturerName) {
      setSelectedManufacturer((prev) => ({
        ...prev,
        series: [...(prev.series || []), seriesName],
      }));
    }
  };

  const handleDeleteSeries = (manufacturerName, seriesName) => {
    setManufacturers((prev) =>
      prev.map((m) =>
        m.name === manufacturerName
          ? { ...m, series: m.series.filter((s) => s !== seriesName) }
          : m
      )
    );
    if (selectedManufacturer?.name === manufacturerName) {
      setSelectedManufacturer((prev) => ({
        ...prev,
        series: prev.series.filter((s) => s !== seriesName),
      }));
    }
  };

  return (
    <section className="text-primary-text w-full relative">
      {/* header */}
      <header className="bg-[#E4E3E0] p-2 md:p-6 rounded-2xl md:rounded-[40px] border-l-2 border-[#bbb] custom-shadow-xl">
        <nav className="flex max-[425px]:flex-col items-center justify-between gap-4 mb-5 pb-5 border-[#555]/50 border-b">
          <h2 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-medium">
            Manufacturer & Series Options
          </h2>
          <div className="flex items-center gap-5">
            <button className="relative">
              <BellIcon className="text-[#F34235]" />
              <div className="size-5 text-white bg-[#F34235] rounded-full flex items-center justify-center text-xs absolute -top-1.5 -right-1.5 border-2 border-[#e4e3e0]">
                2
              </div>
            </button>
            <div className="relative shrink-0 cursor-pointer">
              <Image
                src={profilePicture}
                width={48}
                height={48}
                alt="profile"
                className="rounded-full"
              />
              <div className="size-4 rounded-full border-[3px] border-white bg-green-500 absolute -bottom-0.5 -right-0.5" />
            </div>
          </div>
        </nav>

        <div className="mt-5 flex justify-center sm:justify-end">
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-[#21BBA2] hover:bg-[#21BBA2]/90 inline-flex items-center justify-center px-8 py-4 md:text-xl text-white gap-2.5 rounded-[10px] shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07)]"
          >
            Add Manufacturer <Plus className="size-5 md:size-6" />
          </button>
        </div>
      </header>
      <div className="w-full flex max-2xl:flex-col-reverse gap-5 mt-5">
        <div className="overflow-x-auto 2xl:shrink-0 px-2">
          <table className="w-[733px] border-spacing-y-3 border-separate">
            <thead className="rounded-lg text-sm font-normal border custom-shadow-xl">
              <tr className="rounded-lg border bg-white">
                <th className="px-3 py-3 md:py-5 rounded-tl-lg">
                  Manufacturer Name
                </th>
                <th className="px-3 py-3 md:py-5">Series</th>
                <th className="px-3 py-3 md:py-5 rounded-tr-lg">Actions</th>
              </tr>
            </thead>
            <tbody>
              {manufacturers.map((m, i) => (
                <tr
                  key={i}
                  className={`border rounded-lg custom-shadow-xl ${
                    selectedManufacturer?.name === m.name
                      ? "bg-white"
                      : "bg-gray-50"
                  }`}
                >
                  <td className="px-3 py-3 md:py-5 text-center rounded-l-lg">
                    <div className="flex gap-2.5 items-center justify-center">
                      {m.name}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditManufacturer(m.name);
                          setShowAddModal(true);
                        }}
                      >
                        <EditPen />
                      </button>
                    </div>
                  </td>

                  <td className="px-3 py-3 md:py-5 text-center">
                    {m.series.length > 0 ? (
                      <div className="flex items-center justify-center gap-2.5">
                        {m.series.join(", ")}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSeriesFor(m.name);
                            setSelectedManufacturer(m);
                          }}
                        >
                          <EditPen />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSeriesFor(m.name);
                          setSelectedManufacturer(m);
                        }}
                        className="text-[#21BBA2] underline"
                      >
                        Add Series
                      </button>
                    )}
                  </td>

                  <td className="px-3 py-3 md:py-5 text-center rounded-r-lg">
                    <div className="flex items-center justify-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setDeleteTarget(m.name);
                          setShowDeleteModal(true);
                        }}
                        className="bg-[#F34235] hover:bg-[#F34235]/80 size-7 rounded-full flex items-center justify-center"
                      >
                        <TrashBin />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectedManufacturer && (
          <SeriesCard
            manufacturer={selectedManufacturer}
            onAddSeries={(name) => {
              setSeriesFor(name);
              setShowSeriesModal(true);
            }}
            onDeleteSeries={handleDeleteSeries}
          />
        )}
      </div>

      {/* add/edit manufacturer modal */}
      <AddEditModal
        isOpen={showAddModal}
        onClose={() => {
          setShowAddModal(false);
          setEditManufacturer(null);
        }}
        onSave={handleAddManufacturer}
        defaultValue={editManufacturer}
        type="manufacturer"
      />

      {/* add series modal */}
      <AddEditModal
        isOpen={showSeriesModal}
        onClose={() => setShowSeriesModal(false)}
        onSave={(seriesName) => {
          handleAddSeries(seriesFor, seriesName);
          setShowSeriesModal(false);
        }}
        type="series"
      />

      {/* delete modal */}
      <DeleteModal
        isOpen={showDeleteModal}
        type="manufacturer"
        onCancel={() => setShowDeleteModal(false)}
        onConfirm={handleDeleteManufacturer}
      />
    </section>
  );
}
