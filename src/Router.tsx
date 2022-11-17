import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyles from "./Components/Organisms/GlobalStyles";
import Login from "./Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
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
