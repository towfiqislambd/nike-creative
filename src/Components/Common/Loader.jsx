"use client";
import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../../Assets/loader.json";

const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Lottie animationData={loaderAnimation} loop={true} />
    </div>
  );
};

export default Loader;
