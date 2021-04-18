import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
//import "milligram";
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelList, MessageList, MessageInput, Window } from 'stream-chat-react';

import "./styles.css";
import CalendarPage from "./CalendarPage";
import ChatPage from "./ChatPage";

import {
  CreateChannel,
  CustomMessage,
  MessagingChannelHeader,
  MessagingChannelList,
  MessagingChannelPreview,
  MessagingInput,
  MessagingThread,} from './streamchats-code/src/components';
import { useChecklist } from "./streamchats-code/src/ChecklistTasks.js";
import ChatFeedPic from "./ChatFeedPic.png";
import BadCal from "./BadCal.png";

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
            <ChatPage/>
          </Route>
          <Route path="/calendar">
            <CalendarPage/>
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
          <Link to="/chat" onClick={() =>
            {alert("This back-end is not fully supported yet, so this just navigates to the Chat page and not a specific conversation.")}}>
            <Chat client={chatClient} theme={`messaging ${theme}`}>
                <ChannelList
                  filters={filters}
                  sort={sort}
                  options={options}
                  List={(props) => <MessagingChannelList {...props} onCreateChannel={() => setIsCreating(!isCreating)} />}
                  Preview={(props) => <MessagingChannelPreview {...props} {...{ setIsCreating }} />}
                />
            </Chat>
          </Link>
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
