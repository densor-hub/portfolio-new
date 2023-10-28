import ThemeContext from "../context/themeColorsContext.tsx";
import { useContext } from "react";
import { iThemeContext } from "../interfaces";

const useThemeContext = () => {
  return useContext<iThemeContext>(ThemeContext);
};

export default useThemeContext;
