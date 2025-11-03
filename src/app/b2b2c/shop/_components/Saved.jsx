import React from "react";
import doorImg from "../../../../Assets/d1.jpg";
import Image from "next/image";
const data = [
  { id: 1, img: doorImg },
  { id: 2, img: doorImg },
  { id: 3, img: doorImg },
  { id: 4, img: doorImg },
  { id: 5, img: doorImg },
  { id: 6, img: doorImg },
];

const Saved = () => {
  return (
    <section className="p-6 rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-medium text-primary-text mb-4">Saved</h2>

      <div className="grid grid-cols-3 gap-6">
        {data?.map(item => (
          <figure className="rounded-2xl relative h-[350px] shadow-lg  overflow-hidden group">
            <Image
              src={item?.img}
              alt="door_img"
              fill
              unoptimized
              className="rounded-2xl group-hover:scale-105 duration-700"
            />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Saved;
