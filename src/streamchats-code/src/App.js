import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelList, MessageList, MessageInput, Window } from 'stream-chat-react';
import { useChecklist } from './ChecklistTasks';

import 'stream-chat-react/dist/css/index.css';
import './App.css';

import {
  CreateChannel,
  CustomMessage,
  MessagingChannelHeader,
  MessagingChannelList,
  MessagingChannelPreview,
  MessagingInput,
  MessagingThread,
} from './components';

// import { getRandomImage } from './assets';

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
//////
const cidOne = "!members-yQFdoci87ZeMS1WA8CStNl4gRcQog8o45t7nRJtq6Jo";
const cidTwo = "!members-60OZoC149lR6fvNHBcc3kLXK9Q1FXW_dXQu_44gPEMk";
const filter = { cid: { $in: [cidOne, cidTwo, "first"]} };
const mysort = [{ last_message_at: -1 }];

const channels = chatClient.queryChannels(filter, mysort);
const c = channels[0];
// console.log(c.cid);

//////
const App = () => {
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
    const mobileChannelList = document.querySelector('#mobile-channel-list');
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
    <Chat client={chatClient} theme={`messaging ${theme}`}>
      <div id='mobile-channel-list' onClick={toggleMobile}>
        <ChannelList
          filters={filters}
          sort={sort}
          options={options}
          List={(props) => <MessagingChannelList {...props} onCreateChannel={() => setIsCreating(!isCreating)} />}
          Preview={(props) => <MessagingChannelPreview {...props} {...{ setIsCreating }} />}
        />
      </div>
      <div id="lmao">
        <Channel maxNumberOfFiles={10} multipleUploads={true}>
          {isCreating && <CreateChannel toggleMobile={toggleMobile} onClose={() => setIsCreating(false)} />}
          <Window>
            <MessagingChannelHeader theme={theme} toggleMobile={toggleMobile} />
            <MessageList Message={CustomMessage} TypingIndicator={() => null} />
            <MessageInput focus Input={MessagingInput} />
          </Window>
          <MessagingThread />
        </Channel>
      </div>
    </Chat>
  );
};

export default App;
