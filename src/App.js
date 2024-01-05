import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
// import Footer from "./components/Footer.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"


// Footer component for footer section
const Footer = () => {
  return (
    <div className="footer">
      Created By
      <i class="fa-solid fa-heart"></i>
      <a href="#" target="_blank">
        ALI
      </a>
      <i class="fa-solid fa-copyright"></i>2023
      <strong>
        Food<span>Fire</span>
      </strong>
    </div>
  );
};

// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ],
    errorElement: <Error/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);