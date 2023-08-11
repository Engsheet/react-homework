import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";

const reactDomRoot = ReactDOM.createRoot(document.getElementById("root"));

/* -------------------------------------------------------------------------- */

reactDomRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);
