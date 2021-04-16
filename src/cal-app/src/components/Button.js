import React from "react";
import styled from "styled-components";
import "./Button.css"

const Button = styled.button`
right: 20px;
height: 50px;
border: none;
outline: none;
background: #005fff;
border-radius: 50px;
font-family: Helvetica Neue, sans-serif;
font-weight: bold;
font-size: 15px;
line-height: 18px;
color: #ffffff;
cursor: pointer;
flex: 1;
padding-left: 20px;
padding-right: 20px;
margin: 10px;
margin-bottom: 15px;
`;

export default ({ name, onClick }) => {
  return <Button onClick={onClick}>
  {name}
  </Button>;
};

// <svg xmlns="http://www.w3.org/2000/svg"
// width="20" height="20"
// viewBox="0 0 20 20" fill = "none"
// stroke="e37438" strokeWidth="2"
// outline = "solid"
// strokeLinecap="round" strokeLinejoin="round">
// <rect x="3" y="4" width="18" height="18" rx="2" ry="2">
// </rect>
// <line x1="16" y1="2" x2="16" y2="6"></line>
// <line x1="8" y1="2" x2="8" y2="6"></line>
// <line x1="3" y1="10" x2="21" y2="10"></line>
// </svg>
