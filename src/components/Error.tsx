import { useRouteError } from "react-router-dom";
import { RouteError } from "../interface/interface";

export default function Error() {
  const error = useRouteError() as RouteError;
  return (
    <div className="error-container">
      <h2>Error: {error.message} 💁‍♂️</h2>
      <pre>
        status: {error.status} - {error.statusText}
      </pre>
      <h3>Try refreshing the page!</h3>
    </div>
  );
}
