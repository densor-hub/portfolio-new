import { BsTwitter, BsGithub, BsLinkedin, BsArrowDown } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import useThemeContext from "../hooks/useThemeContext.ts";
import React from "react";
import { iThemeContext } from "../interfaces";

const Contact = () => {
  const { currentTheme }: iThemeContext = useThemeContext();

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
            <a
              href={"https://github.com/densor-hub"}
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub
                size={50}
                className="border-2 rounded-full p-2 animate-bounce"
              />
            </a>
          </div>
          <div>
            <a
              href={"https://github.com/densor-hub"}
              target="_blank"
              rel="noreferrer"
            >
              Git Hub
            </a>
          </div>
        </div>

        <div className=" text-sm text-center m-2">
          <div>
            <a
              href={"https://www.linkedin.com/in/david-ensor-13032b215/"}
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin
                size={50}
                className="border-2 rounded-full p-2 animate-bounce"
              />
            </a>
          </div>
          <div>
            <a
              href={"https://www.linkedin.com/in/david-ensor-13032b215/"}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className=" text-sm text-center m-2">
          <div>
            <a
              href={"https://twitter.com/nanaessel_deeg"}
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter
                size={50}
                className="border-2 rounded-full p-2 animate-bounce"
              />
            </a>
          </div>
          <div>
            <a
              href={"https://twitter.com/nanaessel_deeg"}
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
