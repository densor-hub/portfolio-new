import { useNavigate } from "react-router-dom";
import useThemeContext from "../hooks/useThemeContext";
import ThemeSelector from "./ThemeSelector";
import CurvedArrow from "./CurvedArrow";

const ThemesArrowBtnCombo = () => {
  const navigateTo = useNavigate();
  const { currentTheme } = useThemeContext();
  const DoNotRenderThemesSelectorOnURL = [
    "skills",
    "resume",
    "projects",
    "contact",
  ];
  return <main className=" w-fit mx-auto"></main>;
};

export default ThemesArrowBtnCombo;
