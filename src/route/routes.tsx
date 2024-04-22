import { PageCreateUser } from "../pages/page-create-user";
import { PageLogin } from "../pages/page-login";
import { PageProducts } from "../pages/page-products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {ErrorPage} from "./error-page";
import { PageProduct } from "../pages/page-product";



// Criação do roteador com as rotas da aplicação
const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLogin />, // Página de login como página inicial
    errorElement: <ErrorPage /> // Página de erro padrão para essa rota


  },
  {
    path: "/produts/product/:productId",
    element: <PageProduct />, // Página de detalhes do produto
    errorElement: <ErrorPage /> // Página de erro padrão para essa rota

  },
  {
    path:"/register",
    element: <PageCreateUser /> // Página de criação de usuário
  },
  {
    path:"/products",
    element: <PageProducts /> // Página de listagem de produtos
  }
]);
// Componente de rotas que usa o RouterProvider para fornecer o roteador à aplicação
export function Routes() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
