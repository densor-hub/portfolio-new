import { useRef } from "react";
import NavBar from "../components/Nav";
import { BsTwitter, BsGithub, BsLinkedin, BsArrowDown } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Button from "../components/Button";
import useThemeContext from "../hooks/useThemeContext";

const Contact = () => {
  const { currentTheme } = useThemeContext();

  return (
    <main className="flex bg-[#201f1f]  text-white  min-h-screen h-full">
      <NavBar />
      <section className=" bg-[#0f0e0e] flex flex-col justify-center items-center w-full">
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
            <div className=" w-fit mx-auto">
              <FaPhoneAlt
                size={50}
                className="border-2 rounded-full p-2 animate-bounce"
              />
            </div>
            <div style={{ color: currentTheme }}>+233 (0) 244 598 879</div>
          </div>

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
              <a href={"https://github.com/densor-hub"} target="_blank">
                <BsGithub
                  size={50}
                  className="border-2 rounded-full p-2 animate-bounce"
                />
              </a>
            </div>
            <div>
              <a href={"https://github.com/densor-hub"} target="_blank">
                Git Hub
              </a>
            </div>
          </div>

          <div className=" text-sm text-center m-2">
            <div>
              <a href={"https://github.com/densor-hub"} target="_blank">
                <BsLinkedin
                  size={50}
                  className="border-2 rounded-full p-2 animate-bounce"
                />
              </a>
            </div>
            <div>
              <a href={"https://linkedin.com/david-ensor"} target="_blank">
                LinkIn
              </a>
            </div>
          </div>

          <div className=" text-sm text-center m-2">
            <div>
              <a href={"https://twitter.com/nanaessel-deeg"} target="_blank">
                <BsTwitter
                  size={50}
                  className="border-2 rounded-full p-2 animate-bounce"
                />
              </a>
            </div>
            <div>
              <a href={"https://twitter.com/nanaessel-deeg"} target="_blank">
                Twitter
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Contact;
