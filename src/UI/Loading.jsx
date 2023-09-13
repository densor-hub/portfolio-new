import useThemeContext from "../hooks/useThemeContext";
const Loading = () => {
  const { currentTheme } = useThemeContext();
  return (
    <main className="w-sreen h-screen bg-[#0f0e0e] flex justify-center items-center">
      <section className="h-[200px] mx-auto w-fit flex">
        <div
          className="w-5 h-5 rounded-full m-2 transition-colors"
          style={{ backgroundColor: currentTheme }}
        ></div>
        <div
          className="w-5 h-5 rounded-full m-2 animate-bounce duration-100"
          style={{ backgroundColor: currentTheme }}
        ></div>
        <div
          className="w-5 h-5 rounded-full m-2 animate-bounce duration-300"
          style={{ backgroundColor: currentTheme }}
        ></div>
      </section>
    </main>
  );
};

export default Loading;
