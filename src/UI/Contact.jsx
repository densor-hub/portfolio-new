import { BsTwitter, BsGithub, BsLinkedin, BsArrowDown } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import useThemeContext from "../hooks/useThemeContext";
import { Link } from "react-router-dom";

const Contact = () => {
  const { currentTheme } = useThemeContext();

  return (
    <section className=" bg-[#0f0e0e] flex flex-col justify-center items-center w-[calc(100vw-69px)] sm:w-[calc(100vw-116px)] relative left-[69px] sm:left-[116px]">
      <section>
        <div className="text-3xl font-bold" style={{ color: currentTheme }}>
          Heyya,
        </div>
        <div>Contact me via</div>
        <div className="w-fit mx-auto">
          <BsArrowDown />
        </div>
      </section>

      <section className="flex">
        <div className="p-2">
          <div className="w-fit mx-auto">
            <MdEmail
              size={50}
              className="border-2 rounded-full p-2 animate-bounce"
            />
          </div>
          <div style={{ color: currentTheme }}>davidensor5000@gmail.com</div>
        </div>
      </section>

      {/* <div className="py-10">
          <Button label={"Back"} pathname={"/resume"} />
        </div> */}

      <section className="flex py-10">
        <div className=" text-sm text-center m-2">
          <div>
            <Link href={"https://github.com/densor-hub"} target="_blank">
              <BsGithub
                size={50}
                className="border-2 rounded-full p-2 animate-bounce"
              />
            </Link>
          </div>
          <div>
            <Link href={"https://github.com/densor-hub"} target="_blank">
              Git Hub
            </Link>
          </div>
        </div>

        <div className=" text-sm text-center m-2">
          <div>
            <Link
              href={"https://www.linkedin.com/in/david-ensor-13032b215/"}
              target="_blank"
            >
              <BsLinkedin
                size={50}
                className="border-2 rounded-full p-2 animate-bounce"
              />
            </Link>
          </div>
          <div>
            <Link
              href={"https://www.linkedin.com/in/david-ensor-13032b215/"}
              target="_blank"
            >
              LinkedIn
            </Link>
          </div>
        </div>

        <div className=" text-sm text-center m-2">
          <div>
            <Link href={"https://twitter.com/nanaessel_deeg"} target="_blank">
              <BsTwitter
                size={50}
                className="border-2 rounded-full p-2 animate-bounce"
              />
            </Link>
          </div>
          <div>
            <Link href={"https://twitter.com/nanaessel_deeg"} target="_blank">
              Twitter
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
