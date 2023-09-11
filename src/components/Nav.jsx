import { ImHome } from "react-icons/im";
import { FaCode } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { GiArchiveResearch } from "react-icons/gi";
import { BiSolidPhone } from "react-icons/bi";
import useThemeContext from "../hooks/useThemeContext";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const NavBar = () => {
  const { currentTheme, UrlsPathnames, setUrlPathnames } = useThemeContext();
  const location = useLocation();

  const style = {
    inconContainer: `border-4 border-neutral-500 rounded-lg h-[50px] w-[50px] flex justify-center items-center`,
    iconLabel: `text-xs  w-fit mx-auto`,
  };

  const allowedURLS = useRef(["skills", "projects", "resume", "contact"]);

  //set URLS for nav color rendering
  useEffect(() => {
    if (location?.pathname?.slice(1, location?.pathname?.length)) {
      setUrlPathnames(
        allowedURLS.current?.slice(
          0,
          allowedURLS.current?.indexOf(
            location?.pathname?.slice(1, location?.pathname?.length)
          ) + 1
        )
      );
    } else {
      setUrlPathnames([]);
    }
  }, []);

  return (
    <main className="min-h-screen h-full w-fit bg-[#201f1f] static flex justify-center items-center p-2 sm:p-8">
      <section>
        <section style={{ color: `${currentTheme}` }}>
          <div
            className={style.inconContainer}
            style={{ borderColor: `${currentTheme}` }}
          >
            <ImHome size={30}></ImHome>
          </div>
          <div className={style.iconLabel}>HOME</div>
        </section>

        <div
          className="w-1 h-[12vh] mx-auto"
          style={
            UrlsPathnames?.find((e) => {
              return e?.toLowerCase() === "skills";
            })
              ? { backgroundColor: `${currentTheme}` }
              : { backgroundColor: "#525252" }
          }
        ></div>

        <section
          style={
            UrlsPathnames?.find((e) => {
              return e?.toLowerCase() === "skills";
            })
              ? { color: `${currentTheme}` }
              : { color: "#525252" }
          }
        >
          <div
            className={style.inconContainer}
            style={
              UrlsPathnames?.find((e) => {
                return e?.toLowerCase() === "skills";
              })
                ? { borderColor: `${currentTheme}` }
                : {}
            }
          >
            <FaCode size={30} />
          </div>
          <div className={style.iconLabel}>SKILLS</div>
        </section>

        <div
          className="w-1 h-[12vh] mx-auto"
          style={
            UrlsPathnames?.find((e) => {
              return e?.toLowerCase() === "projects";
            })
              ? { backgroundColor: `${currentTheme}` }
              : { backgroundColor: "#525252" }
          }
        ></div>

        <section
          style={
            UrlsPathnames?.find((e) => {
              return e?.toLowerCase() === "projects";
            })
              ? { color: `${currentTheme}` }
              : { color: "#525252" }
          }
        >
          <div
            className={style.inconContainer}
            style={
              UrlsPathnames?.find((e) => {
                return e?.toLowerCase() === "projects";
              })
                ? { borderColor: `${currentTheme}` }
                : {}
            }
          >
            <BsBriefcaseFill size={30}></BsBriefcaseFill>
          </div>
          <div className={style.iconLabel}>PROJECTS</div>
        </section>

        <div
          className="w-1 h-[12vh] mx-auto"
          style={
            UrlsPathnames?.find((e) => {
              return e?.toLowerCase() === "resume";
            })
              ? { backgroundColor: `${currentTheme}` }
              : { backgroundColor: "#525252" }
          }
        ></div>

        <section
          style={
            UrlsPathnames?.find((e) => {
              return e?.toLowerCase() === "resume";
            })
              ? { color: `${currentTheme}` }
              : { color: "#525252" }
          }
        >
          <div
            className={style.inconContainer}
            style={
              UrlsPathnames?.find((e) => {
                return e?.toLowerCase() === "resume";
              })
                ? { borderColor: `${currentTheme}` }
                : {}
            }
          >
            <GiArchiveResearch size={30}></GiArchiveResearch>
          </div>
          <div className={style.iconLabel}>RESUME</div>
        </section>

        <div
          className="w-1 h-[12vh] mx-auto"
          style={
            UrlsPathnames?.find((e) => {
              return e?.toLowerCase() === "contact";
            })
              ? { backgroundColor: `${currentTheme}` }
              : { backgroundColor: "#525252" }
          }
        ></div>

        <section
          style={
            UrlsPathnames?.find((e) => {
              return e?.toLowerCase() === "contact";
            })
              ? { color: `${currentTheme}` }
              : { color: "#525252" }
          }
        >
          <div
            className={style.inconContainer}
            style={
              UrlsPathnames?.find((e) => {
                return e?.toLowerCase() === "contact";
              })
                ? { borderColor: `${currentTheme}` }
                : {}
            }
          >
            <BiSolidPhone size={30}></BiSolidPhone>
          </div>
          <div className={style.iconLabel}>CONTACT</div>
        </section>
      </section>
    </main>
  );
};

export default NavBar;
