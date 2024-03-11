import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
    const [fullname, setFullname] = useState('');
    const [Password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate=useNavigate();

    async function submit(){
        Event.preventDefault();

    //     try {
    //         await axios.post("http://localhost:3000/login",{fullname,Password})
    //         .then(res=>{
    //             if(res.data="exist"){
    //                 navigate("/hotel")
    //             }
    //             else if(res.data="notexist"){
    //                 alert("User not signed up")
    //             }
    //         })
    //         .catch(errors=>{
    //             alert("wrong details")
    //             console.log("error")
    //         })
            
    //     } catch (error) {
    //         console.log(Event)
    //     }
    }

    const validateForm = () => {
        let newErrors = {};
        let isValid = true;

        if (!fullname) {
            newErrors.fullname = 'Enter your fullname';
            isValid = false;
        }

        if (!Password) {
            newErrors.Password = 'Enter your password';
            isValid = false;
        } else if (Password.length < 6) {
            newErrors.Password = 'Password should be at least 6 characters long';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            navigate('/hotel');
            console.log('Form is valid');
        } else {
            console.log('Form is invalid');
        }
    };

    return (
        <div className='loginbox'>
            <h1 className='title' >Login</h1>
            <form onSubmit={handleFormSubmit}>
                <div className='login form-floating'>
                    
                    <input
                        type="text"
                        className={`form-control color ${errors.fullname ? 'error' : ''}`}
                        id="fullname"
                        value={fullname}
                        onChange={(event) => { setFullname(event.target.value) }}
                        placeholder='@Username'
                    />
                    <label htmlFor="fullname" className='form-label'>@Username</label>
                    {errors.fullname && <span className=' danger float-start'>{errors.fullname}</span>}
                </div>

                <div className='password form-floating'>
                    <input
                        type="password"
                        className={`form-control color ${errors.Password ? 'error' : ''}`}
                        id="password"
                        value={Password}
                        onChange={(event) => { setPassword(event.target.value) }}
                        placeholder='Password'
                    />
                    <label htmlFor="password" className='form-label'>Password</label>
                    {errors.Password && <span className=' danger float-start'>{errors.Password}</span>}
                </div>

                <button type="submit" className=" subbtn" onClick={submit}>Login</button>
            </form>
        </div>
    );
}

export default Login;
