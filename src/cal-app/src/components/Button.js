import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  background-color: rgb(72, 28, 125);
  color: #fafafa;
  border-color: papayawhip;
  font-size: 1em;
  borser-style: none;
  border-radius: 15%;
  padding: 1rem;
`;

export default ({ name, onClick }) => {
  return <Button onClick={onClick}>{name}</Button>;
};
