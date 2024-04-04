import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import "../styles/loginReg.css";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
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
                        <span>Your Email </span>
                        <input type="email"
                            placeholder='email'
                            // value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            required
                        />
                    </div>
                    <div>
                        <span>Password</span>
                        <input type='password'
                            placeholder='password'
                            // value={password}
                            onChange={(e) => {
                                setpassword(e.target.value)
                            }}
                            required
                        />
                    </div>
                </div>
                <div className='submit'>
                    <button id='loginbut'
                    >Login
                    </button>
                    {/* <Link > */}
                    <span>Forgot password ?</span>
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
