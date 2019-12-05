import React from "react";
import Li_Logo from "../../img/Li_Logo.png";
import Git_Logo from "../../img/GitHub_Logo.png";
import Email_Btn from "../../img/email_button.png";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      {/* <p><img src={Li_Logo} /> </p> */}
      <a className="uno" href={"https://linkedin.com/in/daniel-crenshaw-bb336b190/"} rel="noopener noreferrer" target="_blank">
        <img alt="My Linked In" src={Li_Logo} width="100"></img></a>

      <a className="dos" href={"https://github.com/RecoveringChef"} rel="noopener noreferrer" target="_blank">
        <img alt="My Git Hub" src={Git_Logo} width="100"></img></a>

      <a className="tres" href={"mailto:dan.t.crenshaw@gmail.com?Subject=Message%20from%20your%20site"} target="_top">
        <img alt="My Git Hub" src={Email_Btn} width="100"></img></a>

    </footer>
  );
}

export default Footer;
