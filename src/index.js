import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import Products from "./routes/Products";
import Home from "./routes/Home";
import Reports from "./routes/Reports";
import Navbar from "./components/Navbar";
import "./App.css";
import MemeGen from "./routes/MemeGen";
import Edit from "./routes/Edit";
import Text from "./routes/Text";
import Support from "./routes/Support";
import LoginForm from "./routes/LoginForm";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LoginForm />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "memegen",
        element: <MemeGen />,
      },
      {
        path:"edit",
        element: <Edit/>

      },
      {
        path:"text",
        element: <Text/>

      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path:"support",
        element: <Support/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
