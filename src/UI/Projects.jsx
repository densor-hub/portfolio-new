import { lazy, useEffect, useRef, useState } from "react";
import useThemeContext from "../hooks/useThemeContext";
import Button from "../components/Button";
import { projectsData } from "../data/data";
import { Link } from "react-router-dom";

const NavBar = lazy(() => {
  return import("../components/Nav");
});

const Projects = () => {
  const { currentTheme } = useThemeContext();
  const projects = useRef(projectsData);

  const [displayedProjects, setDisplayedProjects] = useState([]);

  const projectRefs = useRef([]);
  const addProjectRefs = (elements) => {
    if (elements && !projectRefs?.current?.includes(elements)) {
      projectRefs?.current?.push(elements);
    }
  };

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [projectsLoaded, setProjectsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (displayedProjects.length !== projects?.current?.length) {
        if (!projectsLoaded) {
          setDisplayedProjects([
            ...displayedProjects,
            projects.current[displayedProjects.length],
          ]);
        }
      } else {
        setProjectsLoaded(true);
      }

      if (projectsLoaded) {
        projectRefs.current.forEach((elements) => {
          if (innerWidth > 560) {
            return (elements.style.transform = `translateX(${
              innerWidth / projects?.current?.length - (10 / 100) * innerWidth
            }px)`);
          } else {
            return (elements.style.transform = `translateX(${
              innerWidth / projects?.current?.length - (30 / 100) * innerWidth
            }px)`);
          }
        });
      }
    }, 200);
  }, [displayedProjects, projectsLoaded, innerWidth]);

  return (
    <main className="flex  bg-[#201f1f]  text-white relative">
      <NavBar />
      <section className=" h-full min-h-screen bg-[#0f0e0e] flex flex-col  justify-center items-center max-w-screen overflow-x-hidden w-[calc(100vw-69px)] sm:w-[calc(100vw-116px)] relative left-[69px] sm:left-[116px] ">
        <section className="w-full grid grid-cols-1 xl:flex flex-wrap min-w-screen h-fit relative justify-center items-center text-center">
          {displayedProjects?.map((elements, index) => {
            return (
              <main
                ref={addProjectRefs}
                key={index}
                style={
                  innerWidth >= 1280
                    ? {
                        width: `${
                          innerWidth / projects?.current?.length -
                          (10 / 100) * innerWidth
                        }px`,
                        right: `${
                          innerWidth / projects?.current?.length -
                          (10 / 100) * innerWidth
                        }px`,
                      }
                    : innerWidth > 560
                    ? { width: "50%" }
                    : {}
                }
                className={
                  "flex flex-wrap flex-col justify-center items-center relative transition-transform duration-500"
                }
              >
                <div
                  className="w-[250px] h-[350px] my-5 border-4 rounded-xl"
                  style={{ borderColor: currentTheme }}
                >
                  <div className="font-bold py-4 text-center">
                    {elements?.name}
                  </div>
                  <img
                    src={elements?.logo}
                    alt=""
                    className="w-[120px] h-[120px] rounded-full mx-auto p-2 border-2 border-white"
                  ></img>
                  <div className="border-0 p-4 text-center">
                    {elements?.description}
                  </div>

                  <div className="text-center">
                    {elements?.url !== "" ? (
                      <a
                        href={elements?.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: currentTheme }}
                        className="underline"
                      >
                        <i>
                          Visit{" "}
                          {elements?.urlText
                            ? elements?.urlText
                            : elements?.name}{" "}
                          here
                        </i>
                      </a>
                    ) : (
                      elements?.contact && (
                        <Link
                          to={`/${elements?.contact}`}
                          className="italic underline"
                          style={{ color: currentTheme }}
                        >
                          Contact me for Cynosure
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </main>
            );
          })}
        </section>
        <div className="py-10">
          <Button pathname={"/journey"} label={"Next"} />
          <Button pathname={"/skills"} label={"Back"} />
        </div>
      </section>
    </main>
  );
};

export default Projects;
