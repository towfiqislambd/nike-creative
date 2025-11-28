"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { catalogueData } from "../../../Components/Data/data";
import {
  LoveSvg,
  ShareSvg,
  SmallOrderSvg,
  SuccessSvg,
} from "../../../Components/Svg/SvgContainer";
import {
  AiPageSvg,
  AiPhoneDoorSvg,
  DubbleDoorSvg,
  HomeIconSvg,
  SettingsDoorSvg,
  SettingssSvg,
  SingleDoorSvg,
} from "../../../Components/Svg/SvgContainer2";

import Modal from "../../../Components/Common/Modal";
import DoorPreviewModal from "../../../Components/Modals/DoorPreviewModal";
import { FaHeart,} from "react-icons/fa6";
import ArPage from "../ar/page";
import Aipage from "../ai/page";
import SettingsPage from "../settings/page";

const ARSection = () => {
  return <ArPage />;
};

const ProfileSection = () => {
  return (
    <>
      <Aipage />
    </>
  );
};

const SettingsSection = () => {
  return (
    <>
      <SettingsPage />
    </>
  );
};

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

  const [openPreviewModal, setOpenPreviewModal] = useState(false);
  const [openTryOnModal, setOpenTryOnModal] = useState(false);
  const [openOrderConfirmModal, setOpenOrderConfirmModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const [activeCategory, setActiveCategory] = useState("Single Door Designs");
  const [activeColor, setActiveColor] = useState("#3E3E3E");
  const [activeTopFilter, setActiveTopFilter] = useState("single");

  const [activeTab, setActiveTab] = useState("shop");

  const [favoriteIds, setFavoriteIds] = useState([]);

  const baseFilteredCatalogue = catalogueData.filter((item) => {
    if (!item.type) return true;
    return item.type === activeTopFilter;
  });

  const displayedCatalogue =
    activeTab === "favorites"
      ? favoriteIds.length
        ? baseFilteredCatalogue.filter((item) => favoriteIds.includes(item.id))
        : baseFilteredCatalogue
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

  const bottomTabs = [
    { id: "shop", label: "Shop", icon: <HomeIconSvg /> },
    { id: "favorites", label: "Favorites", icon: <FaHeart /> },
    { id: "ar", label: "AR", icon: <AiPhoneDoorSvg /> },
    { id: "profile", label: "Profile", icon: <AiPageSvg /> },
    { id: "settings", label: "Settings", icon: <SettingssSvg /> },
  ];

  const handleBottomTabClick = (tab) => {
    setActiveTab(tab.id);
  };

  const renderMainSection = () => {
    if (activeTab === "shop" || activeTab === "favorites") {
      return (
        <div className="  pt-3 px-2.5 grid grid-cols-2 sm:hidden  gap-4">
          {displayedCatalogue.map((item) => {
            const isFav = favoriteIds.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => setOpenPreviewModal(true)}
                className="border border-accent-gray rounded-2xl bg-white text-left shadow-md pb-3 relative duration-300 transition-all cursor-pointer hover:scale-[1.02] hover:shadow-lg hover:border-light-green overflow-hidden"
              >
                <div className="relative w-full pt-[80%]">
                  <Image
                    src={item.img}
                    alt="door"
                    fill
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute right-2 top-2 flex gap-1.5 items-center">
                    <button
                      className="size-7 rounded-full cursor-pointer grid place-items-center bg-[linear-gradient(254deg,#E3F2FD,-2.44%,rgba(249,252,255,0.80)_110.21%)] shadow border border-gray-100 hover:bg-light-green duration-300 transition-all hover:scale-105"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ShareSvg />
                    </button>

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
      );
    }

    if (activeTab === "ar") return <ARSection />;
    if (activeTab === "profile") return <ProfileSection />;
    if (activeTab === "settings") return <SettingsSection />;

    return null;
  };

  return (
    <section className="relative min-h-screen">
      {/* MOBILE TOP FILTER BUTTONS – ONLY SHOP + FAVORITES */}
      {(activeTab === "shop" || activeTab === "favorites") && (
        <div className="md:hidden block bg-[#18B9C9] pt-6 pb-4 px-6 rounded-b-[12px] shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
          <div className="flex items-center justify-center gap-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleTopFilterClick(cat)}
                className={`grid h-10 w-10 place-items-center rounded-full text-black text-xs font-medium shadow-[0_4px_10px_rgba(0,0,0,0.35)] transition ${
                  activeTopFilter === cat.id
                    ? "bg-[#21BBA2] text-[#18B9C9]"
                    : "bg-[#21BBA2]"
                }`}
              >
                {cat.id === "single" && <SingleDoorSvg />}
                {cat.id === "double" && <DubbleDoorSvg />}
                {cat.id === "custom" && <SettingsDoorSvg />}
              </button>
            ))}
          </div>
        </div>
      )}

      <div>
        <div className="relative w-full">
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://i.ibb.co.com/Z6rhHvLv/B2b2c-bg-1.png"
              alt="background"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          {renderMainSection()}
        </div>
      </div>
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

      {/* MOBILE BOTTOM NAV – same design, all tabs */}
      <nav
        className="
          md:hidden fixed bottom-4 left-1/2 -translate-x-1/2
          w-[90%] max-w-xs rounded-full
          bg-white shadow-[0_8px_25px_rgba(0,0,0,0.35)]
          px-2 py-3 z-40
        "
        aria-label="Bottom navigation"
      >
        <div className="flex items-center justify-between" role="tablist">
          {bottomTabs.map((tab) => {
            const isActive = activeTab === tab.id;

            const baseClasses =
              "flex flex-col justify-center items-center h-12 w-12 rounded-full text-[26px] cursor-pointer transition";

            const colorClasses = isActive
              ? "text-[#333] shadow-md shadow-black/40"
              : "text-[#0003]";

            return (
              <div
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                tabIndex={0}
                onClick={() => handleBottomTabClick(tab)}
                className={`${baseClasses} ${colorClasses}`}
              >
                {tab.icon}
              </div>
            );
          })}
        </div>
      </nav>
    </section>
  );
};

export default Page;
