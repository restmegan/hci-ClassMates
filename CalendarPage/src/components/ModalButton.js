import React from 'react';
import style from './style.css';

const ModalButton = props => (
  <button className={style.button} onClick={props.handleClick}>
    {props.children}
  </button>);

export default ModalButton;
