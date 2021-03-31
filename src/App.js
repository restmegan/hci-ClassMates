import "./styles.css";
import {useState} from 'react';
import "milligram";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {

  const [buttonText, setButtonText] = useState("this is a button");

  function handleClick(){
   setButtonText("you clicked!");
  }


  return (
    <div className="App">
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

// Provides the basic home-page render
function Home() {
}
