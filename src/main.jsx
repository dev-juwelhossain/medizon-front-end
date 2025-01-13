import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router";
import Layout from './Layout/Layout.jsx'
import Home from "./pages/Home.jsx";
import Doctors from "./pages/Doctors.jsx";
import Hospitals from "./component/Hospitals.jsx";
import DoctorsDetails from "./pages/DoctorsDetails.jsx";
import DetailsOneDoctors from "./pages/DetailsOneDoctors.jsx";
import Ambulance from "./pages/Ambulance.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/doctors",
        element: <Doctors />,
      },
      {
        path: "/hospitals",
        element: <Hospitals />,
      },
      {
        path: "/doctor-details",
        element: <DoctorsDetails />,
      },
      {
        path: "/details-one-doctors",
        element: <DetailsOneDoctors />,
      },
      {
        path: "/ambulance",
        element: <Ambulance />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
      <ScrollRestoration />
    </RouterProvider>
  </StrictMode>
);
