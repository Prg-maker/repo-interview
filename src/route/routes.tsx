import { PageCreateUser } from "../pages/page-create-user";
import { PageLogin } from "../pages/page-login";
import { PageProducts } from "../pages/page-products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {ErrorPage} from "./error-page";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <PageLogin />,
    errorElement: <ErrorPage/>

  },
  {
    path:"/register",
    element: <PageCreateUser/>,
  },
  {
    path:"/register",
    element: <PageCreateUser/>,
  },
  {
    path:"/produts",
    element: <PageProducts/>
  }
]);
export function Routes() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
