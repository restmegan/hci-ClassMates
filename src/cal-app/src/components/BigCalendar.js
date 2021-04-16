import React, { Component } from "react";
import './style.css';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import {meetings} from "./meetings.js"
const localizer = momentLocalizer(moment);
// Creates a TalkJS user assuming that the currentUser is passed as a prop to our component.
// The Talk.User object is used to synchronize user data with TalkJS, so we can display it inside the chat UI.
class BigCalendar extends Component {
  calState = {
    events: meetings
  };

  addEvent(props) {
   this.calState.events.push(props);
  }

  render() {
    return (
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="week"
        events={this.calState.events}
        style={{ height: "100vh", width: "130vh" }}
      />
    );
  }
}
export default BigCalendar;
