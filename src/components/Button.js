import React from 'react';
import './styles/Button.css';

const MODE = ['btn-primary' ,'btn-secondary1','btn-secondary2','btn-additional','btn-inactive'];
const COLOR = ['red-primary','red-secondary', 'black-secondary', 'black-secondary2' , 'grey-inactive'];
const SIZE = ['btn-small' , 'btn-medium' , 'btn-large','btn-mobile'];

const Button = ({
  style,
  buttonText,
  mode,
  size,
  color,
  Onclick,
}) => {

  const checkButtonMode = MODE.includes(mode) ? mode : MODE[0];
  const checkButtonColor = COLOR.includes(color) ? color : null;
  const checkButtonSize = SIZE.includes(size) ? size : SIZE[0];

  return (
    <button onClick={Onclick} className={`${checkButtonMode} ${checkButtonSize} ${checkButtonColor}`} 
      style={style}>{buttonText}</button>
  )
}

export default Button