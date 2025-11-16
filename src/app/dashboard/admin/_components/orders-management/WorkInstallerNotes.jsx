"use client";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import AddNoteModal from "./AddNoteModal";
import Modal from "../../../../../Components/Common/Modal";
import {
  AIBot,
  Man2,
  Mechanic,
} from "../../../../../Components/Svg/SvgContainer2";

const WorkInstallerNotes = ({ open, onClose }) => {
  const [addNoteModalOpen, setAddNoteModalOpen] = useState(false);
  const [notes, setNotes] = useState({
    internal: [
      {
        id: 1,
        text: "Rescheduled installation to October 2 due to customer request.",
        author: "Alex",
        date: "10/20/2025 - 7:20 AM",
        type: "user",
      },
      {
        id: 2,
        text: "Please install the window stickers on the sliding glass doors only, avoid the porch door.",
        author: "Automatic system",
        date: "10/20/2025 - 7:20 AM",
        type: "system",
      },
      {
        id: 3,
        text: "Rescheduled installation to October 2 due to customer request.",
        author: "Alex",
        date: "10/20/2025 - 7:20 AM",
        type: "user",
      },
      {
        id: 4,
        text: "Please install the window stickers on the sliding glass doors only, avoid the porch door.",
        author: "Automatic system",
        date: "10/20/2025 - 7:20 AM",
        type: "system",
      },
    ],
    installer: [
      {
        id: 1,
        text: "Needs access code for gated property, approval requested from manager.",
        author: "John",
        date: "10/20/2025 - 7:20 AM",
        type: "user",
      },
      {
        id: 2,
        text: "Needs access code for gated property, approval requested from manager.",
        author: "Alen",
        date: "10/20/2025 - 7:20 AM",
        type: "driver",
      },
      {
        id: 3,
        text: "Needs access code for gated property, approval requested from manager.",
        author: "John",
        date: "10/20/2025 - 7:20 AM",
        type: "user",
      },
      {
        id: 4,
        text: "Needs access code for gated property, approval requested from manager.",
        author: "Alen",
        date: "10/20/2025 - 7:20 AM",
        type: "driver",
      },
    ],
  });

  const handleAddNote = (data) => {
    const newNote = {
      id: Date.now(),
      text: data.note,
      author: data.category === "Internal Notes" ? "User" : "Driver Name",
      date:
        new Date().toLocaleDateString() +
        " - " +
        new Date().toLocaleTimeString(),
      type: data.category === "Internal Notes" ? "user" : "driver",
    };

    setNotes((prev) => ({
      ...prev,
      [data.category === "Internal Notes" ? "internal" : "installer"]: [
        newNote,
        ...prev[data.category === "Internal Notes" ? "internal" : "installer"],
      ],
    }));
    setAddNoteModalOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={onClose} className={"max-w-[1052px]"}>
          <div className="flex max-sm:flex-col sm:items-center justify-between pr-3 mb-2.5">
            <h1 className="card_title">Work & Installer Notes Timeline</h1>
            <div>
              <button
                onClick={() => setAddNoteModalOpen(true)}
                className="bg-[#D7D7D7] inline-flex items-center gap-2.5 px-3.5 md:px-5 py-3 md:py-4 rounded-[10px] border border-[#F5F4F4] custom-shadow-xl max-sm:text-sm md:text-xl"
              >
                Add Note <FiPlus />
              </button>
            </div>
          </div>

          <div className="flex max-md:flex-col gap-5 sm:gap-[30px]">
            <div className="flex-1 space-y-4">
              <h2 className="text-lg mb-2.5">
                Internal Notes (Staff & System)
              </h2>
              {notes.internal.length !== 0 ? (
                <div className="space-y-2.5">
                  {notes.internal.map((note) => (
                    <div
                      key={note.id}
                      className={`${note.type !== "user" && "pl-2 md:pl-5"}`}
                    >
                      <div
                        className={`w-full flex gap-2.5 p-2.5 rounded-lg text-primary-text custom-shadow-xl ${
                          note.type === "user" ? "bg-white" : "bg-[#F5FFFD]"
                        }`}
                      >
                        <div className="flex items-center justify-center size-9 p-2 shrink-0 rounded-full bg-white custom-shadow-xl">
                          {note.type === "user" ? <Man2 /> : <AIBot />}
                        </div>
                        <div className="space-y-2.5">
                          <p className="text-sm">{note.text}</p>
                          <div className="flex items-center justify-between gap-2.5 text-sub-text text-xs">
                            <span>{note.author}</span>
                            <span>Date: {note.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-400">no notes added</p>
              )}
            </div>

            <div className="min-w-full h-[1px] md:hidden bg-[#B2B2B2]" />
            <div className="max-md:hidden w-[1px] min-h-full bg-[#B2B2B2]" />

            <div className="flex-1 space-y-4">
              <h2 className="text-lg mb-2.5">Installer Notes</h2>

              {notes.installer.length !== 0 ? (
                <div className="space-y-2.5">
                  {notes.installer.map((note) => (
                    <div
                      key={note.id}
                      className={`${note.type !== "user" && "pl-2 md:pl-5"}`}
                    >
                      <div
                        className={`w-full flex gap-2.5 p-2.5 rounded-lg text-primary-text custom-shadow-xl bg-white`}
                      >
                        <div className="flex items-center justify-center size-9 p-2 shrink-0 rounded-full bg-white custom-shadow-xl">
                          {note.type === "user" ? <Man2 /> : <Mechanic />}
                        </div>
                        <div className="space-y-2.5">
                          <p className="text-sm">{note.text}</p>
                          <div className="flex items-center justify-between gap-2.5 text-sub-text text-xs">
                            <span>{note.author}</span>
                            <span>Date: {note.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-400">no notes added</p>
              )}
            </div>
          </div>
      </Modal>
      <AddNoteModal
        open={addNoteModalOpen}
        onClose={() => setAddNoteModalOpen(false)}
        onSubmit={handleAddNote}
      />
    </>
  );
};

export default WorkInstallerNotes;
