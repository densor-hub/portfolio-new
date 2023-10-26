import { lazy, useState, useEffect, useRef } from "react";
import useThemeContext from "../hooks/useThemeContext";
import ThemeSelector from "../components/ThemeSelector";
import CurvedArrow from "../components/CurvedArrow";
import ImageContainer from "../components/ImageContainer";
import Button from "../components/Button";
import { PersolInfoData } from "../data/data";

const NavBar = lazy(() => {
  return import("../components/Nav");
});

const Intro = () => {
  const { currentTheme } = useThemeContext();
  //animate rendering of pae content
  const AnimatingRefs = useRef([]);
  const addToAnimatingRefs = (element) => {
    if (element && !AnimatingRefs?.current?.includes(element)) {
      AnimatingRefs?.current?.push(element);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      AnimatingRefs?.current.forEach((element, index) => {
        if (index % 2 === 0) {
          element.style.transform = "translateX(10vw)";
        } else {
          element.style.transform = "translateX(-10vw)";
        }
      });
    }, 10);
  }, []);

  //Type name on screen
  const [name, setName] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      if (PersolInfoData?.name?.length > name?.length) {
        setName([...name, PersolInfoData?.name[name?.length]]);
      }
    }, 200);
  }, [name]);

  //Type profession on screen
  const [iterator, setIterator] = useState(0);
  const [currentProfession, setcurrentProfession] = useState(
    PersolInfoData.professions[0][0]
  );
  useEffect(() => {
    setTimeout(() => {
      if (iterator < PersolInfoData.professions.length) {
        if (
          PersolInfoData.professions[iterator].length >
          currentProfession?.length
        ) {
          setcurrentProfession(
            currentProfession +
              PersolInfoData.professions[iterator][currentProfession?.length]
          );
        } else {
          setIterator((p) => {
            return p + 1;
          });
          setcurrentProfession("");
        }
      } else {
        setIterator(0);
        setcurrentProfession("");
      }
    }, 200);
  }, [iterator, currentProfession]);

  return (
    <main className="flex min-h-screen bg-[#201f1f] text-white overflow-x-hidden">
      <NavBar />
      <section className="min-h-screen bg-[#0f0e0e]  flex justify-center items-center w-[calc(100vw-69px)] sm:w-[calc(100vw-116px)] relative left-[69px] sm:left-[116px] ">
        <section className=" flex flex-col sm:flex-row w-full relative  h-fit sm:h-full">
          <section className="w-[100%] sm:w-[300px] lg:w-[500px] pb-4 px-10  h-fit  sm:relative top-[50%] sm:translate-y-[-50%] ">
            <article className="pb-5 z-10 ">
              <header
                className="text-[30px] sm:text-[45px] font-extrabold relative transition-transform right-[10vw] duration-500 "
                ref={addToAnimatingRefs}
              >
                <div>
                  <span style={{ color: currentTheme }}>Hello,</span> I'm{" "}
                </div>
                <div>{name}</div>
                <div className="text-lg sm:text-2xl font-semibold pt-5">
                  I am a{" "}
                  <span style={{ color: currentTheme }}>
                    {currentProfession}
                  </span>
                </div>
              </header>

              <p
                ref={addToAnimatingRefs}
                className="relative transition-transform left-[10vw] duration-700 "
              >
                {PersolInfoData?.overview}
              </p>
            </article>

            <section className="flex">
              <div
                ref={addToAnimatingRefs}
                className="relative transition-transform right-[10vw] duration-800 "
              >
                <ThemeSelector />
              </div>
              <div
                className="hidden sm:block relative transition-transform left-[10vw] duration-1000 "
                ref={addToAnimatingRefs}
              >
                <CurvedArrow></CurvedArrow>
              </div>
            </section>

            <section
              className="relative sm:bottom-9 text-right sm:text-left  transition-transform right-[10vw] duration-1100 "
              ref={addToAnimatingRefs}
            >
              <Button pathname={"/skills"} label={"Next"} />
            </section>
          </section>

          {/* //Note that image is already animated in image container */}
          <div className="w-full   h-[240px] sm:h-full">
            <ImageContainer image={PersolInfoData.img}></ImageContainer>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Intro;
