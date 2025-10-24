"use client";
import React from "react";
import Container from "../../_components/common/Container";

const AboutMosaic = ({
  eyebrow = "Our Story",
  title = "Let’s Talk About Kutde",
  body = `Kutde was born from the vision that the most robust doors and windows should also be the most beautiful. We recognized that fabricators needed a partner who could deliver not just quality, but the stunning design elements that make a product truly stand out in the market. Our mission has always been to be the premier creator of these signature details. In our state-of-the-art facility, we blend advanced technology with a passion for design to produce architectural elements of exceptional quality. We don't just supply decorative pieces; we create the visual identity that transforms a great product into an unforgettable one, all backed by a guarantee as strong as your own.`,
  ctaText = "Browse Designs",
  ctaHref = "#",
  imgTopRight = "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop",
  imgMidRight = "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
  imgBottomRight = "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop",
  imgBottomWide = "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop",
}) => {
  return (
    <Container>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 xl:flex-row">
          <div className="flex-1 flex flex-col gap-6">
            <div className="rounded-[28px] flex flex-col justify-between h-[606px] bg-white/95 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/5 backdrop-blur sm:p-8">
              <div className="">
                <div className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                  {eyebrow}
                </div>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
                  {title}
                </h2>
                <p className="mt-4 max-w-4xl text-base leading-relaxed text-gray-600">
                  {body}
                </p>
              </div>
              <div className="mt-auto">
                <a
                  href={ctaHref}
                  className="inline-flex items-center rounded-full bg-[#21BBA2] px-5 py-3 text-white shadow hover:bg-[#1aa58e] focus:outline-none focus:ring-2 focus:ring-[#21BBA2]/30"
                >
                  {ctaText}
                </a>
              </div>
            </div>

            <MosaicImg src={imgBottomWide} alt="Bottom wide" ratio="16/6" />
          </div>

          <div className="w-full xl:w-[28%] flex flex-col gap-6">
            <MosaicImg src={imgTopRight} alt="Top right" />
            <MosaicImg src={imgMidRight} alt="Middle right" />
            <MosaicImg src={imgBottomRight} alt="Bottom right" />
          </div>
        </div>
      </section>
    </Container>
  );
};

const MosaicImg = ({ src, alt, className = "", ratio = "4/3" }) => {
  return (
    <div
      className={`rounded-[28px] ring-1 ring-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.12)] overflow-hidden ${className}`}
    >
      <div className="w-full h-[290px]" style={{ aspectRatio: ratio }}>
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default AboutMosaic;
