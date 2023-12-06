import image from "../assets/WhatsApp Image 2023-12-06 at 9.31.26 PM.jpeg";
import { FaInstagram } from "react-icons/fa";
// import { FaSquareFacebook } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
import { useState, useEffect } from "react";
// import { IoIosContact } from "react-icons/ios";

const Aboutme = () => {
  const texts = [
    " Prompt Engineer",
    "Front-end-Developer",
    "Back-end-Developer",
  ];
  const [index, setIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex < texts.length - 1) {
          return prevIndex + 1;
        } else {
          return 0;
        }
      });
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    setLetterIndex(0);
    const lett = setInterval(() => {
      setLetterIndex((prevletterIndex) => prevletterIndex + 1);
    }, 100);

    return () => {
      clearInterval(lett);
    };
  }, [index]);

  return (
    <div className=" bg-navbarColor">
      <div className=" flex flex-col place-items-center py-12">
        <div>
          <img
            className="w-80 h-96 rounded-lg border border-white"
            src={image}
            alt="Loading"
          />
        </div>
        <div className="text-white mt-5  bold tracking-wider">
          Hello, Im Nithish Kumar,
        </div>
        <div className="text-white text-4xl font-bold p-2">
          I am {texts[index].substring(0, letterIndex)}
        </div>
        <div className="text-custom">
          I am a FreeLauncer Front-end React Developer in India,
        </div>
        <div className="text-custom">
          over 2 years of experience in web development.
        </div>
        <div className="flex p-2 justify-between ">
          <FaSquareFacebook className="text-custom ml-5 text-3xl  hover:text-facebook" />
          <a href="https://www.instagram.com/nithishperumal/?next=%2F">
            <FaInstagram className="text-custom ml-5 text-3xl hover:text-insta" />
          </a>

          <a href="https://www.linkedin.com/in/nithish-perumal/">
            <BsLinkedin className="text-custom ml-5 text-3xl  hover:text-blue-600" />
          </a>
          <a href="mailto:nithishperumal13062003@gmail.com">
            <SiGmail className="text-3xl ml-5 text-custom hover:text-white" />
          </a>
          <a href="https://github.com/Nithishuchiha">
            <VscGithubInverted className="text-3xl ml-5 text-custom hover:text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
