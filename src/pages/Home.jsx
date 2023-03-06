import React from "react";
import { Parallax } from "react-parallax";

import handdown from "../images/nitish-goswami-cNA-klOAdfM-unsplash.jpg";
import handup from "../images/nitish-goswami-0DrOxIiOu0Q-unsplash.jpg";

const Home = () => {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1 className="text-center text-white   first-title">
                Tales from the Algorithm: Stories Created by Artificial
                Intelligence
              </h1>
            </div>
            <div className="col-12 col-md-6 ">
              <Parallax strength={200} bgImage={handdown}>
                <div className="content"></div>
              </Parallax>
            </div>
            <h1 className="text-center my-5 text-white second-title">
              The Future of Fiction: <br /> AI-Generated Storytelling
            </h1>

            <div className="col-12 col-md-6 ">
              <Parallax strength={-300} bgImage={handup}>
                <div className="content"></div>
              </Parallax>
            </div>
            <div className="col-12 col-md-6  article">
              <p className=" text-center">
                {" "}
                AI story generation is a fascinating and entertaining way to
                explore the capabilities of artificial intelligence. With the
                help of sophisticated algorithms and machine learning, AI can
                analyze and replicate patterns found in human-written stories to
                create entirely new ones. These AI-generated stories can range
                from humorous to dramatic, sci-fi to romance, and everything in
                between. Whether you're looking for a unique writing prompt, a
                source of inspiration, or just a fun way to pass the time,
                exploring the world of AI-generated stories is sure to be an
                exciting and engaging experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
