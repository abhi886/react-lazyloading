import React, { useState, useEffect, useRef } from "react";

const Image = ({ data }) => {
  const [visible, setVisible] = useState(false);
  const imageRef = useRef();
  useEffect(() => {
    let options = {
      rootMargin: "0px",
      threshold: 0,
    };
    let observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);
    observer.observe(imageRef.current);
  }, []);
  return (
    <>
      <img
        ref={imageRef}
        height={200}
        width={200}
        alt='ima for'
        src={visible ? data : null}
      />
    </>
  );
};
export default Image;
