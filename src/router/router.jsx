import React from "react";
import { createHashRouter } from "react-router-dom";
import Root from "../layaout/Root";
import Art from "../pages/Art";
import Email from "../pages/Email";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Tales from "../pages/Tales";

export const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "tales",
        element: <Tales />,
      },
      {
        path: "/demo-router/ar",
        element: <Art />,
      },
      {
        path: "/demo-router/emai",
        element: <Email />,
        errorElement: <h1>Error</h1>,
      },
      {
        path : "*" ,
        element :<NotFound />,
      },
    ],
  },
]);
