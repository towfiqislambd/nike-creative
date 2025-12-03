"use client";
import { useForm } from "react-hook-form"; // you can remove if unused
import { FiTrash2 } from "react-icons/fi";
import bgImage from "../../../Assets/primary_layer.png";
import { useState } from "react";
import { PenSvg } from "../../../Components/Svg/SvgContainer";
import EditCartItemModal from "../_conponents/Modals/EditCartItemModal";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "KDWH009",
      po: "PO Info",
      size: "DLO (w56, h58)",
      color: "Bronze",
      colorCode: "#333",
      image: bgImage,
      price: 35.99,
      quantity: 1,
    },
    {
      id: 2,
      name: "KDWH009",
      po: "PO Info",
      size: "DLO (w56, h58)",
      color: "Bronze",
      colorCode: "#333",
      image: bgImage,
      price: 35.99,
      quantity: 1,
    },
  ]);

  const updateQuantity = (id, type) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "increase"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  const removeItem = (id) =>
    setCartItems((prev) => prev.filter((item) => item.id !== id));

  const subTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const discount = subTotal * 0.1;
  const total = subTotal - discount;

  const onSubmit = (data) => {
    console.log("Payment Info:", data);
    alert("Payment confirmed!");
  };

  const [editOpen, setEditOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const handleSaveEdit = (updated) => {
    setCartItems((prev) =>
      prev.map((it) => (it.id === updated.id ? { ...it, ...updated } : it))
    );
    setEditOpen(false);
    setEditingItem(null);
  };

  return (
    <section
      className="min-h-screen bg-cover bg-top py-6 px-4"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      {/* Stack on mobile/tablet; keep two columns on XL */}
      <div className="container mx-auto">
        <h2 className="text-lg md:text-3xl font-medium">Cart</h2>
        <div className=" flex flex-col xl:flex-row gap-6">
          {/* LEFT: Cart */}
          <div className="w-full xl:w-[70%] overflow-x-auto px-0.5">
            {/* Table header: only show on XL to keep original look */}
            <table className="w-full border-spacing-y-3 border-separate text-center text-sm md:text-base">
              <thead className="">
                <tr className="bg-white rounded-lg shadow-lg">
                  <th className="py-4 pl-5 md:pl-10 pr-2 font-normal rounded-tl-2xl text-left">Product</th>
                  <th className="py-4 px-2 font-normal">Price</th>
                  <th className="py-4 px-2 font-normal">Quantity</th>
                  <th className="py-4 px-2 font-normal">Total Price</th>
                  <th className="py-4 px-2 font-normal rounded-tr-2xl"></th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {cartItems.map((item) => (
                  <tr
                    key={item.id}
                    className="rounded-lg bg-white shadow-lg text-sm"
                  >
                    {/* Product column */}
                    <td className="py-2 pl-5 md:pl-10 pr-2 text-nowrap rounded-l-xl">
                      <div className="flex items-center gap-2">

                      <img
                        src="https://i.ibb.co.com/Mx95n97C/Rectangle-161124243.png"
                        alt="alter"
                        className="w-28 h-32 rounded-xl object-cover flex-shrink-0"
                        />
                      <div className="w-full text-sm text-left">
                        <p className="mb-1 md:mb-2">
                          <span className="text-black">
                            Product Name:{" "}
                          </span>
                          {item.name}
                        </p>
                        <p className="mb-1 md:mb-2">
                          <span className="text-black">PO: </span>
                          {item.po}
                        </p>
                        <p className="mb-1 md:mb-2">
                          <span className="text-black">
                            Size:{" "}
                          </span>
                          {item.size}
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="text-black">
                            Color:{" "}
                          </span>
                          <span
                            className="w-4 h-4 md:w-5 md:h-5 rounded-full border"
                            style={{ backgroundColor: item.colorCode }}
                            />
                          {item.color}
                        </p>
                            </div>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="py-4 px-2 text-nowrap">
                      ${item.price.toFixed(2)}
                    </td>

                    {/* Quantity */}
                    <td className="py-4 px-2 text-nowrap">
                      <div className="flex items-center justify-center gap-2">

                      <button
                        onClick={() => updateQuantity(item.id, "decrease")}
                        className="border rounded-full size-5 flex items-center justify-center text-base md:text-lg cursor-pointer"
                        aria-label="Decrease quantity"
                        >
                        –
                      </button>
                      <span className="text-base">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, "increase")}
                        className="border rounded-full size-5 flex items-center justify-center text-base md:text-lg cursor-pointer"
                        aria-label="Increase quantity"
                        >
                        +
                      </button>
                        </div>
                    </td>

                    {/* Total + actions */}
                    <td className="px-2 py-4 text-nowrap">
                      <p>
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </td>
                    <td className="px-2 py-4 text-nowrap rounded-r-2xl">
                      <div className="flex items-center justify-center gap-2">

                      <button
                        className="cursor-pointer p-1 rounded-md hover:bg-gray-100"
                        aria-label="Edit"
                        onClick={() => {
                          setEditingItem(item);
                          setEditOpen(true);
                        }}
                        >
                        <PenSvg />
                      </button>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-white cursor-pointer p-1 rounded-full bg-red-500"
                        aria-label="Remove"
                        >
                        <FiTrash2 size={18}/>
                      </button>
                        </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Rows */}

            {/* Cart footer total */}
            {/* <div className="flex justify-between items-center mt-4 text-xl">
              <span className="carttext">Total:</span>
              <span className="carttext">
                {totalQuantity} items — ${total.toFixed(2)}
              </span>
            </div> */}
          </div>

          {/* RIGHT: Summary */}
          <div className="w-full max-w-[400px] xl:w-[30%] space-y-6 mt-3.5">
            <div className="bg-white rounded-2xl shadow-md p-5 md:p-6 border border-neutral-300">
              <h3 className="text-xl font-medium leading-[150%] mb-4">
                Order Summary
              </h3>

              <div className="carttext space-y-4">
                <p className="flex justify-between text-base">
                  <span>Sub Total:</span>
                  <span>${subTotal.toFixed(2)}</span>
                </p>
                <p className="flex justify-between text-base">
                  <span>Total Quantity:</span>
                  <span>{totalQuantity}</span>
                </p>
                <p className="flex justify-between text-base">
                  <span>Total Discount:</span>
                  <span className="text-teal-600">-${discount.toFixed(2)}</span>
                </p>

                <hr className="my-2" />

                <p className="flex text-xl justify-between text-gray-900">
                  <span>Total Amount:</span>
                  <span>${total.toFixed(2)}</span>
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-3 mt-4 md:mt-7">
                <button className="w-full md:flex-1 duration-500 hover:text-white py-2 rounded-lg text-primary-text text-lg bg-[rgba(175,243,255,0.5)] cursor-pointer">
                  Pay Later
                </button>
                <button className="w-full md:flex-1 duration-500 bg-[rgba(175,243,255,0.5)] text-primary-text text-lg hover:text-white py-2 rounded-lg cursor-pointer">
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditCartItemModal
        open={editOpen}
        item={editingItem}
        onClose={() => {
          setEditOpen(false);
          setEditingItem(null);
        }}
        onSave={handleSaveEdit}
      />
    </section>
  );
}
