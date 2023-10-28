import useThemeContext from "../hooks/useThemeContext";
const Loading = () => {
  const { currentTheme } = useThemeContext();
  return (
    <main className="w-sreen h-screen bg-[#0f0e0e] flex justify-center items-center">
      <section className="h-[200px] mx-auto w-fit flex">
        <div
          className="w-24 h-24 bg-transparent  rounded-full border-[14px] border-transparent animate-spin"
          style={{ borderLeftColor: currentTheme }}
        ></div>
      </section>
    </main>
  );
};

export default Loading;
