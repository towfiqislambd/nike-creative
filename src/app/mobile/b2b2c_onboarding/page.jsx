"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function B2b2cOnboardingMobile() {
  const router = useRouter();

  const slides = [
    {
      title: "Swipe to explore styles.",
      description: "Effortlessly browse designs with a simple gesture.",
    },
    {
      title: "Swipe to explore styles.",
      description: "Effortlessly browse designs with a simple gesture.",
    },
    {
      title: "See your new door, instantly.",
      description:
        "Visualize thousands of styles on your own home.",
    },
  ];

  const [step, setStep] = useState(0); 

  const goToShop = () => {
    router.push("/mobile/shop");
  };

  const handleNext = () => {
    if (step === slides.length - 1) {
      goToShop();
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handleSkip = () => {
    goToShop();
  };

  const current = slides[step];

  return (
    <main className="relative h-screen w-full overflow-hidden md:hidden">
      <div className="absolute inset-0">
        <Image
          src="https://i.ibb.co.com/Z6rhHvLv/B2b2c-bg-1.png"
          alt="Door background"
          fill
          priority
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-10">
        <div className="mb-8 w-[70%]">
          <h1 className="text-white text-[24px] leading-[150%] font-semibold mb-3">
            {current.title.split("\n").map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="text-[rgba(228,228,228,1)] text-xs leading-[150%] font-normal">
            {current.description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`h-1.5 rounded-full transition-all ${
                  index === step
                    ? "w-3.5 bg-[#21BBA2]"
                    : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-4">
            {step > 0 && (
              <button
                type="button"
                onClick={handleSkip}
                className="text-white/80 text-sm"
              >
                Skip
              </button>
            )}

            <button
              type="button"
              onClick={handleNext}
              className="min-w-[90px] rounded-full bg-[#21BBA2] px-5 py-2 text-center text-sm font-medium text-white shadow-[0_8px_18px_rgba(0,0,0,0.35)]"
            >
              {step === slides.length - 1 ? "Start" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
