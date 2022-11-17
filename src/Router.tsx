import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GlobalStyles from "./Components/Organisms/GlobalStyles";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export default function AppRouter() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}
