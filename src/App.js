import "./styles.css";
import {useState} from 'react';

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
    </div>
  );
}
