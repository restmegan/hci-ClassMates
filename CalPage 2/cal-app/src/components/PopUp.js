import React from 'react';
import './style.css';
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import DatePicker from "react-datepicker";
import { Multiselect } from 'multiselect-react-dropdown';
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-times';
import Button from './Button';
import BigCalendar from './BigCalendar';

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
        options: [{name: 'IS4300', id: 1},{name: 'CS3000', id: 2},{name: 'Lucy Eaton', id: 3},{name: 'John Smith', id: 4},
      {name: 'Study Squad(Lucy, John, ...)', id: 5},{name: 'Lucy Eaton, Ed Jones', id: 6},{name: 'Amanda Snow', id: 7}]
      };
      this.handleSChange = this.handleSChange.bind(this);
      this.handleEChange = this.handleEChange.bind(this);
      this.onFormSubmitS = this.onFormSubmitS.bind(this);
      this.onFormSubmitE = this.onFormSubmitE.bind(this);
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


  render() {
    return (
      <div className='popup'>
      <div className='popup_inner'>
      <h1>{"Schedule a Study Group"}</h1>
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
      <div>
      Create a Zoom meeting?
          <input type="checkbox" checked={this.state.checked} onClick={this.handleCheck} />
      </div>
      <div>
      <Button
      name = "Cancel"
      onClick={this.props.closePopup}
      />
      <Button
      name = "Schedule Meeting"
      onClick={this.alertS}
    //  onClick={BigCalendar.addEvent({start: this.state.startDate, end: this.state.endDate, title: this.state.meetingTitle})}
      />
      </div>
      </div>
      </div>
    );
  }
}


export default Popup;
