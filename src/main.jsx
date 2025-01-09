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
