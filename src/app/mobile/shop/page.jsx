"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { catalogueData } from "../../../Components/Data/data";
import Container from "../../../Components/Common/Container";
import {
  DownSvg,
  HomeSvg,
  LoveSvg,
  ShareSvg,
  SmallOrderSvg,
  SuccessSvg,
  ViewSvg,
} from "../../../Components/Svg/SvgContainer";
import Modal from "../../../Components/Common/Modal";
import DoorPreviewModal from "../../../Components/Modals/DoorPreviewModal";
import { FaHeart, FaHouseMedical } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";

const colors = [
  { id: 1, code: "#3E3E3E" },
  { id: 2, code: "#ffffff" },
  { id: 3, code: "#000000" },
];

const categories = [
  { id: "single", name: "Single Door Designs" },
  { id: "double", name: "Double Door Designs" },
  { id: "custom", name: "Custom Door Designs" },
];

const Page = () => {
  const router = useRouter();

  // modals
  const [openPreviewModal, setOpenPreviewModal] = useState(false);
  const [openTryOnModal, setOpenTryOnModal] = useState(false);
  const [openOrderConfirmModal, setOpenOrderConfirmModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  // filters
  const [activeCategory, setActiveCategory] = useState("Single Door Designs");
  const [activeColor, setActiveColor] = useState("#3E3E3E");
  const [activeTopFilter, setActiveTopFilter] = useState("single");

  // bottom tabs: "shop" | "favorites" | others later
  const [activeTab, setActiveTab] = useState("shop");

  // favorites: store IDs of favorite items
  const [favoriteIds, setFavoriteIds] = useState([]);

  // filter by top door type
  const baseFilteredCatalogue = catalogueData.filter((item) => {
    if (!item.type) return true;
    return item.type === activeTopFilter;
  });

  // final list to display based on active tab
  const displayedCatalogue =
    activeTab === "favorites"
      ? baseFilteredCatalogue.filter((item) => favoriteIds.includes(item.id))
      : baseFilteredCatalogue;

  const handleTopFilterClick = (cat) => {
    setActiveTopFilter(cat.id);
    setActiveCategory(cat.name);
  };

  const toggleFavorite = (id) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <section className="relative min-h-screen pb-24">
      {/* MOBILE TOP FILTER BUTTONS */}
      <div className="md:hidden bg-[#18B9C9] pt-6 pb-4 px-6 rounded-b-[12px] shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
        <div className="flex items-center justify-center gap-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleTopFilterClick(cat)}
              className={`grid h-10 w-10 place-items-center rounded-full border border-white/50 text-white text-xs font-medium shadow-[0_4px_10px_rgba(0,0,0,0.35)] transition ${
                activeTopFilter === cat.id
                  ? "bg-[#21BBA2] text-[#18B9C9]"
                  : "bg-[#21BBA2]"
              }`}
            >
              {cat.id === "single" && <HomeSvg />}
              {cat.id === "double" && "2D"}
              {cat.id === "custom" && "C"}
            </button>
          ))}
        </div>
      </div>

      <Container>
        {/* DESKTOP FILTERS (unchanged) */}
        <div className="mb-7 2xl:mb-10 hidden md:flex flex-col md:flex-row gap-3 justify-between items-center">
          <div className="flex gap-5 md:gap-12 flex-col md:flex-row items-center">
            <div className="flex flex-col sm:flex-row gap-3 xl:gap-5 items-center">
              {categories.slice(0, 2).map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-3 xl:px-5 py-2 xl:py-3 rounded-lg cursor-pointer hover:scale-105 duration-300 transition-all border border-light-green ${
                    activeCategory === category.name
                      ? "bg-light-green text-white"
                      : "bg-transparent text-light-green"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="flex gap-3 items-center">
              <p className="text-[#333] text-lg xl:text-xl font-medium">
                Color:
              </p>
              <div className="flex gap-2 items-center">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setActiveColor(color.code)}
                    style={{ backgroundColor: color.code }}
                    className={`rounded-full cursor-pointer shadow-lg ${
                      activeColor === color.code
                        ? "border-light-green border-2 size-6"
                        : "size-5 border border-gray-100"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <button className="p-2 xl:p-3 rounded-lg cursor-pointer text-primary-text font-medium border border-off-white bg-[#F5F7F9] flex gap-2 items-center">
            <ViewSvg />
            <span>View</span>
            <DownSvg />
          </button>
        </div>

        {/* GRID */}
        <div className="mt-6 md:mt-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {displayedCatalogue.map((item) => {
            const isFav = favoriteIds.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => setOpenPreviewModal(true)}
                className="border border-accent-gray rounded-2xl bg-white text-left shadow-md pb-3 relative duration-300 transition-all cursor-pointer hover:scale-[1.02] hover:shadow-lg hover:border-light-green overflow-hidden"
              >
                <div className="relative w-full pt-[120%]">
                  <Image
                    src={item.img}
                    alt="door"
                    fill
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute right-2 top-2 flex gap-1.5 items-center">
                    <button
                      className="size-7 rounded-full cursor-pointer grid place-items-center bg-[linear-gradient(254deg,_#E3F2FD_-2.44%,_rgba(249,252,255,0.80)_110.21%)] shadow border border-gray-100 hover:bg-light-green duration-300 transition-all hover:scale-105"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ShareSvg />
                    </button>

                    {/* FAVORITE TOGGLE */}
                    <button
                      className={`size-7 rounded-full cursor-pointer grid place-items-center shadow border border-gray-100 hover:scale-105 duration-300 transition-all ${
                        isFav
                          ? "bg-light-green text-white"
                          : "bg-[linear-gradient(254deg,_#E3F2FD_-2.44%,_rgba(249,252,255,0.80)_110.21%)] text-gray-700"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(item.id);
                      }}
                    >
                      <LoveSvg />
                    </button>
                  </div>
                </div>

                <div className="px-3 pt-2 flex justify-between items-center">
                  <div>
                    <p className="text-[#333] font-semibold text-sm mb-1">
                      {item.name}
                    </p>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-[#555]">Color:</span>
                      <div className="flex items-center gap-1">
                        {colors.map((color) => (
                          <span
                            key={color.id}
                            style={{ backgroundColor: color.code }}
                            className="w-3 h-3 rounded-full border border-black/10"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenOrderConfirmModal(true);
                      }}
                    >
                      <SmallOrderSvg />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      {/* MODALS (unchanged) */}
      <Modal open={openPreviewModal} onClose={() => setOpenPreviewModal(false)}>
        <DoorPreviewModal
          onClose={() => setOpenPreviewModal(false)}
          onTryOn={() => {
            setOpenPreviewModal(false);
            setOpenTryOnModal(true);
          }}
          onOrder={() => {
            setOpenPreviewModal(false);
            setOpenOrderConfirmModal(true);
          }}
        />
      </Modal>

      <Modal open={openTryOnModal} onClose={() => setOpenTryOnModal(false)}>
        <div className="text-center py-7">
          <h3 className="text-xl font-medium mb-4 text-primary-text">
            Would you like to continue to the try-on page?
          </h3>
          <div className="flex gap-8 justify-center items-center mt-7">
            <button
              onClick={() => setOpenTryOnModal(false)}
              className="px-7 py-2.5 rounded-lg border border-light-green text-light-green hover:scale-105 transition-transform cursor-pointer"
            >
              No
            </button>
            <button
              onClick={() => {
                router.push(`/b2b2c/shop?isAr=true&isPreview=true`);
                setOpenTryOnModal(false);
              }}
              className="px-7 py-2.5 rounded-lg bg-light-green text-white hover:scale-105 transition-transform cursor-pointer"
            >
              Yes
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        open={openOrderConfirmModal}
        onClose={() => setOpenOrderConfirmModal(false)}
      >
        <div className="text-center py-7">
          <h3 className="text-xl font-medium mb-4 text-primary-text">
            Are you sure you would like to place the order?
          </h3>
          <div className="flex gap-8 justify-center items-center mt-7">
            <button
              onClick={() => setOpenOrderConfirmModal(false)}
              className="px-7 py-2.5 rounded-lg border border-light-green text-light-green hover:scale-105 transition-transform cursor-pointer"
            >
              No
            </button>
            <button
              onClick={() => {
                setOpenOrderConfirmModal(false);
                setOpenSuccessModal(true);
              }}
              className="px-7 py-2.5 rounded-lg bg-light-green text-white hover:scale-105 transition-transform cursor-pointer"
            >
              Yes
            </button>
          </div>
        </div>
      </Modal>

      <Modal open={openSuccessModal} onClose={() => setOpenSuccessModal(false)}>
        <div className="flex flex-col justify-center items-center text-center py-7">
          <SuccessSvg />
          <h3 className="text-xl font-medium text-primary-text mt-7">
            Your order has been successfully placed
          </h3>
          <p className="py-5 text-sm text-primary-text">
            The person assisting you will be notified.
          </p>
          <button
            onClick={() => router.push(`/b2b2c`)}
            className="px-7 py-2.5 rounded-lg bg-light-green text-white cursor-pointer duration-300 hover:scale-105 transition-transform border border-light-green"
          >
            Home page
          </button>
        </div>
      </Modal>

      {/* MOBILE BOTTOM NAV */}
      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-xs rounded-full bg-white shadow-[0_8px_25px_rgba(0,0,0,0.35)] px-5 py-2.5 flex items-center justify-between z-40">
        {/* SHOP TAB */}
        <button
          type="button"
          className={`flex flex-col items-center text-[30px] h-10 w-10 rounded-full shadow-md shadow-black/70 ${
            activeTab === "shop" ? "text-gray-800" : "text-[#0003]"
          }`}
          onClick={() => setActiveTab("shop")}
        >
          <FaHouseMedical />
        </button>

        {/* FAVORITES TAB */}
        <button
          type="button"
          className={`flex flex-col justify-center items-center text-[30px] h-10 w-10 rounded-full shadow-md shadow-black/70 ${
            activeTab === "favorites" ? "text-red-500" : "text-[#0003]"
          }`}
          onClick={() => setActiveTab("favorites")}
        >
          <FaHeart />
        </button>

        {/* other tabs still route out, as before */}
        <button
          type="button"
          className="flex flex-col justify-center items-center text-[30px] h-10 w-10 rounded-full shadow-md shadow-black/70"
          onClick={() => router.push("/mobile/discover")}
        >
          <IoMdSettings />
        </button>

        <button
          type="button"
          className="flex flex-col justify-center items-center text-[30px] h-10 w-10 rounded-full shadow-md shadow-black/70"
          onClick={() => router.push("/mobile/profile")}
        >
          <IoMdSettings />
        </button>

        <button
          type="button"
          className="flex flex-col justify-center items-center text-[30px] h-10 w-10 rounded-full shadow-md shadow-black/70"
          onClick={() => router.push("/mobile/profile")}
        >
          <IoMdSettings />
        </button>
      </nav>
    </section>
  );
};

export default Page;
