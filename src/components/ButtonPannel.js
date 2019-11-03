import React from 'react';
import Button from './Button';
import './ButtonPannel.css';

function ButtonPannel(props) {
  const handleClick = buttonText => props.clickHandler(buttonText);
  return (
    <div className="buttonPannel">
      <div className="row">
        <Button text="AC" clickHandler={handleClick} />
        <Button text="+/-" clickHandler={handleClick} />
        <Button text="%" clickHandler={handleClick} />
        <Button text="/" clickHandler={handleClick} class="orange" />
      </div>
      <div className="row">
        <Button text="1" clickHandler={handleClick} />
        <Button text="2" clickHandler={handleClick} />
        <Button text="3" clickHandler={handleClick} />
        <Button text="x" clickHandler={handleClick} class="orange" />
      </div>
      <div className="row">
        <Button text="4" clickHandler={handleClick} />
        <Button text="5" clickHandler={handleClick} />
        <Button text="6" clickHandler={handleClick} />
        <Button text="-" clickHandler={handleClick} class="orange" />
      </div>
      <div className="row">
        <Button text="7" clickHandler={handleClick} />
        <Button text="8" clickHandler={handleClick} />
        <Button text="9" clickHandler={handleClick} />
        <Button text="+" clickHandler={handleClick} class="orange" />
      </div>
      <div className="row">
        <Button text="0" clickHandler={handleClick} class="bigWidth" />
        <Button text="." clickHandler={handleClick} />
        <Button text="=" clickHandler={handleClick} class="orange" />
      </div>
    </div>
  );
}

export default ButtonPannel;