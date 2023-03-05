import React, { useState } from "react";
import logo from "../images/octopuspng 1.svg";
import { NavLink } from "react-router-dom";
import {
  IoMenuSharp,
  IoHomeSharp,
  IoLogoReact,
  IoMailSharp,
  IoLogoJavascript,
 
} from "react-icons/io5";
import {  IoMdBriefcase } from "react-icons/io";


const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <header>
      <div className="container section-navbar">
        <div className="section-logo ">
          <img className="logo" src={logo} />
        </div>
        <div className="menu ms-auto">
          <button onClick={handleShow} className=" btn-open">
            {" "}
            <IoMenuSharp />{" "}
          </button>
        </div>
        <div className="navbar-menu ms-auto ">
          <NavLink to="/" className="btn ">
            Home  &nbsp; <IoHomeSharp/>
          </NavLink>
          <NavLink to="skills" className="btn ">
            Skills &nbsp;
            <IoLogoJavascript/>
          </NavLink>
          <NavLink to="portfolio" className="btn ">
            Portfolio &nbsp;
            <IoMdBriefcase/>
            
          </NavLink>
          <NavLink to="contact" className="btn ">
            Contact &nbsp;
            <IoMailSharp/>
          </NavLink>
        </div>
        <div
         onClick={handleShow}
          className={show ? "navbar-menu-second active" : "navbar-menu-second"}
        >
          <div className="section-menu-second">
            <button onClick={handleShow} className="btn-close ">
              {" "}
            </button>
            <ul>
              <li>
                {" "}
                <NavLink  onClick={handleShow} to="/" className="btn btn-menu">
                  <div className="m-auto">Home</div>
                  <div>
                    <IoHomeSharp />
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink  onClick={handleShow} to="skills" className="btn btn-menu">
                  <div className="m-auto">Skills</div>
                  <div>
                    <IoLogoReact />
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink  onClick={handleShow} to="contact" className="btn btn-menu">
                  <div className="m-auto">Portfolio</div>
                  <div>
                    <IoMdBriefcase />
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink  onClick={handleShow} to="contact" className="btn btn-menu">
                  <div className="m-auto">Contact</div>
                  <div>
                    <IoMailSharp />
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
