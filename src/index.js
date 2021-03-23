import { StrictMode } from "react";
import ReactDOM from "react-dom";

//import App from "./App";
//import CalendarPage from "./CalendarPage";
import InboxComponent from "./InboxComponent";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <InboxComponent />
  </StrictMode>,
  rootElement
);
