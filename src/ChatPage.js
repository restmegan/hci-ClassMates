import "./styles.css";
import {useState} from 'react';
import InboxComponent from "./InboxComponent"

export default function ChatPage() {

  const [buttonText, setButtonText] = useState("Start new conversation");

  function handleClick(){
   setButtonText("sike!");
  }

  return (
    <div className="ChatPage">
      <h1>ClassMates</h1>
      <button onClick={handleClick}>{buttonText}</button>
      <InboxComponent />
    </div>
  );
}
