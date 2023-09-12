import { useRef } from "react";
import NavBar from "../components/Nav";
import AbibeckIcon from "../images/abibeck logo.jpg";
import AsabeaIcon from "../images/cynosure.png";
import AAIL from "../images/cynosure.png";
import PersolIcon from "../images/cynosure.png";
import useThemeContext from "../hooks/useThemeContext";
import Button from "../components/Button";
import { BsArrowDown } from "react-icons/bs";

const Resume = () => {
  const { currentTheme } = useThemeContext();
  const resumeContent = useRef([
    {
      company: "Persol Systems Limited",
      role: "Full Stack Developer",
      duration: {
        start: "Aug 2023 ",
        end: "Present",
      },
      activities: [
        "Work as the front end  developer on BOST ONE system for National Petroleum Authority (NPA) of Ghana",
        "Work as a front end develper on the team for Enterprise Relations and Data Management System for National Petroleum Authority",
      ],
      icon: PersolIcon,
    },
    {
      company: "AbiBeck Software Solutions",
      role: "Full Stack Developer",
      duration: {
        start: "Sept 2021 ",
        end: "June 2023",
      },
      activities: [
        "Built the landing page  of the website for Abibeck Software Solutions",
        "Spearheaded the development of Cynosure,  an enterprize  relations , data management and point of sale application.",
        "Worked as a fullstack developer on Muzic project, a website creator for musicians, tailored for a client",
      ],
      icon: AbibeckIcon,
    },
    {
      company: "AngloGold Ashanti Iduapriem Mine",
      role: "Applications Support",
      duration: {
        start: "Sept 2020 ",
        end: "July 2021",
      },
      activities: [
        "Participated in the development of the AAIL Canteen App as a fullstack developer",
      ],
      icon: AAIL,
    },
    {
      company: "Asabea Engineering Limited",
      role: "Interim Software Developer",
      duration: {
        start: "May 2019 ",
        end: "August 2019",
      },
      activities: [
        "Designed and built a website for the company",
        "Built an enterpise relations and data management application for the company",
      ],
      icon: AsabeaIcon,
    },
  ]);

  const DateGetter = new Date();
  return (
    <main className="flex  bg-[#201f1f]  text-white  min-h-screen h-full">
      <NavBar />
      <section className="relative  min-h-screen bg-[#0f0e0e] w-[calc(100vw-69px)] sm:w-[calc(100vw-116px)]  left-[69px] sm:left-[116px] overflow-x-hidden">
        <div className="pt-10 text-center pb-10">
          <div className="text-sm text-slate-400">
            {Number(DateGetter?.getFullYear()) - Number(2019)}+ YEARS
            PROFESSIONAL EXPERIENCE
          </div>
          <div className="text-3xl font-bold" style={{ color: currentTheme }}>
            WORK EXPERIENCE
          </div>
        </div>
        <section>
          <section className="relative">
            <section className="min-h-screen h-full absolute w-full flex justify-center">
              <div
                className="h-full w-1"
                style={{ backgroundColor: currentTheme }}
              ></div>
            </section>
            <section className="relative bg-transparent top-10 ">
              {resumeContent?.current?.map((elements, index) => {
                return (
                  <section key={index} className="h-fit min-h-[150px]">
                    {index % 2 === 0 ? (
                      <section className="w-full block md:flex  relative">
                        <section className=" md:relative left-0 flex flex-col md:flex-row w-[100%] md:w-[100%] mx-auto  pb-10  justify-between  ">
                          {/* <div>
                            <img
                              src={elements?.icon}
                              className="relative block md:hidden w-[60px] h-[60px] rounded-full  border-4 mx-auto"
                              style={{ borderColor: currentTheme }}
                            ></img>
                          </div> */}
                          <BsArrowDown
                            size={40}
                            color={currentTheme}
                            className="mx-auto relative top-1 block md:hidden"
                          />
                          <div className="h-[100%] w-[90%]  md:w-[70%]  mx-auto  bg-[#3a3737c1] text-sm flex  relative md:left-[3vw] rounded-lg  ">
                            <div className="hidden md:block bg-transparentborde-2 relative left-[100%] top-4">
                              <div className="border-[#3a3737c1]  top-4 border-[15px] border-t-transparent border-b-transparent border-r-transparent"></div>
                            </div>
                            <section className="p-4">
                              <div
                                className="font-bold"
                                style={{ color: currentTheme }}
                              >
                                <i>{elements?.role}</i>
                              </div>

                              <div className="block md:hidden relative h-fit text-slate-400 text-sm font-semibold w-[100%] ">
                                <div className="w-[45%]">
                                  {elements?.duration?.start} -{" "}
                                  {elements?.duration?.end}
                                </div>
                              </div>
                              <div>{elements?.company}</div>

                              <section>
                                {elements?.activities?.map((acts, key) => {
                                  return (
                                    <div key={key} className="flex">
                                      <div className="h-full">
                                        <div
                                          className="w-1 h-1 rounded-full m-2"
                                          style={{
                                            backgroundColor: currentTheme,
                                          }}
                                        ></div>
                                      </div>
                                      <div>{acts}</div>
                                    </div>
                                  );
                                })}
                              </section>
                            </section>{" "}
                          </div>
                          <img
                            src={elements?.icon}
                            className="relative hidden md:block left-8 w-[60px] h-[60px] rounded-full  border-4"
                            style={{ borderColor: currentTheme }}
                          ></img>
                        </section>
                        <div className="hidden md:block relative h-fit text-slate-400 text-sm font-semibold top-5 w-[100%] text-left">
                          <div className="w-[85%] absolute right-0 ">
                            {elements?.duration?.start} -{" "}
                            {elements?.duration?.end}
                          </div>
                        </div>
                      </section>
                    ) : (
                      <section className="w-full h-fit block md:flex relative ">
                        <div className="relative text-right h-fit text-slate-400 text-sm font-semibold top-5 w-[100%]">
                          <div className="hidden md:block absolute w-[89%] left-0  ">
                            {elements?.duration?.start} -{" "}
                            {elements?.duration?.end}
                          </div>
                        </div>
                        <section className="realtive md:relative flex flex-col md:flex-row w-[90%] md:w-[100%] pb-10  mx-auto  justify-between ">
                          <img
                            src={elements?.icon}
                            className="hidden md:block relative right-8 w-[60px] h-[60px] rounded-full  border-4"
                            style={{ borderColor: currentTheme }}
                          ></img>

                          {/* <img
                            src={elements?.icon}
                            className="block md:hidden relative w-[60px] h-[60px] rounded-full  border-4 mx-auto"
                            style={{ borderColor: currentTheme }}
                          ></img> */}
                          <BsArrowDown
                            size={40}
                            color={currentTheme}
                            className="mx-auto relative top-1 block md:hidden"
                          />
                          <div className="w-full md:w-[70%] mx-auto  bg-[#3a3737c1] text-sm flex relative md:right-[3vw] rounded-lg  ">
                            <section className="p-4">
                              <div
                                className="font-bold"
                                style={{ color: currentTheme }}
                              >
                                <i>{elements?.role}</i>
                              </div>
                              <div className="relative h-fit text-slate-400 text-sm font-semibold w-[100%]">
                                <div className="block md:hidden  ">
                                  {elements?.duration?.start} -{" "}
                                  {elements?.duration?.end}
                                </div>
                              </div>
                              <div>{elements?.company}</div>
                              <section>
                                {elements?.activities?.map((acts, key) => {
                                  return (
                                    <div key={key} className="flex">
                                      <div className="h-full">
                                        <div
                                          className="w-1 h-1 rounded-full m-2"
                                          style={{
                                            backgroundColor: currentTheme,
                                          }}
                                        ></div>
                                      </div>
                                      <div>{acts}</div>
                                    </div>
                                  );
                                })}
                              </section>
                            </section>{" "}
                            <div className="hidden md:block bg-transparent absolute left-0 ">
                              <div className="relative right-[100%] border-[#3a3737c1] top-4 border-[15px] border-t-transparent border-b-transparent border-l-transparent"></div>
                            </div>
                          </div>
                        </section>
                      </section>
                    )}
                  </section>
                );
              })}
            </section>
            <div className="py-10 text-center bg-[#0f0e0e]  relative">
              <Button pathname={"/contact"} label={"Next"} />
              <Button pathname={"/projects"} label={"Back"} />
            </div>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Resume;
