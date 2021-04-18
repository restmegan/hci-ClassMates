import React, { useEffect, useState } from "react";
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

import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelList, MessageList, MessageInput, Window } from 'stream-chat-react';
import {
  CreateChannel,
  CustomMessage,
  MessagingChannelHeader,
  MessagingChannelList,
  DupeMessagingChannelList,
  MessagingChannelPreview,
  DupeMessagingChannelPreview,
  MessagingInput,
  MessagingThread,} from './streamchats-code/src/components';
import { useChecklist } from "./streamchats-code/src/ChecklistTasks.js";

import CalendarPage from "./CalendarPage";
import ChatPage from "./ChatPage";

import "./styles.css";

import ChatFeedPic from "./ChatFeedPic.png";
import BadCal from "./BadCal.png";
import ButtonJoinNow from "./ButtonJoinNow.js";

/// BEFORE APP, need to re-instantiate Chat back-end to display messages on Home page, lines 40-80.
const urlParams = new URLSearchParams(window.location.search);
const apiKey = 'e86kwpdunrzr'; // This is tied to the dhankher.a account
const user = urlParams.get('user') || process.env.REACT_APP_USER_ID;

const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibmFtZWxlc3MtdGh1bmRlci03In0.9U6fCnGgH8gawPO7yk2DHf2-NMQhqi78YT9DbzsfnK8';

const targetOrigin = urlParams.get('target_origin') || process.env.REACT_APP_TARGET_ORIGIN;
const noChannelNameFilter = urlParams.get('no_channel_name_filter') || false;

const options = { state: true, watch: true, presence: true, limit: 8 };
const sort = {
  last_message_at: -1,
  updated_at: -1,
  cid: 1,
};
// Instantiates a client-side client
const chatClient = StreamChat.getInstance(apiKey);
// Adding some dummy users to the userbase:
const johnSmith = {id: "john-smith", name: "John Smith", image: "https://getstream.github.io/website-react-examples/social-messenger/static/media/photo-1463453091185-61582044d556.a10d0ecf.jpeg"};
const lucyEaton = {id: "lucy-eaton", name: "Lucy Eaton", image: "https://thumbs.dreamstime.com/b/friendly-adult-casual-dressed-business-woman-student-girl-standing-straight-headshot-portrait-office-183889436.jpg"};
const janeDoe = {id: "jane-doe", name: "Jane Doe", image: "https://previews.123rf.com/images/avemario/avemario1609/avemario160900319/62999486-smiling-teenage-girl-working-on-her-generic-laptop-computer-happy-cheerful-female-college-student-si.jpg"};
const edJones = {id: "ed-jones", name: "Ed Jones", image: "https://thumbs.dreamstime.com/z/knappe-student-53808413.jpg"};
chatClient.disconnect();
chatClient.connectUser(johnSmith, chatClient.devToken("john-smith"));
chatClient.disconnect();
chatClient.connectUser(lucyEaton, chatClient.devToken("lucy-eaton"));
chatClient.disconnect();
chatClient.connectUser(janeDoe, chatClient.devToken("jane-doe"));
chatClient.disconnect();
chatClient.connectUser(edJones, chatClient.devToken("ed-jones"));
chatClient.disconnect();
//This is the test user who is logged into ClassMates
const testUser = {
  id: 'nameless-thunder-7',
  name: 'Alice Jefferson',
  image: 'http://getstream.imgix.net/images/random_svg/A.png'
};
chatClient.connectUser(testUser, userToken);
const filters = noChannelNameFilter ? { type: 'messaging', members: { $in: [testUser, johnSmith, lucyEaton, janeDoe] } } : { type: 'messaging'};
// END OF CHAT RE-INSTATION

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

  /// FURTHER CHAT RE-INSTANTIATION, lines 110-140

  const [isCreating, setIsCreating] = useState(false);
  const [isMobileNavVisible, setMobileNav] = useState(false);
  const [theme, setTheme] = useState('light'); // dark mode can be toggled here
  useChecklist(chatClient, targetOrigin);
  useEffect(() => {
    const handleThemeChange = ({ data, origin }) => {
      // handle events only from trusted origin
      if (origin === targetOrigin) {
        if (data === 'light' || data === 'dark') {
          setTheme(data);
        }
      }
    };
    window.addEventListener('message', handleThemeChange);
    return () => window.removeEventListener('message', handleThemeChange);
  }, []);
  useEffect(() => {
    const mobileChannelList = document.querySelector('#channel-preview__container');
    if (isMobileNavVisible && mobileChannelList) {
      mobileChannelList.classList.add('show');
      document.body.style.overflow = 'hidden';
    } else if (!isMobileNavVisible && mobileChannelList) {
      mobileChannelList.classList.remove('show');
      document.body.style.overflow = 'auto';
    }
  }, [isMobileNavVisible]);
  const toggleMobile = () => setMobileNav(!isMobileNavVisible);

  // END OF CHAT RE-INSTATION


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
              <Link to="/chat" onClick={() =>
                {alert("This back-end is not fully supported yet, so this just navigates to the Chat page and not a specific conversation.")}}>
                <Chat client={chatClient} theme={`messaging ${theme}`} id="home-channels">
                    <ChannelList
                      filters={filters}
                      sort={sort}
                      options={options}
                      List={(props) => <DupeMessagingChannelList {...props} onCreateChannel={() => setIsCreating(!isCreating)} />}
                      Preview={(props) => <DupeMessagingChannelPreview {...props} {...{ setIsCreating }} />}
                    />
                </Chat>
              </Link>
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
                {alert("This back-end is not fully supported, so this just navigates to the Calendar page and not a specific event.")}}>
                <MDBCardBody id="card-body">
                  <MDBCard id="test-card">
                    <h4 id="meeting-name">Meeting with Jane Doe</h4>
                    <h6 id="meeting-date">Today</h6>
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
