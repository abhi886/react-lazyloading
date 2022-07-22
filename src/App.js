/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import React, { useEffect, useState, useRef } from "react";
// import './style.css';
import ImageGallery from "./ImageGallery";
const images = [
  // "https://placekitten.com/200/200",
  "http://www.fillmurray.com/200/200",
  "https://imgsrc.space/horse?h=200&w=200",
  "https://placekitten.com/200/200",
  "https://imgsrc.space/horse?h=200&w=200",
  "https://placekitten.com/200/200",
  "http://www.fillmurray.com/200/200",
  "https://placekitten.com/200/200",
  "https://imgsrc.space/horse?h=200&w=200",
  "https://imgsrc.space/horse?h=200&w=200",
  "http://www.fillmurray.com/200/200",
];

function App() {
  return (
    <div>
      <h1>Lazy Loading Image Gallery</h1>
      <section>
        <ImageGallery images={images} />
      </section>
    </div>
  );
}

export default App;
