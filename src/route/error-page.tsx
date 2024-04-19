import { useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div id="error-page" className="">
      <h1 className="text-white">Oops!</h1>
      <p className="text-white">Ops! Parece que essa página está fora do ar. Por favor, verifique o endereço e tente novamente</p>
    </div>
  );

}