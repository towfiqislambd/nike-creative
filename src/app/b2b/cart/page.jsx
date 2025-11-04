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
      className="min-h-screen bg-cover bg-top py-6 px-4 md:py-10 md:px-6"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      {/* Stack on mobile/tablet; keep two columns on XL */}
      <div className="container mx-auto flex flex-col xl:flex-row gap-6">
        {/* LEFT: Cart */}
        <div className="w-full xl:w-[70%] bg-white/90 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-md">
          <h2 className="text-lg md:text-xl font-semibold mb-4">Cart</h2>

          {/* Table header: only show on XL to keep original look */}
          <div className="hidden xl:grid grid-cols-12 py-3 font-medium border-b border-gray-300 text-gray-700">
            <div className="col-span-6 pl-4 carttext">Product</div>
            <div className="col-span-2 carttext text-center">Price</div>
            <div className="col-span-2 carttext text-center">Quantity</div>
            <div className="col-span-2 carttext text-center pr-4">
              Total Price
            </div>
          </div>

          {/* Rows */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="
                rounded-xl transition border-b border-gray-200
                xl:grid xl:grid-cols-12 xl:items-center xl:py-4
                py-4 hover:bg-gray-50
              "
            >
              {/* Product column */}
              <div className="xl:col-span-6 flex gap-4 pl-0 xl:pl-4 items-center">
                <img
                  src="https://i.ibb.co.com/Mx95n97C/Rectangle-161124243.png"
                  alt="alter"
                  className="w-28 h-32 md:w-36 md:h-40 xl:w-[144px] xl:h-[165px] rounded-xl object-cover flex-shrink-0"
                />
                <div className="w-full">
                  {/* On mobile/tablet, show inline labels for clarity */}
                  <p className="carttext mb-1 md:mb-2">
                    <span className="xl:hidden text-gray-500">
                      Product Name:{" "}
                    </span>
                    {item.name}
                  </p>
                  <p className="carttext mb-1 md:mb-2">
                    <span className="xl:hidden text-gray-500">PO: </span>
                    {item.po}
                  </p>
                  <p className="carttext mb-1 md:mb-2">
                    <span className="xl:hidden text-gray-500">Size: </span>
                    {item.size}
                  </p>
                  <p className="carttext flex items-center gap-2">
                    <span className="xl:hidden text-gray-500">Color: </span>
                    <span
                      className="w-4 h-4 md:w-5 md:h-5 rounded-full border"
                      style={{ backgroundColor: item.colorCode }}
                    />
                    {item.color}
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="xl:col-span-2 carttext text-left mt-3 xl:mt-0 xl:text-center">
                <span className="xl:hidden text-gray-500 mr-1">Price:</span>$
                {item.price.toFixed(2)}
              </div>

              {/* Quantity */}
              <div className="xl:col-span-2 flex justify-start xl:justify-center items-center gap-3 mt-3 xl:mt-0">
                <button
                  onClick={() => updateQuantity(item.id, "decrease")}
                  className="border rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-base md:text-lg cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  –
                </button>
                <span className="carttext">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, "increase")}
                  className="border rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-base md:text-lg cursor-pointer"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Total + actions */}
              <div className="xl:col-span-2 flex justify-between xl:justify-end items-center gap-3 pr-0 xl:pr-4 mt-3 xl:mt-0">
                <p className="carttext">
                  <span className="xl:hidden text-gray-500 mr-1">Total:</span>$
                  {(item.price * item.quantity).toFixed(2)}
                </p>
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
                  className="text-red-900 cursor-pointer p-2 rounded-md bg-red-300"
                  aria-label="Remove"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}

          {/* Cart footer total */}
          <div className="flex justify-between items-center mt-4 text-xl">
            <span className="carttext">Total:</span>
            <span className="carttext">
              {totalQuantity} items — ${total.toFixed(2)}
            </span>
          </div>
        </div>

        {/* RIGHT: Summary */}
        <div className="w-full xl:w-[30%] space-y-6">
          <div className="bg-white rounded-2xl shadow-md p-5 md:p-6">
            <h3 className="text-2xl md:text-[32px] font-medium leading-[150%] mb-4">
              Order Summary
            </h3>

            <div className="carttext space-y-6 md:space-y-8">
              <p className="flex justify-between">
                <span>Sub Total:</span>
                <span>${subTotal.toFixed(2)}</span>
              </p>
              <p className="flex justify-between">
                <span>Total Quantity:</span>
                <span>{totalQuantity}</span>
              </p>
              <p className="flex justify-between">
                <span>Total Discount:</span>
                <span className="text-teal-600">-${discount.toFixed(2)}</span>
              </p>

              <hr className="my-2" />

              <p className="flex justify-between text-gray-900">
                <span>Total Amount:</span>
                <span>${total.toFixed(2)}</span>
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-3 mt-4">
              <button className="w-full md:flex-1 duration-500 hover:text-white py-2 rounded-lg text-primary-text text-lg md:text-xl hover:bg-teal-600 bg-[rgba(175,243,255,0.5)] cursor-pointer">
                Pay Later
              </button>
              <button className="w-full md:flex-1 duration-500 bg-[rgba(175,243,255,0.5)] text-primary-text text-lg md:text-xl hover:text-white py-2 rounded-lg hover:bg-teal-600 cursor-pointer">
                Pay Now
              </button>
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
