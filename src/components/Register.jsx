import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "../styles/loginReg.css";
const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (e) => {
        setpassword(e.target.value);
    }
    const handleValidation = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const validEmail = regex.test(email);
        const validPassword = password.length;
        if (validEmail && validPassword >= 8) {
            navigate("/");
            alert("Successfully Registered");
        } else if (validPassword < 8) {
            alert("pssword should be more the 8 chare")
        } else {
            alert("enter a correct email or password")
        }
    }
    return (
        <div className='Container'>
            <div className='wrap'>
                <div className='login'>
                    <Link to="/login">
                        <button>log in</button>
                    </Link>
                </div>
                <div className='sigHead'>
                    <span>
                        Sign Up
                    </span>
                </div>
                <div className='autContainer'>
                    <div>
                        <span>Username</span>
                        <input type='text'
                            placeholder='Name'
                            onChange={(e) => { setName(e.target.value) }}
                            required
                        />
                    </div>
                    <div>
                        <span>Your Email </span>
                        <input type="email"
                            placeholder='email'
                            onChange={(e) => handleEmail(e)}
                            required
                        />
                    </div>
                    <div>
                        <span>Password</span>
                        <input type='password'
                            placeholder='password'
                            onChange={(e) => handlePassword(e)}
                            required
                        />
                    </div>
                </div>
                <div className='submit'>
                    <button
                        onClick={() => handleValidation()}
                    >Sign up</button>
                    <span>Or sign up with social account</span>
                </div>
                <div className='socialBut'>
                    <button>Facebook</button>
                    <button>Twitter</button>
                </div>
            </div>
            {/* 
            {
                response && <span className=" absolute flex justify-center text-center bottom-12 bg-[#faf1e2] text-red-500 py-3 px-3 rounded-3xl">{response}</span>
            } */}
        </div>
    )
}

export default Register
