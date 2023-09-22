import { useEffect, useState } from "react";

export const useScreenDetector = () => {
  const [width, setWidth] = useState(0);

  const handleWindowSizeChange = () => {
    setWidth(global.window.innerWidth);
  };

  useEffect(() => {
    handleWindowSizeChange();
    global.window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      global.window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 1024;
  const isDesktop = width > 1024;

  return { isMobile, isDesktop };
};
