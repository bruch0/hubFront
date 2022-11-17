import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyles from "./Components/Organisms/GlobalStyles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
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
