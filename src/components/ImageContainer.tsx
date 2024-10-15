import React, { useEffect, useRef } from "react";
import useThemeContext from "../hooks/useThemeContext.ts";
import { PersolInfoData } from "../data/data.tsx";
import { iThemeContext } from "../interfaces";

const ImageContainer = () => {
  const { currentTheme }: iThemeContext = useThemeContext();
  const imageContainerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (imageContainerRef.current !== null) {
        imageContainerRef.current.style.transform = "translateY(-50%)";
      }
    }, 10);
  }, []);
  return (
    <section
      data-testid="image_container"
      ref={imageContainerRef}
      className="w-fit relative  top-[50%]  duration-500  transition-transform  flex flex-col  py-7 lg:py-14 px-5 lg:px-10 mx-auto justify-center items-center"
    >
      <div
        className={`w-10  h-20 border-0 border-t-4 border-l-4  absolute left-0 top-0`}
        style={{ borderColor: currentTheme }}
      ></div>

      <img
        src={PersolInfoData?.img}
        alt={PersolInfoData?.name}
        className="w-[180px] lg:w-[300px] h-[180px] lg:h-[300px]"
      ></img>

      <div
        className={`w-10  h-20 border-0 border-b-4 border-r-4  absolute right-0 bottom-0 `}
        style={{ borderColor: currentTheme }}
      ></div>
    </section>
  );
};

export default ImageContainer;
