"use client";
import Image from "next/image";

export default function ContactBanner() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] flex items-center justify-center">
      {/* Background image */}
      <Image
        src="https://i.ibb.co/d4S4WTNG/Home-No-Login.png" 
        alt="Contact Banner"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Centered text */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
          Contact Us
        </h1>
      </div>
    </section>
  );
}
