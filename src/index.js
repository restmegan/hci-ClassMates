import { StrictMode } from "react";
import ReactDOM from "react-dom";

//import App from "./App";
//import CalendarPage from "./CalendarPage";
import ChatPage from "./ChatPage";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ChatPage />
  </StrictMode>,
  rootElement
);
