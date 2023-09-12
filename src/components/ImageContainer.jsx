import useThemeContext from "../hooks/useThemeContext";

const ImageContainer = ({ image }) => {
  const { currentTheme } = useThemeContext();
  return (
    <section className="w-fit  sm:top-[50%] sm:-translate-y-[50%] flex flex-col relative py-7 lg:py-14 px-5 lg:px-10 mx-auto justify-center items-center">
      <div
        className={`w-10  h-20 border-0 border-t-4 border-l-4  absolute left-0 top-0`}
        style={{ borderColor: currentTheme }}
      ></div>

      <img
        src={image}
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
