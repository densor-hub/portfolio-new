import { useNavigate } from "react-router-dom";
import useThemeContext from "../hooks/useThemeContext.ts";
import React from "react";
import { iThemeContext } from "../interfaces";

interface iButton {
  pathname: string;
  label: string;
}
const Button = ({ pathname, label }: iButton) => {
  const navigateTo = useNavigate();
  const { currentTheme }: iThemeContext = useThemeContext();
  return (
    <button
      onClick={() => {
        navigateTo(pathname);
      }}
      className="rounded-lg w-[100px] sm:w-[170px]  h-[50px] NextBTN"
      style={{
        border: `2px solid ${currentTheme} `,
      }}
    >
      {label}
    </button>
  );
};

export default Button;
