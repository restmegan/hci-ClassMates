import { StrictMode } from "react";
import ReactDOM from "react-dom";

//import App from "./App";
import CalendarPage from "./CalendarPage";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CalendarPage />
  </StrictMode>,
  rootElement
);
