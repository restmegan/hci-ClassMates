import React from "react";
import styled from "styled-components";
import './ButtonCancel.css';

const ButtonCancel = styled.button`
right: 20px;
height: 40px;
border: none;
outline: none;
background: #919191;
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
  return <ButtonCancel onClick={onClick}>{name}</ButtonCancel>;
};
