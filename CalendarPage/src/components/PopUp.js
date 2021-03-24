import React from 'react';
import './style.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-times';

import 'react-times/css/material/default.css'
let currentDate = new Date();

class Popup extends React.Component {

  state = {
    meetingDate: currentDate
  }


  handleDateChange = event => {
    this.setState({ meetingDate: event });
  };

  render() {
    return (
      <div className='popup'>
      <div className='popup_inner'>
      <h1>{"Schedule a Study Group"}</h1>
      <div>
            Date:
            <DatePicker
              dateFormat="dd-MM-yyyy"
              selected={this.state.meetingDate}
              onChange={this.handleDateChange}
              shouldCloseOnSelect={true}
            />
       </div>
       <div>
         Start time:
       <TimePicker
        //onChange={onChange}
       // value={value}
      />
       </div>
       <div>
         End time:
       <TimePicker
        //onChange={onChange}
       // value={value}
      />
       </div> 
       <div>
        <Button
        name = "Cancel"
        onClick={this.props.closePopup}
        />
        <Button
        name = "Schedule Meeting"
        />
       </div>
      </div>
      </div>
    );
  }
}


export default Popup;
