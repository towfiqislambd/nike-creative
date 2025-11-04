"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { FiUploadCloud, FiX } from "react-icons/fi";
import { Plus } from "lucide-react";
import dangerI from '../../../../Assets/danger.svg'
import frameIcon from '../../../../Assets/frame.svg'
import { IoLocationSharp } from "react-icons/io5";
import { GoHeart, GoHeartFill } from "react-icons/go";
import Button from '../../_conponents/Shared/Button'
// product color
const productColor = [
  {
    name: "Bronze",
    color: "#3E3E3E"
  },
  {
    name: "White",
    color: "#ffffff"
  },
  {
    name: "Black",
    color: "#000000"
  },
]

// Product Page Component

const ProductPage = ({ params }) => {
  const { register, watch, handleSubmit, setValue } = useForm();
  const [preview, setPreview] = useState(null);
  const [selectedColor, setSelectedColor] = useState("white");
  const [addPhoneNumber, setAddPhoneNumber] = useState([])
  const [availability, setAvailability] = useState("notAvailable");
  const [estimateType, setEstimateType] = useState("specific");
  const [favorite, setFavorite] = useState(false)

  const onSubmit = (data) => {
    console.log("Submitted data:", data);
  };

  const handleFileChange = (e) => {
    console.log(e)
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };
  const addPhoneNumberHandler = () => {
    const phoneNumber = watch('phone-number');
    setValue('phone-number', '')

    setAddPhoneNumber((prev) => [...prev, phoneNumber]);
  };

  const removePhoneNumberHandler = (indexToRemove) => {
    setAddPhoneNumber((prev) => prev.filter((_, i) => i !== indexToRemove));
  }

  const favoriteToggleHandler = () => {
    setFavorite(prev => !prev)
  }

  return (
    <section className="relative min-h-screen">
      <Image
        src="https://i.ibb.co.com/7t9dK57n/Group-1321314677.png"
        alt="Background"
        fill
        unoptimized
        className="object-cover object-center -z-10 absolute top-60"
      />
    <div className="container relative min-h-screen py-10 px-4">
      <div className=" grid lg:grid-cols-2 gap-10">
        {/* left side */}
        <div>
          {/* product image */}
          <div className="relative rounded-[40px] overflow-hidden shadow-sm border border-gray-200">
            <Image
              src="https://i.ibb.co.com/k60zt8Lj/product-image-Custom-Double-Door.png"
              alt="Product door"
              width={600}
              height={500}
              className="object-cover w-full"
            />
            <button onClick={favoriteToggleHandler} className="absolute cursor-pointer top-5 right-5 size-10 md:size-12 rounded-full flex items-center justify-center shadow-[0px_8px_8px_-4px_#13192714,_0px_4px_8px_-4px_#1319271F] bg-[linear-gradient(253.61deg,_rgba(227,242,253,0.5)_-2.44%,_rgba(249,252,255,0.4)_110.21%)]">
              {favorite ? (
                <GoHeartFill className="size-6 md:size-8 text-red-600" />

              ) : <GoHeart className="size-6 md:size-8" />}
            </button>
          </div>

          {/* reference image card*/}

          <div className="shadow-card">
            <label className="block font-medium text-primary-text text-2xl leading-[150%] mb-4">
              You can add your reference
            </label>

            <input
              type="file"
              accept="image/*"
              id="reference"
              className="hidden"
              onChange={handleFileChange}
              {...register("reference")}
            />

            <label
              htmlFor="reference"
              className="flex flex-col items-center justify-center border border-dashed bg-gradient-to-r from-[#F9FCFF] to-[#E3F2FD]/40 border-gray-300 rounded-[20px] py-10 cursor-pointer bg-gray-50 hover:border-teal-500 transition"
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Uploaded preview"
                  className="w-32 h-32 object-cover rounded-xl border border-gray-200 shadow-sm"
                />
              ) : (
                <>
                  <div className="bg-white border border-[#EAECF0] w-10 h-10 rounded-[10px] flex items-center justify-center mb-3">
                    <FiUploadCloud className="text-[#6B7280] text-xl" />
                  </div>
                  <p className="text-lg text-sub-text">
                    Click to upload or drag and drop
                  </p>
                </>
              )}
            </label>
          </div>

        </div>
        {/* right side */}
        <div
          className=""//bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6
          onSubmit={handleSubmit(onSubmit)}
        >
          <form className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
              <h2 className="text-lg lg:text-2xl text-sub-text">
                Custom Double Door Design – White
              </h2>
              <button className="flex items-center justify-center size-10 md:size-12 rounded-full shrink-0 mr-2 cursor-pointer bg-[linear-gradient(254deg,_#E3F2FD_-2.44%,_rgba(249,252,255,0.80)_110.21%)] shadow-[0_2.667px_5.333px_-2.667px_rgba(19,25,39,0.12),_0_5.333px_5.333px_-2.667px_rgba(19,25,39,0.08)]">
                <Image src={frameIcon} width={32} height={32} alt="" className="max-md:size-6"/>
              </button>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary-text md:mt-4">
                Product name: <span className="font-medium">KDWH010</span>
              </h3>
              <p className="text-2xl md:text-3xl lg:text-4xl text-primary-text md:mt-4">
                Price: <span className="font-medium">$350</span>
              </p>
            </div>
            <div>
              <label className="text-primary-text text-2xl md:text-3xl lg:text-4xl mb-2">
                Color:
              </label>
              <div className="inline-block ml-4">
                <div className="flex gap-4 items-center">
                  {productColor.map(({ name, color }) => (
                    <div key={color}>
                      <button
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        className={`size-8 md:size-12 rounded-full border shadow-[0px_4px_4px_-2px_#13192714,_0px_2px_4px_-2px_#1319271F]  cursor-pointer ${selectedColor === color
                          ? "ring ring-"
                          : "border-gray-300"
                          }`}
                        style={{ backgroundColor: color }}
                      />
                      <p className="text-center text-xs md:text-sm text-primary-text">{name}</p>
                    </div>

                  ))}
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 shadow-card">
              <div>
                <label className="shadow-card-label">
                  Po
                </label>
                <input
                  {...register("po")}
                  placeholder="PO Number"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 lg:py-3 lg:px-6 text-sm lg:text-xl focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="shadow-card-label">
                  Manufacturer
                </label>
                <select
                  {...register("manufacturer")}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 lg:py-3 lg:px-6 text-sm lg:text-xl focus:ring-2 focus:ring-teal-500"
                >
                  <option>Choose an option</option>
                  <option>ABC Doors</option>
                  <option>ModernCraft</option>
                </select>
              </div>
              <div>
                <label className="shadow-card-label">
                  Select Active side of the door
                </label>
                <select
                  {...register("activeSide")}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 lg:py-3 lg:px-6 text-sm lg:text-xl focus:ring-2 focus:ring-teal-500"
                >
                  <option>Choose an option</option>
                  <option>Left</option>
                  <option>Right</option>
                </select>
              </div>
            </div>


            <div className="grid sm:grid-cols-2 gap-5 shadow-card">
              <div>
                <label className="shadow-card-label">
                  Measurement Type
                </label>
                <select
                  {...register("measurementType")}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 lg:py-3 lg:px-6 text-sm lg:text-xl focus:ring-2 focus:ring-teal-500"
                >
                  <option>Choose an option</option>
                  <option>Outer frame</option>
                  <option>Door slab only</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <label className="shadow-card-label w-20">
                    Width
                  </label>
                  <input
                    {...register("width")}
                    placeholder="Width"
                    className="w-1/2 border border-gray-300 rounded-md px-3 py-2 lg:py-3 lg:px-6 text-sm lg:text-xl focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label className="shadow-card-label w-20">
                    Height
                  </label>
                  <input
                    {...register("height")}
                    placeholder="Height"
                    className="w-1/2 border border-gray-300 rounded-md px-3 py-2 lg:py-3 lg:px-6 text-sm lg:text-xl focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
            </div>

            <div className="shadow-card">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="shadow-card-label">
                    Side Iites
                  </label>
                  <select
                    {...register("measurementType")}
                    className="w-full border border-gray-300 rounded-md  px-3 py-2 lg:py-3 lg:px-6 text-sm lg:text-xl focus:ring-2 focus:ring-teal-500"
                  >
                    <option>Choose an option</option>
                    <option>Outer frame</option>
                    <option>Door slab only</option>
                  </select>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="shadow-card-label">
                    Measurement Type
                  </label>
                  <select
                    {...register("measurementType")}
                    className="w-full border border-gray-300 rounded-md  px-3 py-2 lg:py-3 lg:px-6 text-sm lg:text-xl focus:ring-2 focus:ring-teal-500"
                  >
                    <option>Choose an option</option>
                    <option>Outer frame</option>
                    <option>Door slab only</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <label className="shadow-card-label w-20">
                      Width
                    </label>
                    <input
                      {...register("width")}
                      placeholder="Width"
                      className="w-1/2 border border-gray-300 rounded-md  px-3 py-2 lg:py-3 lg:px-6 text-sm lg:text-xl focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="shadow-card-label w-20">
                      Height
                    </label>
                    <input
                      {...register("height")}
                      placeholder="Height"
                      className="w-1/2 border border-gray-300 rounded-md  px-3 py-2 lg:py-3 lg:px-6 text-sm lg:text-xl focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>
              </div>
            </div>


            <div className="shadow-card">
              <label className="shadow-card-label">
                How would you like to receive the design?
              </label>
              <select
                {...register("delivery")}
                className="border border-gray-300 rounded-md  px-3 py-2 lg:py-3 lg:px-6 text-sm lg:text-xl focus:ring-2 focus:ring-teal-500"
              >
                <option>Choose an option</option>
                <option>Installation at job site</option>
                <option>Pickup at warehouse</option>
                <option>Courier Delivery</option>
                <option>Email</option>
              </select>
              {watch('delivery') == "Installation at job site" && (
                <div className="grid sm:grid-cols-2 gap-5 mt-5">
                  <div>
                    <label className="shadow-card-label">
                      Full Name
                    </label>
                    <input
                      {...register("name")}
                      placeholder="Charli Curs"
                      className="w-full border border-gray-300 rounded-md  px-3 py-2 lg:py-3 lg:px-6 text-sm lg:text-xl focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="shadow-card-label">
                      Jobsite options
                    </label>
                    <select
                      {...register("asdf")}
                      className="w-full border border-gray-300 rounded-md  px-3 py-2 lg:py-3 lg:px-6 text-sm lg:text-xl focus:ring-2 focus:ring-teal-500"
                    >
                      <option>Choose an option</option>
                      <option>Palm Beach (+15000)</option>
                    </select>
                  </div>
                  <div className="shadow-card">
                    <div className="flex items-center justify-between">

                      <label className="shadow-card-label">
                        Phone Number
                      </label>
                      <div onClick={addPhoneNumberHandler} className="size-8 bg-light-green rounded-full flex items-center justify-center cursor-pointer"><Plus className="text-white size-5" /></div>
                    </div>
                    <input
                      type="text"
                      {...register("phone-number")}
                      placeholder="+1 236 123 1233"
                      className="w-full border border-gray-300 rounded-md  px-3 py-2 lg:py-3 lg:px-6 text-sm lg:text-xl focus:ring-2 focus:ring-teal-500"
                    />
                    <div className="my-4 flex gap-2 flex-wrap">
                      {addPhoneNumber.map((number, inx) => (
                        <div key={inx} onClick={() => removePhoneNumberHandler(inx)} className="bg-[#F5F5F5] inline-flex items-center px-2.5 py-1.5 rounded-lg gap-1.5 text-xs text-primary-text shadow-[0px_0.9px_3.6px_0.9px_#0000001F,_0px_2.7px_2.92px_-1.35px_#00000040,_0px_0px_0.22px_0px_#0000000D,_0px_0px_0.22px_0.22px_#00000012,_0px_5px_8px_1px_#00000033]">
                          <div>{number}</div>
                          <FiX className="size-4" />
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2 my-3">

                      <input
                        type="radio"
                        value="receive-order-update"
                        {...register('receive-order-update')}
                      />
                      <div className="text-sm leading-[20px] text-sub-text">Click here to receive order updates on the numbers you add: a day-before reminder, alerts when we’re on the way, and notifications if there are delays.</div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <label className="shadow-card-label">
                      Address
                    </label>
                    <div className="w-full flex items-center gap-3 border border-gray-300 rounded-md  px-3 py-2 lg:py-3 lg:px-6 text-sm lg:text-xl focus:ring-2 focus:ring-teal-500">
                      <IoLocationSharp className="size-9" />

                      <input
                        {...register("name")}
                        placeholder="Dhaka, Bangladesh"
                        className="w-full text-xl focus:outline-none focus:ring-0 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              )
              }
            </div>

            <div className="shadow-card">
              <label className="shadow-card-label">
                Order Notes
              </label>
              <textarea
                {...register("notes")}
                placeholder="Add any special instructions..."
                rows={5}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm resize-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="inline-grid grid-cols-2 gap-4 bg-[#e5ecf0] border border-dashed rounded-[20px] px-6 py-4">
              <div className="my-auto">
                <h1 className="shadow-card-label !font-semibold !text-3xl md:!text-5xl !leading-none">4% OFF</h1>
                <p className="text-lg md:text-2xl text-primary-text">EX:1/02/2026</p>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="shadow-card-label !text-3xl md:!text-4xl !font-normal">Coupon</h2>
                <button className="bg-secondary-red hover:bg-secondary-red/80 w-full text-white px-4 py-1.5 rounded-md md:text-xl cursor-pointer">Add Coupon</button>
              </div>
            </div>

            <div className="shadow-card">
              <h4 className="text-2xl md:text-4xl font-medium text-primary-text mb-4 lg:mb-6">Coupon</h4>
              <div className="flex gap-2">
                <input
                  {...register("coupon")}
                  placeholder="Enter code"
                  className="flex-1 border border-gray-300 rounded-md px-3 md:py-4 text-sm focus:ring-2 focus:ring-teal-500"
                />
                <Button label={'Apply Coupon'} />
              </div>
              <div className="text-sm mt-3 space-y-1 lg:text-4xl text-primary-text flex flex-col gap-4 lg:gap-6 xl:gap-8 lg:mt-6 xl:mt-8 ">
                <p className="flex items-center justify-between">
                  Product Total: <span className="font-medium">$350.00</span>
                </p>
                <p className="flex items-center justify-between">
                  Options Total: <span className="font-medium">$155.00</span>
                </p>
                <p className="flex items-center justify-between">
                  Coupon: <span className="font-medium">- $20.00</span>
                </p>
                <p className="flex items-center justify-between">
                  Grand Total: <span className="font-medium">$450.00</span>
                </p>
              </div>
            </div>
            <div className="shadow-card">
              <h2 className="text-2xl md:text-4xl font-medium text-primary-text">Priority</h2>
              <p className="text-xl md:text-2xl text-primary-text mt-4 ml-6">Urgent Priority (Rush Order)</p>
              <div className="mt-4">
                <div className="text-xs md:text-sm text-primary-text font-medium inline-flex py-1 px-2 rounded items-center gap-2 bg-[#FF4C4C1A]">
                  <Image src={dangerI} width={24} height={24} alt="" className="max-sm:size-5"/>
                  <p>
                    You still have 2 free Rush Orders available
                  </p>
                </div>
              </div>
            </div>
            <div className="shadow-card">
              <h4 className="text-2xl md:text-4xl font-medium text-primary-text mb-4">
                Product Availability
              </h4>
              <p className="text-sm md:text-xl text-gray-600 mb-2">
                Let us know if the door/window is on-site and ready for us.
              </p>
              {/* Availability Tabs */}
              <div className="flex gap-5 bg-gray-100 p-1 rounded-full my-4">
                <button
                  onClick={() => setAvailability("available")}
                  className={`flex-1 py-3 md:py-4 lg:py-6 cursor-pointer shadow-[0_5px_5px_0_rgba(0,0,0,0.25)] rounded-full text-[13px] md:text-sm lg:text-xl font-medium transition ${availability === "available"
                    ? "bg-[#5190A2] text-white shadow"
                    : "text-primary-text hover:bg-gray-200"
                    }`}
                >
                  Available
                </button>
                <button
                  onClick={() => setAvailability("notAvailable")}
                  className={`flex-1 py-3 md:py-4 lg:py-6 cursor-pointer shadow-[0_5px_5px_0_rgba(0,0,0,0.25)] rounded-full text-[13px] md:text-sm lg:text-xl font-medium transition ${availability === "notAvailable"
                    ? "bg-[#5190A2] text-white shadow"
                    : "text-primary-text hover:bg-gray-200"
                    }`}
                >
                  Not Available Yet
                </button>
              </div>

              {availability === "notAvailable" && (
                <div className="border border-gray-200 rounded-2xl md:rounded-[40px] px-2.5 py-4 lg:p-[30px] space-y-4 shadow-[0_5px_5px_0_rgba(0,0,0,0.25)]">
                  <h3 className="text-primary-text font-medium text-xl md:text-[28px]">
                    When do you estimate it will be available?
                  </h3>

                  {/* Estimate Type Tabs */}
                  <div className="flex gap-2 md:gap-4 bg-gray-100 p-1 rounded-full">
                    <button
                      onClick={() => setEstimateType("specific")}
                      className={`flex-1 py-3 md:py-4 lg:py-6 cursor-pointer shadow-[0_5px_5px_0_rgba(0,0,0,0.25)] rounded-full text-xs md:text-sm lg:text-xl font-medium transition ${estimateType === "specific"
                        ? "bg-[#5190A2] text-white shadow"
                        : "text-primary-text hover:bg-gray-200"
                        }`}
                    >
                      Specific
                    </button>
                    <button
                      onClick={() => setEstimateType("dateRange")}
                      className={`flex-1 py-3 md:py-4 lg:py-6 cursor-pointer shadow-[0_5px_5px_0_rgba(0,0,0,0.25)] rounded-full text-xs md:text-sm lg:text-xl font-medium transition ${estimateType === "dateRange"
                        ? "bg-[#5190A2] text-white shadow"
                        : "text-primary-text hover:bg-gray-200"
                        }`}
                    >
                      Date Range
                    </button>
                    <button
                      onClick={() => setEstimateType("weekRange")}
                      className={`flex-1 py-3 md:py-4 lg:py-6 cursor-pointer shadow-[0_5px_5px_0_rgba(0,0,0,0.25)] rounded-full text-xs md:text-sm lg:text-xl font-medium transition ${estimateType === "weekRange"
                        ? "bg-[#5190A2] text-white shadow"
                        : "text-primary-text hover:bg-gray-200"
                        }`}
                    >
                      Week Range
                    </button>
                  </div>

                  {/* tabs body */}
                  {estimateType === "specific" && (
                    <div>
                      <label className="block text-sm lg:text-2xl text-primary-text mb-1">
                        Estimated Date
                      </label>
                      <input
                        type="date"
                        {...register("estimatedDate")}
                        placeholder="MM/DD/YYYY"
                        className="w-full md:text-lg lg:text-2xl uppercase text-primary-text py-3 md:py-5 px-3 md:px-7 rounded-lg md:rounded-[20px] border border-[#8B8B8B] shadow-[0_5px_5px_0_rgba(0,0,0,0.25)]"
                      />
                    </div>
                  )}
                  {estimateType === "dateRange" && (
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm lg:text-2xl text-primary-text mb-1">
                          From
                        </label>
                        <input
                          type="date"
                          {...register("estimatedDate")}
                          placeholder="MM/DD/YYYY"
                          className="w-full md:text-lg lg:text-2xl uppercase text-primary-text py-3 md:py-5 px-3 md:px-7 rounded-lg md:rounded-[20px] border border-[#8B8B8B] shadow-[0_5px_5px_0_rgba(0,0,0,0.25)]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm lg:text-2xl text-primary-text mb-1">
                          To
                        </label>
                        <input
                          type="date"
                          {...register("estimatedDate")}
                          placeholder="MM/DD/YYYY"
                          className="w-full md:text-lg lg:text-2xl uppercase text-primary-text py-3 md:py-5 px-3 md:px-7 rounded-lg md:rounded-[20px] border border-[#8B8B8B] shadow-[0_5px_5px_0_rgba(0,0,0,0.25)]"
                        />
                      </div>
                    </div>
                  )}
                  {estimateType === "weekRange" && (
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm lg:text-2xl text-primary-text mb-1">
                          Start Week
                        </label>
                        <input
                          type="number"
                          {...register("estimatedDate")}
                          placeholder="4"
                          className="w-full md:text-lg lg:text-2xl uppercase text-primary-text py-3 md:py-5 px-3 md:px-7 rounded-lg md:rounded-[20px] border border-[#8B8B8B] shadow-[0_5px_5px_0_rgba(0,0,0,0.25)]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm lg:text-2xl text-primary-text mb-1">
                          End Week
                        </label>
                        <input
                          type="number"
                          {...register("estimatedDate")}
                          placeholder="5"
                          className="w-full md:text-lg lg:text-2xl uppercase text-primary-text py-3 md:py-5 px-3 md:px-7 rounded-lg md:rounded-[20px] border border-[#8B8B8B] shadow-[0_5px_5px_0_rgba(0,0,0,0.25)]"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="flex max-sm:flex-col-reverse md:gap-4">
              <div className="shadow-card">
                <div className="">
                  <button
                    type="button"
                    className="w-full border cursor-pointer border-gray-300 rounded-md py-2 lg:py-5 font-medium hover:bg-gray-100 transition text-xl mb-5"
                  >
                    Add To Cart
                  </button>
                  <button
                    type="submit"
                    className="w-full cursor-pointer bg-teal-500 text-white rounded-md py-2 lg:py-5 font-medium hover:bg-teal-600 transition text-xl"
                  >
                    Save Draft
                  </button>
                </div>
              </div>
              <div className="shadow-card flex-1">
                <h1 className="text-primary-text text-center text-2xl md:text-4xl font-medium mb-5 lg:mb-7">Order Now</h1>
                <div className="flex items-center gap-5">

                  <button
                    type="button"
                    className="flex-1 cursor-pointer border border-gray-300 rounded-md py-2 lg:py-5 font-medium hover:bg-gray-100 transition text-xl"
                  >
                    Pay Later
                  </button>
                  <button
                    type="submit"
                    className="flex-1 cursor-pointer bg-teal-500 text-white rounded-md py-2 lg:py-5 font-medium hover:bg-teal-600 transition text-xl"
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ProductPage;
