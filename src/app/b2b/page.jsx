import Image from "next/image";
import DoorDesignSectionB2c from "../b2c/_components/DoorDesignSectionB2c";
import DoorGallerySectionB2bLatest from "./_conponents/DoorGallerySectionB2bLatest";
import DoorDesignSectionB2b from "./_conponents/DoorGallerySectionB2b";
import FinallockSecionB2b from "./_conponents/FinallockSecionB2b";
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
        <DoorDesignSectionB2c />
        <DoorDesignSectionB2b />
        <DoorGallerySectionB2bLatest />
        <FinallockSecionB2b />
      </div>
    </main>
  );
}
