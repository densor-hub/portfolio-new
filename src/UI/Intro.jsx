import { lazy, useState, useEffect, useRef } from "react";
import useThemeContext from "../hooks/useThemeContext";
import image from "../images/david-ensor.jpg";
import ThemeSelector from "../components/ThemeSelector";
import CurvedArrow from "../components/CurvedArrow";
import ImageContainer from "../components/ImageContainer";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const NavBar = lazy(() => {
  return import("../components/Nav");
});

const Intro = () => {
  const { currentTheme } = useThemeContext();
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
    <main className="flex min-h-screen bg-[#201f1f] text-white">
      <NavBar />
      <section className="min-h-screen w-full flex justify-center items-center">
        <section className="flex w-full relative  bg-[#0f0e0e] h-full ">
          <section className="w-[500px] px-10  h-fit  relative top-[50%] translate-y-[-50%]">
            <article className="pb-5 z-10 ">
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
              <Button pathname={"/skills"} label={"Next"} />
            </section>
          </section>

          <div className="w-full">
            <ImageContainer image={image}></ImageContainer>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Intro;
