import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layaout/Root";
import Art from "../pages/Art";
import Email from "../pages/Email";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Tales from "../pages/Tales";

export const router = createBrowserRouter([
  {
    path: "/demo-router/",
    element: <Root />,
    children: [
      {
        index: true,
        path: "/demo-router/",
        element: <Home />,
      },
      {
        path: "/demo-router/tales",
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
