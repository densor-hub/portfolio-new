import { useRef, useState } from "react";
import useThemeContext from "../hooks/useThemeContext";
import Button from "../components/Button";
import { SkillsData } from "../data/data";

const Skills = () => {
  const content = useRef(SkillsData);
  const { currentTheme } = useThemeContext();
  const [currentContent, setCurrentContent] = useState(
    content?.current?.frontend
  );
  return (
    <section className="h-full min-h-screen flex justify-center items-center bg-[#0f0e0e] w-[calc(100vw-69px)] sm:w-[calc(100vw-116px)] relative left-[69px] sm:left-[116px]">
      <section className=" w-full h-fit relative top-[50%] ">
        <section className="text-center">
          <button
            className="w-[30%] md:w-[20%] border-2 p-4"
            style={
              currentContent?.id === "frontend"
                ? {
                    borderColor: currentTheme,
                    backgroundColor: currentTheme,
                    color: "black",
                  }
                : {
                    borderColor: currentTheme,
                    backgroundColor: "transparent",
                    color: "white",
                  }
            }
            onClick={() => {
              setCurrentContent(content?.current?.frontend);
            }}
          >
            FRONT END
          </button>

          <button
            className="w-[30%] md:w-[20%] border-2 p-4"
            style={
              currentContent?.id === "backend"
                ? {
                    borderColor: currentTheme,
                    backgroundColor: currentTheme,
                    color: "black",
                  }
                : {
                    borderColor: currentTheme,
                    backgroundColor: "transparent",
                    color: "white",
                  }
            }
            onClick={() => {
              setCurrentContent(content?.current?.backend);
            }}
          >
            BACK END
          </button>
        </section>

        <section className=" mx-auto flex justify-center">
          <div className="w-[30%] md:w-[20%] flex justify-center">
            <div
              className="h-[100px] w-1"
              style={
                currentContent?.id === "frontend"
                  ? { backgroundColor: `${currentTheme}` }
                  : { backgroundColor: "transparent" }
              }
            ></div>
          </div>
          <div className="w-[30%] md:w-[20%] flex justify-center">
            <div
              className="h-[100px] w-1"
              style={
                currentContent?.id === "backend"
                  ? { backgroundColor: `${currentTheme}` }
                  : { backgroundColor: "transparent" }
              }
            ></div>
          </div>
        </section>

        <section className="w-fit mx-auto">
          <div className="text-center">
            {currentContent?.id === "languages" ? (
              <i>
                <span
                  style={{ color: currentTheme }}
                >{`programming ${currentContent?.id}`}</span>{" "}
                i have familiarize myself with over the years.
              </i>
            ) : (
              <i>
                <span style={{ color: currentTheme }}>
                  {`${currentContent?.id} technologies`}{" "}
                </span>
                i have familiarize myself with over the years.
              </i>
            )}
          </div>
          <section className=" mx-auto flex flex-wrap justify-center items-center w-fit">
            {currentContent?.data?.map((elements, index) => {
              return (
                <div key={index} className="p-4 text-center">
                  <div className="animate-bounce">
                    <img
                      src={elements.icon}
                      alt={elements?.title}
                      className="w-16 h-16 rounded-full bg-center bg-no-repeat border-2 border-white p-2 "
                    ></img>
                  </div>
                  <div>{elements?.title}</div>
                </div>
              );
            })}

            {currentContent?.mainTech && (
              <section className=" ld:mx-auto">
                <div
                  className="text-center py-2 font-bold text-xl"
                  style={{ color: currentTheme }}
                >
                  Main
                </div>
                <section className="border-0 w-fit mx-auto flex flex-wrap">
                  {currentContent?.mainTech?.data?.map((elements, index) => {
                    return (
                      <div key={index} className="p-4 text-center">
                        <div className="animate-bounce">
                          <img
                            src={elements.icon}
                            alt={elements?.title}
                            className="w-16 h-16 rounded-full bg-center bg-no-repeat border-2 border-white p-2 "
                          ></img>
                        </div>
                        <div>{elements?.title}</div>
                      </div>
                    );
                  })}
                </section>
              </section>
            )}

            {currentContent?.databases && (
              <section>
                <div
                  className="text-center py-5 font-bold text-xl"
                  style={{ color: currentTheme }}
                >
                  Databases
                </div>
                <section className="border-0 w-fit mx-auto flex flex-wrap">
                  {currentContent?.databases?.data?.map((elements, index) => {
                    return (
                      <div key={index} className="p-4 text-center">
                        <div className="animate-bounce">
                          <img
                            src={elements.icon}
                            alt={elements?.title}
                            className="w-16 h-16 rounded-full bg-center bg-no-repeat border-2 border-white p-2 "
                          ></img>
                        </div>
                        <div>{elements?.title}</div>
                      </div>
                    );
                  })}
                </section>
              </section>
            )}

            {currentContent?.OtherTools && (
              <section>
                <div
                  className="text-center py-1 font-bold text-md"
                  style={{ color: currentTheme }}
                >
                  Other Tools
                </div>
                <section className="border-0 w-fit mx-auto flex flex-wrap">
                  {currentContent?.OtherTools?.data?.map((elements, index) => {
                    return (
                      <div key={index} className="p-4 text-center">
                        <div className="animate-bounce">
                          <img
                            src={elements.icon}
                            alt={elements?.title}
                            className="w-16 h-16 rounded-full bg-center bg-no-repeat border-2 border-white p-2 "
                          ></img>
                        </div>
                        <div>{elements?.title}</div>
                      </div>
                    );
                  })}
                </section>
              </section>
            )}
          </section>

          {
            <div className="pt-10  text-center">
              <Button pathname={"/projects"} label={"Next"} />
              <Button pathname={"/"} label={"Back"} />
            </div>
          }
        </section>
      </section>
    </section>
  );
};

export default Skills;
