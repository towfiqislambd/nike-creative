"use client";

import { useState } from "react";
import profilePicture from "../../../../Assets/profile.svg";
import Image from "next/image";
import {
  AddNote,
  Cart,
  CrossCircle,
  Filter,
  GoogleDocs,
  InvoiceNote,
  Man,
  Note,
  Pen,
  Plus,
  Search,
  ShareLink,
  Stars,
} from "../../../../Components/Svg/SvgContainer";
import LinkIcon from "../../../../Assets/link.svg";
import MailIcon from "../../../../Assets/mail.svg";
import WhatsAppIcon from "../../../../Assets/whatsapp.svg";
import doorImage from "../../../../Assets/door.jpg";
import Link from "next/link";
import { useForm } from "react-hook-form";
import ServiceRequestModal from "../../../../Components/Modals/ServiceRequestModal";

const orderData = [
  {
    id: 1,
    image: doorImage,
    date: "08/25/25",
    order: "#12563",
    po: "po-201",
    status: "Ready-To-Cut",
    total: "$454.00-1",
    availability: "12/12/25-12/15/25",
    user: "Charli Curs",
    paymentStatus: "Pay Now",
  },
  {
    id: 2,
    image: doorImage,
    date: "08/25/25",
    order: "#12563",
    po: "po-201",
    status: "Ready-To-Paint",
    total: "$454.00-1",
    availability: "12/12/25",
    user: "Charli Curs",
    paymentStatus: "Paid",
  },
  {
    id: 3,
    image: doorImage,
    date: "08/25/25",
    order: "#12563",
    po: "po-2020",
    status: "Quality-Control",
    total: "$454.00 - 1",
    availability: "4-5 Weeks",
    user: "Charli Curs",
    paymentStatus: "Pay Now",
  },
  {
    id: 4,
    image: doorImage,
    date: "08/25/25",
    order: "#12563",
    po: "po-2020",
    status: "Ready-To-Install",
    total: "$454.00-1",
    availability: "Available",
    user: "Charli Curs",
    paymentStatus: "Pay Now",
  },
  {
    id: 5,
    image: doorImage,
    date: "08/25/25",
    order: "#12563",
    po: "po-2020",
    status: "Installed",
    total: "$454.00-1",
    availability: "Done",
    user: "Charli Curs",
    paymentStatus: "Paid",
  },
];

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

const tabs = [
  "All Orders",
  "Received",
  "Ready to paint",
  "Ready to Cut",
  "Quality Control",
  "Ready",
  "Scheduled",
  "Installed/Delivery",
  "Pending Payment",
  "Completed",
  "Services",
];

