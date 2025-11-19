import React from "react";
import ServiceRequest from "../_components/ServiceRequest";

const page = () => {
  const serviceRequestData = {
    note: "This is a demo notes",
    address: "This is a demo address.",
    image: [
      {
        url: "https://i.ibb.co.com/k60zt8Lj/product-image-Custom-Double-Door.png",
      },
      {
        url: "https://i.ibb.co.com/k60zt8Lj/product-image-Custom-Double-Door.png",
      },
      {
        url: "https://i.ibb.co.com/k60zt8Lj/product-image-Custom-Double-Door.png",
      },
      {
        url: "https://i.ibb.co.com/k60zt8Lj/product-image-Custom-Double-Door.png",
      },
      {
        url: "https://i.ibb.co.com/k60zt8Lj/product-image-Custom-Double-Door.png",
      },
      {
        url: "https://i.ibb.co.com/k60zt8Lj/product-image-Custom-Double-Door.png",
      },
    ],
  };
  return (
    <div className="flex items-center justify-center w-full min-h-screen p-2">
      <ServiceRequest data={serviceRequestData}/>
    </div>
  );
};

export default page;
