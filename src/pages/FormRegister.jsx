import React , {useState} from 'react'
import './styles/FormRegister.css';
import Button from '../components/Button';
import profile from '../Images/Profile.png';
import FormInput from '../components/FormInput';
import logo from '../Images/Logo.png';
import { Link } from 'react-router-dom';
import Axios from '../Axios';
import { useNavigate } from 'react-router-dom';

const inputs = [
    {
        id: 1,
        label: "Age",
        placeholder: "age",
        pattern: "",
        type: "number",
        name:"age",
    },
    {
        id: 2,
        label: "Height",
        placeholder: "height",
        pattern: "",
        type: "number",
        name:"height",
    },
    {
        id: 3,
        label: "Weight",
        placeholder: "weight",
        pattern: "",
        type: "number",
        name:"weight",
    },
]

const FormRegister = () => {

    const [inputForm , setInputs] = useState({
        age:"",
        height:"",
        weight:"",
    });

    const handleChange = e => {
        setInputs(prev => ({...prev , [e.target.name]: e.target.value}));
    }
    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await Axios.post('/register/form' , inputForm);
            navigate('/register/workout-styles')
        }
        catch(e)
        {
            console.log(e);
        }
    }

    console.log(inputForm)

    return (
        <div className='form_container'>
            <div className='form_profile'>
                <img className='form_logo-mobile' src="" alt="" />
                <img className='form_profile-picture' src={profile} alt="" />
                <h1 className='form_header-mobile'>What is your body type</h1>
            </div>
            <div className='form_form'>
                <div className='form_header'>
                    <img className='form_logo' src={logo} alt="" />
                    <h1>What is your body type</h1>
                </div>
                <form className='form_form-body'>
                    {inputs.map((input) => (
                        <React.Fragment key={input.id}>
                            <label>{input.label}</label>
                            <FormInput name={input.name} Onchange={handleChange} {...input} size='inp-small' />
                        </React.Fragment>
                    ))}
                <div className='form_nav'>
                    {/* <Link to='/register/workout-styles'> */}
                        <Button Onclick={handleSubmit} size='btn-medium' color='red-primary' buttonText='Next' />
                    {/* </Link> */}
                </div>
                </form>
            </div>

        </div>
    )
}

export default FormRegister