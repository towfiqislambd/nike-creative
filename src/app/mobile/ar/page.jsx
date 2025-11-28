"use client";

import Image from "next/image";
import { FaCamera } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { useForm } from "react-hook-form";
import { IoCameraOutline } from "react-icons/io5";
import { TfiCloudUp } from "react-icons/tfi";

export default function ArPage() {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    console.log("Camera File:", data.cameraFile);
    console.log("Upload File:", data.uploadFile);
  };
  return (
    <main className="relative min-h-screen w-full overflow-hidden md:hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://i.ibb.co.com/Z6rhHvLv/B2b2c-bg-1.png"
          alt="Door background"
          fill
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>


      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="file"
          id="cameraInput"
          accept="image/*"
          capture="environment"
          className="hidden"
          {...register("cameraFile")}
          onChange={(e) => setValue("cameraFile", e.target.files[0])}
        />
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          className="hidden"
          {...register("uploadFile")}
          onChange={(e) => setValue("uploadFile", e.target.files[0])}
        />
        <section className="relative flex flex-col items-center justify-between pt-6 pb-28 px-5 text-center text-white">
          <div className="mt-6">
            <h1 className="text-[26px] leading-[1.2] font-semibold">
              Change your door with <br />
              <span className="font-bold">AR</span>
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-white/85">
              Visualize how your house would look with a new
              <br />
              door using AR view.
            </p>
          </div>
          <div className="mb-16 flex items-center mt-7 gap-4">
            <button
              type="button"
              onClick={() => document.getElementById("cameraInput").click()}
              className="h-14 w-14 rounded-full bg-white flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.6)] text-[#333] text-2xl"
            >
              <IoCameraOutline  />
            </button>
            <button
              type="button"
              onClick={() => document.getElementById("fileInput").click()}
              className="h-12 w-12 text-2xl rounded-full bg-white flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.6)] text-[#333] "
            >
              <TfiCloudUp />
            </button>
          </div>
        </section>
      </form>
    </main>
  );
}
