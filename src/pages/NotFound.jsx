import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/octopuspng 1.svg";
import { BsCaretLeft } from "react-icons/bs";

const NotFound = () => {
  return (
    <>
    <header>
      <div className="container-fluid">
        <div className="section-error">
          <img src={logo} />
           <h1>404 Not Found</h1>
          <NavLink to="/" className="btn btn-primary ">
            
            Back <BsCaretLeft />
          </NavLink>
        </div>
      </div>

    </header>
    </>
  );
};

export default NotFound;
