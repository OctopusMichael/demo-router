import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";


const Root = () => {

  const navigate = useNavigation()

  return (
    <>
      <Navbar/>
      <main className="container-fluid ">
        {navigate.state == "loading" && (
          <div className="alert alert-info my-5"> loading... </div>
        )}
        <Outlet/>
      </main>
      
     
    </>
  );
};

export default Root;
