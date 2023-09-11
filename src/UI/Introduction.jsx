import { lazy, useState, useEffect, useRef } from "react";
import useThemeContext from "../hooks/useThemeContext";
import image from "../images/david-ensor.jpg";
import ThemeSelector from "../components/ThemeSelector";
import CurvedArrow from "../components/CurvedArrow";
import { useNavigate } from "react-router-dom";

const NavBar = lazy(() => {
  return import("../components/Nav");
});

const Intro = () => {
  const {
    currentTheme,
    setCurrentTheme,
    ThemeColors,
    setUrlPathnames,
    UrlsPathnames,
  } = useThemeContext();
  const profession = useRef(["Software Developer", "Musician"]);
  const [iterator, setIterator] = useState(0);

  const navigateTo = useNavigate();
  //toggling role or proffession
  useEffect(() => {
    setTimeout(() => {
      if (iterator < profession?.current?.length - 1) {
        setIterator(iterator + 1);
      } else {
        setIterator(0);
      }
    }, 2000);
  }, [iterator]);

  return (
    <main className="flex bg-[#0f0e0e] text-white">
      <NavBar />
      <section className="flex items-center w-full">
        <section className="w-[500px] p-10">
          <article className="pb-5 z-10">
            <header className="text-[45px] font-extrabold pb-5">
              <div>
                <span style={{ color: currentTheme }}>Hello,</span> I'm{" "}
              </div>
              <div>David Ensor</div>
            </header>

            <div className="text-2xl font-semibold">
              I am a{" "}
              <span style={{ color: currentTheme }}>
                {profession.current[iterator]}
              </span>
            </div>

            <p>
              I am results-focused Full-stack developer with strength in both
              Front-end and Back-end developments. I leverage my expertise,
              resourcefulness and diligence to make positive impact. I pride
              myself as a very innovative Software Engineer who shows much
              appreciation for collective efforts.
            </p>
          </article>

          <section className="flex">
            <ThemeSelector />
            <CurvedArrow></CurvedArrow>
          </section>

          <section className="relative bottom-9">
            <button
              onClick={() => {
                navigateTo("/skills");
              }}
              className="rounded-lg w-[200px] h-[50px] NextBTN"
              style={{
                border: `2px solid ${currentTheme} `,
              }}
            >
              Next
            </button>
            <div></div>
          </section>
        </section>

        <ImageContainer
          image={image}
          currentTheme={currentTheme}
        ></ImageContainer>
      </section>
    </main>
  );
};

export default Intro;

const ImageContainer = ({ image, currentTheme }) => {
  return (
    <section className="flex flex-col relative py-14 px-10 mx-auto">
      <div
        className={`w-10  h-20 border-0 border-t-4 border-l-4  absolute left-0 top-0`}
        style={{ borderColor: currentTheme }}
      ></div>

      <img src={image} className="w-[300px] h-[350px] p-"></img>

      <div
        className={`w-10  h-20 border-0 border-b-4 border-r-4  absolute right-0 bottom-0 `}
        style={{ borderColor: currentTheme }}
      ></div>
    </section>
  );
};
