import { useState, useEffect } from "react";

const useWidth = () => {
  const [width, setWidth] = useState(0);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    handleResize();
    document.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("resize", handleResize);
    };
  }, [width]);
  return width;
};

export default useWidth;
