"use client";
import { useState } from "react";
import Image from "next/image";
import Container from "../../../Components/Common/Container";
const doors = [
  {
    id: 1,
    code: "KDWH005",
    images: {
      "#D3D3D3": "https://i.ibb.co.com/35TH3Mnx/Rectangle-161124225-1.png",
      "#555555": "https://i.ibb.co.com/KzVYJnHr/Rectangle-161124225.png",
      "#000000": "https://i.ibb.co.com/gLT7K6BC/Rectangle-161124224.png",
    },
  },
  {
    id: 2,
    code: "KDWH003",
    images: {
      "#000000": "https://i.ibb.co.com/35TH3Mnx/Rectangle-161124225-1.png",
      "#D3D3D3": "https://i.ibb.co.com/KzVYJnHr/Rectangle-161124225.png",
      "#777777": "https://i.ibb.co.com/gLT7K6BC/Rectangle-161124224.png",
    },
  },
  {
    id: 3,
    code: "KDWH010",
    images: {
      "#D3D3D3": "https://i.ibb.co.com/35TH3Mnx/Rectangle-161124225-1.png",
      "#FFFFFF": "https://i.ibb.co.com/KzVYJnHr/Rectangle-161124225.png",
      "#000000": "https://i.ibb.co.com/gLT7K6BC/Rectangle-161124224.png",
    },
  },
  {
    id: 4,
    code: "KDWH009",
    images: {
      "#000000": "https://i.ibb.co.com/35TH3Mnx/Rectangle-161124225-1.png",
      "#D3D3D3": "https://i.ibb.co.com/KzVYJnHr/Rectangle-161124225.png",
      "#FFFFFF": "https://i.ibb.co.com/gLT7K6BC/Rectangle-161124224.png",
    },
  },
];

export default function DoorGallerySection() {
  const [selectedColors, setSelectedColors] = useState(
    doors.reduce((acc, door) => {
      acc[door.id] = Object.keys(door.images)[0];
      return acc;
    }, {})
  );

  const handleColorClick = (doorId, color) => {
    setSelectedColors(prev => ({ ...prev, [doorId]: color }));
  };

  return (
    <section className="2xl:py-25">
      <Container>
        <div className="text-center mb-8 2xl:mb-12">
          <h2 className="section_title">The Art of the Doorway</h2>
          <p className="section_description mt-3">
            Exquisite designs crafted to transform your impact doors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {doors.map(door => {
            const currentColor = selectedColors[door.id];
            const currentImage = door.images[currentColor];

            return (
              <div
                key={door.id}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div className="w-full h-56 2xl:h-70 overflow-hidden relative">
                  <Image
                    src={currentImage}
                    alt={door.code}
                    fill
                    unoptimized
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">
                    {door.code}
                  </h3>

                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Color:</span>
                    <div className="flex gap-1.5">
                      {Object.keys(door.images).map((color, i) => (
                        <button
                          key={i}
                          onClick={() => handleColorClick(door.id, color)}
                          className={`w-4 h-4 rounded-full border ${
                            selectedColors[door.id] === color
                              ? "ring-2 ring-offset-1 ring-gray-700"
                              : "border-gray-300"
                          }`}
                          style={{ backgroundColor: color }}
                          aria-label={`Select color ${color}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
