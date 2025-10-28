"use client";
import React, { useState } from "react";
import Container from "../../../Components/Common/Container";
import { AirSvg, AISvg, DesignSvg } from "../../../Components/Svg/SvgContainer";
import Favorites from "./_components/Favorites";
import Saved from "./_components/Saved";

const page = () => {
  const [activeTab, setActiveTab] = useState("favorites");
  const shadow_box =
    "p-5 border border-[#E9E9E9] bg-white rounded-xl w-[312px] space-y-3 shadow-[0_30px_65px_6px_rgba(19,25,39,0.11)]";

  return (
    <section className="my-10">
      <Container>
        <main className="flex gap-8">
          {/* Sidebar */}
          <aside className="space-y-5">
            {/* Upper Div */}
            <div className={shadow_box}>
              <h3 className="text-[#1F1F1F] text-lg font-medium">My stuff</h3>

              {/* Favorite */}
              <button
                onClick={() => setActiveTab("favorites")}
                className="flex gap-2 items-center"
              >
                <input
                  id="favorites"
                  type="radio"
                  className="size-4"
                  name="filter"
                  checked={activeTab === "favorites"}
                  readOnly
                />
                <label
                  htmlFor="favorites"
                  className="text-sm text-primary-text font-medium"
                >
                  Favorites
                </label>
              </button>

              {/* Saved */}
              <button
                onClick={() => setActiveTab("saved")}
                className="flex gap-2 items-center"
              >
                <input
                  id="saved"
                  type="radio"
                  className="size-4"
                  name="filter"
                  checked={activeTab === "saved"}
                  readOnly
                />
                <label
                  htmlFor="saved"
                  className="text-sm text-primary-text font-medium"
                >
                  Saved
                </label>
              </button>

              <hr className="text-gray-200 my-5" />

              <h3 className="text-[#1F1F1F] text-lg font-medium">
                Filter by product categories
              </h3>

              {/* Category Options */}
              {[
                { id: "custom", label: "Custom Door Designs" },
                { id: "double", label: "Double Door Designs" },
                { id: "single", label: "Single Door Designs" },
              ].map(({ id, label }) => (
                <label
                  key={id}
                  htmlFor={id}
                  onClick={() => setActiveTab(id)}
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <input
                    id={id}
                    type="radio"
                    className="size-4"
                    name="filter"
                    checked={activeTab === id}
                    readOnly
                  />
                  <span className="text-sm text-primary-text font-medium">
                    {label}
                  </span>
                </label>
              ))}

              <hr className="text-gray-200 my-5" />

              <h3 className="text-[#1F1F1F] text-lg font-medium">
                Filter by product color
              </h3>

              {/* Color Options */}
              {[
                { id: "bronze", label: "Bronze" },
                { id: "white", label: "White" },
                { id: "black", label: "Black" },
              ].map(({ id, label }) => (
                <label
                  key={id}
                  htmlFor={id}
                  onClick={() => setActiveTab(id)}
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <input
                    id={id}
                    type="radio"
                    className="size-4"
                    name="filter"
                    checked={activeTab === id}
                    readOnly
                  />
                  <span className="text-sm text-primary-text font-medium">
                    {label}
                  </span>
                </label>
              ))}

              <hr className="text-gray-200 my-5" />

              {/* Reset */}
              <button
                onClick={() => setActiveTab("favorites")}
                className="block w-full rounded-full border border-light-green text-light-green cursor-pointer hover:bg-light-green hover:text-white duration-300 transition-all py-2.5"
              >
                Reset
              </button>
            </div>

            {/* Middle Div */}
            <div className={shadow_box}>
              <h3 className="text-[#1F1F1F] text-lg font-medium mb-5 flex gap-2 items-center">
                <DesignSvg />
                AI Design
              </h3>

              <button
                onClick={() => setActiveTab("ai_design")}
                className="px-4 py-2.5 font-medium rounded-full cursor-pointer flex gap-2 items-center bg-[linear-gradient(245deg,_#4BCDE4_1.36%,_#58C5D8_49.38%,_#29717E_186.59%)] text-primary-text duration-300 transition-all hover:scale-105"
              >
                <AISvg />
                Create AI Design
              </button>
            </div>

            {/* Lower Div */}
            <div className={shadow_box}>
              <h3 className="text-[#1F1F1F] text-lg font-medium mb-5 flex gap-2 items-center">
                <AirSvg />
                AR Viewer
              </h3>

              <label className="relative inline-flex gap-3 items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  onChange={() => setActiveTab("ar_viewer")}
                />
                <div className="w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full transition-all duration-300" />
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-5" />

                {/* Labels */}
                <span className="text-primary-text peer-checked:hidden font-semibold">
                  Off
                </span>
                <span className="text-primary-text peer-checked:text-blue-600 hidden peer-checked:inline font-semibold">
                  On
                </span>
              </label>
            </div>
          </aside>

          {/* Outlet */}
          <section>
            {activeTab === "favorites" && <Favorites />}
            {activeTab === "saved" && <Saved />}
          </section>
        </main>
      </Container>
    </section>
  );
};

export default page;
