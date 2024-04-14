import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../components/ErrorPage";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";

export const Router = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: "/login",
      element: <Login />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}