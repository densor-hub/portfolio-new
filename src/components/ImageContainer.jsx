import { useEffect, useRef } from "react";
import useThemeContext from "../hooks/useThemeContext";
import { PersolInfoData } from "../data/data";

const ImageContainer = () => {
  const { currentTheme } = useThemeContext();
  const imageContainerRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      imageContainerRef.current.style.transform = "translateY(-35%)";
    }, 10);
  }, []);
  return (
    <section
      ref={imageContainerRef}
      className="w-fit relative  sm:top-[35%]  duration-500  transition-transform  flex flex-col  py-7 lg:py-14 px-5 lg:px-10 mx-auto justify-center items-center"
    >
      <div
        className={`w-10  h-20 border-0 border-t-4 border-l-4  absolute left-0 top-0`}
        style={{ borderColor: currentTheme }}
      ></div>

      <img
        src={PersolInfoData?.img}
        alt={PersolInfoData?.name}
        className="w-[180px] lg:w-[300px] h-[180px] lg:h-[350px]"
      ></img>

      <div
        className={`w-10  h-20 border-0 border-b-4 border-r-4  absolute right-0 bottom-0 `}
        style={{ borderColor: currentTheme }}
      ></div>
    </section>
  );
};

export default ImageContainer;
