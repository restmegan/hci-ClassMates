import React from "react";
import ReactDOM from "react-dom";
import { View, Text } from "react-native";

import Button from "./components/Button";
import ButtonTwo from "./components/ButtonTwo";
import NavButton from "./components/NavButton";
import BigCalendar from "./components/BigCalendar";
import PopUp from "./components/PopUp";

class CalendarUI extends React.Component {

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

      <View style={{flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 0}}>
      <View style={{flexDirection:'row',
                    zIndex: 1}}>
      <div>
      <ButtonTwo
      name = "Start Instant Meeting"
      onClick = {this.togglePopup.bind(this)}
      />
      {this.state.showPopup ?
        <PopUp
        closePopup={this.togglePopup.bind(this)}
        />
        : null
      }

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
      <div>
      <BigCalendar/>
      </div>

      </View>
      </div>
    )};
  }
  export default CalendarUI;
  // const rootElement = document.getElementById("root");
  // ReactDOM.render(<CalendarPage />, rootElement);
