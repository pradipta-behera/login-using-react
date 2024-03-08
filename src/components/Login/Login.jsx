import React from "react";
import './Login.css';
const Login = () => {
    return (
        <div className="wrapper">
            <form action=" ">
                <h1>Login</h1>
                <div className="input">
                    <input type="text" placeholder="Email" required></input>
                </div>
                <div className="input">
                    <input type="password" placeholder="Password" required></input>
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