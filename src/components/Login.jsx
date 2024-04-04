import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import "../styles/loginReg.css";
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (e) => {
        setpassword(e.target.value);
    }
    const handleValidation = () => {
        const admin = "admin@gmail.com";
        const validPassword = 987654321;
        if (admin == email && validPassword == password) {
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
            <div id='wrap1'>
                <div className='login'>
                    <Link to="/register">
                        <button>signup</button>
                    </Link>
                </div>
                <div className='sigHead'>
                    <span>
                        Login
                    </span>
                </div>
                <div className='autContainer'>
                    <div>
                        <span className='flex'>Your Email </span>
                        <input type="email"
                            required
                            placeholder='email'
                            value={email}
                            onChange={(e) => handleEmail(e)}
                        />
                    </div>
                    <div>
                        <span>Password</span>
                        <input type='password'
                            placeholder='password'
                            value={password}
                            onChange={(e) => {
                                handlePassword(e)
                            }}
                            required
                        />
                    </div>
                </div>
                <div className='submit'>
                    <button id='loginbut'
                        onClick={() => handleValidation()}
                    >Login
                    </button>
                    {/* <Link > */}
                    <span className=' cursor-pointer' onClick={() => alert("admin@gmail.com, 987654321")}>admin@gmail.com <p>987654321</p></span>
                    {/* </Link> */}
                </div>
                <div className='socialBut'>
                    <button>Facebook</button>
                    <button>Twitter</button>
                </div>
            </div>
        </div>
    )
}

export default Login
