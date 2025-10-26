"use client";
import React from "react";
const MissionSection = ({
  title = "Our Mission",
  description = `We are dedicated to bringing bespoke door designs to every home, combining creativity with precision. Each project is a reflection of our commitment to quality, style, and personalized service.`,
  image = "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2000&auto=format&fit=crop",
}) => {
  return (
    <div className="container">
      <section className="py-10 sm:py-12 lg:py-16">
        <div className="flex flex-col items-center text-center gap-4 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-text tracking-tight">
            {title}
          </h2>
          <p className=" text-base sm:text-lg lg:text-xl leading-relaxed text-primary-text">
            {description}
          </p>
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-12">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
            <div className="w-full">
              <img
                src={image}
                alt="Mission hero"
                className="h-[500px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionSection;
