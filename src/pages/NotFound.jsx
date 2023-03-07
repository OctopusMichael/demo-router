import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/octopuspng 1.svg";
import ReactHowler from "react-howler";
import item from "../music/item- distraction vip.ogg";
import { IoHomeSharp } from "react-icons/io5";

const NotFound = () => {
  const [muted, setMuted] = useState(true);

  const handlerMuted = () => {
    setMuted(!muted);
  };
  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="section-error">
            <ReactHowler src={item} playing={true} loop={true} />

            <img className="first-log" src={logo} />
            <h1 className=" text-center error 404 bg-black text-white p-5 ">
              <h1>404 Not Found</h1>
              <p>The requested URL was not found on this server.</p>
              <p>
                Please check the URL for errors and try again, or go to the{" "}
                <a href="/demo-router/">
                  {" "}
                  HomePage
                  <IoHomeSharp />
                </a>
              </p>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
