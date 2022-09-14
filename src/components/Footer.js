import React from "react";
import pic from "./j.png";

const Footer = () => {
  return (
    <div id="footer">
      <div>
        <a className="link page" href="https://johnvonmuhlen.netlify.app">
          <img src={pic} alt="j" id="img" />
          <p>johnvonmuhlen.netlify.app</p>
        </a>
        <hr />
        <a className="link" href="https://github.com/johnvonmuhlen">
          <i className="fas fa-brands fa-github"></i>
        </a>
        <a
          className="link"
          href="https://www.linkedin.com/in/john-von-muhlen-2960a324b/"
        >
          <i className="fas fa-brands fa-linkedin"></i>
        </a>
        <a className="link" href="https://instagram.com/johnvonmuhlen">
          <i className="fas fa-brands fa-instagram"></i>
        </a>
        <a className="link" href="mailto:johnny@vonmuhlen.com">
          <i className="fas fa-solid fa-envelope"></i>
        </a>
        <a
          className="link"
          href="https://api.whatsapp.com/send?phone=5492477596954"
        >
          <i className="fas fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