const page = () => {
  const { register, handleSubmit, reset } = useForm();

  const [notes, setNotes] = useState([]);
  const [isNoteOpen, setIsNoteOpen] = useState(false);

  const [activeTab, setActiveTab] = useState("Received");
  const [selected, setSelected] = useState([]);

  const [isAddNoteModalOpen, setIsAddNoteModalOpen] = useState(false);
  const [isViewNoteModalOpen, setIsViewNoteModalOpen] = useState(false);
  const [isShareLinkModalOpen, setIsShareLinkModalOpen] = useState(false);
  const [isServiceRequestModalOpen, setIsServiceRequestModalOpen] =
    useState(false);

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };
  const onSubmit = (data) => {
    if (!data.note?.trim()) return;

    const newNote = {
      text: data.note,
      date: new Date().toLocaleString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
    };

    setNotes((prev) => [newNote, ...prev]);
    reset(); // clear textarea
  };

  return (
    <section className=" w-full relative">
      {/* header */}
      <header className="bg-[#E4E3E0] text-[#333] p-2.5 sm:p-6 rounded-xl md:rounded-[40px] border-l-2 border-[#bbb] shadow-[0_2px_0_0_rgba(0,_0,_0,_0.25)]">
        <nav className="flex max-lg:flex-col items-center justify-between gap-4 mb-5 pb-5 border-[#555]/50 border-b">
          {/* search bar */}
          <div className="flex items-center w-full">
            <div className="max-w-[325px] 2xl:max-w-[425px] w-full flex items-center justify-between bg-[#E4E3E0] rounded-[40px] px-5 py-3.5 custom-shadow-xl">
              <input
                type="text"
                placeholder="Search by order number and PO info"
                className="flex-1 bg-transparent outline-none text-sm text-[#5F6C72] leading-[20px]"
              />
              <Search />
            </div>
            <div className="inline-flex px-5 py-[14px] items-center gap-2.5 md:text-xl">
              <div>Filter</div>
              <Filter />
            </div>
          </div>
          {/* nav, cart, & profile */}
          <div className="flex max-sm:flex-col sm:items-center gap-2 md:gap-5 w-full justify-between lg:justify-end">
            <div className="flex flex-wrap min-w-0 sm:justify-center gap-3 md:gap-5 xl:gap-7">
              {navItems?.map(({ label, link }, idx) => (
                <Link
                  key={idx}
                  href={link}
                  className="text-sm md:text-base 2xl:text-xl text-[#333] hover:text-[#21BBA2] transition"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex max-sm:justify-end items-center gap-2 md:gap-5">
              <button className="bg-[#21BBA2] hover:bg-[#21BBA2]/80 shrink-0 rounded-full size-11 flex items-center justify-center cursor-pointer">
                <Cart />
              </button>
              <div className="relative shrink-0 cursor-pointer">
                <Image
                  src={profilePicture}
                  width={48}
                  height={48}
                  alt=""
                  className="rounded-full"
                />
                <div className="size-4 rounded-full border-[3px] border-white bg-green-500 absolute -bottom-0.5 -right-0.5" />
              </div>
            </div>
          </div>
        </nav>

        {/* filter Tabs */}
        <div className="flex flex-wrap gap-x-2.5 gap-y-2.5 md:gap-y-5 md:mb-8 pb-5 border-[rgba(85,85,85,0.50)] border-b">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 md:px-5 py-2 md:py-4 cursor-pointer text-[#333] rounded-xl md:rounded-[18px] border-b border-[#777] text-sm md:text-base xl:text-xl transition shadow-[0_5px_5px_0_rgba(0,0,0,0.25)] ${
                activeTab === tab
                  ? "bg-[#21BBA2] text-white"
                  : "bg-[#D7D7D7] hover:bg-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex justify-between items-center md:mt-10 sm:px-6 py-4">
          <h2 className="text-lg md:text-xl xl:text-2xl font-medium text-[#333]">
            Total Orders Showing - <span className="font-normal">132</span>
          </h2>
          <Link
            href={"/dashboard/b2b/orders/order/cart"}
            className="bg-[#4BCDE4] hover:bg-[#4BCDE4]/80 cursor-pointer text-nowrap text-white text-base lg:text-xl py-3 px-6 rounded-lg"
          >
            Pay Now
          </Link>
        </div>
      </header>
      <div className="w-full flex gap-2 sm:gap-6 mt-5">
        {/* table */}
        <div className="flex-1 min-w-0 text-[#333]">
          <div className="overflow-x-auto rounded-lg">
            <table className="w-[1450px] border-separate border-spacing-y-1.5 sm:border-spacing-y-3 px-2 text-nowrap">
              <thead className="md:h-[80px]">
                <tr className="bg-white font-medium">
                  <th className="px-4 py-3 lg:py-5">
                    <div className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        className="lg:size-5 cursor-pointer"
                      />
                    </div>
                  </th>
                  <th className="px-4 py-3 md:py-5">Product</th>
                  <th className="px-4 py-3 md:py-5">Date</th>
                  <th className="px-4 py-3 md:py-5">Order#</th>
                  <th className="px-4 py-3 md:py-5">PO</th>
                  <th className="px-4 py-3 md:py-5">Status</th>
                  <th className="px-4 py-3 md:py-5">Total</th>
                  <th className="px-4 py-3 md:py-5">Invoice</th>
                  <th className="px-4 py-3 md:py-5">Note</th>
                  <th className="px-4 py-3 md:py-5">Availability</th>
                  <th className="px-4 py-3 md:py-5">User</th>
                  <th className="px-4 py-3 md:py-5">Payment Status</th>
                </tr>
              </thead>

              <tbody className="bg-white rounded-lg text-center">
                {orderData?.map((order) => (
                  <tr
                    key={order.id}
                    className="rounded-lg h-[68px] text-sm custom-shadow-xl"
                  >
                    <td className="px-4 py-4 align-middle">
                      <div className="flex items-center justify-center">
                        <input
                          type="checkbox"
                          checked={selected?.includes(order.id)}
                          onChange={() => toggleSelect(order.id)}
                          className="lg:size-5 cursor-pointer"
                        />
                      </div>
                    </td>

                    <td className="px-4 py-3 relative">
                      <Image
                        src={order.image}
                        width={45}
                        height={68}
                        alt="product-image"
                        className="absolute w-[94px] px-5 h-[68px] top-0"
                      />
                    </td>

                    <td className="px-4 py-3 ">{order.date}</td>
                    <td className="px-4 py-3 ">{order.order}</td>
                    <td className="px-4 py-3 ">{order.po}</td>

                    <td className="px-4 py-3 bg-[#C8FFEC]">{order.status}</td>

                    <td className="px-4 py-3 ">{order.total}</td>

                    <td className="px-4 py-3">
                      <button className="w-full h-full cursor-pointer flex items-center justify-center">
                        <InvoiceNote />
                      </button>
                    </td>

                    <td className="px-4 py-3 ">
                      <div className="flex items-center gap-2.5">
                        <button
                          onClick={() => setIsViewNoteModalOpen(true)}
                          className="cursor-pointer"
                        >
                          <GoogleDocs />
                        </button>
                        <button
                          onClick={() => setIsAddNoteModalOpen(true)}
                          className="flex items-center justify-center cursor-pointer size-5 rounded-full bg-[#21BBA2]"
                        >
                          <Plus />
                        </button>
                      </div>
                    </td>

                    <td className="px-4 py-3 text-sm">
                      <div className="flex justify-center items-center">
                        {order.availability === "Done" ? (
                          <span className="bg-[#C1D0E5] px-2.5 py-1.5 rounded-lg text-xs shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
                            Done
                          </span>
                        ) : order.availability === "Available" ? (
                          <span>Available</span>
                        ) : (
                          <div className="flex items-center">
                            {order.availability}
                            <button className="bg-[#F5F5F5] cursor-pointer flex items-center gap-1.5 ml-2.5 px-2.5 py-1.5 rounded-lg text-xs shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
                              in 1 day
                              <Pen />
                            </button>
                          </div>
                        )}
                      </div>
                    </td>

                    <td className="px-4 py-3 ">{order.user}</td>

                    <td
                      className={`px-4 py-3 ${
                        order.paymentStatus == "Paid" && "bg-[#CCDADD]"
                      }`}
                    >
                      {order.paymentStatus === "Pay Now" ? (
                        <button
                          className={`px-4 py-1.5 rounded-md cursor-pointer text-sm transition bg-[#2dc4b3] text-white hover:bg-[#26b0a1]`}
                        >
                          Pay Now
                        </button>
                      ) : (
                        <span>Paid</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="sm:mt-2.5">
          <button
            onClick={() => setIsNoteOpen((prev) => !prev)}
            className="inline-flex cursor-pointer items-center justify-center p-2.5 rounded-[10px] bg-white shadow-[0_5px_5px_0_rgba(0,0,0,0.25)]"
          >
            <Note />
          </button>
          <div
            className={`max-w-[74px] w-full shrink-0 flex flex-col gap-[58px] rounded-[10px] bg-white px-2 py-7 mt-1 sm:mt-8 transition ${
              !isNoteOpen && "invisible"
            }`}
          >
            {orderData.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <button
                  onClick={() => setIsServiceRequestModalOpen(true)}
                  className="flex cursor-pointer items-center justify-center size-6 p-1 rounded-[12px] border border-gray-300 shadow-[0_5px_5px_0_rgba(0,0,0,0.25)]"
                >
                  <AddNote />
                </button>
                <button
                  onClick={() => setIsShareLinkModalOpen(true)}
                  className="flex cursor-pointer items-center justify-center size-6 p-1 rounded-[12px] border border-gray-300 shadow-[0_5px_5px_0_rgba(0,0,0,0.25)]"
                >
                  <ShareLink />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className="fixed cursor-pointer bottom-10 right-10 bg-white size-16 p-3 rounded-full shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
        <Stars />
      </button>
      {/* modals */}

      {/* add note model */}
      {isAddNoteModalOpen && (
        <div
          onClick={() => setIsAddNoteModalOpen(false)}
          className="w-screen h-screen fixed top-0 left-0 bg-black/20 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-[503px] w-full rounded-[20px] px-3 md:px-5 py-4 md:py-8 text-[#333] bg-white shadow-[0_30px_65px_6px_rgba(19,25,39,0.11)]"
          >
            <h3 className="text-base md:text-xl font-medium mb-2.5">
              Add Note
            </h3>
            <div className="w-full">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex items-center gap-5"
              >
                <textarea
                  rows={2}
                  placeholder="Please install the window stickers on the sliding glass doors only, avoid the porch door."
                  {...register("note")}
                  className="max-w-[330px] w-full border border-[#999] rounded-lg p-3 !text-xs placeholder:text-xs placeholder:text-[#333] lg:text-xl focus:ring-2 focus:ring-[#21BBA2]"
                ></textarea>

                <button
                  type="submit"
                  className="size-12 shrink-0 bg-[#21BBA2] rounded-full flex items-center justify-center cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M9.81641 19.6367H29.4528"
                      stroke="white"
                      stroke-width="2.94545"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.6367 9.81836V29.4547"
                      stroke="white"
                      stroke-width="2.94545"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </form>
              {notes.length !== 0 ? (
                <div className="my-4 flex flex-col gap-2">
                  {notes.map((note, index) => (
                    <div
                      key={index}
                      className="bg-white w-full text-wrap px-2.5 py-1.5 rounded-lg text-primary-text shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]"
                    >
                      <div className="flex gap-3">
                        <div className="flex items-center justify-center size-9 p-2 shrink-0 rounded-full bg-white shadow-[0_3.75px_6px_0.75px_rgba(0,0,0,0.20),_0_0_0.169px_0.169px_rgba(0,0,0,0.07),_0_0_0.169px_0_rgba(0,0,0,0.05),_0_2.024px_2.192px_-1.012px_rgba(0,0,0,0.25),_0_0.675px_2.698px_0.675px_rgba(0,0,0,0.12)]">
                          <Man />
                        </div>
                        <p>{note.text}</p>
                      </div>
                      <p className="text-xs text-sub-text text-end mt-1">
                        Date: {note.date}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-400 mt-4">no notes added</p>
              )}
            </div>
          </div>
        </div>
      )}
      {/* view note model */}
      {isViewNoteModalOpen && (
        <div
          onClick={() => setIsViewNoteModalOpen(false)}
          className="w-screen h-screen fixed top-0 left-0 bg-black/20 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-[503px] w-full rounded-[20px] px-3 md:px-5 py-4 md:py-8 text-[#333] bg-white shadow-[0_30px_65px_6px_rgba(19,25,39,0.11)]"
          >
            <h3 className="text-base md:text-xl font-medium mb-2.5">
              View Note
            </h3>
            {notes.length !== 0 ? (
              <div className="my-4 flex flex-col gap-2">
                {notes.map((note, index) => (
                  <div
                    key={index}
                    className="bg-white w-full text-wrap px-2.5 py-1.5 rounded-lg text-primary-text shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]"
                  >
                    <div className="flex gap-3">
                      <div className="flex items-center justify-center size-9 p-2 shrink-0 rounded-full bg-white shadow-[0_3.75px_6px_0.75px_rgba(0,0,0,0.20),_0_0_0.169px_0.169px_rgba(0,0,0,0.07),_0_0_0.169px_0_rgba(0,0,0,0.05),_0_2.024px_2.192px_-1.012px_rgba(0,0,0,0.25),_0_0.675px_2.698px_0.675px_rgba(0,0,0,0.12)]">
                        <Man />
                      </div>
                      <p>{note.text}</p>
                    </div>
                    <p className="text-xs text-sub-text text-end mt-1">
                      Date: {note.date}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-400">no notes added</p>
            )}
          </div>
        </div>
      )}

      {/* share modal */}
      {isShareLinkModalOpen && (
        <div
          onClick={() => setIsShareLinkModalOpen(false)}
          className="w-screen h-screen fixed top-0 left-0 bg-black/20 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[334px] bg-white rounded-[20px] text-[#333] p-5"
          >
            <div className="flex items-center justify-between">
              <div className="text-xl md:text-[26px]">Share to</div>
              <button
                onClick={() => setIsShareLinkModalOpen(false)}
                className="cursor-pointer"
              >
                <CrossCircle />
              </button>
            </div>
            <div className="flex items-center gap-5 mt-5 justify-center">
              <div className="flex flex-col gap-2 items-center justify-center">
                <div className="size-16 flex items-center justify-center p-4 rounded-full bg-[#D9D9D9]">
                  <button>
                    <Image src={LinkIcon} width={64} height={64} alt="" />
                  </button>
                </div>
                <p>Copy Link</p>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <button>
                  <Image src={WhatsAppIcon} width={64} height={64} alt="" />
                </button>
                <p>WhatsApp</p>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <button>
                  <Image src={MailIcon} width={64} height={64} alt="" />
                </button>
                <p>Email</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* service request modal */}
      {isServiceRequestModalOpen && (
        <ServiceRequestModal
          onClose={() => setIsServiceRequestModalOpen(false)}
        />
      )}
    </section>
  );
};

export default page;
