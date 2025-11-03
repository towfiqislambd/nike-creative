"use client";
import { useForm } from "react-hook-form";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import bgImage from "../../../Assets/primary_layer.png";
import { useState } from "react";
import { PenSvg } from "../../../Components/Svg/SvgContainer";

export default function CartPage() {
  const { register, handleSubmit } = useForm();

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

  return (
    <section
      className="min-h-screen bg-cover bg-top py-10 px-6"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="container flex flex-col lg:flex-row gap-6">
        <div className="w-[70%] bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-md">
          <h2 className="text-lg font-semibold mb-4">Cart</h2>

          <div className="grid grid-cols-12 py-3 font-medium border-b border-gray-300 text-gray-700">
            <div className="col-span-6 pl-4 text-primary-text text-[20px] font-normal leading-[150%] ">
              Product
            </div>
            <div className="col-span-2 text-primary-text text-[20px] font-normal leading-[150%] text-center">
              Price
            </div>
            <div className="col-span-2 text-primary-text text-[20px] font-normal leading-[150%] text-center">
              Quantity
            </div>
            <div className="col-span-2 text-primary-text text-[20px] font-normal leading-[150%] text-right pr-4">
              Total Price
            </div>
          </div>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-12 items-center py-4 border-b border-gray-200 hover:bg-gray-50 rounded-xl transition"
            >
              <div className="col-span-6 flex gap-4 pl-4 items-center">
                <img
                  src="https://i.ibb.co.com/Mx95n97C/Rectangle-161124243.png"
                  alt="alter"
                  className="w-[144px] h-[165px] rounded-xl object-cover"
                />
                <div>
                  <p className="text-primary-text text-[20px] font-normal leading-[150%] mb-3">
                    Product Name: {item.name}
                  </p>
                  <p className="text-primary-text text-[20px] font-normal leading-[150%] mb-3">
                    Po: {item.po}
                  </p>
                  <p className="text-primary-text text-[20px] font-normal leading-[150%] mb-3">
                    Size: {item.size}
                  </p>
                  <p className="flex items-center text-primary-text text-[20px] font-normal leading-[150%]  gap-2">
                    Color:
                    <span
                      className="w-5 h-5 rounded-full border text-primary-text text-[20px] font-normal leading-[150%] "
                      style={{ backgroundColor: item.colorCode }}
                    ></span>
                    {item.color}
                  </p>
                </div>
              </div>

              <div className="col-span-2 text-primary-text text-[20px] font-normal leading-[150%] text-center">
                ${item.price.toFixed(2)}
              </div>

              <div className="col-span-2 flex justify-center items-center gap-3">
                <button
                  onClick={() => updateQuantity(item.id, "decrease")}
                  className="border rounded-full w-6 h-6 flex items-center justify-center"
                >
                  -
                </button>
                {item.quantity}
                <button
                  onClick={() => updateQuantity(item.id, "increase")}
                  className="border rounded-full w-6 h-6 flex items-center justify-center"
                >
                  +
                </button>
              </div>

              <div className="col-span-2 flex justify-end items-center  gap-3 pr-4">
                <p>${(item.price * item.quantity).toFixed(2)}</p>
                <PenSvg  />
                <FiTrash2
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 cursor-pointer"
                />
              </div>
            </div>
          ))}

          <div className="flex justify-between text-primary-text text-[20px] font-normal leading-[150%]  mt-4 text-lg font-medium">
            <span cl>Total:</span>
            <span>
              {totalQuantity} items — ${total.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="space-y-6 w-[30%]">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-primary-text text-[32px] font-medium leading-[150%] mb-4">
              Order Summary
            </h3>
            <div className="text-primary-text text-[24px] font-normal leading-[150%] space-y-2">
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
              <p className="flex justify-between font-semibold text-gray-900">
                <span>Total Amount:</span>
                <span>${total.toFixed(2)}</span>
              </p>
            </div>

            <div className="flex gap-3 mt-4">
              <button className="flex-1 border border-gray-300 py-2 rounded-md hover:bg-gray-100">
                Pay Later
              </button>
              <button className="flex-1 bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600">
                Pay Now
              </button>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
