import useThemeContext from "../hooks/useThemeContext";

const ThemeSelector = () => {
  const { ThemeColors, setCurrentTheme } = useThemeContext();
  return (
    <main className="text-center w-fit">
      <div>Theme Colors</div>
      <section>
        <button
          onClick={() => {
            setCurrentTheme(ThemeColors?.emerald);
          }}
          className="w-6 h-6 rounded-full m-2"
          style={{ backgroundColor: ThemeColors?.emerald }}
        ></button>

        <button
          onClick={() => {
            setCurrentTheme(ThemeColors?.yellow);
          }}
          className="w-6 h-6 rounded-full m-2"
          style={{ backgroundColor: ThemeColors?.yellow }}
        ></button>

        <button
          onClick={() => {
            setCurrentTheme(ThemeColors?.orange);
          }}
          className="w-6 h-6 rounded-full m-2"
          style={{ backgroundColor: ThemeColors?.orange }}
        ></button>
      </section>
    </main>
  );
};

export default ThemeSelector;
