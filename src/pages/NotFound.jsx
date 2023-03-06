import React,  {useState} from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/octopuspng 1.svg";
import ReactHowler from "react-howler";
import item from "../music/item- distraction vip.ogg"
import {IoVolumeMuteSharp, IoVolumeHighSharp } from "react-icons/io5";

const NotFound = () => {

  const [muted, setMuted] = useState(false);


  const handlerMuted = () =>{
    setMuted(!muted)
  }
  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="section-error">
            <ReactHowler
              src={item}
              playing={true}
              loop={true}
              mute={muted}
            />

            <NavLink to="/" className="Click here ">
              
              <img className="first-log" src={logo} />
            </NavLink>
            <button onClick={handlerMuted} className="btn btn-danger boton-intro">  { muted ? <IoVolumeMuteSharp/> : <IoVolumeHighSharp/> } </button>
          </div>
        </div>
      </div>
    </>
  );
};


export default NotFound;
