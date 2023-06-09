import React from 'react';
import { Link } from 'react-router-dom';

import login from "../styles/login.css";

function Login() {
    return (
        <>
            <h1>Log In</h1>
            <div className="form-login-container">
                <h2>Welcome Back</h2>
                <form action="">
                    <div className="login-credentials">
                        <input required type="email" id="email" placeholder="Email" autoComplete="on" />
                        <input required type="password" id="password" placeholder="Password" autoComplete="on" />
                    </div>
                    <button type="submit" className="btn login-btn">Login</button>
                </form>
                <div className="login-container">
                    <p className="login-question">Don't have an account?</p>
                    <button className="btn guest-login">Guest Login</button>
                    <p className="or">OR</p>
                    <Link to="/signUp" className="btn joinUs-btn">Join Us</Link>
                </div>
                <div className="error">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ex.</div>
            </div>
        </>
    )
}

export default Login