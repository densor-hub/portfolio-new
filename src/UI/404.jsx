import useThemeContext from "../hooks/useThemeContext";
import NavBar from "../components/Nav";
import { useRef } from "react";
const Page404 = () => {
  const { currentTheme } = useThemeContext();
  const PagenotFound = useRef(false);

  return (
    <main className="flex  min-h-screen bg-[#201f1f]">
      <NavBar PagenotFound={PagenotFound} />
      <section className=" bg-[#0f0e0e]  w-full flex justify-center items-center">
        <div style={{ color: currentTheme }}>
          <Emoji />
          <div className="text-[50px] font-bold text-center">404</div>
          <div className="text-sm italic text-center">
            <div>Page not found, it seems you entered a wrong url</div>
            <div className="text-white">
              Please navigate with the pannel on the right end
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page404;

const Emoji = () => {
  const { currentTheme } = useThemeContext();
  return (
    <main className=" animate-bounce w-fit mx-auto">
      <div
        className="w-28 h-28 rounded-full bg-red border-8 mx-auto"
        style={{ borderColor: currentTheme }}
      >
        <div className="flex mx-auto w-[70%] justify-between h-[50%] items-center">
          <div
            className="h-5 w-5 rounded-full "
            style={{ backgroundColor: currentTheme }}
          ></div>
          <div
            className="h-5 w-5 rounded-full "
            style={{ backgroundColor: currentTheme }}
          ></div>
        </div>
        <div
          className="w-14 h-14 rounded-full ] mx-auto bg-transparent border-8 border-b-0  border-l-0  border-r-0 "
          style={{
            backgroundColor: "transparent",
            borderColor: currentTheme,
          }}
        ></div>
      </div>
    </main>
  );
};
