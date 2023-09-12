import { ImHome } from "react-icons/im";
import { FaCode } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { GiArchiveResearch } from "react-icons/gi";
import { BiSolidPhone } from "react-icons/bi";
import useThemeContext from "../hooks/useThemeContext";
import { useLocation, Link } from "react-router-dom";
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
    <main className="fixed z-10 h-full w-fit bg-[#201f1f]  flex justify-center items-center px-2 sm:px-8">
      <section>
        <Link to={"/"}>
          <section style={{ color: `${currentTheme}` }}>
            <div
              className={style.inconContainer}
              style={{ borderColor: `${currentTheme}` }}
            >
              <ImHome size={30}></ImHome>
            </div>
            <div className={style.iconLabel}>HOME</div>
          </section>
        </Link>

        <div
          className="w-1 h-[10vh] mx-auto"
          style={
            UrlsPathnames?.find((e) => {
              return e?.toLowerCase() === "skills";
            })
              ? { backgroundColor: `${currentTheme}` }
              : { backgroundColor: "#525252" }
          }
        ></div>

        <Link to={"/skills"}>
          {" "}
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
        </Link>

        <div
          className="w-1 h-[10vh] mx-auto"
          style={
            UrlsPathnames?.find((e) => {
              return e?.toLowerCase() === "projects";
            })
              ? { backgroundColor: `${currentTheme}` }
              : { backgroundColor: "#525252" }
          }
        ></div>

        <Link to={"/projects"}>
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
        </Link>

        <div
          className="w-1 h-[10vh] mx-auto"
          style={
            UrlsPathnames?.find((e) => {
              return e?.toLowerCase() === "resume";
            })
              ? { backgroundColor: `${currentTheme}` }
              : { backgroundColor: "#525252" }
          }
        ></div>

        <Link to={"/resume"}>
          {" "}
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
            <div className={style.iconLabel}>JOURNEY</div>
          </section>
        </Link>

        <div
          className="w-1 h-[10vh] mx-auto"
          style={
            UrlsPathnames?.find((e) => {
              return e?.toLowerCase() === "contact";
            })
              ? { backgroundColor: `${currentTheme}` }
              : { backgroundColor: "#525252" }
          }
        ></div>

        <Link to={"/contact"}>
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
              <BiSolidPhone size={30}></BiSolidPhone>{" "}
            </div>
            <div className={style.iconLabel}>CONTACT</div>
          </section>
        </Link>
      </section>
    </main>
  );
};

export default NavBar;
