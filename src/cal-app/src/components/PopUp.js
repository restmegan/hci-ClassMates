import React from 'react';
import "./PopUp.css";
import './style.css';
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import DatePicker from "react-datepicker";
import { Multiselect } from 'multiselect-react-dropdown';
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-times';
import Button from './Button.js';
import ButtonTwo from './ButtonTwo.js';
import ButtonCancel from './ButtonCancel.js';
import ButtonSubmit from './ButtonSubmit.js';
import BigCalendar from './BigCalendar';
import {meetings} from "./meetings.js"

import 'react-times/css/material/default.css'
let currentDate = new Date();
let currentTime = new Date();


class Popup extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      checked: false,
      meetingTitle: "",
      startDate: new Date(),
      endDate: new Date(),
      description: "",
      options: [{name: 'IS4300', id: 1},{name: 'Lucy Eaton', id: 3},{name: 'John Smith', id: 4},
      {name: 'Study Squad(John, Jane, ...)', id: 5},{name: 'Lucy Eaton, Jane Doe', id: 6},{name: 'Jane Doe', id: 7}]
    };
    this.myChangeHandler = this.myChangeHandler.bind(this);
    this.handleSChange = this.handleSChange.bind(this);
    this.handleEChange = this.handleEChange.bind(this);
    this.onFormSubmitS = this.onFormSubmitS.bind(this);
    this.onFormSubmitE = this.onFormSubmitE.bind(this);
    this.handleDChange = this.handleDChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleSChange(date) {
    this.setState({
      startDate: date
    })
  }

  handleEChange(date) {
    this.setState({
      endDate: date
    })
  }

  myChangeHandler = (event) => {
    this.setState({
      meetingTitle : event.target.value
    })
  }

  onFormSubmitS(e) {
    e.preventDefault();
    console.log(this.state.startDate)
  }

  onFormSubmitE(e) {
    e.preventDefault();
    console.log(this.state.endDate)
  }

  alertS(e) {
    alert('Meeting has been scheduled SUCCESSFULLY! \nPlease, press Close on this page and Cancel on the scheduling window to continue(back-end tbd)')
  }

  handleCheck = (event) => {
    this.setState({
      checked: !this.state.checked
    })
  }

  handleDChange(event) {
    this.setState({ description: event.target.value });
  }


  render() {
    return (
      <div className='popup'>
      <div className='popup_inner'>
      <h1>{"Schedule a Meeting"}</h1>
      <div>
      Meeting Title:
      <input
      type="text"
      onChange={this.myChangeHandler}
      />
      </div>
      <div>
      Pick Start Date and Time:
      <DatePicker
      selected={ this.state.startDate }
      onChange={ this.handleSChange }
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={5}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
      minDate={currentDate}
      />
      </div>
      <div>
      Pick End Date and Time:
      <DatePicker
      selected={ this.state.endDate }
      onChange={ this.handleEChange }
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={5}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
      minDate={this.state.startDate}
      />
      </div>
      <div>
      Select Participants:
      <Multiselect
      options={this.state.options} // Options to display in the dropdown
      selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
      onSelect={this.onSelect} // Function will trigger on select event
      onRemove={this.onRemove} // Function will trigger on remove event
      displayValue="name" // Property name to display in the dropdown options
      />
      </div>
      <div id="description">
      Description(optional) :
      <textarea
      value={this.state.description}
      onChange={this.handleDChange}
      rows={5}
      cols={30}
      />
      </div>
      <div id="zoom">
      Create a Zoom meeting?
      <input type="checkbox" checked={this.state.checked} onClick={this.handleCheck} />
      </div>
      <div>
      <ButtonCancel
      name = "Cancel"
      onClick={this.props.closePopup} //TODO: show system message to open Zoom
      />
      <ButtonSubmit
      name = "Schedule Meeting"
      onClick={() => {
        meetings.push({start: this.state.startDate, end: this.state.endDate, title: this.state.meetingTitle});
        this.props.closePopup();
      }}
      //onClick={this.alertS}
      />
      </div>
      </div>
      </div>
    );
  }
}


export default Popup;
