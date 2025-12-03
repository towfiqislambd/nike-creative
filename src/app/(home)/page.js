import Image from "next/image";
import DoorDesignSection from "./_components/DoorDesignSection";
import DoorGallerySection from "./_components/DoorGallerySection";
import DoorDesignSectionB2b from "../b2b/_conponents/DoorGallerySectionB2b"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Image
        src="https://i.ibb.co.com/d4S4WTNG/Home-No-Login.png"
        alt="Background"
        fill
        unoptimized
        className="object-cover object-center -z-10"
      />
      <div>
        <DoorDesignSection />
        {/* <DoorGallerySection /> */}
        <DoorDesignSectionB2b />
      </div>
    </main>
  );
}
