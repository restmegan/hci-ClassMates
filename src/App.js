import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import "milligram";
import CalendarPage from "./CalendarPage";
import ChatPage from "./ChatPage";

export default function App() {
  return (
    <Router>
      <div>
        <h1>ClassMates</h1>
        <h6><Link to="/">Home</Link></h6>
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
        <div class="row">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/calendar">Calendar</Link>
          </li>
        </ul>
        </div>

        
      </div>
    </Router>
  );
}

function Home() {
  return (
  <div className="App">
      <div className="row">
        <div className="column box">
          <h3>Happening Now</h3>
          <p> blank</p>
          <p> more space</p>
        </div>
        <div className="column">
          <h3><Link to="/chat">Chat</Link></h3>
        </div>
        <div className="column">
          <h3><Link to="/calendar">Calendar</Link></h3>
        </div>
      </div>
    </div>
  );
}
