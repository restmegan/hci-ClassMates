import React, { Component } from "react";
import Talk from "talkjs";
import "./styles.css";

// Dummy users to populate the chats
var lucyEaton = new Talk.User({
  id: "01010",
  name: "Lucy Eaton",
  email: "lucyeaton@example.com",
  photoUrl: "https://thumbs.dreamstime.com/b/friendly-adult-casual-dressed-business-woman-student-girl-standing-straight-headshot-portrait-office-183889436.jpg",
  welcomeMessage: "Hello! Good to see you in class today :)"
});

const edJones = new Talk.User({
  id: "12321",
  name: "Ed Jones",
  email: "edjones@example.com",
  photoUrl: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png",
  welcomeMessage: "Hey have you started the assignment yet?"
})
