import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText,
  MDBCardHeader, MDBBtn, MDBContainer,
  MDBListGroup, MDBListGroupItem,
 } from "mdbreact";
import { BsChevronRight, BsChevronDoubleRight } from "react-icons/bs";
import CalendarPage from "./CalendarPage";
import ChatPage from "./ChatPage";

import "./styles.css";

import { MessagingChannelList } from './streamchats-code/src/components';
import ChatFeedPic from "./ChatFeedPic.png";
import BadCal from "./BadCal.png";
import ButtonJoinNow from "./ButtonJoinNow.js";

export default function App() {

  return (
    <Router>
      <div>
      <div className="App">
        <h1>ClassMates</h1>
        <h6><Link id="homelink" to="/">Home</Link></h6>
        </div>
        <Switch>
          <Route path="/chat">
            <ChatPage/>
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
          <MDBContainer id="container">
            <MDBCard id="card-outer">
              <MDBCardHeader id="header" color="deep-orange lighten-1">Happening Now</MDBCardHeader>
              <MDBCardBody id="card-body">
              <MDBCard id="happening-test-card">
                <h4 id="happening-name">Meeting with Jane Doe</h4>
                <h6 id="happening-time">2:00pm – 3:00pm</h6>
                <ButtonJoinNow id="happening-button" name="Join Now"
                onClick={() =>
                  {alert("Loading Zoom Meeting... (back-end not supported, go back)")}}/>
              </MDBCard>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </div>
        <div class="grid-item">
          <MDBContainer id="container">
            <MDBCard id="card-outer">
              <Link to="/chat" id="link">
                <MDBCardHeader id="header">
                  <h3 id="header-title">Chats</h3>
                  <BsChevronDoubleRight id="chevron"/>
                </MDBCardHeader>
              </Link>
              <MDBCardBody id="card-body">
                <Link to="/chat"><img src={ChatFeedPic} alt="Img not found"
                width="100%" onClick={() =>
                  {alert("This back-end is not fully supported, so this just navigates to the Chat page and not a specific conversation.")}}></img></Link>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </div>
        <div className="grid-item">
          <MDBContainer id="container">
            <MDBCard id="card-outer">
              <Link to="/calendar" id="link">
                <MDBCardHeader id="header" color="deep-orange lighten-1">
                  <h3 id="header-title">Schedule</h3>
                  <BsChevronDoubleRight id="chevron"/>
                </MDBCardHeader>
              </Link>
              <Link to="/calendar" id="schedule-link" onClick={() =>
                {alert("This back-end is not fully supported, so this just navigates to the Calendar page and not a specific conversation.")}}>
                <MDBCardBody id="card-body">
                  <MDBCard id="test-card">
                    <h4 id="meeting-name">Meeting with Jane Doe</h4>
                    <h6 id="meeting-date">TODAY</h6>
                    <h6 id="meeting-time">2:00pm – 3:00pm</h6>
                  </MDBCard>
                  <MDBCard id="test-card">
                    <h4 id="meeting-name">Group Project Meeting</h4>
                    <h6 id="meeting-date">Apr 27</h6>
                    <h6 id="meeting-time">4:00pm – 5:30pm</h6>
                  </MDBCard>
                  <MDBCard id="test-card">
                    <h4 id="meeting-name">Catch-up with Lucy Eaton</h4>
                    <h6 id="meeting-date">Apr 27</h6>
                    <h6 id="meeting-time">7:00pm – 8:00pm</h6>
                  </MDBCard>
                  <MDBCard id="test-card">
                    <h4 id="meeting-name">Group Project Meeting</h4>
                    <h6 id="meeting-date">May 4</h6>
                    <h6 id="meeting-time">4:00pm – 5:30pm</h6>
                  </MDBCard>
                  <MDBCard id="end-card">
                    <h4 id="meeting-name">Group Project Meeting</h4>
                    <h6 id="meeting-date">May 11</h6>
                    <h6 id="meeting-time">4:00pm – 5:30pm</h6>
                  </MDBCard>
                  <MDBCard id="space-card">
                  </MDBCard>
                </MDBCardBody>
              </Link>
            </MDBCard>
          </MDBContainer>
        </div>
      </div>
    </div>
  );
}
