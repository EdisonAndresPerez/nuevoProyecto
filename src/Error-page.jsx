import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <img src="/src/assets/img/10633319.png" alt="Error" />
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
