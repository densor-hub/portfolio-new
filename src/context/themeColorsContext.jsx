import { createContext, useRef, useState } from "react";

const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
  const ThemeColors = {
    emerald: "#34d399",
    yellow: "yellow",
    orange: "#ff4500",
  };
  const [currentTheme, setCurrentTheme] = useState(ThemeColors?.emerald);
  const [UrlsPathnames, setUrlPathnames] = useState([]);
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
