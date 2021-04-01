import "./styles.css";
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import CalendarUI from "./cal-app/src/index.js"

export default function CalendarPage() {

  return (
    <div className="CalendarPage">
      <CalendarUI />
    </div>
  );
}
