import { useRef } from "react";
import NavBar from "../components/Nav";
import AbibeckIcon from "../images/abibeck logo.jpg";
import AsabeaIcon from "../images/cynosure.png";
import AAIL from "../images/cynosure.png";
import PersolIcon from "../images/cynosure.png";
import useThemeContext from "../hooks/useThemeContext";
import Button from "../components/Button";

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
        "Work as the front end  developer on BOST ONE system for Nation Petroleom Authority (NPA) of Ghana",
        "Work as a front end develper on the team for Enterprise Relations and Data Management System for National Petroleom Authority",
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
        "Spearheaded the development of Cynosure,  an enterprize point of sale, relations and data management application",
        "Lead a team of four to develop Muzic, a website creator for musicians, tailored for a client",
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
        "Redesigned interface of Canteen App from a less resposive interface to a modern day attractive and fully resposive interface",
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
      <section className="relative w-full min-h-screen bg-[#0f0e0e]">
        <div className="pt-20 text-center pb-10">
          <div className="text-sm text-slate-400">
            OVER {Number(DateGetter?.getFullYear()) - Number(2019)} YEARS
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
            <section className="relative bg-transparent top-10">
              {resumeContent?.current?.map((elements, index) => {
                return (
                  <div key={index} className="relative flex  h-[300px]   ">
                    {index % 2 === 0 ? (
                      <section className="w-full flex  relative ">
                        <section className="absolute left-0 flex w-[50%] mx-auto  pb-10  justify-between ">
                          <div className="w-[70%] mx-auto  bg-[#242424] text-sm flex relative  rounded-lg ">
                            <div className=" bg-transparentborde-2 relative left-[100%] top-4">
                              <div className="border-[#242424]  top-4 border-[15px] border-t-transparent border-b-transparent border-r-transparent"></div>
                            </div>
                            <section className="p-4">
                              <div
                                className="font-bold"
                                style={{ color: currentTheme }}
                              >
                                <i>{elements?.role}</i>
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
                            className="relative left-8 w-[60px] h-[60px] rounded-full  border-4"
                            style={{ borderColor: currentTheme }}
                          ></img>
                        </section>
                        <div className="relative h-fit text-slate-400 text-sm font-semibold top-5 w-[100%] text-left">
                          <div className="w-[45%] absolute right-0 ">
                            {elements?.duration?.start} -{" "}
                            {elements?.duration?.end}
                          </div>
                        </div>
                      </section>
                    ) : (
                      <section className="w-full  flex relative">
                        <div className="relative text-right h-fit text-slate-400 text-sm font-semibold top-5 w-[100%]">
                          <div className="absolute w-[45%] left-0">
                            {elements?.duration?.start} -{" "}
                            {elements?.duration?.end}
                          </div>
                        </div>
                        <section className="absolute right-0 flex w-[50%] pb-10  mx-auto  justify-between ">
                          <img
                            src={elements?.icon}
                            className="relative right-8 w-[60px] h-[60px] rounded-full  border-4"
                            style={{ borderColor: currentTheme }}
                          ></img>
                          <div className="w-[70%] mx-auto  bg-[#242424] text-sm flex relative  rounded-lg ">
                            <section className="p-4">
                              <div
                                className="font-bold"
                                style={{ color: currentTheme }}
                              >
                                <i>{elements?.role}</i>
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
                            <div className=" bg-transparent absolute left-0 ">
                              <div className="relative right-[100%] border-[#242424]  top-4 border-[15px] border-t-transparent border-b-transparent border-l-transparent"></div>
                            </div>
                          </div>
                        </section>
                      </section>
                    )}
                  </div>
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
