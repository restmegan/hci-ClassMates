import React, { Component } from "react";
import Talk from "talkjs";

import "./styles.css";
import {useState} from 'react';
//import SampleData from "./SampleData"

// Creates a TalkJS user assuming that the currentUser is passed as a prop to
// our component. The Talk.User object is used to synchronize user data with
// TalkJS, so we can display it inside the chat UI.
class InboxComponent extends Component {

  //Creating a ref
  constructor(props) {
    super(props);
    this.talkjsContainer = React.createRef();
  }

  componentDidMount() {
    const currentUser = this.props.currentUser;
    Talk.ready.then(() => {
      var me = new Talk.User({
        // Using dummy hardcode, the defining code is commented out for now
        id: "12345", //currentUser.id,
        name: "Alice", //currentUser.name,
        email: "alfie@example.com", //currentUser.email,
        photoUrl: "https://demo.talkjs.com/img/alice.jpg", //currentUser.photo,
        welcomeMessage: "Hey there! How are you? :-)"
      });

      //Creating a TalkJS session. A session represents a user's active browser tab.
      //It also authenticates your app with TalkJS.
      if (!window.talkSession) {
        window.talkSession = new Talk.Session({
          appId: "tNfx4wm8",  //This is a custom appId generated from our TalkJS trial
          me: me
        });
        // window.talkSession.setDesktopNotificationEnabled("");
      }

      // Hard-coded dummy users to test chatting with
      var johnSmith = new Talk.User({
        id: "54321",
        name: "John Smith",
        email: "johnsmith@example.com",
        photoUrl: "https://demo.talkjs.com/img/sebastian.jpg",
        welcomeMessage: "Hi! How's it going?"
      });

      var lucyEaton = new Talk.User({
        id: "01010",
        name: "Lucy Eaton",
        email: "lucyeaton@example.com",
        photoUrl: "https://thumbs.dreamstime.com/b/friendly-adult-casual-dressed-business-woman-student-girl-standing-straight-headshot-portrait-office-183889436.jpg",
        welcomeMessage: "Hello! Good to see you in class today :)"
      });

      // Creating sample conversation. oneOnOneId is a helper method that
      // generates a unique conversation ID for a given pair of users.
      var conversation = window.talkSession.getOrCreateConversation(Talk.oneOnOneId(me, johnSmith));
      conversation.setParticipant(me);
      conversation.setParticipant(johnSmith);

      // Creating some more filler coversations with our SampleData
      var convoLucy = window.talkSession.getOrCreateConversation(Talk.oneOnOneId(me, lucyEaton))
      convoLucy.setParticipant(me);
      convoLucy.setParticipant(lucyEaton);

      // Creating an inbox
      var inbox = window.talkSession.createInbox({selected: conversation});
      inbox.mount(this.talkjsContainer.current); //Mounting the inbox
    });
  }

  render() {
    return (
      <div style={{height: '500px'}} ref={this.talkjsContainer} className="InboxComponent">
      </div>
    )
  }

}


export default InboxComponent;
