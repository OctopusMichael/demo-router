import React from "react";
import { IoLogoFacebook, IoLogoGithub, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <section>
        <footer>
          <div className="container fixed-botton">
            <div className="row">
              <div className="col-12  ">
                <ul >
                  <a href="#"><IoLogoGithub/></a>
                  <a  href="#"><IoLogoFacebook/></a>
                  <a  href="#"><IoLogoTwitter/></a>
                  <a  href="#"><IoLogoInstagram/></a>
                </ul>
                <h5>
                  {" "}
                  © 2023 &nbsp;<a href="#"> Michael Diaz </a> &nbsp; All rights reserved.
                </h5>
                
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
