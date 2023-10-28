import React, { createContext, useState } from "react";
import { iThemeColors, iThemeContext } from "../interfaces";

const ThemeContext = createContext<iThemeContext>({
  currentTheme: "",
  setCurrentTheme: () => {},
  ThemeColors: {
    emerald: "",
    yellow: "",
    orange: "",
  },
  UrlsPathnames: [],
  setUrlPathnames: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const ThemeColors: iThemeColors = {
    emerald: "#34d399",
    yellow: "yellow",
    orange: "#ff4500",
  };
  const [currentTheme, setCurrentTheme] = useState<string>(
    ThemeColors?.emerald
  );
  const [UrlsPathnames, setUrlPathnames] = useState<Array<string>>([]);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setCurrentTheme,
        ThemeColors,
        UrlsPathnames,
        setUrlPathnames,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
