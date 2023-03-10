import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout";
import About from "../views/about";
import Login from "../views/auth/login";
import Classes from "../views/classes";
import Home from "../views/home";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
    ],
  },
]);

export default router;
