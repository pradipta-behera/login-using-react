import React from "react";
import './Login.css';
import { MdEmail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";

const Login = () => {
    return (
        <div className="wrapper">
            <form action=" ">
                <h1>Login</h1>
                <div className="input">
                    <input type="text" placeholder="Email" required></input>
                    <MdEmail className="icon" />
                </div>
                <div className="input">
                    <input type="password" placeholder="Password" required></input>
                    <AiFillLock className="icon" />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Don't have an account?<a href="#"> Sign Up</a></p>
                </div>
            </form>
        </div>
    );
};

export default Login;