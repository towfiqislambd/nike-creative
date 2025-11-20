"use client";
import React from "react";
import { EditSvg } from "../../../../Components/Svg/SvgContainer"; 
import { FaRegTrashCan } from "react-icons/fa6";



export default function SideLitesDeductionsInterior({
  rows = [],
  onEdit,
  onDelete,
  onAdd,
}) {
  return (
    <section className="relative">
      <h2 className="text-[20px]  font-semibold text-[#333]">
        Side lites Deductions Interior
      </h2>
      <div className="mt-1 h-[2px] w-full bg-black/10" />

      <div>
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-1.5 md:border-spacing-y-3">
            <thead>
              <tr>
                <th className="th">
                  Manufacturer <br /> Nme
                </th>
                <th className="th">
                  Single Door Dedicated <br /> Measurement
                </th>
                <th className="th">
                  Double Door Dedicated <br /> Measurement
                </th>
                <th className="th">
                  Single Door Dedicated <br /> Measurement High Bottom
                </th>
                <th className="th">
                  Double Door Dedicated <br /> Measurement High Bottom
                </th>
                <th className="th">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr
                  key={r.id}
                  className="shadow-[3px_3px_4px_4px] shadow-gray-300 bg-white"
                >
                  <td className="td">
                    <div className="flex items-center gap-2">
                      <span>{r.manufacturer}</span>
                      <span className="text-gray-400">▾</span>
                    </div>
                  </td>
                  <td className="td">{r.single}</td>
                  <td className="td">{r.double}</td>
                  <td className="td">{r.singleHigh}</td>
                  <td className="td">{r.doubleHigh}</td>
                  <td className="td">
                    <div className="flex items-center justify-center gap-3">
                      <button
                        onClick={() => onEdit?.(r)}
                        className="grid size-8 place-items-center rounded-full border border-gray-300 hover:bg-gray-50"
                        title="Edit"
                      >
                        <EditSvg />
                      </button>
                      <button
                        onClick={() => onDelete?.(r.id)}
                        className="grid size-8 place-items-center rounded-full bg-red-500/10 text-red-600 hover:bg-red-500/20"
                        title="Delete"
                      >
                        <FaRegTrashCan />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {rows.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="bg-white px-5 py-10 text-center text-gray-500"
                  >
                    No data yet. Click the + button to add a row.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {onAdd && (
        <div className="flex justify-end">
          <button
            onClick={onAdd}
            className="mt-2 grid size-9 place-items-center rounded-full bg-[#21BBA2] text-white text-3xl shadow-lg hover:bg-[#1aa58e]"
            aria-label="Add row"
          >
            +
          </button>
        </div>
      )}
    </section>
  );
}
