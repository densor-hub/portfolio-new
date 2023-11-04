import useThemeContext from "../hooks/useThemeContext.ts";
import React from "react";
import { iThemeContext } from "../interfaces";

const ThemeSelector = () => {
  const { ThemeColors, setCurrentTheme }: iThemeContext = useThemeContext();
  return (
    <main className="text-center h-fit " data-testid="theme_selector">
      <div className="py-2">Theme Colors</div>
      <section className="w-[120px] md:w-[100px]">
        <button
          style={{ backgroundColor: "#34d399" }}
          data-testid="emerald_selector"
          onClick={() => {
            setCurrentTheme(ThemeColors?.emerald);
          }}
          className="w-6 h-6 rounded-full ml-4 md:ml-2"
        ></button>

        <button
          style={{ backgroundColor: "yellow" }}
          data-testid="yellow_selector"
          onClick={() => {
            setCurrentTheme(ThemeColors?.yellow);
          }}
          className="w-6 h-6 rounded-full ml-2 mr-2 md:ml-1 md:mr-1 "
        ></button>

        <button
          style={{ backgroundColor: "#ff4500" }}
          data-testid="orange_selector"
          onClick={() => {
            setCurrentTheme(ThemeColors?.orange);
          }}
          className="w-6 h-6 rounded-full mr-1"
        ></button>
      </section>
    </main>
  );
};

export default ThemeSelector;
