import React from "react";
import './styles/FormInput.css';

const SIZE = ['inp-extra-small','inp-small' , 'inp-medium' , 'inp-large'];
const BUTTONSTYLE = ['box' , 'radius-box' , 'circle-box'];

const FormInput = (props) => {

  const checkInputSize = SIZE.includes(props.size) ? props.size : SIZE[0];
  const checkInputStyle = BUTTONSTYLE.includes(props.buttonStyle) ? props.buttonStyle : null;

  return (
    <>
      <input pattern={props.pattern} 
        type={props.type} 
        placeholder={props.placeholder} 
        onChange={props.Onchange}
        className={props.type === 'checkbox' ? `input-checkbox`  : `input-field ${checkInputSize} ${checkInputStyle} ${props.addition}`}
        name={props.name}/>
    </>
  );
};

export default FormInput;
