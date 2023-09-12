import { lazy, useEffect, useRef, useState } from "react";
import MuzicLogo from "../images/muzica.jpg";
import AbiBeckLogo from "../images/abibeck logo.jpg";
import CynoSureLogo from "../images/cynosure.png";
import useThemeContext from "../hooks/useThemeContext";
import Button from "../components/Button";

const NavBar = lazy(() => {
  return import("../components/Nav");
});

const Projects = () => {
  const { currentTheme } = useThemeContext();
  const projects = useRef([
    {
      name: "Muzic",
      url: "http://muzic.goldcoastuni.com",
      logo: MuzicLogo,
      technologies: ["React JS", "Node JS", "MongoDB", "CSS", "GraphQL"],
      description:
        "Muzic is a web based wesite creator application for musicians ",
    },
    {
      name: "AbiBeck",
      url: "https://abibeck.xyz",
      logo: AbiBeckLogo,
      technologies: ["React JS", "Tailwind CSS"],
      description:
        "Very attractive modern day website for AbiBeck Software Solutions.",
    },
    {
      name: "Cynosure",
      url: "http://apps.abibeck.xyz/cynosure",
      logo: CynoSureLogo,
      technologies: ["React JS", "Tailwind CSS", "MSSMS", "SQL", "GraphQL"],
      description:
        "Very attractive modern day website for AbiBeck Software Solutions.",
    },
    {
      name: "Aabea Eng. Ltd.",
      url: "http://apps.abibeck.xyz/cynosure",
      logo: CynoSureLogo,
      technologies: ["React JS", "Tailwind CSS", "MSSMS", "SQL", "GraphQL"],
      description:
        "Very attractive modern day website for Asabea Engineering Limited.",
    },
  ]);

  const [displayedProjects, setDisplayedProjects] = useState([]);

  const projectRefs = useRef([]);
  const addToLiveProjectRefs = (elements) => {
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

  const [render, setRender] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      if (displayedProjects.length !== projects?.current?.length) {
        setDisplayedProjects([
          ...displayedProjects,
          projects.current[displayedProjects.length],
        ]);
      }
      setRender(!render);
    }, 200);
  }, [render]);

  return (
    <main className="flex  bg-[#201f1f]  text-white relative">
      <NavBar />
      <section className=" h-full min-h-screen bg-[#0f0e0e] flex flex-col  justify-center items-center max-w-screen overflow-x-hidden w-[calc(100vw-69px)] sm:w-[calc(100vw-116px)] relative left-[69px] sm:left-[116px] ">
        <section className="w-full grid grid-cols-1 md:grid-cols-2 xl:flex flex-wrap min-w-screen h-fit relative">
          {displayedProjects?.map((elements, index) => {
            return (
              <main
                ref={addToLiveProjectRefs}
                key={index}
                style={
                  innerWidth > 1150
                    ? {
                        width: `${
                          innerWidth / projects?.current?.length -
                          (3 / 100) * innerWidth
                        }px`,
                      }
                    : { width: "100%" }
                }
                className={
                  "flex flex-wrap flex-col justify-center items-center"
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
                    className="w-[50%] rounded-full mx-auto p-2 border-2 border-white"
                  ></img>
                  <div className="border-0 p-4">{elements?.description}</div>

                  <div className="text-center">
                    <a
                      href={elements?.url}
                      target="_blank"
                      style={{ color: currentTheme }}
                      className="underline"
                    >
                      <i>Visit {elements?.name} here</i>
                    </a>
                  </div>
                </div>
              </main>
            );
          })}
        </section>
        <div className="py-10">
          <Button pathname={"/resume"} label={"Next"} />
          <Button pathname={"/skills"} label={"Back"} />
        </div>
      </section>
    </main>
  );
};

export default Projects;
