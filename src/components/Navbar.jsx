import React, { useState } from "react";
import logo from "../images/octopuspng 1.svg";

import { NavLink } from "react-router-dom";
import {
  IoMenuSharp,
  IoHomeSharp,
  IoMailSharp,
  IoCloseSharp,
  IoSad,
 
} from "react-icons/io5";
import {  IoMdBriefcase } from "react-icons/io";


const Navbar = () => {
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <header>
      <div className="container-fluid section-navbar">
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
          <NavLink to="/home" className="btn ">
            Home  &nbsp; <IoHomeSharp/>
          </NavLink>
          <NavLink to="tales" className="btn ">
            Tales &nbsp;
            <IoSad/>
          </NavLink>
          <NavLink to="art" className="btn ">
            Art &nbsp;
            <IoMdBriefcase/>
            
          </NavLink>
          <NavLink to="contact" className="btn ">
            email &nbsp;
            <IoMailSharp/>
          </NavLink>
        </div>
        <div
         onClick={handleShow}
          className={show ? "navbar-menu-second active" : "navbar-menu-second"}
        >
          <div className="section-menu-second">
            <button onClick={handleShow} className="btn-closee ">
              <IoCloseSharp/>
            </button>
            <ul>
              <li>
                {" "}
                <NavLink  onClick={handleShow} to="/home" className="btn btn-menu">
                  <div className="m-auto">Home</div>
                  <div>
                    <IoHomeSharp />
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink  onClick={handleShow} to="tales" className="btn btn-menu">
                  <div className="m-auto">Tales</div>
                  <div>
                    <IoSad/>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink  onClick={handleShow} to="contact" className="btn btn-menu">
                  <div className="m-auto">Art</div>
                  <div>
                  <IoMdBriefcase/>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink  onClick={handleShow} to="contact" className="btn btn-menu">
                  <div className="m-auto">Email</div>
                  <div>
                  <IoMailSharp/>
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
