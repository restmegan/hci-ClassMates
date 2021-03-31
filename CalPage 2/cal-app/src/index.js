import React from "react";
import ReactDOM from "react-dom";
import { View, Text } from "react-native";

import Button from "./components/Button";
import NavButton from "./components/NavButton";
import BigCalendar from "./components/BigCalendar";
import PopUp from "./components/PopUp";

class CalendarPage extends React.Component {

  constructor(props){

    super(PopUp.props);
    this.state = { showPopup: false };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div className="CalendarPage">
      <h1>ClassMates</h1>
      <div>
      <NavButton
      name = "Chat"
      />
      <NavButton
      name = "Schedule"
      />
      </div>

      <View style={{flexDirection:'row',
                          justifyContent: 'center',
                          alignItems: 'center'}}>
            <div>
              <BigCalendar/>
            </div>
            <View style={{flexDirection:'column'}}>
            <div>
              <Button
              name = "Start Instant Meeting"
              />
              </div>
              <div>
              <Button
              name = "Plan a Future Meeting"
              onClick = {this.togglePopup.bind(this)}
      />
      {this.state.showPopup ?
       <PopUp
        closePopup={this.togglePopup.bind(this)}
        />
       : null
      }


            </div>
            </View>
            </View>
      </div>
    )};
  }

  const rootElement = document.getElementById("root");
  ReactDOM.render(<CalendarPage />, rootElement);
