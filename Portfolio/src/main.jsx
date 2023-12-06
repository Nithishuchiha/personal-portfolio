import React from "react";
import ReactDOM from "react-dom";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Navbar from "./component/Navbar.jsx";
import Aboutme from "./component/Aboutme.jsx";
import Contact from "./component/Contact.jsx";
// import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Aboutme />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
