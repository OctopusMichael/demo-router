import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/octopuspng 1.svg";
import { BsCaretLeft } from "react-icons/bs";

const NotFound = () => {
  return (
    <>
  
   <div>
      <div className="container-fluid">
        <div className="section-error">
          <img src={logo} />
           <h1>404 Not Found</h1>
          <NavLink to="/" className="btn-back ">
            
            Back <BsCaretLeft />
          </NavLink>
        </div>
      </div>


   </div>
    </>
  );
};

export default NotFound;
