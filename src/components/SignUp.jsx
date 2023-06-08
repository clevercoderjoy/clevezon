import React from 'react';

import signUp from "../styles/signUp.css";
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <>
            <h1>Sign Up</h1>
            <div className="signUp-container">
                <h2>Join Us!</h2>
                <form action="">
                    <div className="form-name">
                        <input required type="text" id="firstName" placeholder="First Name" />
                        <input required type="text" id="lastName" placeholder="Last Name" />
                    </div>
                    <div className="form-credentials">
                        <input required type="email" id="email" placeholder="Email" />
                        <input required type="password" id="password" placeholder="Password" />
                        <input required type="password" id="confirm-password" placeholder="Confirm Password" />
                    </div>
                    <button type="submit" className="btn submit-btn">Submit</button>
                </form>
                <div className="member-container">
                    <p className="member">Already a member?</p>
                    <Link to="/login" className="btn member-btn">Log In</Link>
                </div>
                <div className="error">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ex.</div>
            </div>
        </>
    )
}

export default SignUp