"use client";
import React, { useState } from "react";
import Image from "next/image";
import profilePicture from "../../../../Assets/profile.svg";
import {
  EditPen,
  PlusBlack,
  TrashBin,
} from "../../../../Components/Svg/SvgContainer";
import { BellIcon } from "lucide-react";
import AddEditCouponModal from "../_components/AddEditCouponModal";
import DeleteModal from "../../../../Components/Common/DeleteModal";

const page = () => {
  const [isAddEditOpen, setIsAddEditOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [couponToDelete, setCouponToDelete] = useState(null);
  const [coupons, setCoupons] = useState([
    {
      id: 1,
      couponCode: "4545",
      discountType: "Fixed product discount",
      allowedUser: "Nike shoes",
      discountPercent: 10,
      expiryDate: "12/25/2025",
      usageCount: "00",
    },
    {
      id: 2,
      couponCode: "9545",
      discountType: "Fixed cart discount",
      allowedUser: "Nike shoes",
      discountPercent: 40,
      expiryDate: "12/25/2025",
      usageCount: "01",
    },
    {
      id: 3,
      couponCode: "8545",
      discountType: "Fixed product discount",
      allowedUser: "Nike shoes",
      discountPercent: 23,
      expiryDate: "12/25/2025",
      usageCount: "05",
    },
    {
      id: 4,
      couponCode: "3545",
      discountType: "Fixed product discount",
      allowedUser: "Nike shoes",
      discountPercent: 19,
      expiryDate: "12/25/2025",
      usageCount: "06",
    },
    {
      id: 5,
      couponCode: "4545",
      discountType: "Fixed cart discount",
      allowedUser: "Nike shoes",
      discountPercent: 17,
      expiryDate: "12/25/2025",
      usageCount: "05",
    },
    {
      id: 6,
      couponCode: "6906",
      discountType: "Fixed product discount",
      allowedUser: "Nike shoes",
      discountPercent: 14,
      expiryDate: "12/25/2025",
      usageCount: "08",
    },
  ]);

  const handleAddEdit = (data) => {
    if (editData) {
      setCoupons((prev) =>
        prev.map((c) => (c.id === editData.id ? { ...c, ...data } : c))
      );
    } else {
      // Add new
      setCoupons((prev) => [...prev, { ...data, usageCount: "00" }]);
    }
    setIsAddEditOpen(false);
    setEditData(null);
  };

  const handleDelete = () => {
    setCoupons((prev) => prev.filter((c) => c.id !== couponToDelete.id));
    setIsDeleteOpen(false);
    setCouponToDelete(null);
  };
  return (
    <section className="text-primary-text w-full relative">
      {/* header */}
      <header className="bg-[#E4E3E0] p-2 sm:px-2.5 sm:pt-2 sm:pb-1.5 rounded-xl md:rounded-[20px] border-l-2 border-[#bbb] shadow-[0_2px_0_0_rgba(0,_0,_0,_0.25)]">
        <nav className="flex items-center justify-between gap-4 pb-1.5 border-[#555]/50 border-b">
          <h2 className="text-lg md:text-xl xl:text-2xl font-medium">
            Coupons
          </h2>
          <div className="flex items-center gap-3">
            <button className="relative">
              <BellIcon className="text-[#F34235]" />
              <div className="size-5 text-white bg-[#F34235] rounded-full flex items-center justify-center text-xs absolute -top-1.5 -right-1.5 border-2 border-[#e4e3e0]">
                2
              </div>
            </button>
            <div className="relative shrink-0 cursor-pointer">
              <Image
                src={profilePicture}
                width={36}
                height={36}
                alt="profile"
                className="rounded-full"
              />
              <div className="size-3 rounded-full border-[2px] border-white bg-green-500 absolute -bottom-0.5 -right-0.5" />
            </div>
          </div>
        </nav>

        <div className="mt-2 px-2">
          <button
            onClick={() => {
              setIsAddEditOpen(true);
              setEditData(null);
            }}
            className="dashboard_header_btn"
          >
            Add Coupons <PlusBlack />
          </button>
        </div>
      </header>
      <div>
        <div className="w-full overflow-x-auto px-1 mt-2">
          <table className="w-full border-spacing-y-1.5 sm:border-spacing-y-3 border-separate text-nowrap">
            <thead className="rounded-lg text-sm border custom-shadow-xl">
              <tr className="rounded-lg border">
                <th className="px-3 py-3 font-medium">Coupon Code</th>
                <th className="px-3 py-3 font-medium">Discount Type</th>
                <th className="px-3 py-3 font-medium">Allowed User</th>
                <th className="px-3 py-3 font-medium">Discount %</th>
                <th className="px-3 py-3 font-medium">Expiry Date</th>
                <th className="px-3 py-3 font-medium">Usage Count</th>
                <th className="px-3 py-3 font-medium text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {coupons.map((coupon, i) => (
                <tr key={i} className="border rounded-lg custom-shadow-xl bg-white text-[13px]">
                  <td className="px-3 py-3 text-center  rounded-l-lg">
                    {coupon.couponCode}
                  </td>
                  <td className="px-3 py-3 text-center">
                    {coupon.discountType}
                  </td>
                  <td className="px-3 py-3 text-center">
                    {coupon.allowedUser}
                  </td>
                  <td className="px-3 py-3 text-center bg-[#EDFCFF]">
                    {coupon.discountPercent}
                  </td>
                  <td className="px-3 py-3 text-center">
                    {coupon.expiryDate}
                  </td>
                  <td className="px-3 py-3 text-center">
                    {coupon.usageCount}
                  </td>
                  <td className="px-3 py-3 text-end rounded-r-lg">
                    <div className="flex items-center justify-end gap-2.5">

                    <button
                      onClick={() => {
                        setEditData(coupon);
                        setIsAddEditOpen(true);
                      }}
                      >
                      <EditPen />
                    </button>
                    <button
                      onClick={() => {
                        setCouponToDelete(coupon);
                        setIsDeleteOpen(true);
                      }}
                      className="bg-[#F34235] hover:bg-[#F34235]/80 size-5.5 rounded-full flex items-center justify-center"
                      >
                      <TrashBin />
                    </button>
                      </div>
                  </td>
                </tr>
              ))}
              {coupons.length === 0 && (
                <tr>
                  <td colSpan="8" className="text-center text-gray-400 py-6">
                    No coupons yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <AddEditCouponModal
        isOpen={isAddEditOpen}
        onClose={() => {
          setIsAddEditOpen(false);
          setEditData(null);
        }}
        onSubmit={handleAddEdit}
        initialData={editData}
      />

      <DeleteModal
        isOpen={isDeleteOpen}
        onCancel={() => setIsDeleteOpen(false)}
        onConfirm={handleDelete}
        type="Coupon"
      />
    </section>
  );
};

export default page;
