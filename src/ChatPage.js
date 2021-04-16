import "./styles.css";
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./streamchats-code/src/App.js"
import "./ChatPage.css";

export default function ChatPage() {

  return (
    <div className="ChatPage">
      <App />
    </div>
  );
}
