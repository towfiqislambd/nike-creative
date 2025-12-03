"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Container from "../../../Components/Common/Container";
import { LockSvg } from "../../../Components/Svg/SvgContainer";

export default function FinalLookSection() {
  const { setValue } = useForm({
    defaultValues: {
      singleColor: "#4B5563",
      doubleColor: "#4B5563",
    },
  });

  const [selected, setSelected] = useState({
    singleColor: "#4B5563",
    doubleColor: "#4B5563",
  });

  function ColorCircle({ color, field }) {
    const isSelected = selected[field] === color;
    return (
      <button
        type="button"
        onClick={() => {
          setValue(field, color, { shouldDirty: true });
          setSelected(prev => ({ ...prev, [field]: color }));
        }}
        className={`size-6 2xl:size-8 rounded-full shadow-md cursor-pointer transition-all ${
          isSelected
            ? "ring-2 ring-[#21BBA2]"
            : "hover:ring-2 hover:ring-gray-300"
        }`}
        style={{ backgroundColor: color }}
        aria-label={`Select ${color}`}
      />
    );
  }

  return (
    <Container>
      <div className="flex flex-col 2xl:flex-row gap-6 my-10 justify-center mx-auto">
        <div className="max-w-[660px] bg-white p-4 sm:p-6 rounded-3xl shadow-md">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Envision the Final Look
          </h2>
          <p className="mt-3 text-gray-600">
            Use our interactive tool to see designs on your door before you
            decide. Find your perfect match with confidence.
          </p>

          <button
            type="button"
            className="cursor-pointer mt-6 inline-flex items-center justify-between rounded-[40px] border border-[#1F1F1F] py-1.5 2xl:py-2 pr-4 pl-4 2xl:pl-7 text-sm text-[#1F1F1F]/80 hover:bg-black/[0.02] transition"
          >
            <span className="mr-3">Try the Visualizer</span>
            <span className="grid place-items-center size-6 md:size-8 rounded-full bg-[#21BBA2]">
              <LockSvg />
            </span>
          </button>
        </div>

        <div className="max-w-[660px] bg-white p-4 sm:p-6 rounded-3xl shadow-md">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Quick Catalog View
          </h2>

          <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <button
              type="button"
              className="cursor-pointer inline-flex items-center justify-between rounded-[40px] border border-[#1F1F1F] w-fit py-1.5 2xl:py-2 pr-4 pl-4 2xl:pl-5 text-sm text-[#1F1F1F]/80 hover:bg-black/[0.02] transition"
            >
              <span className="mr-3">Single Door Design</span>
              <span className="grid place-items-center size-6 md:size-8 rounded-full bg-[#21BBA2]">
                <LockSvg />
              </span>
            </button>

            <div className="flex items-center gap-2">
              <span className="text-gray-700">Color:</span>
              <ColorCircle field="singleColor" color="#4B5563" />
              <ColorCircle field="singleColor" color="#E5E7EB" />
              <ColorCircle field="singleColor" color="#111827" />
            </div>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <button
              type="button"
              className="cursor-pointer w-fit inline-flex items-center justify-between rounded-[40px] border border-[#1F1F1F] py-1.5 2xl:py-2 pr-3 pl-4 2xl:pl-5 text-sm text-[#1F1F1F]/80 hover:bg-black/[0.02] transition"
            >
              <span className="mr-3">Double Door Design</span>
              <span className="grid place-items-center size-6 md:size-8 rounded-full bg-[#21BBA2]">
                <LockSvg />
              </span>
            </button>

            <div className="flex items-center gap-2">
              <span className="text-gray-700">Color:</span>
              <ColorCircle field="doubleColor" color="#4B5563" />
              <ColorCircle field="doubleColor" color="#E5E7EB" />
              <ColorCircle field="doubleColor" color="#111827" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
