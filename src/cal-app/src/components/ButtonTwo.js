import React from "react";
import styled from "styled-components";

const ButtonTwo = styled.button`
right: 20px;
height: 50px;
border: none;
outline: none;
background: #e37438;
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
  return <ButtonTwo onClick={onClick}>{name}</ButtonTwo>;
};
