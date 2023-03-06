import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Root = () => {

  const navigate = useNavigation()

  return (
    <>
      <Navbar/>
      <main className="container-fluid  ">
        {navigate.state == "loading" && (
          <div className="alert alert-info my-5"> loading... </div>
        )}
        <Outlet/>
      </main>
      <Footer/>
     
    </>
  );
};

export default Root;
