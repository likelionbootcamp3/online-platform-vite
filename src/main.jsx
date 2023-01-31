import React from "react";
import ReactDOM from "react-dom/client";
import router from "./config/router";
import { RouterProvider } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
