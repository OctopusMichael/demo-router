import React, { useState } from "react";
import logo from "../images/octopus-white.svg";
import { NavLink } from "react-router-dom";
import {
  IoMenuSharp,
  IoHomeSharp,
  IoMailSharp,
  IoCloseSharp,
  IoSad,
 
} from "react-icons/io5";
import {  IoMdBriefcase } from "react-icons/io";

const active = {
  color: 'aqua',
}

const disactive = {
  default: {
      color: "#eee"
  },
  Hovered: {
      color: 'red'
  }

}




const Navbar = () => {
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <header>
      <div className="container-fluid section-navbar">
        <div className="section-logo ">
        <NavLink to="/demo-router/"  >
          <img onClick={handleShow} className="logo mt-2  " src={logo} />
          </NavLink>
        </div>
        <div className="menu ms-auto">
          <button onClick={handleShow} className=" btn-open">
            {" "}
            <IoMenuSharp />{" "}
          </button>
        </div>
        <div className="navbar-menu ms-auto ">
          <NavLink  to="/demo-router/" style={({ isActive }) => isActive ? active : disactive} className="btn"
          >
            Home  &nbsp; <IoHomeSharp/>
          </NavLink>
          <NavLink to="/demo-router/tales"  style={({ isActive }) => isActive ? active : disactive} className="btn ">
            Tales &nbsp;
            <IoSad/>
          </NavLink>
          <NavLink to="/demo-router/art"  style={({ isActive }) => isActive ? active : disactive} className="btn ">
            Art &nbsp;
            <IoMdBriefcase/>
            
          </NavLink>
          <NavLink to="/demo-router/email"  style={({ isActive }) => isActive ? active : disactive} className="btn ">
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
                <NavLink  onClick={handleShow} to="/" className="btn btn-menu">
                  <div className="m-auto">Home</div>
                  <div>
                    <IoHomeSharp />
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink  onClick={handleShow} to="/demo-router/tales" className="btn btn-menu">
                  <div className="m-auto">Tales</div>
                  <div>
                    <IoSad/>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink  onClick={handleShow} to="/demo-router/art" className="btn btn-menu">
                  <div className="m-auto">Art</div>
                  <div>
                  <IoMdBriefcase/>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink  onClick={handleShow} to="/demo-router/email" className="btn btn-menu">
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
