import React, { useState } from 'react'
import Button from '../components/Button';
import FormInput from '../components/FormInput';
import './styles/Register.css';
import profile from '../Images/Profile.png';
import logo from '../Images/Logo.png';
import { Link } from 'react-router-dom';
import Axios from '../Axios';

const inputs = [
  {
    id: 1,
    label: "Username",
    placeholder: "username",
    pattern: "",
    type: "text",
    name:"username",
  },
  {
    id: 2,
    label: "Email",
    placeholder: "email",
    pattern: "",
    type: "email",
    name:"email",
  },
  {
    id: 3,
    label: "Password",
    placeholder: "password",
    pattern: "",
    type: "password",
    name:"password",
  },
]

const policyCheckbox = {
  label: "agree with term of use and policy",
  placeholder: "",
  pattern: "",
  type: "checkbox",
}

function Register() {

  const [inputForm , setInputForm] = useState({
    username:"",
    email:"",
    password:"",
  });
  const [termOfUse , setTermOfUse] = useState(false);
  const [usernameError , setUsernameError] = useState("");
  const [emailError , setEmailError] = useState("");
  const [passwordError , setPasswordError] = useState("");

  const handleChange = e => {
    setInputForm(prevs => ({...prevs ,[e.target.name] : e.target.value}));
  }

  const handleCheckBoxChange = e => {
    setTermOfUse(e.target.checked)
  }

  let locate = "/register/form";

  const handleSubmit = async () => {
    try{
      const data = {
        username: inputForm.username,
        email: inputForm.email,
        password: inputForm.password,
        termOfUse: termOfUse,
      }
      await Axios.post("/register",data);
    }
    catch (err){
      console.log(err)
    }
  }

  const clickImage = () => {
    console.log("img was clicked");
  }

  console.log(inputForm);
  console.log(termOfUse);
  console.log(locate)

  return (
    <div 
      className='reg_container'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
      <div className='reg_profile'>
        <img className='reg_logo reg_logo-mobile' src={logo} alt="" />
        <img className='reg_profile-img' src={profile} alt="" onClick={clickImage} />
        <h1 className='reg_header-mobile' style={{ textAlign: 'center', fontFamily: 'Oswald' }}>Sign up</h1>
      </div>
      <form className='reg_form-input'>
        <div className='reg_form-header'>
          <img className='reg_logo' src={logo} alt="" />
          <h1 style={{ textAlign: 'center', fontFamily: 'Oswald' }}>Sign up</h1>
        </div>
        <div className='reg_form-body'>
          {inputs.map((input) => (
            <React.Fragment key={input.id}>
              <label>{input.label}</label>
              <FormInput Onchange={handleChange} name={input.name} {...input} size='inp-medium'/>
            </React.Fragment>
          ))}
        </div>
        <div className='reg_checkbox'>
          <FormInput {...policyCheckbox} Onchange={handleCheckBoxChange} />
          <label>agree with <Link to='/'>term of use</Link> & <Link to='/'>policy</Link></label>
        </div>
        <Link to={locate} className='reg_register-button'>
          <Button Onclick={handleSubmit} mode='btn-inactive' size='btn-medium' color='grey-inactive' buttonText="Next" />
        </Link>
      </form>
    </div>
  )
}

export default Register