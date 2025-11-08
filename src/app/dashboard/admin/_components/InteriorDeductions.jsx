"use client";
import React from "react";
import { EditSvg } from "../../../../Components/Svg/SvgContainer";
import { FaRegTrashCan } from "react-icons/fa6";



export default function InteriorDeductions({ rows = [], onEdit, onDelete }) {
  return (
    <>
      <h2 className="text-[28px] font-semibold text-[#333]">
        Interior Deductions
      </h2>
      <div className="mt-6">
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-[20px]">
            <thead>
              <tr>
                <th className="th">
                  Manufacturer <br /> Name
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
                <th className="th">
                  Single Door Dedicated <br /> Measurement ADA
                </th>
                <th className="th">
                  Double Door Dedicated <br /> Measurement ADA
                </th>
                <th className="th">Actions</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((r) => (
                <tr
                  key={r.id}
                  className="bg-white shadow-[3px_3px_4px_4px] shadow-gray-300"
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
                  <td className="td">{r.singleADA}</td>
                  <td className="td">{r.doubleADA}</td>
                  <td className="td">
                    <div className="flex items-center justify-center gap-3">
                      <button
                        onClick={() => onEdit?.(r)}
                        className="grid h-9 w-9 place-items-center rounded-full border border-gray-300 hover:bg-gray-50"
                        title="Edit"
                      >
                        <EditSvg />
                      </button>
                      <button
                        onClick={() => onDelete?.(r.id)}
                        className="grid h-9 w-9 place-items-center rounded-full bg-red-500/10 text-red-600 hover:bg-red-500/20"
                        title="Delete"
                      >
                       < FaRegTrashCan/>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {rows.length === 0 && (
                <tr>
                  <td
                    colSpan={8}
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
    </>
  );
}
