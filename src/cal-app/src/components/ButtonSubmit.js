import React from "react";
import styled from "styled-components";
import './ButtonSubmit.css';

const ButtonSubmit = styled.button`
right: 20px;
height: 40px;
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
padding: 10px;
margin: 10px;
margin-bottom: 15px;
`;

// max-width: 111px;

// display: inline-block;
// background-color: rgb(72, 28, 125);
// color: #fafafa;
// border-color: papayawhip;
// font-size: 1em;
// borser-style: none;
// border-radius: 15%;
// padding: 1rem;

export default ({ name, onClick }) => {
  return <ButtonSubmit onClick={onClick}>{name}</ButtonSubmit>;
};
