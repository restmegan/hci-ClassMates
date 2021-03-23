import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "./styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {useState} from 'react';

const localizer = momentLocalizer(moment);

// Creates a TalkJS user assuming that the currentUser is passed as a prop to our component.
// The Talk.User object is used to synchronize user data with TalkJS, so we can display it inside the chat UI.
class CalendarPage extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment()
          .add(1, "days")
          .toDate(),
        title: "Some title"
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}


export default CalendarPage;
