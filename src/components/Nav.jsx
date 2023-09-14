import { ImHome } from "react-icons/im";
import { FaCode } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { GiArchiveResearch } from "react-icons/gi";
import { BiSolidPhone } from "react-icons/bi";
import useThemeContext from "../hooks/useThemeContext";
import { useLocation, Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const NavBar = ({ PagenotFound }) => {
  //pagenotfound comes from pageNotfound component in 404.jsx
  const { currentTheme, UrlsPathnames, setUrlPathnames } = useThemeContext();
  const location = useLocation();

  const style = {
    iconContainer: `border-4 border-neutral-500 rounded-lg h-[50px] w-[50px] flex justify-center items-center`,
    iconLabel: `text-xs  w-fit mx-auto`,
  };

  //---------setting URLS for nav color rendering-----------

  //initialize allowed URLs
  const allowedURLS = useRef(["skills", "projects", "journey", "contact"]);

  useEffect(() => {
    if (
      allowedURLS?.current?.find((element) => {
        return location?.pathname?.includes(element);
      })
    ) {
      setUrlPathnames(
        allowedURLS.current?.slice(
          0,
          allowedURLS.current?.indexOf(
            allowedURLS?.current
              ?.find((element) => {
                return location?.pathname?.includes(element);
              })
              ?.toLowerCase()
          ) + 1
        )
      );
    } else {
      //set the params array to [] make all nav components uncolored.
      //home is coloured by default
      setUrlPathnames([]);
    }
  }, []);

  return (
    <main className="fixed z-10 h-full w-fit bg-[#201f1f]  flex justify-center items-center px-2 sm:px-8">
      <section>
        <Link to={"/"}>
          <section
            style={
              !PagenotFound
                ? { color: `${currentTheme}` }
                : { color: "#525252" }
            }
          >
            <div
              className={style.iconContainer}
              style={
                !PagenotFound
                  ? { borderColor: `${currentTheme}` }
                  : { color: "#525252" }
              }
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
            }) && !PagenotFound
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
              }) && !PagenotFound
                ? { color: `${currentTheme}` }
                : { color: "#525252" }
            }
          >
            <div
              className={style.iconContainer}
              style={
                UrlsPathnames?.find((e) => {
                  return e?.toLowerCase() === "skills";
                }) && !PagenotFound
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
            }) && !PagenotFound
              ? { backgroundColor: `${currentTheme}` }
              : { backgroundColor: "#525252" }
          }
        ></div>

        <Link to={"/projects"}>
          <section
            style={
              UrlsPathnames?.find((e) => {
                return e?.toLowerCase() === "projects";
              }) && !PagenotFound
                ? { color: `${currentTheme}` }
                : { color: "#525252" }
            }
          >
            <div
              className={style.iconContainer}
              style={
                UrlsPathnames?.find((e) => {
                  return e?.toLowerCase() === "projects";
                }) && !PagenotFound
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
              return e?.toLowerCase() === "journey";
            }) && !PagenotFound
              ? { backgroundColor: `${currentTheme}` }
              : { backgroundColor: "#525252" }
          }
        ></div>

        <Link to={"/journey"}>
          {" "}
          <section
            style={
              UrlsPathnames?.find((e) => {
                return e?.toLowerCase() === "journey";
              }) && !PagenotFound
                ? { color: `${currentTheme}` }
                : { color: "#525252" }
            }
          >
            <div
              className={style.iconContainer}
              style={
                UrlsPathnames?.find((e) => {
                  return e?.toLowerCase() === "journey";
                }) && !PagenotFound
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
            }) && !PagenotFound
              ? { backgroundColor: `${currentTheme}` }
              : { backgroundColor: "#525252" }
          }
        ></div>

        <Link to={"/contact"}>
          <section
            style={
              UrlsPathnames?.find((e) => {
                return e?.toLowerCase() === "contact";
              }) && !PagenotFound
                ? { color: `${currentTheme}` }
                : { color: "#525252" }
            }
          >
            <div
              className={style.iconContainer}
              style={
                UrlsPathnames?.find((e) => {
                  return e?.toLowerCase() === "contact";
                }) && !PagenotFound
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
