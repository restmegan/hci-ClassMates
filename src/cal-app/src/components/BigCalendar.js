import React, { Component } from "react";
import './style.css';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
const localizer = momentLocalizer(moment);
// Creates a TalkJS user assuming that the currentUser is passed as a prop to our component.
// The Talk.User object is used to synchronize user data with TalkJS, so we can display it inside the chat UI.
class BigCalendar extends Component {
  calState = {
    events: [
      {
        start: new Date(2021, 3, 2, 13, 40, 0),
        end: new Date(2021, 3, 2, 15, 20, 0),
        title: "IS4300 Study Group"
      },
      {
        start: new Date(2021, 3, 1, 9, 30, 0),
        end: new Date(2021, 3, 1, 11, 30, 0),
        title: "Group Project CS2510"
      },
      {
        start: moment().add(-1, "hours").toDate(),
        end: moment().add(2, "hours").toDate(),
        title: "Study Group T4 part 2"
}
    ]
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
