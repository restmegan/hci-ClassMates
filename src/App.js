import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
//import "milligram";
import CalendarPage from "./CalendarPage";
import ChatPage from "./ChatPage";

import { MessagingChannelList } from './streamchats-code/src/components';
import ChatFeedPic from "./ChatFeedPic.png";
import BadCal from "./BadCal.png";

export default function App() {
  return (
    <Router>
      <div>
      <div className="App">
        <h1>ClassMates</h1>
        <h6><Link to="/">Home</Link></h6>
        </div>
        <Switch>
          <Route path="/chat">
            <ChatPage />
          </Route>
          <Route path="/calendar">
            <CalendarPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Home() {

  return (
  <div className="App">
    <div class="grid-container">
        <div class="grid-item">
          <h3>Happening Now:</h3>
          <p> Study Meeting with Alice</p>
          <button onClick={() =>
            {alert("Loading Zoom Meeting... (back-end not supported, go back)")}}>
            Join Now</button>
        </div>
        <div class="grid-item">
          <h3><Link to="/chat">Chat</Link></h3>
          <Link to="/chat"><img src={ChatFeedPic} alt="Img not found"
          width="100%" onClick={() =>
            {alert("This back-end is not fully supported yet, so this just navigates to the Chat page and not a specific conversation.")}}></img></Link>
        </div>
        <div className="grid-item">
          <h3><Link to="/calendar">Calendar</Link></h3>
          <Link to="/calendar"><img src={BadCal} alt="Img not found"
          width="100%" onClick={() =>
            {alert("This back-end is not yet fully supported, so this just navigates to the Calendar page and not a specific event.")}}></img></Link>
        </div>
      </div>
    </div>
  );
}
