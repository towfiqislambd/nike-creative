"use client";
import Image from "next/image";
import React, { useState } from "react";
import profilePicture from "../../../../Assets/profile.svg";
import colorPlate from "../../../../Assets/colorPlate.svg";
import Link from "next/link";
import { Cart } from "../../../../Components/Svg/SvgContainer";
import { useForm } from "react-hook-form";
import { FiUploadCloud } from "react-icons/fi";
import { InfoIcon } from "lucide-react";

const navItems = [
  {
    label: "Home",
    link: "#",
  },
  {
    label: "Shop",
    link: "#",
  },
  {
    label: "Category",
    link: "#",
  },
  {
    label: "Contact Us",
    link: "#",
  },
  {
    label: "About US",
    link: "#",
  },
];

const page = () => {
  const { register, handleSubmit, reset } = useForm();
  const [logoPreview, setLogoPreview] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const catalogData = [
    {
      id: 1,
      title: "Double Door Edition",
      img: "https://i.ibb.co.com/3yp31GNJ/img.jpg",
      colors: ["#00B894", "#FFFFFF", "#2D3436"],
    },
    {
      id: 2,
      title: "Single Door Edition",
      img: "https://i.ibb.co.com/3yp31GNJ/img.jpg",
      colors: ["#2D3436", "#FFFFFF", "#636e72"],
    },
  ];

  return (
    <section className="text-primary-text w-full relative">
      {/* header */}
      <header className="bg-[#E4E3E0] p-2 md:p-3 rounded-2xl md:rounded-[20px] border-l-2 border-[#bbb] custom-shadow-xl">
        <nav className="flex items-center justify-end gap-4 pb-2 border-[#555]/50 border-b">
          <div className="flex max-sm:flex-col items-center gap-5 w-full justify-end">
            <div className="flex flex-wrap justify-center gap-3 md:gap-5">
              {navItems?.map(({ label, link }, idx) => (
                <Link
                  key={idx}
                  href={link}
                  className="text-sm md:text-base text-[#333] hover:text-[#21BBA2] transition"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-5">
              <button className="bg-[#21BBA2] hover:bg-[#21BBA2]/80 shrink-0 rounded-full size-9 p-2 flex items-center justify-center cursor-pointer">
                <Cart />
              </button>
              <div className="relative shrink-0 cursor-pointer">
                <Image
                  src={profilePicture}
                  width={42}
                  height={42}
                  alt=""
                  className="rounded-full"
                />
                <div className="size-3.5 rounded-full border-[3px] border-white bg-green-500 absolute -bottom-0.5 -right-0.5" />
              </div>
            </div>
          </div>
        </nav>

        <div className="mt-2">
          <h2 className="text-lg md:text-xl xl:text-2xl font-medium">
            Catalog
          </h2>
        </div>
      </header>
        <div className="flex flex-col md:flex-row gap-4 xl:gap-8 mt-7">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white flex-1 h-fit rounded-[20px] shadow-[0_30px_65px_6px_rgba(19,25,39,0.11)] p-3 sm:p-6 w-full max-w-[496px] space-y-6"
          >
            <h2 className="card_title">Catalog Change</h2>

            <div className="space-y-3">
              <label className="card_label font-medium">My Logo</label>

              {logoPreview ? (
                <div className="flex gap-3 h-[120px]">
                  <div className="rounded-[20px] overflow-hidden border border-gray-200 max-w-[150px] w-full h-[120px]">
                    <img
                      src={logoPreview}
                      alt="Logo Preview"
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="relative flex-1 border border-dashed border-[#ADADAD] rounded-[20px] flex flex-col items-center justify-center h-[120px]">
                    <label className="flex flex-col items-center justify-center cursor-pointer h-full w-full">
                      <input
                        type="file"
                        accept="image/*"
                        {...register("newLogo")}
                        onChange={handleLogoUpload}
                        className="hidden"
                      />
                      <div className="flex flex-col items-center justify-center">
                        <div className="bg-white border border-[#EAECF0] w-10 h-10 rounded-[10px] flex items-center justify-center mb-3">
                          <FiUploadCloud className="text-[#6B7280] text-xl" />
                        </div>
                        <p className="text-lg">Add your new Logo</p>
                        <p className="text-sm text-sub-text">
                          or drag and drop
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              ) : (
                <div className="relative border border-dashed border-[#ADADAD] rounded-[25px] flex flex-col items-center justify-center h-[180px]">
                  <label className="flex flex-col items-center justify-center cursor-pointer h-full w-full">
                    <input
                      type="file"
                      accept="image/*"
                      {...register("logo")}
                      onChange={handleLogoUpload}
                      className="hidden"
                    />
                    <div className="flex flex-col items-center justify-center">
                      <div className="bg-white border border-[#EAECF0] w-10 h-10 rounded-[10px] flex items-center justify-center mb-3">
                        <FiUploadCloud className="text-[#6B7280] text-xl" />
                      </div>
                      <p className="text-lg">Upload your Logo</p>
                      <p className="text-sm text-sub-text">or drag and drop</p>
                    </div>
                  </label>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label className="card_label font-medium">
                Change the Font Color
              </label>
              <div>
                <label className="block size-14 relative cursor-pointer">
                  <input
                    type="color"
                    {...register("fontColor")}
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="size-0 absolute top-2/3 left-1/2"
                  />
                  {!selectedColor ? (
                    <Image src={colorPlate} alt="" />
                  ) : (
                    <div
                      className="size-14 rounded-full border-2"
                      style={{ backgroundColor: selectedColor }}
                    />
                  )}
                </label>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <button type="submit" className="card_btn">
                {logoPreview ? "Save The Change" : "Save"}
              </button>
            </div>
          </form>
          {/* Catalog Category */}
          <div className="bg-white max-w-[624px] rounded-2xl shadow-[0_30px_65px_6px_rgba(19,25,39,0.11)] p-3 sm:p-7 flex-1">
            <div className="flex items-center gap-2.5 mb-4">
              <h2 className="card_title">Catalog Category</h2>
              <div className="relative group">
                <button>
                  <InfoIcon />
                </button>
                <p className="absolute w-[550px] hidden group-hover:inline-flex bg-white text-sm md:text-lg rounded-t-[20px] rounded-r-[20px] px-2 py-1 md:py-3.5 md:px-5 -top-14 left-4 shadow-[0_30px_65px_6px_rgba(19,25,39,0.11)]">
                  Pick a color to see the catalog, and download it for later.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-[30px]">
              {catalogData.map((catalog) => (
                <div key={catalog.id} className="flex flex-col items-center">
                  <div className="rounded-[20px] overflow-hidden w-full">
                    <img
                      src={catalog.img}
                      alt={catalog.title}
                      className="object-cover w-full h-[200px]"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-3 mt-3">
                    {catalog.colors.map((color, idx) => (
                      <button
                        key={idx}
                        className={`size-8 xl:size-12 rounded-full border transition-all`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};

export default page;
