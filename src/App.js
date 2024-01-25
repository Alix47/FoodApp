import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";
import CartPage from "./components/CartPage";
import Login from "./components/Login";
import LocationContext from "./utils/LocationContext";
import AddressContext from "./utils/AddressContext";


const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));
const Checkout = lazy(() => import("./components/Checkout"));
const Success = lazy(() => import("./components/Success"));
const Help = lazy(() => import("./components/Help"));

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [locationGlobal, setLocationGlobal] = useState(null);
  const [addressGlobal, setAddressGlobal] = useState(null);

  //get location code
  async function ipLookUp() {
    const response = await fetch("https://ipapi.co/json");
    const data = await response.json();
    setLocationGlobal({
      loaded: true,
      coordinates: {
        latitude: data.latitude,
        longitude: data.longitude,
      },
    });
  }

  function showError(error) {
    console.error("An error has occured while retrieving location", error);
    ipLookUp();
  }

  function showPosition(position) {
    setLocationGlobal({
      loaded: true,
      coordinates: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
    });
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      console.log("Geolocation API not supported.");
      ipLookUp();
    }
  }, []);

  return (
    <Provider store={store}>
      <div
        className={`m-auto w-full min-w-[80vw] min-h-screen flex items-center flex-col box-border border`}
      >
        <AddressContext.Provider
          value={{
            addressGlobal: addressGlobal,
            setAddressGlobal: setAddressGlobal,
          }}
        >
          <LocationContext.Provider
            value={{
              locationGlobal: locationGlobal,
              setLocationGlobal: setLocationGlobal,
            }}
          >
            <Header />
            <Suspense fallback={<div>loading...</div>}>
              <Outlet />
            </Suspense>
            <Footer />
          </LocationContext.Provider>
        </AddressContext.Provider>
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/success/:orderId",
        element: <Success />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
