import React from 'react';
import './Button.css';

function Button(props) {
  const handleClick = () => props.clickHandler(props.text);
  return (
    <button className={props.class} onClick={handleClick}>{props.text}</button>
  );
}

export default Button;