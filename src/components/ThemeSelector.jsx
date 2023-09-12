import useThemeContext from "../hooks/useThemeContext";

const ThemeSelector = () => {
  const { ThemeColors, setCurrentTheme } = useThemeContext();
  return (
    <main className="text-center h-fit ">
      <div className="py-2">Theme Colors</div>
      <section className=" w-[100px]">
        <button
          onClick={() => {
            setCurrentTheme(ThemeColors?.emerald);
          }}
          className="w-6 h-6 rounded-full ml-2"
          style={{ backgroundColor: ThemeColors?.emerald }}
        ></button>

        <button
          onClick={() => {
            setCurrentTheme(ThemeColors?.yellow);
          }}
          className="w-6 h-6 rounded-full ml-1 mr-1"
          style={{ backgroundColor: ThemeColors?.yellow }}
        ></button>

        <button
          onClick={() => {
            setCurrentTheme(ThemeColors?.orange);
          }}
          className="w-6 h-6 rounded-full mr-1"
          style={{ backgroundColor: ThemeColors?.orange }}
        ></button>
      </section>
    </main>
  );
};

export default ThemeSelector;
