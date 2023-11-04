import { useEffect, useRef } from "react";
import useThemeContext from "../hooks/useThemeContext.ts";
import ThemeSelector from "../components/ThemeSelector.tsx";
import CurvedArrow from "../components/CurvedArrow.tsx";
import ImageContainer from "../components/ImageContainer.tsx";
import Button from "../components/Button.tsx";
import { PersolInfoData } from "../data/data.tsx";
import TextTyper from "../components/TextTyper.tsx";
import React from "react";
import { iThemeContext } from "../interfaces";

const Home = () => {
  const { currentTheme }: iThemeContext = useThemeContext();
  //animate rendering of pae content
  const AnimatingRefs = useRef<HTMLElement[]>([]);
  const addToAnimatingRefs = (element: any) => {
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

  return (
    <section className="min-h-screen bg-[#0f0e0e]  flex justify-center items-center w-[calc(100vw-69px)] sm:w-[calc(100vw-116px)] relative left-[69px] sm:left-[116px] ">
      <section className=" flex flex-col sm:flex-row w-full relative  h-fit sm:h-full">
        <section className="w-[100%] sm:w-[300px] lg:w-[500px] pb-4 px-10  h-fit  sm:relative top-[50%] sm:translate-y-[-50%] ">
          <article className="pb-5 z-10 ">
            <header
              className="text-[30px] sm:text-[45px] font-extrabold relative transition-transform right-[10vw] duration-500 "
              ref={addToAnimatingRefs}
            >
              <div>
                <span style={{ color: currentTheme }}>Hello, </span>{" "}
                <span> I'm </span>
              </div>
              <div>
                <TextTyper
                  data={[PersolInfoData.name]}
                  typingSpeed={200}
                  repeat={false}
                ></TextTyper>
              </div>
              <div className="text-lg sm:text-2xl font-semibold pt-5">
                <span data-testid="role_lead"> I am a </span>
                <span style={{ color: currentTheme }}>
                  <TextTyper
                    data={PersolInfoData.professions}
                    typingSpeed={200}
                    repeat={true}
                  ></TextTyper>
                </span>
              </div>
            </header>

            <p
              ref={addToAnimatingRefs}
              className="relative transition-transform left-[10vw] duration-700 "
              data-testid="overview_paragrah"
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
          <ImageContainer></ImageContainer>
        </div>
      </section>
    </section>
  );
};

export default Home;
