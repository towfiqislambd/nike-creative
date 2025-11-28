"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { IoCameraOutline } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { TfiCloudUp } from "react-icons/tfi";

/* ---------------------- STATIC STEP DATA ---------------------- */

const introStep = {
  title: "Could you put the\ncamera to your door?",
  bodyTop:
    "The AI will automatically detect your door and apply the filter.",
  bodyBottom: "When you are ready, take the photo",
  buttonLabel: "Understood!",
};

const designCards = Array.from({ length: 9 }).map((_, idx) => ({
  id: idx + 1,
  name: `KDWH0${10 + idx}`,
  img: "https://i.ibb.co.com/N684xm5K/Frame-2147227155-1.png",
}));



export default function ArPage() {
  const { register, handleSubmit, setValue } = useForm();
  const [step, setStep] = useState(0); // 0..6

  const nextStep = () => {
    setStep((prev) => (prev < 6 ? prev + 1 : prev));
  };

  const onSubmit = (data) => {
    console.log("Camera File:", data.cameraFile);
    console.log("Upload File:", data.uploadFile);
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden md:hidden">
      {/* BG IMAGE */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://i.ibb.co.com/WpMS6Ctf/arpic.png"
          alt="Door background"
          fill
          unoptimized
          className="object-cover"
        />
      </div>

      {(step === 0 || step === 1) && (
        <div className="absolute inset-0 -z-0 " />
      )}

      {step === 0 && (
        <form onSubmit={handleSubmit(onSubmit)} className="relative z-10">
          {/* hidden inputs just like before */}
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

          <section className="relative flex min-h-screen flex-col items-center justify-between px-5 pt-6 pb-28 text-center text-white">
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

            <div className="mb-16 mt-7 flex items-center gap-4">
              {/* camera button – opens input and moves to next step */}
              <button
                type="button"
                onClick={() => {
                  document.getElementById("cameraInput")?.click();
                  nextStep();
                }}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl text-[#333] shadow-[0_8px_20px_rgba(0,0,0,0.6)]"
              >
                <IoCameraOutline />
              </button>

              {/* upload button – optional: you can also move to nextStep if you want */}
              <button
                type="button"
                onClick={() => {
                  document.getElementById("fileInput")?.click();
                  // nextStep(); // uncomment if you want upload to advance the flow too
                }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-[#333] shadow-[0_8px_20px_rgba(0,0,0,0.6)]"
              >
                <TfiCloudUp />
              </button>
            </div>
          </section>
        </form>
      )}

      {/* -------------------- STEP 1: INTRO OVERLAY -------------------- */}
      {step === 1 && (
        <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-10 text-center text-white">
          <div className="flex flex-col items-center gap-6">
            <div className="flex h-[120px] w-[120px] items-center justify-center rounded-[32px] border-[6px] border-white/80 text-5xl text-white">
              <IoCameraOutline />
            </div>

            <div>
              <h1 className="whitespace-pre-line text-[22px] font-semibold leading-snug">
                {introStep.title}
              </h1>
              <p className="mt-4 text-[13px] leading-relaxed text-white/85">
                {introStep.bodyTop}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-white/85">
                {introStep.bodyBottom}
              </p>
            </div>

            <button
              type="button"
              onClick={nextStep}
              className="mt-4 rounded-[999px] bg-[#21BBA2] px-10 py-2.5 text-sm font-semibold shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
            >
              {introStep.buttonLabel}
            </button>
          </div>
        </section>
      )}

      {/* -------------------- STEP 2: CAMERA ONLY -------------------- */}
      {step === 2 && (
        <section className="relative z-10 flex min-h-screen flex-col items-center justify-end pb-16">
          <button
            type="button"
            onClick={nextStep}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-[#21BBA2] text-2xl text-white shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
          >
            <FaCamera />
          </button>
        </section>
      )}

      {/* -------------------- STEP 3: CAMERA + NEXT BUTTON -------------------- */}
      {step === 3 && (
        <section className="relative z-10 flex min-h-screen flex-col items-center justify-end px-6 pb-10">
          <div className="flex w-full items-center justify-between">
            <button
              type="button"
              onClick={nextStep}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#21BBA2] text-2xl text-white shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
            >
              <FaCamera />
            </button>

            <button
              type="button"
              onClick={nextStep}
              className="ml-4 rounded-[999px] bg-[#21BBA2] px-6 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
            >
              Next
            </button>
          </div>
        </section>
      )}

      {/* floating upload icon same as before on this step */}
      {step === 3 && (
        <button
          type="button"
          onClick={nextStep}
          className="absolute bottom-24 right-6 grid h-12 w-12 place-items-center rounded-full bg-white text-2xl text-[#21BBA2] shadow-[0_8px_20px_rgba(0,0,0,0.6)]"
        >
          <TfiCloudUp />
        </button>
      )}

      {/* -------------------- STEP 4: SMALL “CHOOSE DESIGN” STRIP -------------------- */}
      {step === 4 && (
        <section className="relative z-10 flex min-h-screen flex-col items-center justify-start pt-10">
          <div className="mt-2 w-[90%] rounded-[28px]  px-4 pb-4 pt-3 text-white shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Please Choose your design</p>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white/90 text-[18px] text-[#21BBA2]">
                +
              </span>
            </div>

            <div className="mt-3 flex items-center gap-3 overflow-x-auto no-scrollbar">
              {designCards.slice(0, 3).map((card) => (
                <div
                  key={card.id}
                  className="min-w-[80px] rounded-[18px] bg-white/90 p-1 shadow-md"
                >
                  <div className="relative w-full pt-[135%] overflow-hidden rounded-[15px]">
                    <Image
                      src={card.img}
                      alt={card.name}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                    <button className="absolute right-1.5 top-1.5 grid h-5 w-5 place-items-center rounded-full bg-white text-[10px] text-[#21BBA2]">
                      ♥
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 flex justify-center">
              <button
                type="button"
                onClick={nextStep}
                className="rounded-full bg-[#21BBA2] px-6 py-1.5 text-xs font-semibold text-white shadow-md"
              >
                More
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={nextStep}
            className="absolute right-6 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-[#21BBA2] text-xl text-white shadow-[0_8px_20px_rgba(0,0,0,0.55)]"
          >
            <FaCamera />
          </button>
        </section>
      )}

      {/* -------------------- STEP 5: FULL DESIGN PANEL -------------------- */}
      {step === 5 && (
        <section className="relative z-10 flex min-h-screen flex-col items-center pt-10">
          <div className="mt-2 flex h-[88%] w-[92%] flex-col rounded-[32px]  px-4 pb-4 pt-3 text-white shadow-[0_12px_22px_rgba(0,0,0,0.6)]">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold">
                Please Choose your design
              </p>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white/90 text-[18px] text-[#21BBA2]">
                +
              </span>
            </div>

            <div className="mb-3 flex items-center justify-between gap-2">
              <div className="flex gap-2">
                <button className="grid h-8 w-8 place-items-center rounded-full bg-[#21BBA2] text-xs">
                  1D
                </button>
                <button className="grid h-8 w-8 place-items-center rounded-full bg-[#21BBA2] text-xs">
                  2D
                </button>
              </div>
              <div className="flex items-center gap-2">
                {["#18B9C9", "#ffffff", "#000000"].map((c) => (
                  <span
                    key={c}
                    style={{ backgroundColor: c }}
                    className="h-3 w-3 rounded-full border border-white/60"
                  />
                ))}
              </div>
            </div>

            <div className="grid flex-1 grid-cols-3 gap-2 overflow-y-auto pb-2">
              {designCards.map((card) => (
                <div
                  key={card.id}
                  className="rounded-[18px] bg-white/90 p-1 shadow"
                  onClick={nextStep}
                >
                  <div className="relative w-full pt-[135%] overflow-hidden rounded-[15px]">
                    <Image
                      src={card.img}
                      alt={card.name}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                    <button className="absolute right-1.5 top-1.5 grid h-5 w-5 place-items-center rounded-full bg-white text-[10px] text-[#21BBA2]">
                      ♥
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* -------------------- STEP 6: FINAL PREVIEW -------------------- */}
      {step === 6 && (
        <section className="relative z-10 flex min-h-screen flex-col items-center justify-between pb-8">
          <div className="mt-4 w-[90%] rounded-[28px] bg-[rgba(72,39,25,0.88)] px-4 pb-4 pt-3 text-white shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Please Choose your design</p>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white/90 text-[18px] text-[#21BBA2]">
                +
              </span>
            </div>

            <div className="mt-3 flex items-center gap-3 overflow-x-auto no-scrollbar">
              {designCards.slice(0, 3).map((card) => (
                <div
                  key={card.id}
                  className="min-w-[80px] rounded-[18px] bg-white/90 p-1 shadow-md"
                >
                  <div className="relative w-full pt-[135%] overflow-hidden rounded-[15px]">
                    <Image
                      src={card.img}
                      alt={card.name}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                    <button className="absolute right-1.5 top-1.5 grid h-5 w-5 place-items-center rounded-full bg-white text-[10px] text-[#21BBA2]">
                      ♥
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 flex justify-center">
              <button
                type="button"
                className="rounded-full bg-[#21BBA2] px-6 py-1.5 text-xs font-semibold text-white shadow-md"
              >
                More
              </button>
            </div>
          </div>

          <div className="mt-4 w-[70%] max-w-xs overflow-hidden rounded-[18px] shadow-[0_10px_25px_rgba(0,0,0,0.6)]">
            <Image
              src="https://i.ibb.co.com/23t67gbd/Untitled-design-6-2.png"
              alt="Selected door"
              width={300}
              height={500}
              unoptimized
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="mt-4 flex w-full items-center justify-between px-8">
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full bg-[#18B9C9] text-xl text-white shadow-[0_6px_15px_rgba(0,0,0,0.5)]"
            >
              ←
            </button>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full bg-[#18B9C9] text-xl text-white shadow-[0_6px_15px_rgba(0,0,0,0.5)]"
            >
              →
            </button>
            <button
              type="button"
              className="rounded-full bg-[#21BBA2] px-6 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
            >
              Select
            </button>
          </div>
        </section>
      )}
    </main>
  );
}
