import "./styles.css";
import {useState} from 'react';
import "milligram";

export default function App() {

  const [buttonText, setButtonText] = useState("this is a button");

  function handleClick(){
   setButtonText("you clicked!");
  }


  return (
    <div className="App">
      <h1>Hello ClassMates</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>hi</p>
    <button onClick={handleClick}>{buttonText}</button>
      <h1>ClassMates</h1>
      <div className="row">
        <div className="column box">
          <h3>Happening Now</h3>
          <p> blank</p>
          <p> more space</p>
        </div>
        <div className="column">
          <h3>Chats</h3>
        </div>
        <div className="column">
          <h3>Schedule</h3>
        </div>
      </div>
    </div>
  );
}
