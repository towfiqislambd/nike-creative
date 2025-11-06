import React from "react";
import DoorGallerySection from "../(home)/_components/DoorGallerySection";
import DoorDesignSectionB2c from "../b2b2c/_components/DoorDesignSectionB2c";
import FinaLockSection from "../b2b2c/_components/FinalLookSection";
const page = () => {
  return (
    <>
      <DoorDesignSectionB2c />
      <DoorGallerySection />
      <FinaLockSection />
    </>
  );
};

export default page;
