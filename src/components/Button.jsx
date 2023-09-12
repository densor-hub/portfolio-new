import { useNavigate } from "react-router-dom";
import useThemeContext from "../hooks/useThemeContext";

const Button = ({ pathname, label }) => {
  const navigateTo = useNavigate();
  const { currentTheme } = useThemeContext();
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
