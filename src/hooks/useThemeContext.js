import ThemeContext from "../context/themeColorsContext";
import { useContext } from "react";

const useThemeContext = () => {
  return useContext(ThemeContext);
};

export default useThemeContext;
