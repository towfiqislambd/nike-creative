import React from "react";
import doorImg from "../../../../Assets/d1.jpg";
import SingleDoor from "../../../../Components/Common/SingleDoor";
const data = [
  { id: 1, img: doorImg, name: "KDWH010" },
  { id: 2, img: doorImg, name: "KDWH010" },
  { id: 3, img: doorImg, name: "KDWH010" },
  { id: 4, img: doorImg, name: "KDWH010" },
  { id: 5, img: doorImg, name: "KDWH010" },
  { id: 6, img: doorImg, name: "KDWH010" },
  { id: 7, img: doorImg, name: "KDWH010" },
  { id: 8, img: doorImg, name: "KDWH010" },
  { id: 9, img: doorImg, name: "KDWH010" },
  { id: 10, img: doorImg, name: "KDWH010" },
];

const Favorites = () => {
  return (
    <div className="grid grid-cols-5 gap-6">
      {data?.map(item => (
        <SingleDoor key={item?.id} item={item} />
      ))}
    </div>
  );
};

export default Favorites;
