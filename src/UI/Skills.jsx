import { lazy, useRef, useState } from "react";
import useThemeContext from "../hooks/useThemeContext";
import { useNavigate } from "react-router-dom";
import JSicon from "../images/jsicon.png";
import typeScriptIcon from "../images/typescripticon.png";
import JavaIcon from "../images/java.png";
import PythonIcon from "../images/python.jpg";
import CsharpIcon from "../images/c#.png";
import CplusplusIcon from "../images/c++.png";
import SQLIcon from "../images/sql.jpg";
import reactIcon from "../images/reacticon.png";
import NextJsIcon from "../images/nextjs.png";
import ReactNativeIcon from "../images/reactnative.png";
import vueIcon from "../images/vueicon.png";
import ReduxIcon from "../images/redux.png";
import tailwindCSSIcon from "../images/tailwindicon.jpg";
import boostrapIcon from "../images/boostrap.jpg";
import nodejsIcon from "../images/nodeicon.png";
import dotNetIcon from "../images/netcore.png";
import MSSMSicon from "../images/mssms.png";
import postgresQL from "../images/postgresql.png";
import mongoDbIcon from "../images/mongoDb.png";
import gitIcon from "../images/git.png";
import postmanIcon from "../images/postman.jpeg";
import graphQL from "../images/graphql.jpg";

const NavBar = lazy(() => {
  return import("../components/Nav");
});
const Skills = () => {
  const navigateTo = useNavigate();
  const content = useRef({
    languages: {
      data: [
        { title: "JavaScript", icon: JSicon },
        { title: "TypeScript", icon: typeScriptIcon },
        { title: "Java", icon: JavaIcon },
        { title: "Python", icon: PythonIcon },
        { title: "C#", icon: CsharpIcon },
        { title: "C++", icon: CplusplusIcon },
        { title: "SQL", icon: SQLIcon },
      ],
      id: "languages",
    },
    frontend: {
      data: [
        { title: "React JS", icon: reactIcon },
        { title: "Next JS", icon: NextJsIcon },
        { title: "React Native", icon: ReactNativeIcon },
        { title: "Vue JS", icon: vueIcon },
        { title: "Redux", icon: ReduxIcon },
        { title: "Tailwind CSS", icon: tailwindCSSIcon },
        { title: "Boostrap CSS", icon: boostrapIcon },
      ],
      id: "frontend",
    },
    backend: {
      data: [
        { title: "Node Js", icon: nodejsIcon },
        { title: ".Net-core", icon: dotNetIcon },
      ],
      id: "backend",
      databases: {
        data: [
          { title: "MSSMS", icon: MSSMSicon },
          { title: "PostgresQL", icon: postgresQL },
          { title: "MongoDB", icon: mongoDbIcon },
        ],
        id: "databases",
      },
      OtherTools: {
        data: [
          { title: "Git", icon: gitIcon },
          { title: "GraphQL", icon: graphQL },
          { title: "Postman", icon: postmanIcon },
        ],
        id: "other tools",
      },
    },
  });
  const { currentTheme, UrlsPathnames, setUrlPathnames } = useThemeContext();
  const [currentContent, setCurrentContent] = useState(
    content?.current?.frontend
  );
  return (
    <main className="flex bg-[#0f0e0e] text-white w-full h-screen">
      <NavBar />
      <section className=" w-full h-fit   relative top-[50%] translate-y-[-50%]">
        <section className="text-center">
          {/* <button
            className="w-[20%] border-2 p-4"
            style={
              currentContent?.id === "languages"
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
              setCurrentContent(content?.current?.languages);
            }}
          >
            LANGUAGES
          </button> */}

          <button
            className="w-[20%] border-2 p-4"
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
            className="w-[20%] border-2 p-4"
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
          {/* <div className="w-[20%]   flex justify-center">
            <div
              className="h-[100px] w-1"
              style={
                currentContent?.id === "languages"
                  ? { backgroundColor: `${currentTheme}` }
                  : { backgroundColor: "transparent" }
              }
            ></div>
          </div> */}
          <div className="w-[20%] flex justify-center">
            <div
              className="h-[100px] w-1"
              style={
                currentContent?.id === "frontend"
                  ? { backgroundColor: `${currentTheme}` }
                  : { backgroundColor: "transparent" }
              }
            ></div>
          </div>
          <div className="w-[20%] flex justify-center">
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

        <section>
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
          <section
            className="border-0 w-fit mx-auto flex flex-wrap"
            style={{ borderColor: currentTheme }}
          >
            {currentContent?.data?.map((elements, index) => {
              return (
                <div key={index} className="p-4 text-center">
                  <div className="animate-bounce">
                    <img
                      src={elements.icon}
                      className="w-16 h-16 rounded-full bg-center bg-no-repeat border-2 border-white p-2 "
                    ></img>
                  </div>
                  <div>{elements?.title}</div>
                </div>
              );
            })}
          </section>

          {currentContent?.id === "frontend" && (
            <div className="pt-10  text-center">
              <button
                onClick={() => {
                  navigateTo("/projects");
                }}
                className="rounded-lg w-[200px] h-[50px] NextBTN"
                style={{
                  border: `2px solid ${currentTheme} `,
                }}
              >
                Next
              </button>

              <button
                onClick={() => {
                  navigateTo("/");
                }}
                className="rounded-lg w-[200px] h-[50px] NextBTN"
                style={{
                  border: `2px solid ${currentTheme} `,
                }}
              >
                Back
              </button>
            </div>
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
                className="text-center py-5 font-bold text-xl"
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
      </section>
    </main>
  );
};

export default Skills;
