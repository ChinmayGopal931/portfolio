import React from "react";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import PaperPlane from "../assets/paper-plane.svg";
import email from "../assets/r.svg";

export default function Contact() {
  const mailTo = () => {
    window.location.href = "mailto:chinmayg015@gmail.com";
  };

  return (
    <div className="page" id="contact">
      <img
        className="button"
        onClick={() => {
          window.open("https://github.com/chinmaygopal931");
        }}
        src={Github}
        alt="Github logo"
        target="_blank"
        rel="noopener noreferrer"
      />
      <img
        className="button"
        onClick={() => {
          window.open("https://www.linkedin.com/in/chinmay-gopal/");
        }}
        src={Linkedin}
        alt="Linkedin logo"
        target="_blank"
        rel="noopener noreferrer"
      />
      <img
        className="button"
        onClick={mailTo}
        src={email}
        alt="email logo"
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  );
}
