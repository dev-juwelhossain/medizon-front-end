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
import DetailsOneHospitals from "./pages/DetailsOneHospitals.jsx";
import Settings from "./pages/Settings.jsx";
import ExpertDoctors from "./pages/ExpertDoctors.jsx";
import Labaid from "./pages/Labaid.jsx";
import Popular from "./pages/Popular.jsx";
import SubSettings from "./pages/SubSettings.jsx";
import Help from "./pages/Help.jsx";
import FeedBack from "./pages/FeedBack.jsx";
import Privacy from "./pages/Privacy.jsx";
import About from "./pages/About.jsx";

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
        path: "/details-one-doctors/:id",
        element: <DetailsOneDoctors />,
      },
      {
        path: "/ambulance",
        element: <Ambulance />,
      },
      {
        path: "/details-one-hospitals/:id",
        element: <DetailsOneHospitals />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/expert-doctors",
        element: <ExpertDoctors />,
      },
      {
        path: "/labaid",
        element: <Labaid />,
      },
      {
        path: "/popular",
        element: <Popular />,
      },
      {
        path: "/sub-settings",
        element: <SubSettings />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/feedback",
        element: <FeedBack />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/about",
        element: <About />,
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
