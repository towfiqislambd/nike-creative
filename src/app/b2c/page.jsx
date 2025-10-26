import React from 'react';
import DoorGallerySection from '../(home)/_components/DoorGallerySection';
import DoorDesignSectionB2c from '../b2c/_components/DoorDesignSectionB2c';
import FinaLockSection from '../b2c/_components/FinalLookSection';
const page = () => {
  return (
    <div>
      <DoorDesignSectionB2c />
      <DoorGallerySection />
      <FinaLockSection />
    </div>
  );
};

export default page;