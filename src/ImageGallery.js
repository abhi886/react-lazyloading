import React from "react";
import Image from "./Image";
// import useOnScreen from "./utils/useOnScreen";

export default function ImageGallery({ images }) {
  return (
    <div className='grid-container'>
      {images.map((data, i) => (
        <Image key={i} data={data}></Image>
      ))}
    </div>
  );
}
